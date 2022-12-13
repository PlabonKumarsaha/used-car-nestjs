import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    throw new Error('Method not implemented.');
    //run something before a requrest is handled
    //by the request handler
    console.log('Running before handler', context);

    return next.handle().pipe(
      map((data: any) => {
        console.log('Rubbing beofre response is sent');
      }),
    );
  }
}
