import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { LoggerService } from './user/user.logger';
import { UserService } from './user/user.service';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, LoggerService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes(UserController)
  }
}
