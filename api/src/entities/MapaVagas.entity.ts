import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';
import { TipoFinanciamento } from './TipoFinanciamento';

@Entity('RL_MAPA_VAGAS')
export class MapaVagas {
    @PrimaryGeneratedColumn({ name: 'PK_MAPA_VAGAS' })
    id: number;

    @Column({ name: 'NU_DISPONIBILIDADE', type: 'number' })
    disponibilidade: number;

    @Column({ name: 'NU_PUBLICO', type: 'number' })
    publico: number;

    @Column({ name: 'ST_MAPA_VAGAS_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => TipoFinanciamento)
    @JoinColumn({ name: 'PK_TIPO_FINANCIAMENTO' })
    tipoFinanciamento: TipoFinanciamento;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}
