import { Test, TestingModule } from '@nestjs/testing';
import { IotsService } from './iots.service';

describe('IotsService', () => {
  let service: IotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IotsService],
    }).compile();

    service = module.get<IotsService>(IotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
