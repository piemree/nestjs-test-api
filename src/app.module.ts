import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';
import { EmployeesModule } from './employees/employees.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [UserModule, AuthModule,EmployeesModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
