import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ApiService } from './api.service';
import { Response } from 'express';
import { mockData, mockHttpServiceWithResponse } from './mocks';

describe('ApiController', () => {
  let controller: ApiController;
  let httpService: HttpService;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ApiController, HttpModule, ApiService],
    }).compile();

    controller = module.get<ApiController>(ApiController);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return frontend commits', async () => {
    mockHttpServiceWithResponse(httpService);
    await controller.frontend(res);
    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should return backend commits', async () => {
    mockHttpServiceWithResponse(httpService);
    await controller.backend(res);
    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });
});
