import { IsString, IsNumber, IsOptional, IsDateString, MaxLength, IsEmail } from 'class-validator';

export class CreateRepresentanteLegalDto {
  @IsString()
  @MaxLength(200)
  nome: string;

  @IsDateString()
  terminoMandato: Date;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  papelDiretoria?: string;

  @IsDateString()
  nascimento: Date;

  @IsOptional()
  @IsString()
  @MaxLength(11)
  cpf?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  telefone?: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MaxLength(1)
  escolaridade: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  descricaoPapelDiretoria?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  curso?: string;

  @IsNumber()
  cadastroNacionalId: number;
}

export class UpdateRepresentanteLegalDto extends CreateRepresentanteLegalDto {}

export class RepresentanteLegalResponseDto {
  id: number;
  nome: string;
  terminoMandato: Date;
  papelDiretoria?: string;
  nascimento: Date;
  cpf?: string;
  telefone?: string;
  email: string;
  escolaridade: string;
  descricaoPapelDiretoria?: string;
  curso?: string;
  cadastroNacionalId: number;
}
