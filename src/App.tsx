import React, { useEffect } from 'react';
import JoinRoom from './components/JoinRoom';
import { AppContainer } from './components/StyledComponents'
import socketService from './services/socketService';

function App() {

  const connectSocket = async () => {
    // eslint-disable-next-line
    const server = await socketService.connect("http://localhost:9000").catch(err => console.error(err))
  }
  
  useEffect(() => {
    connectSocket()
  }, [])
  
  return (
    <AppContainer>
      <h1>Tic Tac Toe - Fuckers</h1>
      <JoinRoom />
    </AppContainer>
  );
}

export default App;
