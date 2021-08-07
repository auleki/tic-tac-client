import React, { useState, useContext } from 'react'
import gameContext from '../../gameContext'
import socketService from '../../services/socketService'
import GameService from '../../services/socketService/gameService'
import { Button, FormStyle, InputStyle } from '../StyledComponents'

interface IJoinRoomProps {}

export default function JoinRoom(props: IJoinRoomProps) {
  const [roomId, setRoomId] = useState("")
  const [isJoining, setIsJoining] = useState(false)
  const { setIsInRoom, isInRoom } = useContext(gameContext)


  const toJoinRoom = async (e: React.FormEvent) => {
    e.preventDefault()
    if (roomId === "") alert('Which room you wan join na?')
    const socket = socketService.socket
    if(!roomId || roomId.trim() === "" || !socket) return

    setIsJoining(true)
    const joined = await GameService.JoinGameRoom(socket, roomId).catch(err => alert(err))

    if(joined) {
      setIsInRoom(true)
    }
    setRoomId("")
    setIsJoining(false)
  }

  const handleId = (e: React.ChangeEvent<any>) => {
    const id = e.target.value
    setRoomId(id)
  }

  return (
    <FormStyle onSubmit={toJoinRoom}>
      <InputStyle 
        type="text"  
        placeholder="Room ID" 
        onChange={handleId}
        value={roomId}/>
      <Button disabled={isJoining}>
        {isJoining ? "Joining room...": "Join Room"}
      </Button>
    </FormStyle>
)
}