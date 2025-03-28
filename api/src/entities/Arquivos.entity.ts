import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CadastroNacional } from './CadastroNacional.entity';
import { TipoArquivos } from './TipoArquivos.entity';

@Entity('RL_ARQUIVOS')
export class Arquivos {
    @PrimaryGeneratedColumn({ name: 'PK_ARQUIVOS' })
    id: number;

    @Column({ name: 'NU_DIAS_VALIDADE', type: 'number', nullable: true })
    diasValidade: number;

    @Column({ name: 'DT_VALIDADE', type: 'date', nullable: true })
    validade: Date;

    @Column({ name: 'DS_ARQUIVO_URL', type: 'varchar', length: 400 })
    arquivoUrl: string;

    @Column({ name: 'DS_COMPLEMENTO', type: 'varchar', length: 200 })
    complemento: string;

    @Column({ name: 'ST_ARQUIVO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;

    @ManyToOne(() => CadastroNacional)
    @JoinColumn({ name: 'PK_CADASTRO_NACIONAL' })
    cadastroNacional: CadastroNacional;

    @ManyToOne(() => TipoArquivos)
    @JoinColumn({ name: 'PK_TIPO_ARQUIVO' })
    tipoArquivo: TipoArquivos;
}
