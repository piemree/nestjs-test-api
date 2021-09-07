import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private employeesRepository;
    constructor(employeesRepository: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<CreateEmployeeDto>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    remove(id: number): Promise<Employee>;
}
