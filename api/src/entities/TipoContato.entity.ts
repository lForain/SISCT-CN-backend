import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_TIPO_CONTATO')
export class TipoContato {
    @PrimaryGeneratedColumn({ name: 'PK_TIPO_CONTATO' })
    id: number;

    @Column({ name: 'NO_TIPO_CONTATO', type: 'varchar', length: 100 })
    tipoContato: string;

    @Column({ name: 'ST_TIPO_CONTATO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}