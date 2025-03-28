import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_PERGUNTA')
export class Pergunta {
    @PrimaryGeneratedColumn({ name: 'PK_PERGUNTAS' })
    id: number;

    @Column({ name: 'NO_PERGUNTA', type: 'varchar', length: 200 })
    pergunta: string;

    @Column({ name: 'CO_DIRECAO', type: 'number' })
    direcao: number;

    @Column({ name: 'TP_EXIBIR_PERGUNTA', type: 'char', length: 1 })
    exibir: string;

    @Column({ name: 'ST_PERGUNTA_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}