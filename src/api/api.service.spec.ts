import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { mockData, mockHttpServiceWithResponse } from './mocks';

describe('ApiService', () => {
  let service: ApiService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ApiService],
    }).compile();

    service = module.get<ApiService>(ApiService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch frontend commits successfully', async () => {
    mockHttpServiceWithResponse(httpService);
    const result = await service.getFrontendCommits();
    expect(result).toEqual(mockData);
  });

  it('should fetch backend commits successfully', async () => {
    mockHttpServiceWithResponse(httpService);
    const result = await service.getBackendCommits();
    expect(result).toEqual(mockData);
  });
});
