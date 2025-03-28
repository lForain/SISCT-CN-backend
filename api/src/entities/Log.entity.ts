import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_LOG')
export class Log {
    @PrimaryGeneratedColumn({ name: 'PK_LOG' })
    id: number;

    @Column({ name: 'DT_DATA', type: 'date' })
    data: Date;

    @Column({ name: 'DS_DESCRICAO', type: 'varchar', length: 200 })
    descricao: string;

    @Column({ name: 'NO_USUARIO', type: 'varchar', length: 100 })
    usuario: string;

    @Column({ name: 'NO_MODULO', type: 'varchar', length: 200 })
    modulo: string;

    @Column({ name: 'DS_VALOR', type: 'varchar', length: 200 })
    valor: string;

    @Column({ name: 'DS_COMPLEMENTO', type: 'varchar', length: 200 })
    complemento: string;
}