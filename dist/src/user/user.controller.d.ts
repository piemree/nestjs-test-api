import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    findOne(username: string): Promise<User>;
    create(user: CreateUserDto): Promise<User>;
    modify(id: string, user: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
}
