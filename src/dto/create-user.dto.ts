import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { ArtEntity } from 'src/entity/art.entity';

export class CreateKnoteUserDTO {
  @IsNotEmpty()
  @Matches(/^(?!.*<\/[a-z]>)(?!.*[%$])/, {
    message: 'Trying To Inject Payloads?',
  })
  @Matches(/^(?!.*0[bB][xX])[a-zA-Z0-9 ]+$/, {
    message: 'Trying to Pentest or just a mistake?',
  })
  name: string;

  // @Matches(/^(?!.*<\/[a-z]>)(?!.*[%$])/, {
  //   message: "you can't use special characters",
  // })
  // username: string;

  @IsNotEmpty()
  // @Matches(/(`[^`]*`)/, {
  //   message: 'Trying to pentest or just a mistake?',
  // })
  @IsEmail(undefined, { message: 'Email must not use special characters' })
  email: string;

  @IsNotEmpty()
  password: string;

  // @IsNotEmpty()
  // @Matches(/^(?!.*<\/[a-z]>)(?!.*[%$])/, {
  //   message:
  //     'Humm.So You are the one I am waiting.I am The Security assistant of this Beautiful web Go on!Test my website.My Senpai Would not like this.But i will take your record.',
  // })
  // @Matches(/^(?!.*0[bB][xX])[a-zA-Z0-9 ]+$/, {
  //   message:
  //     'FuuuFuuuFuuu.Hashing will not work here.Just like others pentesters',
  // })
  // @IsEnum(ArtEntity)
  // category: ArtEntity;

  // @Matches(/^(?!.*<\/[a-z]>)(?!.*[%$])/, {
  //   message: "you can't use special characters",
  // })
  // @Matches(/^(?!.*0[bB][xX])[a-zA-Z0-9 ]+$/, {
  //   message:
  //     'FuuuFuuuFuuu.Hashing will not work here.Just like others pentesters',
  // })
  // address: string;

  // @Length(0, 110, { message: 'Your bio must be 110 characters' })
  // bio: string;

  // @IsBoolean()
  // connect_info: boolean;
}
