import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';
import { TipoContato } from './TipoContato';

@Entity('RL_CONTATOS')
export class Contatos {
    @PrimaryGeneratedColumn({ name: 'PK_RLCONTATOS' })
    id: number;

    @Column({ name: 'CO_CONTATO', type: 'varchar', length: 200 })
    contato: string;

    @Column({ name: 'ST_CONTATO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;

    @ManyToOne(() => TipoContato)
    @JoinColumn({ name: 'PK_TIPO_CONTATO' })
    tipoContato: TipoContato;
}
