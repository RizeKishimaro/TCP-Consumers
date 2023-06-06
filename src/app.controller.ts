import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { CreateKnoteUserDTO } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param('name') name: string): Observable<string> {
    const item = this.appService.getHello(name);
    console.log(item);
    return item;
  }
  @Post('signup')
  createUser(@Body() body: CreateKnoteUserDTO): Observable<string> {
    return this.appService.createUser(body);
  }
  @Post('login')
  loginUser(@Body() body: LoginDto): Observable<object> {
    return this.appService.loginUser(body);
  }
}
