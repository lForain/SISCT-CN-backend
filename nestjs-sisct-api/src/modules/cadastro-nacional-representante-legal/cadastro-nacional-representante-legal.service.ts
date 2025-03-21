import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroNacionalRepresentanteLegal } from './entities/cadastro-nacional-representante-legal.entity';

@Injectable()
export class CadastroNacionalRepresentanteLegalService {
  constructor(
    @InjectRepository(CadastroNacionalRepresentanteLegal)
    private readonly representanteLegalRepository: Repository<CadastroNacionalRepresentanteLegal>,
  ) {}

  async create(data: Partial<CadastroNacionalRepresentanteLegal>): Promise<CadastroNacionalRepresentanteLegal> {
    const representanteLegal = this.representanteLegalRepository.create(data);
    return this.representanteLegalRepository.save(representanteLegal);
  }

  async findAll(): Promise<CadastroNacionalRepresentanteLegal[]> {
    return this.representanteLegalRepository.find();
  }

  async findOne(id: number): Promise<CadastroNacionalRepresentanteLegal> {
    return this.representanteLegalRepository.findOne(id);
  }

  async update(id: number, data: Partial<CadastroNacionalRepresentanteLegal>): Promise<CadastroNacionalRepresentanteLegal> {
    await this.representanteLegalRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.representanteLegalRepository.delete(id);
  }
}