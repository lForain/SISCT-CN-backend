"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepresentanteTecnicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const RepresentanteTecnico_entity_1 = require("../entities/RepresentanteTecnico.entity");
let RepresentanteTecnicoService = class RepresentanteTecnicoService {
    representanteRepository;
    constructor(representanteRepository) {
        this.representanteRepository = representanteRepository;
    }
    async findAll() {
        return this.representanteRepository.find({
            relations: ['cadastroNacional'],
        });
    }
    async findOne(id) {
        const representante = await this.representanteRepository.findOne({
            where: { id },
            relations: ['cadastroNacional'],
        });
        if (!representante) {
            throw new common_1.NotFoundException(`Representante Técnico with ID ${id} not found`);
        }
        return representante;
    }
    async create(createDto) {
        const newRepresentante = this.representanteRepository.create(createDto);
        return this.representanteRepository.save(newRepresentante);
    }
    async update(id, updateDto) {
        const representante = await this.findOne(id);
        this.representanteRepository.merge(representante, updateDto);
        return this.representanteRepository.save(representante);
    }
    async remove(id) {
        const result = await this.representanteRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Representante Técnico with ID ${id} not found`);
        }
    }
};
exports.RepresentanteTecnicoService = RepresentanteTecnicoService;
exports.RepresentanteTecnicoService = RepresentanteTecnicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(RepresentanteTecnico_entity_1.RepresentanteTecnico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepresentanteTecnicoService);
//# sourceMappingURL=representanteTecnico.service.js.map