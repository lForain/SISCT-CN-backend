import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';
import { TipoAtendimento } from './TipoAtendimento';

@Entity('RL_ATENDIMENTO')
export class Atendimento {
    @PrimaryGeneratedColumn({ name: 'PK_ATENDIMENTO' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 100 })
    nome: string;

    @Column({ name: 'ST_ATENDIMENTO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;

    @ManyToOne(() => TipoAtendimento)
    @JoinColumn({ name: 'PK_TIPO_ATENDIMENTO' })
    tipoAtendimento: TipoAtendimento;
}
