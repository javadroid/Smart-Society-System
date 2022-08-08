import { Test, TestingModule } from '@nestjs/testing';
import { CrimeOffendersController } from './crime-offenders.controller';

describe('CrimeOffendersController', () => {
  let controller: CrimeOffendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrimeOffendersController],
    }).compile();

    controller = module.get<CrimeOffendersController>(CrimeOffendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
