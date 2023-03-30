import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer , ConnectedSocket  } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
    ): 
  void {
    client.join(message.split("방이름")[1])
    // console.log(message.split("방이름")[1] + "입장")
    this.server.to(message.split("방이름")[1]).emit('message', message);
    // this.server.emit('message', message);
  }
}