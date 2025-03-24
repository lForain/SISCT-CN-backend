import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { RepresentanteTecnicoService } from '../services/representanteTecnico.service';
import { CreateRepresentanteTecnicoDto, UpdateRepresentanteTecnicoDto, RepresentanteTecnicoResponseDto } from '../dtos/representanteTecnico.dto';

@Controller('representante-tecnico')
export class RepresentanteTecnicoController {
  constructor(private readonly representanteService: RepresentanteTecnicoService) {}

  @Get()
  async findAll(): Promise<RepresentanteTecnicoResponseDto[]> {
    const representantes = await this.representanteService.findAll();
    return representantes.map(representante => this.mapToResponse(representante));
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RepresentanteTecnicoResponseDto> {
    const representante = await this.representanteService.findOne(id);
    return this.mapToResponse(representante);
  }

  @Post()
  async create(@Body() createDto: CreateRepresentanteTecnicoDto): Promise<RepresentanteTecnicoResponseDto> {
    const representante = await this.representanteService.create(createDto);
    return this.mapToResponse(representante);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateRepresentanteTecnicoDto,
  ): Promise<RepresentanteTecnicoResponseDto> {
    const representante = await this.representanteService.update(id, updateDto);
    return this.mapToResponse(representante);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.representanteService.remove(id);
  }

  private mapToResponse(representante: any): RepresentanteTecnicoResponseDto {
    const response = new RepresentanteTecnicoResponseDto();
    Object.assign(response, {
      id: representante.id,
      nome: representante.nome,
      dataNascimento: representante.dataNascimento,
      cpf: representante.cpf,
      telefone: representante.telefone,
      email: representante.email,
      escolaridade: representante.escolaridade,
      curso: representante.curso,
      possuiExperiencia: representante.possuiExperiencia,
      responsavelPrincipalId: representante.responsavelPrincipalId,
      cadastroNacionalId: representante.cadastroNacionalId,
    });
    return response;
  }
}
