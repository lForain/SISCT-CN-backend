import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_PROFISSAO')
export class Profissao {
    @PrimaryGeneratedColumn({ name: 'PK_PROFISSAO' })
    id: number;

    @Column({ name: 'NO_PROFISSAO', type: 'varchar', length: 200 })
    profissao: string;

    @Column({ name: 'ST_PROFISSAO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}