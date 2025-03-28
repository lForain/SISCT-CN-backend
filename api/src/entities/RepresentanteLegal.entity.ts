import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('TB_REPRESENTANTE_LEGAL')
export class RepresentanteLegal {
    @PrimaryGeneratedColumn({ name: 'PK_REPRESENTANTE_LEGAL' })
    id: number;

    @Column({ name: 'NO_NOME', type: 'varchar', length: 200 })
    nome: string;

    @Column({ name: 'DT_TERMINO_MANDATO', type: 'date' })
    terminoMandato: Date;

    @Column({ name: 'TP_PAPEL_DIRETORIA', type: 'char', length: 1, nullable: true })
    papelDiretoria: string;

    @Column({ name: 'DT_NASCIMENTO', type: 'date' })
    nascimento: Date;

    @Column({ name: 'NU_CPF', type: 'char', length: 11, nullable: true })
    cpf: string;

    @Column({ name: 'NR_TELEFONE', type: 'varchar', length: 50, nullable: true })
    telefone: string;

    @Column({ name: 'NO_EMAIL', type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'TP_ESCOLARIDADE', type: 'char', length: 1 })
    escolaridade: string;

    @Column({ name: 'DS_PAPEL_DIRETORIA', type: 'varchar', length: 200, nullable: true })
    descricaoPapelDiretoria: string;

    @Column({ name: 'NO_CURSO', type: 'varchar', length: 100, nullable: true })
    curso: string;

    @Column({ name: 'ST_REPRESENTANTE_LEGAL_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;
}