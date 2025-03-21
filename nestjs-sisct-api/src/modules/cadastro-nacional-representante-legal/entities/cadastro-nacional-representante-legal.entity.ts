import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CADASTRO_NACIONAL_REPRESENTANTE_LEGAL')
export class CadastroNacionalRepresentanteLegal {
    @PrimaryGeneratedColumn()
    idCadastroNacionalRepresentanteLegal: number;

    @Column({ length: 200 })
    noNome: string;

    @Column({ type: 'date', nullable: true })
    dtTerminoMandato: Date;

    @Column()
    tpPapelDiretoria: number;

    @Column({ type: 'date', nullable: true })
    dtNascimento: Date;

    @Column({ length: 11 })
    coCpf: string;

    @Column({ length: 100, nullable: true })
    coTelefone: string;

    @Column({ length: 100 })
    noEmail: string;

    @Column({ nullable: true })
    tpEscolaridade: number;

    @Column({ length: 20, nullable: true })
    coCurso: string;

    @Column()
    idCadastroNacional: number;

    @Column({ length: 200, nullable: true })
    dsPapelDiretoria: string;

    @Column()
    idCadastroNacionalProfissao: number;
}