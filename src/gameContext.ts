import React from 'react'

export interface IGameContextProps {
  isInRoom: boolean,
  setIsInRoom: (inRoom: boolean) => void
  playerSymbol: "x" | "o"
  setPlayerSymbol: (symbol: "x" | "o") => void
  isPlayerTurn: boolean,
  setPlayerTurn: (turn: boolean) => void
  isGameStarted: boolean
  setIsGameStarted: (started: boolean) => void
}

const defaultState: IGameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerSymbol: "o",
  setPlayerSymbol: () => {},
  isPlayerTurn: false,
  setPlayerTurn: () => {},
  isGameStarted: false,
  setIsGameStarted: () => {}
}

export default React.createContext(defaultState)