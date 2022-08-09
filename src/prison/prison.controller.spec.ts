import { Test, TestingModule } from '@nestjs/testing';
import { PrisonController } from './prison.controller';

describe('PrisonController', () => {
  let controller: PrisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrisonController],
    }).compile();

    controller = module.get<PrisonController>(PrisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
