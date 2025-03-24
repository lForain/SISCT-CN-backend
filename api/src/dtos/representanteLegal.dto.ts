import { IsString, IsNumber, IsOptional, IsDateString, MaxLength, IsEmail } from 'class-validator';

export class CreateRepresentanteLegalDto {
  @IsString()
  @MaxLength(200)
  nome: string;

  @IsOptional()
  @IsDateString()
  terminoMandato?: Date;

  @IsNumber()
  papelDiretoria: number;

  @IsOptional()
  @IsDateString()
  dataNascimento?: Date;

  @IsString()
  @MaxLength(11)
  cpf: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  telefone?: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsNumber()
  escolaridade?: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  curso?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  descricaoPapelDiretoria?: string;

  @IsNumber()
  cadastroNacionalId: number;
}

export class UpdateRepresentanteLegalDto extends CreateRepresentanteLegalDto {}

export class RepresentanteLegalResponseDto {
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
