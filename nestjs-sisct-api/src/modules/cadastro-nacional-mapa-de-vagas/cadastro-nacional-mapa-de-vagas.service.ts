import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroNacionalMapaDeVagas } from './entities/cadastro-nacional-mapa-de-vagas.entity';

@Injectable()
export class CadastroNacionalMapaDeVagasService {
  constructor(
    @InjectRepository(CadastroNacionalMapaDeVagas)
    private readonly repository: Repository<CadastroNacionalMapaDeVagas>,
  ) {}

  async create(data: Partial<CadastroNacionalMapaDeVagas>): Promise<CadastroNacionalMapaDeVagas> {
    const newRecord = this.repository.create(data);
    return this.repository.save(newRecord);
  }

  async findAll(): Promise<CadastroNacionalMapaDeVagas[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CadastroNacionalMapaDeVagas> {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Partial<CadastroNacionalMapaDeVagas>): Promise<CadastroNacionalMapaDeVagas> {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}