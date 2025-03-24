import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepresentanteLegal } from '../entities/RepresentanteLegal.entity';
import { CreateRepresentanteLegalDto, UpdateRepresentanteLegalDto } from '../dtos/representanteLegal.dto';

@Injectable()
export class RepresentanteLegalService {
  constructor(
    @InjectRepository(RepresentanteLegal)
    private representanteRepository: Repository<RepresentanteLegal>,
  ) {}

  async findAll(): Promise<RepresentanteLegal[]> {
    return this.representanteRepository.find({
      relations: ['cadastroNacional'],
    });
  }

  async findOne(id: number): Promise<RepresentanteLegal> {
    const representante = await this.representanteRepository.findOne({
      where: { id },
      relations: ['cadastroNacional'],
    });
    
    if (!representante) {
      throw new NotFoundException(`Representante Legal with ID ${id} not found`);
    }
    
    return representante;
  }

  async create(createDto: CreateRepresentanteLegalDto): Promise<RepresentanteLegal> {
    const newRepresentante = this.representanteRepository.create(createDto);
    return this.representanteRepository.save(newRepresentante);
  }

  async update(id: number, updateDto: UpdateRepresentanteLegalDto): Promise<RepresentanteLegal> {
    const representante = await this.findOne(id);
    this.representanteRepository.merge(representante, updateDto);
    return this.representanteRepository.save(representante);
  }

  async remove(id: number): Promise<void> {
    const result = await this.representanteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Representante Legal with ID ${id} not found`);
    }
  }
}
