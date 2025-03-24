import { Repository } from 'typeorm';
import { RepresentanteLegal } from '../entities/RepresentanteLegal.entity';
import { CreateRepresentanteLegalDto, UpdateRepresentanteLegalDto } from '../dtos/representanteLegal.dto';
export declare class RepresentanteLegalService {
    private representanteRepository;
    constructor(representanteRepository: Repository<RepresentanteLegal>);
    findAll(): Promise<RepresentanteLegal[]>;
    findOne(id: number): Promise<RepresentanteLegal>;
    create(createDto: CreateRepresentanteLegalDto): Promise<RepresentanteLegal>;
    update(id: number, updateDto: UpdateRepresentanteLegalDto): Promise<RepresentanteLegal>;
    remove(id: number): Promise<void>;
}
