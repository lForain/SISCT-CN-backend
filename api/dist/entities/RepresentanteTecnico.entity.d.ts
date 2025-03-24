import { CadastroNacional } from './CadastroNacional.entity';
export declare class RepresentanteTecnico {
    id: number;
    nome: string;
    dataNascimento: Date;
    cpf: number;
    telefone: string;
    email: string;
    escolaridade: number;
    curso: number;
    possuiExperiencia: number;
    responsavelPrincipalId: number;
    cadastroNacionalId: number;
    cadastroNacional: CadastroNacional;
}
