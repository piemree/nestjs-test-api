import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';


@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
