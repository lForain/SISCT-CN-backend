import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CADASTRO_NACIONAL_ENDERECO')
export class CadastroNacionalEndereco {
    @PrimaryGeneratedColumn()
    idCadastroNacionalEndereco: number;

    @Column({ nullable: true, length: 200 })
    edLogradouro: string;

    @Column({ nullable: true, length: 200 })
    edComplemento: string;

    @Column({ nullable: true, length: 100 })
    edBairro: string;

    @Column({ nullable: true, length: 20 })
    edNumero: string;

    @Column({ type: 'number', nullable: true })
    nrCep: number;

    @Column({ type: 'number', nullable: false })
    idMunicipio: number;

    @Column({ type: 'number', nullable: false })
    idCadastroNacional: number;
}