import { IsString, IsNumber, IsOptional, IsDecimal, MaxLength } from 'class-validator';

export class CreateCadastroNacionalDto {
  @IsOptional()
  @IsString()
  @MaxLength(14)
  cnpj?: string;

  @IsNumber()
  areaAtuacao: number;

  @IsNumber()
  numeroFiliais: number;

  @IsString()
  @MaxLength(200)
  nomeFantasia: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  razaoSocial?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  cnaePrincipal?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  cnaeSecundario?: string;

  @IsDecimal()
  receitaBruta: number;

  @IsNumber()
  modalidadeFinanciamentoContrato: number;

  // ... more fields would be added here
}

export class UpdateCadastroNacionalDto extends CreateCadastroNacionalDto {}

export class CadastroNacionalResponseDto {
  id: number;
  cnpj?: string;
  areaAtuacao: number;
  numeroFiliais: number;
  nomeFantasia: string;
  razaoSocial?: string;
  // ... more fields would be added here
}
