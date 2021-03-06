import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import {sqltieConfig,postgresqlConfig,mongodbConfig} from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(mongodbConfig),
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
