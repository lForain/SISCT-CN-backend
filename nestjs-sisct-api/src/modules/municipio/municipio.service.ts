import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './entities/municipio.entity';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
  ) {}

  async create(municipio: Municipio): Promise<Municipio> {
    return this.municipioRepository.save(municipio);
  }

  async findAll(): Promise<Municipio[]> {
    return this.municipioRepository.find();
  }

  async findOne(id: number): Promise<Municipio> {
    return this.municipioRepository.findOne(id);
  }

  async update(id: number, municipio: Municipio): Promise<Municipio> {
    await this.municipioRepository.update(id, municipio);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.municipioRepository.delete(id);
  }
}