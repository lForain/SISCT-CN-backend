import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepresentanteTecnico } from '../entities/RepresentanteTecnico.entity';
import { CreateRepresentanteTecnicoDto, UpdateRepresentanteTecnicoDto } from '../dtos/representanteTecnico.dto';

@Injectable()
export class RepresentanteTecnicoService {
  constructor(
    @InjectRepository(RepresentanteTecnico)
    private representanteRepository: Repository<RepresentanteTecnico>,
  ) {}

  async findAll(): Promise<RepresentanteTecnico[]> {
    return this.representanteRepository.find({
      relations: ['cadastroNacional'],
    });
  }

  async findOne(id: number): Promise<RepresentanteTecnico> {
    const representante = await this.representanteRepository.findOne({
      where: { id },
      relations: ['cadastroNacional'],
    });
    
    if (!representante) {
      throw new NotFoundException(`Representante Técnico with ID ${id} not found`);
    }
    
    return representante;
  }

  async create(createDto: CreateRepresentanteTecnicoDto): Promise<RepresentanteTecnico> {
    const newRepresentante = this.representanteRepository.create(createDto);
    return this.representanteRepository.save(newRepresentante);
  }

  async update(id: number, updateDto: UpdateRepresentanteTecnicoDto): Promise<RepresentanteTecnico> {
    const representante = await this.findOne(id);
    this.representanteRepository.merge(representante, updateDto);
    return this.representanteRepository.save(representante);
  }

  async remove(id: number): Promise<void> {
    const result = await this.representanteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Representante Técnico with ID ${id} not found`);
    }
  }
}
