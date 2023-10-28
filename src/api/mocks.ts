import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

interface mockDataType {
  commit: {
    author: {
      name: string;
      date: string;
      email: string;
    };
    message: string;
  };
  html_url: string;
}

export const mockData: mockDataType[] = [
  {
    commit: {
      author: {
        name: 'Test Author',
        date: '2023-10-27T00:00:00Z',
        email: 'test@example.com',
      },
      message: 'Test commit message',
    },
    html_url: 'https://example.com/commit/123',
  },
];

export function mockHttpServiceWithResponse(httpService: HttpService) {
  jest.spyOn(httpService, 'get').mockReturnValueOnce(
    of({
      status: 200,
      data: mockData,
    } as AxiosResponse),
  );
}
