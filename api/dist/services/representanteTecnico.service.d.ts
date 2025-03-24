import { Repository } from 'typeorm';
import { RepresentanteTecnico } from '../entities/RepresentanteTecnico.entity';
import { CreateRepresentanteTecnicoDto, UpdateRepresentanteTecnicoDto } from '../dtos/representanteTecnico.dto';
export declare class RepresentanteTecnicoService {
    private representanteRepository;
    constructor(representanteRepository: Repository<RepresentanteTecnico>);
    findAll(): Promise<RepresentanteTecnico[]>;
    findOne(id: number): Promise<RepresentanteTecnico>;
    create(createDto: CreateRepresentanteTecnicoDto): Promise<RepresentanteTecnico>;
    update(id: number, updateDto: UpdateRepresentanteTecnicoDto): Promise<RepresentanteTecnico>;
    remove(id: number): Promise<void>;
}
