import { RepresentanteLegalService } from '../services/representanteLegal.service';
import { CreateRepresentanteLegalDto, UpdateRepresentanteLegalDto, RepresentanteLegalResponseDto } from '../dtos/representanteLegal.dto';
export declare class RepresentanteLegalController {
    private readonly representanteService;
    constructor(representanteService: RepresentanteLegalService);
    findAll(): Promise<RepresentanteLegalResponseDto[]>;
    findOne(id: number): Promise<RepresentanteLegalResponseDto>;
    create(createDto: CreateRepresentanteLegalDto): Promise<RepresentanteLegalResponseDto>;
    update(id: number, updateDto: UpdateRepresentanteLegalDto): Promise<RepresentanteLegalResponseDto>;
    remove(id: number): Promise<void>;
    private mapToResponse;
}
