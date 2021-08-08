import React, { useEffect, useState } from 'react';
import JoinRoom from './components/JoinRoom';
import { AppContainer } from './components/StyledComponents'
import GameContext, { IGameContextProps } from './gameContext';
import { Game } from './components/Game';
import socketService from './services/socketService';

function App() {
  const [isInRoom, setIsInRoom] = useState(false)
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("o")
  const [isPlayerTurn, setPlayerTurn] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)

  const connectSocket = async () => {
    // eslint-disable-next-line
    const server = await socketService.connect("http://localhost:9000").catch(err => console.error(err))
  }
  
  useEffect(() => {
    connectSocket()
  }, [])

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn, 
    setPlayerTurn,
    isGameStarted, 
    setIsGameStarted
  }
  
  return (
    <GameContext.Provider value={gameContextValue}>
    <AppContainer>
      <h1>Tic Tac Toe - Fuckers</h1>
      {isInRoom ? <Game /> : <JoinRoom />}
    </AppContainer>
    </GameContext.Provider>
  );
}

export default App;
