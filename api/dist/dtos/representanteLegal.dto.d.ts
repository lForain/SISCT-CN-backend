export declare class CreateRepresentanteLegalDto {
    nome: string;
    terminoMandato?: Date;
    papelDiretoria: number;
    dataNascimento?: Date;
    cpf: string;
    telefone?: string;
    email: string;
    escolaridade?: number;
    curso?: string;
    descricaoPapelDiretoria?: string;
    cadastroNacionalId: number;
}
export declare class UpdateRepresentanteLegalDto extends CreateRepresentanteLegalDto {
}
export declare class RepresentanteLegalResponseDto {
    id: number;
    nome: string;
    terminoMandato?: Date;
    papelDiretoria: number;
    dataNascimento?: Date;
    cpf: string;
    telefone?: string;
    email: string;
    escolaridade?: number;
    curso?: string;
    descricaoPapelDiretoria?: string;
    cadastroNacionalId: number;
}
