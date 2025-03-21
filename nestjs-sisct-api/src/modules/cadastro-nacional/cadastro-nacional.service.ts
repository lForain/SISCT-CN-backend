import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroNacional } from './entities/cadastro-nacional.entity';

@Injectable()
export class CadastroNacionalService {
  constructor(
    @InjectRepository(CadastroNacional)
    private readonly cadastroNacionalRepository: Repository<CadastroNacional>,
  ) {}

  async create(cadastroNacional: CadastroNacional): Promise<CadastroNacional> {
    return this.cadastroNacionalRepository.save(cadastroNacional);
  }

  async findAll(): Promise<CadastroNacional[]> {
    return this.cadastroNacionalRepository.find();
  }

  async findOne(id: number): Promise<CadastroNacional> {
    return this.cadastroNacionalRepository.findOne(id);
  }

  async update(id: number, cadastroNacional: CadastroNacional): Promise<CadastroNacional> {
    await this.cadastroNacionalRepository.update(id, cadastroNacional);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cadastroNacionalRepository.delete(id);
  }
}