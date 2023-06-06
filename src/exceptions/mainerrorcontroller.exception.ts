import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ImATeapotException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception.message.includes('wrong final block length')) {
      return response.status(400).json({
        message: 'error',
      });
    }
    return response.status(500).json({
      message: exception.message,
    });
  }
}
