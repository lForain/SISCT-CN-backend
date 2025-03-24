import { CadastroNacional } from './CadastroNacional.entity';
export declare class RepresentanteLegal {
    id: number;
    nome: string;
    terminoMandato: Date;
    papelDiretoria: number;
    dataNascimento: Date;
    cpf: string;
    telefone: string;
    email: string;
    escolaridade: number;
    curso: string;
    descricaoPapelDiretoria: string;
    cadastroNacionalId: number;
    cadastroNacional: CadastroNacional;
}
