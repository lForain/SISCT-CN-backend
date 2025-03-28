import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_TIPO_FINANCIAMENTO')
export class TipoFinanciamento {
    @PrimaryGeneratedColumn({ name: 'PK_TIPO_FINANCIAMENTO' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'NU_GRUPO', type: 'number' })
    grupo: number;

    @Column({ name: 'ST_TIPO_FINANCIAMENTO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}