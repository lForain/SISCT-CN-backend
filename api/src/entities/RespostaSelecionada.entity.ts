import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Resposta } from './Resposta';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('RL_RESPOSTA_SELECIONADA')
export class RespostaSelecionada {
    @PrimaryGeneratedColumn({ name: 'PK_RESPOSTA_SELECIONADA' })
    id: number;

    @Column({ name: 'DS_COMPLEMENTO', type: 'varchar', length: 200, nullable: true })
    complemento: string;

    @Column({ name: 'ST_RESPOSTA_SELECIONADA_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => Resposta)
    @JoinColumn({ name: 'PK_RESPOSTA' })
    resposta: Resposta;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}
