import React from 'react'

export interface IGameContextProps {
  isInRoom: boolean,
  setIsInRoom: (inRoom: boolean) => void
  playerSymbol: "x" | "o"
  setPlayerSymbol: (symbol: "x" | "o") => void
  isPlayerTurn: boolean,
  setPlayerTurn: (turn: boolean) => void
}

const defaultState: IGameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerSymbol: "o",
  setPlayerSymbol: () => {},
  isPlayerTurn: false,
  setPlayerTurn: () => {}
}

export default React.createContext(defaultState)