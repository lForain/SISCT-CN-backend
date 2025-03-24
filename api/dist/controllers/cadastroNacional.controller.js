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
exports.CadastroNacionalController = void 0;
const common_1 = require("@nestjs/common");
const cadastroNacional_service_1 = require("../services/cadastroNacional.service");
const cadastroNacional_dto_1 = require("../dtos/cadastroNacional.dto");
let CadastroNacionalController = class CadastroNacionalController {
    cadastroService;
    constructor(cadastroService) {
        this.cadastroService = cadastroService;
    }
    async findAll() {
        const cadastros = await this.cadastroService.findAll();
        return cadastros.map(cadastro => this.mapToResponse(cadastro));
    }
    async findOne(id) {
        const cadastro = await this.cadastroService.findOne(id);
        return this.mapToResponse(cadastro);
    }
    async create(createDto) {
        const cadastro = await this.cadastroService.create(createDto);
        return this.mapToResponse(cadastro);
    }
    async update(id, updateDto) {
        const cadastro = await this.cadastroService.update(id, updateDto);
        return this.mapToResponse(cadastro);
    }
    async remove(id) {
        await this.cadastroService.remove(id);
    }
    mapToResponse(cadastro) {
        const response = new cadastroNacional_dto_1.CadastroNacionalResponseDto();
        Object.assign(response, {
            id: cadastro.id,
            cnpj: cadastro.cnpj,
            areaAtuacao: cadastro.areaAtuacao,
            numeroFiliais: cadastro.numeroFiliais,
            nomeFantasia: cadastro.nomeFantasia,
            razaoSocial: cadastro.razaoSocial,
        });
        return response;
    }
};
exports.CadastroNacionalController = CadastroNacionalController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CadastroNacionalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CadastroNacionalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cadastroNacional_dto_1.CreateCadastroNacionalDto]),
    __metadata("design:returntype", Promise)
], CadastroNacionalController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cadastroNacional_dto_1.UpdateCadastroNacionalDto]),
    __metadata("design:returntype", Promise)
], CadastroNacionalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CadastroNacionalController.prototype, "remove", null);
exports.CadastroNacionalController = CadastroNacionalController = __decorate([
    (0, common_1.Controller)('cadastro-nacional'),
    __metadata("design:paramtypes", [cadastroNacional_service_1.CadastroNacionalService])
], CadastroNacionalController);
//# sourceMappingURL=cadastroNacional.controller.js.map