import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_ENDERECO')
export class Endereco {
    @PrimaryGeneratedColumn({ name: 'PK_ENDERECO' })
    id: number;

    @Column({ name: 'DS_LOGRADOURO', type: 'varchar', length: 200 })
    logradouro: string;

    @Column({ name: 'DS_COMPLEMENTO', type: 'varchar', length: 200 })
    complemento: string;

    @Column({ name: 'NO_BAIRRO', type: 'varchar', length: 100 })
    bairro: string;

    @Column({ name: 'NU_NUMERO', type: 'varchar', length: 50 })
    numero: string;

    @Column({ name: 'NU_CEP', type: 'varchar', length: 50 })
    cep: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @Column({ name: 'ST_ENDERECO_ATIVO', type: 'char', length: 1, nullable: true })
    ativo: string;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}