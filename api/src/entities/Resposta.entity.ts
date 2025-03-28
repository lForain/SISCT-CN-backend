import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pergunta } from './Pergunta.entity';

@Entity('TB_RESPOSTA')
export class Resposta {
    @PrimaryGeneratedColumn({ name: 'PK_RESPOSTA' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'ST_RESPOSTA_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => Pergunta)
    @JoinColumn({ name: 'PK_PERGUNTAS' })
    pergunta: Pergunta;
}