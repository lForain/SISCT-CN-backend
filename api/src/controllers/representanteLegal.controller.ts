import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { RepresentanteLegalService } from '../services/representanteLegal.service';
import { CreateRepresentanteLegalDto, UpdateRepresentanteLegalDto, RepresentanteLegalResponseDto } from '../dtos/representanteLegal.dto';

@Controller('representante-legal')
export class RepresentanteLegalController {
  constructor(private readonly representanteService: RepresentanteLegalService) {}

  @Get()
  async findAll(): Promise<RepresentanteLegalResponseDto[]> {
    const representantes = await this.representanteService.findAll();
    return representantes.map(representante => this.mapToResponse(representante));
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RepresentanteLegalResponseDto> {
    const representante = await this.representanteService.findOne(id);
    return this.mapToResponse(representante);
  }

  @Post()
  async create(@Body() createDto: CreateRepresentanteLegalDto): Promise<RepresentanteLegalResponseDto> {
    const representante = await this.representanteService.create(createDto);
    return this.mapToResponse(representante);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateRepresentanteLegalDto,
  ): Promise<RepresentanteLegalResponseDto> {
    const representante = await this.representanteService.update(id, updateDto);
    return this.mapToResponse(representante);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.representanteService.remove(id);
  }

  private mapToResponse(representante: any): RepresentanteLegalResponseDto {
    const response = new RepresentanteLegalResponseDto();
    Object.assign(response, {
      id: representante.id,
      nome: representante.nome,
      terminoMandato: representante.terminoMandato,
      papelDiretoria: representante.papelDiretoria,
      dataNascimento: representante.dataNascimento,
      cpf: representante.cpf,
      telefone: representante.telefone,
      email: representante.email,
      escolaridade: representante.escolaridade,
      curso: representante.curso,
      descricaoPapelDiretoria: representante.descricaoPapelDiretoria,
      cadastroNacionalId: representante.cadastroNacionalId,
    });
    return response;
  }
}
