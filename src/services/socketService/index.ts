import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { io, Socket } from 'socket.io-client'

class SocketService {
  public socket: Socket | null = null

  /* Might have to remove the <DefaultEventsMap> Need to check their use first  */  
  public connect (url: string): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
    return new Promise((resolve, reject) => {
      this.socket = io(url)

      if (!this.socket) return reject()

      this.socket.on('connect', () => {
        resolve(this.socket as Socket)
      })
    })

  }
}

export default new SocketService() 