import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer , ConnectedSocket  } from "@nestjs/websockets";
import { Socket } from "socket.io";



@WebSocketGateway({
  cors : {
    origin:'*'
  }
})
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    ): 
  void {
    this.server.to(message.split("방이름")[1]).emit('message', message);
  }

  
  @SubscribeMessage('room')
  createroom(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket, // -> 문제되는부분
    ): 
  void {
    client.join(room)
    // console.log(message.split("방이름")[1] + "입장")
    // this.server.to(message.split("방이름")[1]).emit('message', message);
    // this.server.emit('message', message);
  }
}