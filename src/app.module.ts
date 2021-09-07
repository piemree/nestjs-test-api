import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
