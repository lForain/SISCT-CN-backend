import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';
import { Profissao } from './Profissao.entity';
import { Vinculo } from './Vinculo.entity';

@Entity('RL_EQUIPE_TECNICA')
export class EquipeTecnica {
    @PrimaryGeneratedColumn({ name: 'PK_EQUIPE_TECNICA' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'NU_CARGA_HORARIA', type: 'number' })
    cargaHoraria: number;

    @Column({ name: 'ST_EQUIPE_TECNICA_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;

    @ManyToOne(() => Profissao)
    @JoinColumn({ name: 'PK_PROFISSAO' })
    profissao: Profissao;

    @ManyToOne(() => Vinculo)
    @JoinColumn({ name: 'PK_VINCULO' })
    vinculo: Vinculo;
}
