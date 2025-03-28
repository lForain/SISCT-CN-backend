import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_REPRESENTANTE_TECNICO')
export class RepresentanteTecnico {
    @PrimaryGeneratedColumn({ name: 'PK_REPRESENTANTE_TECNICO' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'DT_NASCIMENTO', type: 'date' })
    nascimento: Date;

    @Column({ name: 'NU_CPF', type: 'char', length: 11 })
    cpf: string;

    @Column({ name: 'NR_TELEFONE', type: 'varchar', length: 100 })
    telefone: string;

    @Column({ name: 'NO_EMAIL', type: 'varchar', length: 200 })
    email: string;

    @Column({ name: 'TP_ESCOLARIDADE', type: 'char', length: 1, nullable: true })
    escolaridade: string;

    @Column({ name: 'NO_CURSO', type: 'varchar', length: 200 })
    curso: string;

    @Column({ name: 'TP_POSSUI_EXPERIENCIA', type: 'char', length: 1, nullable: true })
    possuiExperiencia: string;

    @Column({ name: 'NU_RESPONSAVEL', type: 'number', nullable: true })
    responsavel: number;

    @Column({ name: 'ST_REPRESENTANTE_TECNICO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}