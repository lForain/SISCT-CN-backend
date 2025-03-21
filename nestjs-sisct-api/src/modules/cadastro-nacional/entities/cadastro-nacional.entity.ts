import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CADASTRO_NACIONAL')
export class CadastroNacional {
    @PrimaryGeneratedColumn()
    idCadastroNacional: number;

    @Column({ type: 'char', length: 14, nullable: true })
    coCnpj: string;

    @Column({ type: 'int' })
    tpAreaAtuacao: number;

    @Column({ type: 'int', default: 0 })
    nrFiliais: number;

    @Column({ type: 'varchar', length: 200 })
    noNomeFantasia: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    noRazaoSocial: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    coCnaePrincipal: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    coCnaeSecundario: string;

    @Column({ type: 'decimal', precision: 18, scale: 2 })
    vlReceitaBruta: number;

    @Column({ type: 'int' })
    tpModalidadeFinanciamentoContrato: number;

    @Column({ type: 'int', nullable: true })
    coModalidade: number;

    @Column({ type: 'int', nullable: true })
    coModalidadeOutros: number;

    @Column({ type: 'int' })
    tpFinanciamentoEstado: number;

    @Column({ type: 'int', nullable: true })
    tpFinanciamentoMunicipio: number;

    @Column({ type: 'int', nullable: true })
    coFinanciamentoMunicipio: number;

    @Column({ type: 'int', nullable: true })
    tpOutrasFontes: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    dsOutrasFontes: string;

    @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
    vlOutrasFontes: number;

    @Column({ type: 'int', nullable: true })
    tpOutrasFontesMensalidade: number;

    @Column({ type: 'int', nullable: true })
    vlOutrasFontesMensalidade: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    dsOutrasFontesOutras: string;

    @Column({ type: 'varchar', length: 400, nullable: true })
    dsUrlLicencaSanitaria: string;

    @Column({ type: 'date', nullable: true })
    dtValidadeLicencaSanitaria: Date;

    @Column({ type: 'int' })
    nrPrazoProjeto: number;

    @Column({ type: 'varchar', length: 400, nullable: true })
    dsUrlProjetoTerapeutico: string;

    @Column({ type: 'int' })
    tpPossuiCebas: number;

    @Column({ type: 'date', nullable: true })
    dtInicioValidadeCebas: Date;

    @Column({ type: 'varchar', length: 50, nullable: true })
    coFinanciamentoEstado: string;

    @Column({ type: 'date', nullable: true })
    dtFimValidadeCebas: Date;

    @Column({ type: 'varchar', length: 400, nullable: true })
    dsUrlDocumentoCebas: string;

    @Column({ type: 'int', nullable: true })
    tpCebasDepad: number;

    @Column({ type: 'int', nullable: true })
    nuAnoProtocoloCebas: number;

    @Column({ type: 'int', nullable: true })
    nuProtocoloCebas: number;

    @Column({ type: 'int' })
    tpCumpreConad: number;

    @Column({ type: 'int', nullable: true })
    nuTotalVagas: number;

    @Column({ type: 'int', nullable: true })
    nrCapacidadeAdultoFeminino: number;

    @Column({ type: 'int', nullable: true })
    nrCapacidadeAdultoMasculino: number;

    @Column({ type: 'int', nullable: true })
    nrCapacidadeMaesNutriz: number;

    @Column({ type: 'int' })
    tpPossuiIncricaoMunicipal: number;

    @Column({ type: 'int', nullable: true })
    tpConselhoMunicipal: number;

    @Column({ type: 'int' })
    tpPossuiInscricaoEstadual: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    noConselhoEstadual: string;

    @Column({ type: 'int' })
    tpPossuiReconhecimentoAutoridade: number;

    @Column({ type: 'int', nullable: true })
    tpAutoridade: number;

    @Column({ type: 'int' })
    nrPublicoAdultoFeminino: number;

    @Column({ type: 'int' })
    nrPublicoAdultoMasculino: number;

    @Column({ type: 'int' })
    nrPublicoCriancas: number;

    @Column({ type: 'int' })
    nrPublicoIdosos: number;

    @Column({ type: 'int' })
    tpCapacidadeAtendimento: number;

    @Column({ type: 'int' })
    tpFormaAcesso: number;

    @Column({ type: 'int', nullable: true })
    tpArticulacaoOutrasPoliticas: number;

    @Column({ type: 'nvarchar', length: 200, nullable: true })
    noDescricaoOutraPolitica: string;

    @Column({ type: 'int' })
    tpEspaco: number;

    @Column({ type: 'int' })
    tpPossuiEspacoColetivo: number;

    @Column({ type: 'int' })
    tpPossuiEspacoIndividual: number;

    @Column({ type: 'int' })
    tpAcolhimentoProvisorio: number;

    @Column({ type: 'int', nullable: true })
    tpComunidadeTerapeutica: number;

    @Column({ type: 'int' })
    tpPeriodicidadeCapacitacao: number;

    @Column({ type: 'int', nullable: true })
    tpAtividadePrevencao: number;

    @Column({ type: 'int', nullable: true })
    tpAtividadeApoio: number;

    @Column({ type: 'int', nullable: true })
    tpAtividadeMutuaAjuda: number;

    @Column({ type: 'int', nullable: true })
    tpAtividadePsicosocial: number;

    @Column({ type: 'int', nullable: true })
    tpAtividadeRessocializacao: number;

    @Column({ type: 'int' })
    tpGratuito: number;

    @Column({ type: 'int', nullable: true })
    tpCusteioConsumo: number;

    @Column({ type: 'int', nullable: true })
    tpCusteioRh: number;

    @Column({ type: 'int', nullable: true })
    tpCusteioAdministrativo: number;

    @Column({ type: 'int', nullable: true })
    tpCusteioOutros: number;

    @Column({ type: 'varchar', length: 400, nullable: true })
    dsCusteioOutros: string;

    @Column({ type: 'int' })
    tpApenasVoluntarios: number;

    @Column({ type: 'int' })
    tpEscolaridadeVoluntarios: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoPalestras: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoRodadas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoOficinas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoLudicas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoTerapeuticas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoPsicosociais: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoEventos: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoOutrasAcoes: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsPrevencaoOutrasAcoes: string;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoDireitosSociais: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoFamilia: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoSaudeMental: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoAlcoolDrogas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoEspiritualidade: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoOutrosTemas: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsPrevencaoOutrosTemas: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    noEmailInstitucional: string;

    @Column({ type: 'int', nullable: true })
    tpOutrasFontesCampanhas: number;

    @Column({ type: 'int', nullable: true })
    tpOutrasFontesDoacoes: number;

    @Column({ type: 'int', nullable: true })
    tpOutrasFontesVendas: number;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoPeriodicidade: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    dsPrevencaoPeriodicidadeOutra: string;

    @Column({ type: 'int', nullable: true })
    tpPrevencaoControlePublico: number;

    @Column({ type: 'int', nullable: true })
    tpApoio12Passos: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsApoioMetodologia: string;

    @Column({ type: 'int', nullable: true })
    tpApoioGrupo12Passos: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsApoioGrupo12Passos: string;

    @Column({ type: 'int', nullable: true })
    tpPsicosocial: number;

    @Column({ type: 'int', nullable: true })
    tpPsicosocialAcolhimento: number;

    @Column({ type: 'int', nullable: true })
    tpPsicosocialIndividual: number;

    @Column({ type: 'int', nullable: true })
    tpPsicosocialEncaminhamento: number;

    @Column({ type: 'int', nullable: true })
    tpPsicosocialOutros: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsPsicosocialOutros: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsPsicosocialProfissionais: string;

    @Column({ type: 'int', nullable: true })
    tpRessocializacao: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoCapacitacao: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoEncaminhamento: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoVinculosFamiliares: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoOutros: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsRessocializacaoOutros: string;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParcerias: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasInstituicoes: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasEmpresas: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasOrgPublico: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasNaoPossui: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasVinculos: number;

    @Column({ type: 'int', nullable: true })
    tpRessocializacaoParceriasOutros: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    dsRessocializacaoParceriasOutros: string;

    @Column({ type: 'int', nullable: true })
    tpSicaf: number;
}