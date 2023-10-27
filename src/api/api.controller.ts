import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiService } from './api.service';
import { Response } from 'express';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('frontend')
  async frontend(@Res() res: Response) {
    try {
      const response = await this.apiService.getFrontendCommits();
      res.status(HttpStatus.ACCEPTED).json(response);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: error.message,
        userMessage: 'Failed to fetch data',
      });
    }
  }

  @Get('backend')
  async backend(@Res() res: Response) {
    try {
      const response = await this.apiService.getBackendCommits();
      res.status(HttpStatus.ACCEPTED).json(response);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: error.message,
        userMessage: 'Failed to fetch data',
      });
    }
  }
}
