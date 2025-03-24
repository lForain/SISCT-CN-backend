import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroNacional } from '../entities/CadastroNacional.entity';
import { CreateCadastroNacionalDto, UpdateCadastroNacionalDto } from '../dtos/cadastroNacional.dto';

@Injectable()
export class CadastroNacionalService {
  constructor(
    @InjectRepository(CadastroNacional)
    private cadastroRepository: Repository<CadastroNacional>,
  ) {}

  async findAll(): Promise<CadastroNacional[]> {
    return this.cadastroRepository.find({
      relations: ['representanteLegal', 'representanteTecnico'],
    });
  }

  async findOne(id: number): Promise<CadastroNacional> {
    const cadastro = await this.cadastroRepository.findOne({
      where: { id },
      relations: ['representanteLegal', 'representanteTecnico'],
    });
    
    if (!cadastro) {
      throw new NotFoundException(`Cadastro Nacional with ID ${id} not found`);
    }
    
    return cadastro;
  }

  async create(createDto: CreateCadastroNacionalDto): Promise<CadastroNacional> {
    const newCadastro = this.cadastroRepository.create(createDto);
    return this.cadastroRepository.save(newCadastro);
  }

  async update(id: number, updateDto: UpdateCadastroNacionalDto): Promise<CadastroNacional> {
    const cadastro = await this.findOne(id);
    this.cadastroRepository.merge(cadastro, updateDto);
    return this.cadastroRepository.save(cadastro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cadastroRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cadastro Nacional with ID ${id} not found`);
    }
  }
}
