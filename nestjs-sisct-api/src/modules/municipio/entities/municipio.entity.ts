import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('municipio')
export class Municipio {
    @PrimaryGeneratedColumn()
    idMunicipio: number;

    @Column({ nullable: true })
    coMunicipio: number;

    @Column({ nullable: true, length: 50 })
    noMunicipio: string;

    @Column()
    idUf: number;

    @Column({ nullable: true, length: 7 })
    coMunicipioIbge: string;

    @Column()
    idCadastroNacionalUf: number;
}