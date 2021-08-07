import React from 'react'

export interface IGameContextProps {
  isInRoom: boolean,
  setIsInRoom: (inRoom: boolean) => void
  playerSymbol: "x" | "o"
  setPlayerSymbol: (symbol: "x" | "o") => void
}

const defaultState: IGameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerSymbol: "o",
  setPlayerSymbol: () => {}
}

export default React.createContext(defaultState)