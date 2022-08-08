import { Test, TestingModule } from '@nestjs/testing';
import { CorrectionCentersService } from './correction-centers.service';

describe('CorrectionCentersService', () => {
    let service: CorrectionCentersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CorrectionCentersService],
        }).compile();

        service = module.get<CorrectionCentersService>(CorrectionCentersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
