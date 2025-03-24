import { CadastroNacionalService } from '../services/cadastroNacional.service';
import { CreateCadastroNacionalDto, UpdateCadastroNacionalDto, CadastroNacionalResponseDto } from '../dtos/cadastroNacional.dto';
export declare class CadastroNacionalController {
    private readonly cadastroService;
    constructor(cadastroService: CadastroNacionalService);
    findAll(): Promise<CadastroNacionalResponseDto[]>;
    findOne(id: number): Promise<CadastroNacionalResponseDto>;
    create(createDto: CreateCadastroNacionalDto): Promise<CadastroNacionalResponseDto>;
    update(id: number, updateDto: UpdateCadastroNacionalDto): Promise<CadastroNacionalResponseDto>;
    remove(id: number): Promise<void>;
    private mapToResponse;
}
