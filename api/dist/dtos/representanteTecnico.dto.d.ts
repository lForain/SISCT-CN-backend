export declare class CreateRepresentanteTecnicoDto {
    nome: string;
    dataNascimento: Date;
    cpf: number;
    telefone: string;
    email: string;
    escolaridade: number;
    curso: number;
    possuiExperiencia: number;
    responsavelPrincipalId?: number;
    cadastroNacionalId: number;
}
export declare class UpdateRepresentanteTecnicoDto extends CreateRepresentanteTecnicoDto {
}
export declare class RepresentanteTecnicoResponseDto {
    id: number;
    nome: string;
    dataNascimento: Date;
    cpf: number;
    telefone: string;
    email: string;
    escolaridade: number;
    curso: number;
    possuiExperiencia: number;
    responsavelPrincipalId?: number;
    cadastroNacionalId: number;
}
