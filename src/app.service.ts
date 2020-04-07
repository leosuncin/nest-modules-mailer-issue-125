import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  email() {
    return this
    .mailerService
    .sendMail({
      to: 'john@example.com',
      from: 'no-reply@localhost',
      subject: 'Testing Nest Mailermodule with template ✔',
      template: 'index',
      context: {
        code: 'cf1a3f828287',
        username: 'john doe',
      },
    })
  }
}
