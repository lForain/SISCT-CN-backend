import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_TIPO_ATENDIMENTO')
export class TipoAtendimento {
    @PrimaryGeneratedColumn({ name: 'PK_TIPO_ATENDIMENTO' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'NU_GRUPO', type: 'number' })
    grupo: number;

    @Column({ name: 'ST_TIPO_ATENDIMENTO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}