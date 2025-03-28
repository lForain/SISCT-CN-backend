import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_CADASTRO_NACIONAL')
export class CadastroNacional {
    @PrimaryGeneratedColumn({ name: 'PK_CADASTRO_NACIONAL' })
    id: number;

    @Column({ name: 'NU_CNPJ', type: 'char', length: 14 })
    cnpj: string;

    @Column({ name: 'NU_FILIAIS', type: 'number' })
    filiais: number;

    @Column({ name: 'NO_FANTASIA', type: 'varchar', length: 200 })
    nomeFantasia: string;

    @Column({ name: 'NO_RAZAO_SOCIAL', type: 'varchar', length: 200 })
    razaoSocial: string;

    @Column({ name: 'CO_CNAE_PRINCIPAL', type: 'varchar', length: 20 })
    cnaePrincipal: string;

    @Column({ name: 'CO_CNAE_SECUNDARIO', type: 'varchar', length: 20 })
    cnaeSecundario: string;

    @Column({ name: 'VL_RECEITA_BRUTA', type: 'number', precision: 18, scale: 2 })
    receitaBruta: number;

    @Column({ name: 'TP_FINANCIAMENTO_UNIAO', type: 'char', length: 1 })
    financiamentoUniao: string;

    @Column({ name: 'TP_FINANCIAMENTO_ESTADO', type: 'char', length: 1 })
    financiamentoEstado: string;

    @Column({ name: 'TP_FINANCIAMENTO_MUNICIPIO', type: 'char', length: 1 })
    financiamentoMunicipio: string;

    @Column({ name: 'NU_MESES_PROJETO', type: 'number', nullable: true })
    mesesProjeto: number;

    @Column({ name: 'TP_POSSUI_CEBAS', type: 'char', length: 1 })
    possuiCebas: string;

    @Column({ name: 'DT_CEBAS_INICIO', type: 'date' })
    cebasInicio: Date;

    @Column({ name: 'DT_CEBAS_FINAL', type: 'date' })
    cebasFinal: Date;

    @Column({ name: 'TP_REQUERIMENTO_CEBAS', type: 'char', length: 1 })
    requerimentoCebas: string;

    @Column({ name: 'NU_CEBAS_ANO_PROTOCOLO', type: 'number', nullable: true })
    cebasAnoProtocolo: number;

    @Column({ name: 'NU_CEBAS_PROTOCOLO', type: 'number', nullable: true })
    cebasProtocolo: number;

    @Column({ name: 'TP_CUMPRE_DISPOSITIVOS', type: 'char', length: 1 })
    cumpreDispositivos: string;

    @Column({ name: 'NU_TOTAL_VAGAS', type: 'number', nullable: true })
    totalVagas: number;

    @Column({ name: 'TP_POSSUI_INS_CONS_MUNICIPAL', type: 'char', length: 1 })
    possuiInscricaoConselhoMunicipal: string;

    @Column({ name: 'TP_CONSELHO_INSCRITO', type: 'char', length: 1 })
    conselhoInscrito: string;

    @Column({ name: 'TP_POSSUI_INS_CONS_ESTADUAL', type: 'char', length: 1 })
    possuiInscricaoConselhoEstadual: string;

    @Column({ name: 'NO_CONSELHO_ESTADUAL', type: 'varchar', length: 200 })
    conselhoEstadual: string;

    @Column({ name: 'TP_POSSUI_RECON_PUBLICA', type: 'char', length: 1 })
    possuiReconhecimentoPublico: string;

    @Column({ name: 'TP_POSSUI_RECON_PUBLICA_QUAL', type: 'char', length: 1, nullable: true })
    possuiReconhecimentoPublicoQual: string;

    @Column({ name: 'TP_PERIODICIDADE_CAPACITACAO', type: 'char', length: 1 })
    periodicidadeCapacitacao: string;

    @Column({ name: 'TP_ACOLHIMENTO_PROVISORIO', type: 'char', length: 1 })
    acolhimentoProvisorio: string;

    @Column({ name: 'TP_COMUN_TERAPEUTICA', type: 'char', length: 1 })
    comunidadeTerapeutica: string;

    @Column({ name: 'TP_CAPACIDADE', type: 'char', length: 1 })
    capacidade: string;

    @Column({ name: 'TP_ACESSO_PUBLICO_ALVO', type: 'char', length: 1 })
    acessoPublicoAlvo: string;

    @Column({ name: 'TP_ARTICULACAO', type: 'char', length: 1 })
    articulacao: string;

    @Column({ name: 'DS_ARTICULACAO', type: 'varchar', length: 200 })
    descricaoArticulacao: string;

    @Column({ name: 'TP_POSSUI_QUADRO_TECNICO', type: 'char', length: 1 })
    possuiQuadroTecnico: string;

    @Column({ name: 'TP_GRATUITO', type: 'char', length: 1 })
    gratuito: string;

    @Column({ name: 'DS_CUSTEIO', type: 'varchar', length: 200 })
    custeio: string;

    @Column({ name: 'TP_PERIODICIDADE_ATIVIDADES', type: 'char', length: 1 })
    periodicidadeAtividades: string;

    @Column({ name: 'DS_PERIODICIDADE_ATIVIDADES', type: 'varchar', length: 200 })
    descricaoPeriodicidadeAtividades: string;

    @Column({ name: 'TP_CONTROLE_PUBLICO_ALVO', type: 'char', length: 1 })
    controlePublicoAlvo: string;

    @Column({ name: 'TP_POSSUI_SICAF', type: 'char', length: 1 })
    possuiSicaf: string;

    @Column({ name: 'NU_STATUS', type: 'number' })
    status: number;

    @Column({ name: 'ST_CADASTRO_NACIONAL_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}