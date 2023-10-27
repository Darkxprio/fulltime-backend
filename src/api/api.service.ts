import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async getFrontendCommits() {
    const { data } = await firstValueFrom(
      this.httpService.get('/fulltime-frontend/commits').pipe(
        catchError((error: AxiosError) => {
          console.error('Error fetching data:', error.message);
          throw error;
        }),
      ),
    );
    return data;
  }

  async getBackendCommits() {
    const { data } = await firstValueFrom(
      this.httpService.get('/fulltime-backend/commits').pipe(
        catchError((error: AxiosError) => {
          console.error('Error fetching data:', error.message);
          throw error;
        }),
      ),
    );
    return data;
  }
}
