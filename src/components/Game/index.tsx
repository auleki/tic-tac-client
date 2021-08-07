import { useContext, useState } from "react";
import gameContext from "../../gameContext";

import { RowContainer, GameContainer, Cell, X, O } from "../StyledComponents";

export type IPlayerMatrix = Array<Array<string | null>>

export function Game () {
  const [matrix, setMatrix] = useState<IPlayerMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const { playerSymbol  } = useContext(gameContext)
  
  const updateGame = (column: number, row: number, symbol: "x" | "o") => {
    const newMatrix = [...matrix]

    if(newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
      newMatrix[row][column] = symbol
      setMatrix(newMatrix)
    }
  }

  return (
    <GameContainer>
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

