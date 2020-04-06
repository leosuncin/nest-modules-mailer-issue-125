import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  	MailerModule.forRoot({
  	  transport: {
  	    host: 'localhost',
  	    port: 1025,
  		secure: false, // upgrade later with STARTTLS
  		auth: {
  		  user: "mailer",
  		  pass: "password",
  		},
      },
  	}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
