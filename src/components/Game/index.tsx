import { useState } from "react";

import { RowContainer, GameContainer, Cell, X, O } from "../StyledComponents";

export function Game () {
  const [maxtrix, setMatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  return (
    <GameContainer>
      {maxtrix.map((row, rowIdx) => {
        return <RowContainer>
          {row.map((column, columnIdx) => (
            <Cell 
              borderRight={columnIdx < 2} 
              borderLeft={columnIdx > 0} 
              borderTop={rowIdx > 0} 
              borderBottom={rowIdx < 2}
              >
              {column && column !== 'null' ? column === 'x' ? <X /> : <O /> : null }
            </Cell>
          ))}
        </RowContainer>
      })}
    </GameContainer>
  )
} 

