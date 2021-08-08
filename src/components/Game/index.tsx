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

  const checkGameState = (matrix: IPlayerMatrix) => {
    for (let i = 0; i < matrix.length; i++) {
      let row = []
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[i][j])
      }

      if (row.every(value => value && value === playerSymbol)) {
        alert("You won")
        return [true, false]
      } else if (row.every(value => value && value !== playerSymbol)) {
        alert("You lost")
        return [false, true]
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      let column = []
      for (let j = 0; j < matrix.length; j++) {
        column.push(matrix[j][i])
      }

      if (column.every(value => value && value === playerSymbol)) {
        alert("You won")
        return [true, false]
      } else if (column.every(value => value && value !== playerSymbol)) {
        alert("You lost")
        return [false, true]
      }
    }

    if (matrix[1][1]) {
      if (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[1][1]) {
        if (matrix[1][1] === playerSymbol) return [true, false]
        else return [false, true]
      }

      if (matrix[2][0] === matrix[1][1] && matrix[0][2] === matrix[1][1]) {
        if (matrix[1][1] === playerSymbol) return [true, false]
        else return [false, true]
      }
    }

    if (matrix.every(m => m.every(v => v !== null))) {
      alert('Tie')
    }
  }
  
  const updateGame = (column: number, row: number, symbol: "x" | "o") => {
    const newMatrix = [...matrix]

    if(newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
      newMatrix[row][column] = symbol
      setMatrix(newMatrix)
    }
    if (socketService.socket) 
      gameService.UpdateGame(socketService.socket, newMatrix)
      setPlayerTurn(false)
      checkGameState(newMatrix)
  }

  const handleGameUpdate = () => {
    if(socketService.socket) 
      gameService.OnGameUpdate(socketService.socket, (newMatrix) => {
        setMatrix(newMatrix)
        setPlayerTurn(true)
        checkGameState(newMatrix)
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

  const handleGameWin = () => {
    if(socketService.socket) {
      gameService.OnGameWin(socketService.socket, (message) => {
        setPlayerTurn(false)
        alert(message)
      })
    }
  }

  useEffect(() => {
    handleGameUpdate()
    handleGameStart()
  }, [])

  // useEffect(() => {
  //   checkGameState(matrix)
  // }, [matrix])

  
  return (
    <GameContainer>
      {!isGameStarted && <h3>Waiting for second player to join...</h3>}
      {(!isGameStarted ||!isPlayerTurn) && <PlayStopper />}
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

