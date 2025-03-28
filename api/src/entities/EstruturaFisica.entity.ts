import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_ESTRUTURA_FISICA')
export class EstruturaFisica {
    @PrimaryGeneratedColumn({ name: 'PK_CADASTRO_NACIONAL' })
    id: number;

    @Column({ name: 'TP_ESPACO_ENTIDADE', type: 'char', length: 1 })
    espacoEntidade: string;

    @Column({ name: 'TP_ESPACO_FAMILIA', type: 'char', length: 1 })
    espacoFamilia: string;

    @Column({ name: 'TP_ESPACO_INDIVIDUAL', type: 'char', length: 1 })
    espacoIndividual: string;

    @OneToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}