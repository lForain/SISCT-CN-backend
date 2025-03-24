import { RepresentanteTecnicoService } from '../services/representanteTecnico.service';
import { CreateRepresentanteTecnicoDto, UpdateRepresentanteTecnicoDto, RepresentanteTecnicoResponseDto } from '../dtos/representanteTecnico.dto';
export declare class RepresentanteTecnicoController {
    private readonly representanteService;
    constructor(representanteService: RepresentanteTecnicoService);
    findAll(): Promise<RepresentanteTecnicoResponseDto[]>;
    findOne(id: number): Promise<RepresentanteTecnicoResponseDto>;
    create(createDto: CreateRepresentanteTecnicoDto): Promise<RepresentanteTecnicoResponseDto>;
    update(id: number, updateDto: UpdateRepresentanteTecnicoDto): Promise<RepresentanteTecnicoResponseDto>;
    remove(id: number): Promise<void>;
    private mapToResponse;
}
