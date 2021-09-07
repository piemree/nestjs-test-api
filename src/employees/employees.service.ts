import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<CreateEmployeeDto> {
    const employee = this.employeesRepository.create(createEmployeeDto);

    return this.employeesRepository.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeesRepository.find();
  }

  findOne(id: number) {
    return this.employeesRepository.findOne(id);
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const Employee = await this.findOne(id);
    Employee.name = updateEmployeeDto.name;
    this.employeesRepository.create(Employee);
    return this.employeesRepository.save(Employee);
  }

  async remove(id: number) {
    const User = await this.findOne(id);
    return this.employeesRepository.remove(User);
  }
}
