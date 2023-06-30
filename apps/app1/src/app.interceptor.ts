import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map, tap } from "rxjs";

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next
      .handle()
      .pipe(
        map((data) =>{
          console.log(data);

        return{
          ...data
        }
        }),
        );
        
  }
}