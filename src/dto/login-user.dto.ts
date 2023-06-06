import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  //   @Matches(/(`[^`]*)| [^']* | [^"]*`/, {
  //     message: 'Trying to pentest or just a mistake?',
  //   })
  @IsEmail(undefined, { message: 'Email must not use special characters' })
  email: string;

  @IsNotEmpty()
  password: string;
}
