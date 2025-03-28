import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_DILIGENCIA')
export class Diligencia {
    @PrimaryGeneratedColumn({ name: 'PK_DILIGENCIA' })
    id: number;

    @Column({ name: 'DT_ENVIO', type: 'date', nullable: true })
    envio: Date;

    @Column({ name: 'DT_ULTIMA_ALTERACAO', type: 'date' })
    ultimaAlteracao: Date;

    @Column({ name: 'DT_INICIO_DILIGENCIA', type: 'date' })
    inicioDiligencia: Date;

    @Column({ name: 'DS_DESCRICAO', type: 'varchar', length: 800 })
    descricao: string;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}