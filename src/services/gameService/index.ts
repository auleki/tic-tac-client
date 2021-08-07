import { Socket } from "socket.io-client";
import { IPlayerMatrix } from "../../components/Game";

class GameService {
  public async JoinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit("join_game", { roomId })
      socket.on("room_joined", () => rs(true))
      socket.on("room_join_error", ({ error }) => rj(error))
    })
  }

  public async UpdateGame(socket: Socket, gameMatrix: IPlayerMatrix) {
    socket.emit("update_game", { matrix: gameMatrix })
  }

  public async OnGameUpdate(socket: Socket, listener: (matrix: IPlayerMatrix) => void) {
    socket.on("on_game_update", ({ matrix }) => listener(matrix))
  }
}

export default new GameService()