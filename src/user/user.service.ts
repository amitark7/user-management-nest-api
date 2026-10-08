import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly loggerService: LoggerService) {}
  users = [
    { id: 1, name: 'Amit', email: 'amit@gmail.com' },
    { id: 2, name: 'Sumit', email: 'sumit@gmail.com' },
  ];

  getUser(name?: string) {
    if (name) {
      this.loggerService.log('Fetching User By name', name);
      return this.users.find(
        (user) => user.name.toLowerCase() == name.toLowerCase(),
      );
    }
    this.loggerService.log('Fetching Users');
    return this.users;
  }

  getUserById(id: number) {
    this.loggerService.log('Fetching User by id', id);
    const user = this.users.find((user) => user.id == id);
    if (!user) return { message: `User not Exist with id ${id}` };
    return user;
  }

  createUser(user: CreateUserDto) {
    this.loggerService.log('Creating User ', user);
    const newUser = { id: this.users[this.users.length - 1].id + 1, ...user };
    this.users = [...this.users, newUser];
    return { message: 'User Created Succesfully', user: newUser };
  }

  updateUser(id: number, user: UpdateUserDto) {
    this.loggerService.log(`Updating User with id ${id}`, user);
    const index = this.users.findIndex((user) => user.id == id);
    if (index == -1) return { message: `User not Exist with id ${id}` };
    this.users[index] = { ...this.users[index], ...user };

    return { message: 'User Updated Successfully', user: this.users[index] };
  }

  deleteUser(id: number) {
    this.loggerService.log('Deleting User by id', id);
    const index = this.users.findIndex((user) => user.id == id);
    if (index == -1) return { message: `User not Exist with id ${id}` };
    const deletedUser = this.users.splice(index, 1);
    return { message: 'User Deleted Succesfully', deletedUser };
  }
}
