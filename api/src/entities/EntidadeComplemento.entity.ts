import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_ENTIDADE_COMPLEMENTO')
export class EntidadeComplemento {
    @PrimaryGeneratedColumn({ name: 'PK_CADASTRO_NACIONAL' })
    id: number;

    @Column({ name: 'TP_DOZE_PASSOS', type: 'char', length: 1 })
    dozePassos: string;

    @Column({ name: 'DS_DOZE_PASSOS', type: 'varchar', length: 200 })
    descricaoDozePassos: string;

    @Column({ name: 'TP_APOIO_DOZE_PASSOS', type: 'char', length: 1 })
    apoioDozePassos: string;

    @Column({ name: 'DS_APOIO_DOZE_PASSOS', type: 'varchar', length: 200 })
    descricaoApoioDozePassos: string;

    @Column({ name: 'TP_ATENDIMENTO_PSICOSOCIAL', type: 'char', length: 1 })
    atendimentoPsicosocial: string;

    @Column({ name: 'DS_ATENDIMENTO_PSICOSOCIAL', type: 'varchar', length: 200 })
    descricaoAtendimentoPsicosocial: string;

    @Column({ name: 'TP_ATIV_RESSOCIALI', type: 'char', length: 1 })
    atividadeRessocializacao: string;

    @Column({ name: 'TP_POSSUI_PARCERIAS', type: 'char', length: 1 })
    possuiParcerias: string;

    @OneToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}