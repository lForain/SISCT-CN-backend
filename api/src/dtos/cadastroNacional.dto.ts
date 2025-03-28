import { IsString, IsNumber, IsOptional, IsDecimal, MaxLength, IsDateString } from 'class-validator';

export class CreateCadastroNacionalDto {
  @IsString()
  @MaxLength(14)
  cnpj: string;

  @IsNumber()
  filiais: number;

  @IsString()
  @MaxLength(200)
  nomeFantasia: string;

  @IsString()
  @MaxLength(200)
  razaoSocial: string;

  @IsString()
  @MaxLength(20)
  cnaePrincipal: string;

  @IsString()
  @MaxLength(20)
  cnaeSecundario: string;

  @IsDecimal()
  receitaBruta: number;

  @IsString()
  @MaxLength(1)
  financiamentoUniao: string;

  @IsString()
  @MaxLength(1)
  financiamentoEstado: string;

  @IsString()
  @MaxLength(1)
  financiamentoMunicipio: string;

  @IsOptional()
  @IsNumber()
  mesesProjeto?: number;

  @IsString()
  @MaxLength(1)
  possuiCebas: string;

  @IsDateString()
  cebasInicio: Date;

  @IsDateString()
  cebasFinal: Date;

  @IsString()
  @MaxLength(1)
  requerimentoCebas: string;

  @IsOptional()
  @IsNumber()
  cebasAnoProtocolo?: number;

  @IsOptional()
  @IsNumber()
  cebasProtocolo?: number;

  @IsString()
  @MaxLength(1)
  cumpreDispositivos: string;

  @IsOptional()
  @IsNumber()
  totalVagas?: number;

  @IsString()
  @MaxLength(1)
  possuiInscricaoConselhoMunicipal: string;

  @IsString()
  @MaxLength(1)
  conselhoInscrito: string;

  @IsString()
  @MaxLength(1)
  possuiInscricaoConselhoEstadual: string;

  @IsString()
  @MaxLength(200)
  conselhoEstadual: string;

  @IsString()
  @MaxLength(1)
  possuiReconhecimentoPublico: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  possuiReconhecimentoPublicoQual?: string;

  @IsString()
  @MaxLength(1)
  periodicidadeCapacitacao: string;

  @IsString()
  @MaxLength(1)
  acolhimentoProvisorio: string;

  @IsString()
  @MaxLength(1)
  comunidadeTerapeutica: string;

  @IsString()
  @MaxLength(1)
  capacidade: string;

  @IsString()
  @MaxLength(1)
  acessoPublicoAlvo: string;

  @IsString()
  @MaxLength(1)
  articulacao: string;

  @IsString()
  @MaxLength(200)
  descricaoArticulacao: string;

  @IsString()
  @MaxLength(1)
  possuiQuadroTecnico: string;

  @IsString()
  @MaxLength(1)
  gratuito: string;

  @IsString()
  @MaxLength(200)
  custeio: string;

  @IsString()
  @MaxLength(1)
  periodicidadeAtividades: string;

  @IsString()
  @MaxLength(200)
  descricaoPeriodicidadeAtividades: string;

  @IsString()
  @MaxLength(1)
  controlePublicoAlvo: string;

  @IsString()
  @MaxLength(1)
  possuiSicaf: string;

  @IsNumber()
  status: number;
}

export class UpdateCadastroNacionalDto extends CreateCadastroNacionalDto {}

export class CadastroNacionalResponseDto {
  id: number;
  cnpj: string;
  filiais: number;
  nomeFantasia: string;
  razaoSocial: string;
  cnaePrincipal: string;
  cnaeSecundario: string;
  receitaBruta: number;
  financiamentoUniao: string;
  financiamentoEstado: string;
  financiamentoMunicipio: string;
  mesesProjeto?: number;
  possuiCebas: string;
  cebasInicio: Date;
  cebasFinal: Date;
  requerimentoCebas: string;
  cebasAnoProtocolo?: number;
  cebasProtocolo?: number;
  cumpreDispositivos: string;
  totalVagas?: number;
  possuiInscricaoConselhoMunicipal: string;
  conselhoInscrito: string;
  possuiInscricaoConselhoEstadual: string;
  conselhoEstadual: string;
  possuiReconhecimentoPublico: string;
  possuiReconhecimentoPublicoQual?: string;
  periodicidadeCapacitacao: string;
  acolhimentoProvisorio: string;
  comunidadeTerapeutica: string;
  capacidade: string;
  acessoPublicoAlvo: string;
  articulacao: string;
  descricaoArticulacao: string;
  possuiQuadroTecnico: string;
  gratuito: string;
  custeio: string;
  periodicidadeAtividades: string;
  descricaoPeriodicidadeAtividades: string;
  controlePublicoAlvo: string;
  possuiSicaf: string;
  status: number;
}
