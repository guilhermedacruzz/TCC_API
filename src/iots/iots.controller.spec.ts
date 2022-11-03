import { Test, TestingModule } from '@nestjs/testing';
import { IotsController } from './iots.controller';

describe('IotsController', () => {
  let controller: IotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IotsController],
    }).compile();

    controller = module.get<IotsController>(IotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
