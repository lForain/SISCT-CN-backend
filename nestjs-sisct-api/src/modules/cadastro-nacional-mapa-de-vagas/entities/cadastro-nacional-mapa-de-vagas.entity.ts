import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CADASTRO_NACIONAL_MAPA_DE_VAGAS')
export class CadastroNacionalMapaDeVagas {
    @PrimaryGeneratedColumn()
    idCadastroNacionalMapaDeVagas: number;

    @Column()
    idCadastroNacional: number;

    @Column()
    idCadastroNacionalTipoFinanciamento: number;

    @Column({ nullable: true })
    nrDisponibilidade: number;

    @Column({ nullable: true })
    nrPublico: number;
}