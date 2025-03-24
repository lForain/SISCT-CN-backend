import { RepresentanteLegal } from './RepresentanteLegal.entity';
import { RepresentanteTecnico } from './RepresentanteTecnico.entity';
export declare class CadastroNacional {
    id: number;
    cnpj: string;
    areaAtuacao: number;
    numeroFiliais: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnaePrincipal: string;
    cnaeSecundario: string;
    receitaBruta: number;
    modalidadeFinanciamentoContrato: number;
    representanteLegal: RepresentanteLegal;
    representanteTecnico: RepresentanteTecnico;
}
