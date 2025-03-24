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
exports.RepresentanteTecnicoController = void 0;
const common_1 = require("@nestjs/common");
const representanteTecnico_service_1 = require("../services/representanteTecnico.service");
const representanteTecnico_dto_1 = require("../dtos/representanteTecnico.dto");
let RepresentanteTecnicoController = class RepresentanteTecnicoController {
    representanteService;
    constructor(representanteService) {
        this.representanteService = representanteService;
    }
    async findAll() {
        const representantes = await this.representanteService.findAll();
        return representantes.map(representante => this.mapToResponse(representante));
    }
    async findOne(id) {
        const representante = await this.representanteService.findOne(id);
        return this.mapToResponse(representante);
    }
    async create(createDto) {
        const representante = await this.representanteService.create(createDto);
        return this.mapToResponse(representante);
    }
    async update(id, updateDto) {
        const representante = await this.representanteService.update(id, updateDto);
        return this.mapToResponse(representante);
    }
    async remove(id) {
        await this.representanteService.remove(id);
    }
    mapToResponse(representante) {
        const response = new representanteTecnico_dto_1.RepresentanteTecnicoResponseDto();
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
};
exports.RepresentanteTecnicoController = RepresentanteTecnicoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepresentanteTecnicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepresentanteTecnicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [representanteTecnico_dto_1.CreateRepresentanteTecnicoDto]),
    __metadata("design:returntype", Promise)
], RepresentanteTecnicoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, representanteTecnico_dto_1.UpdateRepresentanteTecnicoDto]),
    __metadata("design:returntype", Promise)
], RepresentanteTecnicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepresentanteTecnicoController.prototype, "remove", null);
exports.RepresentanteTecnicoController = RepresentanteTecnicoController = __decorate([
    (0, common_1.Controller)('representante-tecnico'),
    __metadata("design:paramtypes", [representanteTecnico_service_1.RepresentanteTecnicoService])
], RepresentanteTecnicoController);
//# sourceMappingURL=representanteTecnico.controller.js.map