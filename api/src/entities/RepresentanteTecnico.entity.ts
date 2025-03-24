import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('REPRESENTANTE_TECNICO')
export class RepresentanteTecnico {
  @PrimaryGeneratedColumn({ name: 'ID_REPRESENTANTE_TECNICO' })
  id: number;

  @Column({ name: 'NO_NOME', length: 100 })
  nome: string;

  @Column({ name: 'DT_NASCIMENTO' })
  dataNascimento: Date;

  @Column({ name: 'CO_CPF', type: 'number', precision: 11 })
  cpf: number;

  @Column({ name: 'CO_TELEFONE', length: 50 })
  telefone: string;

  @Column({ name: 'NO_EMAIL', length: 50 })
  email: string;

  @Column({ name: 'TP_ESCOLARIDADE' })
  escolaridade: number;

  @Column({ name: 'CO_CURSO' })
  curso: number;

  @Column({ name: 'TP_POSSUI_EXPERIENCIA' })
  possuiExperiencia: number;

  @Column({ name: 'ID_RESPONSAVEL_PRINCIPAL', nullable: true })
  responsavelPrincipalId: number;

  @Column({ name: 'ID_CADASTRO_NACIONAL' })
  cadastroNacionalId: number;

  @OneToOne(() => CadastroNacional, cadastro => cadastro.representanteTecnico)
  @JoinColumn({ name: 'ID_CADASTRO_NACIONAL' })
  cadastroNacional: CadastroNacional;
}
