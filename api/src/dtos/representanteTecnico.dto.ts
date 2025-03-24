import { IsString, IsNumber, IsOptional, IsDateString, MaxLength, IsEmail } from 'class-validator';

export class CreateRepresentanteTecnicoDto {
  @IsString()
  @MaxLength(100)
  nome: string;

  @IsDateString()
  dataNascimento: Date;

  @IsNumber()
  cpf: number;

  @IsString()
  @MaxLength(50)
  telefone: string;

  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNumber()
  escolaridade: number;

  @IsNumber()
  curso: number;

  @IsNumber()
  possuiExperiencia: number;

  @IsOptional()
  @IsNumber()
  responsavelPrincipalId?: number;

  @IsNumber()
  cadastroNacionalId: number;
}

export class UpdateRepresentanteTecnicoDto extends CreateRepresentanteTecnicoDto {}

export class RepresentanteTecnicoResponseDto {
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
