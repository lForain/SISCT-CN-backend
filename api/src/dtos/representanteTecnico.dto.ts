import { IsString, IsNumber, IsOptional, IsDateString, MaxLength, IsEmail } from 'class-validator';

export class CreateRepresentanteTecnicoDto {
  @IsString()
  @MaxLength(200)
  nome: string;

  @IsDateString()
  nascimento: Date;

  @IsString()
  @MaxLength(11)
  cpf: string;

  @IsString()
  @MaxLength(100)
  telefone: string;

  @IsEmail()
  @MaxLength(200)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  escolaridade?: string;

  @IsString()
  @MaxLength(200)
  curso: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  possuiExperiencia?: string;

  @IsOptional()
  @IsNumber()
  responsavel?: number;

  @IsNumber()
  cadastroNacionalId: number;
}

export class UpdateRepresentanteTecnicoDto extends CreateRepresentanteTecnicoDto {}

export class RepresentanteTecnicoResponseDto {
  id: number;
  nome: string;
  nascimento: Date;
  cpf: string;
  telefone: string;
  email: string;
  escolaridade?: string;
  curso: string;
  possuiExperiencia?: string;
  responsavel?: number;
  cadastroNacionalId: number;
}
