import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_TIPO_ARQUIVOS')
export class TipoArquivos {
    @PrimaryGeneratedColumn({ name: 'PK_TIPO_ARQUIVO' })
    id: number;

    @Column({ name: 'NO_TIPO_ARQUIVO', type: 'varchar', length: 200 })
    tipoArquivo: string;

    @Column({ name: 'ST_TIPO_ARQUIVO_ATIVO', type: 'char', length: 1 })
    ativo: string;

    @Column({ name: 'DT_ATUALIZACAO', type: 'timestamp' })
    atualizacao: Date;
}