import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.github.com/repos/Darkxprio',
    }),
  ],
  providers: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
