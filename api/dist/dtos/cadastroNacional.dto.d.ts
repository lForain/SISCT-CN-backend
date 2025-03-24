export declare class CreateCadastroNacionalDto {
    cnpj?: string;
    areaAtuacao: number;
    numeroFiliais: number;
    nomeFantasia: string;
    razaoSocial?: string;
    cnaePrincipal?: string;
    cnaeSecundario?: string;
    receitaBruta: number;
    modalidadeFinanciamentoContrato: number;
}
export declare class UpdateCadastroNacionalDto extends CreateCadastroNacionalDto {
}
export declare class CadastroNacionalResponseDto {
    id: number;
    cnpj?: string;
    areaAtuacao: number;
    numeroFiliais: number;
    nomeFantasia: string;
    razaoSocial?: string;
}
