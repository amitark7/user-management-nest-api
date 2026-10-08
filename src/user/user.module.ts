import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { LoggerService } from './user.logger';
import { UserService } from './user.service';

@Module({
    controllers:[UserController],
    providers: [LoggerService, UserService]
})
export class UserModule {}
