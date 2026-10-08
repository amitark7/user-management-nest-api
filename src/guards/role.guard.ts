import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request:Request = context.switchToHttp().getRequest();

    const role = request.headers['role'];
    if(role != "Admin"){
      throw new UnauthorizedException("You're not allowed to perfom this action")
    }
    return true;
  }
}
