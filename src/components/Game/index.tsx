import { useContext, useEffect, useState } from "react";
import gameContext from "../../gameContext";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";

import { RowContainer, GameContainer, Cell, X, O, PlayStopper } from "../StyledComponents";

export type IPlayerMatrix = Array<Array<string | null>>
export interface IStartGame {
  start: boolean
  symbol: "x" | "o"
}

export function Game () {
  const [matrix, setMatrix] = useState<IPlayerMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const { playerSymbol, isPlayerTurn, setPlayerTurn, setPlayerSymbol, isGameStarted, setIsGameStarted  } = useContext(gameContext)
  
  const updateGame = (column: number, row: number, symbol: "x" | "o") => {
    const newMatrix = [...matrix]

    if(newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
      newMatrix[row][column] = symbol
      setMatrix(newMatrix)
    }
    if (socketService.socket) 
      gameService.UpdateGame(socketService.socket, newMatrix)
  }

  const handleGameUpdate = () => {
    if(socketService.socket) 
      gameService.OnGameUpdate(socketService.socket, (newMatrix) => {
        setMatrix(newMatrix)
        setPlayerTurn(true)
      })
  }

  const handleGameStart = () => {
    if(socketService.socket) 
      gameService.OnStartGame(socketService.socket, (options) => {
        setIsGameStarted(true)
        setPlayerSymbol(options.symbol)
        if(options.start) 
          setPlayerTurn(true)
        else 
          setPlayerTurn(false)
      })
  }

  useEffect(() => {
    handleGameUpdate()
  }, [])
  
  return (
    <GameContainer>
      {!isPlayerTurn && <PlayStopper />}
      {matrix.map((row, rowIdx) => {
        return <RowContainer>
          {row.map((column, columnIdx) => (
            <Cell 
              borderRight={columnIdx < 2} 
              borderLeft={columnIdx > 0} 
              borderTop={rowIdx > 0} 
              borderBottom={rowIdx < 2}
              onClick={() => updateGame(columnIdx, rowIdx, playerSymbol)}
              >
              {column && column !== 'null' ? column === 'x' ? <X /> : <O /> : null }
            </Cell>
          ))}
        </RowContainer>
      })}
    </GameContainer>
  )
} 

