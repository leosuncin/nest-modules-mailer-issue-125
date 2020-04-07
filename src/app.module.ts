import { Module } from '@nestjs/common';
import { MailerModule, HandlebarsAdapter } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  	MailerModule.forRoot({
  	  transport: {
  	    host: 'localhost',
  	    port: 1025,
		secure: false,
		ignoreTLS: true,
  		auth: {
  		  user: "mailer",
  		  pass: "password",
  		},
	  },
	  template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
  	}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
