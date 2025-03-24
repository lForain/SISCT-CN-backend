import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';

@Entity('REPRESENTANTE_LEGAL')
export class RepresentanteLegal {
  @PrimaryGeneratedColumn({ name: 'ID_REPRESENTANTE_LEGAL' })
  id: number;

  @Column({ name: 'NO_NOME', length: 200 })
  nome: string;

  @Column({ name: 'DT_TERMINO_MANDATO', nullable: true })
  terminoMandato: Date;

  @Column({ name: 'TP_PAPEL_DIRETORIA' })
  papelDiretoria: number;

  @Column({ name: 'DT_NASCIMENTO', nullable: true })
  dataNascimento: Date;

  @Column({ name: 'CO_CPF', length: 11 })
  cpf: string;

  @Column({ name: 'CO_TELEFONE', length: 100, nullable: true })
  telefone: string;

  @Column({ name: 'NO_EMAIL', length: 100 })
  email: string;

  @Column({ name: 'TP_ESCOLARIDADE', nullable: true })
  escolaridade: number;

  @Column({ name: 'CO_CURSO', length: 20, nullable: true })
  curso: string;

  @Column({ name: 'DS_PAPEL_DIRETORIA', length: 200, nullable: true })
  descricaoPapelDiretoria: string;

  @Column({ name: 'ID_CADASTRO_NACIONAL' })
  cadastroNacionalId: number;

  @OneToOne(() => CadastroNacional, cadastro => cadastro.representanteLegal)
  @JoinColumn({ name: 'ID_CADASTRO_NACIONAL' })
  cadastroNacional: CadastroNacional;
}
