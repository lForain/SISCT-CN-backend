import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroNacionalEndereco } from './entities/cadastro-nacional-endereco.entity';

@Injectable()
export class CadastroNacionalEnderecoService {
    constructor(
        @InjectRepository(CadastroNacionalEndereco)
        private readonly cadastroNacionalEnderecoRepository: Repository<CadastroNacionalEndereco>,
    ) {}

    async create(data: Partial<CadastroNacionalEndereco>): Promise<CadastroNacionalEndereco> {
        const newEndereco = this.cadastroNacionalEnderecoRepository.create(data);
        return this.cadastroNacionalEnderecoRepository.save(newEndereco);
    }

    async findAll(): Promise<CadastroNacionalEndereco[]> {
        return this.cadastroNacionalEnderecoRepository.find();
    }

    async findOne(id: number): Promise<CadastroNacionalEndereco> {
        return this.cadastroNacionalEnderecoRepository.findOne(id);
    }

    async update(id: number, data: Partial<CadastroNacionalEndereco>): Promise<CadastroNacionalEndereco> {
        await this.cadastroNacionalEnderecoRepository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.cadastroNacionalEnderecoRepository.delete(id);
    }
}