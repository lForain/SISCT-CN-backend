import { Repository } from 'typeorm';
import { CadastroNacional } from '../entities/CadastroNacional.entity';
import { CreateCadastroNacionalDto, UpdateCadastroNacionalDto } from '../dtos/cadastroNacional.dto';
export declare class CadastroNacionalService {
    private cadastroRepository;
    constructor(cadastroRepository: Repository<CadastroNacional>);
    findAll(): Promise<CadastroNacional[]>;
    findOne(id: number): Promise<CadastroNacional>;
    create(createDto: CreateCadastroNacionalDto): Promise<CadastroNacional>;
    update(id: number, updateDto: UpdateCadastroNacionalDto): Promise<CadastroNacional>;
    remove(id: number): Promise<void>;
}
