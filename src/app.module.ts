import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: 'main-sejong.cp9j2b8wvscr.ap-northeast-2.rds.amazonaws.com',
      // port: 3306,
      // username: 'admin',
      // password: 'uglystone1!',
      // database: 'mainsejong',
      // entities: [ChatGateway], // 사용할 entity의 클래스명을 넣어둔다.
      // synchronize: false, // false로 해두는 게 안전하다.
    // }
    // ),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
