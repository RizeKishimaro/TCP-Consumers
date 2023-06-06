import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CreateKnoteUserDTO } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';

@Injectable()
export class AppService {
  private readonly Client: ClientProxy;
  constructor() {
    this.Client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }
  getHello(name: string): Observable<string> {
    const data = this.Client.send<string>('sum', name);
    return;
  }
  createUser(body: CreateKnoteUserDTO): Observable<string> {
    const { name, email, password } = body;
    const message = this.Client.send<string, object>('createUser', {
      name,
      email,
      password,
    });
    return message;
  }
  loginUser(body: LoginDto): Observable<object> {
    const { email, password } = body;

    return this.Client.send<object, object>('loginUser', { email, password });
  }
}
