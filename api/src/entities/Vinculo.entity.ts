import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_VINCULO')
export class Vinculo {
    @PrimaryGeneratedColumn({ name: 'PK_VINCULO' })
    id: number;

    @Column({ name: 'NO_VINCULO', type: 'varchar', length: 200 })
    vinculo: string;

    @Column({ name: 'ST_VINCULO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}