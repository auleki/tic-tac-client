import React, { useState } from 'react'
import { Button, FormStyle, InputStyle } from '../StyledComponents'

interface IJoinRoomProps {}

export default function JoinRoom(props: IJoinRoomProps) {
  const [roomId, setRoomId] = useState("")

  const toJoinRoom = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Trying to join room' + roomId)
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
      <Button>Join Room</Button>
    </FormStyle>
)
}