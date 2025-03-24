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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroNacional = void 0;
const typeorm_1 = require("typeorm");
const RepresentanteLegal_entity_1 = require("./RepresentanteLegal.entity");
const RepresentanteTecnico_entity_1 = require("./RepresentanteTecnico.entity");
let CadastroNacional = class CadastroNacional {
    id;
    cnpj;
    areaAtuacao;
    numeroFiliais;
    nomeFantasia;
    razaoSocial;
    cnaePrincipal;
    cnaeSecundario;
    receitaBruta;
    modalidadeFinanciamentoContrato;
    representanteLegal;
    representanteTecnico;
};
exports.CadastroNacional = CadastroNacional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_CADASTRO_NACIONAL' }),
    __metadata("design:type", Number)
], CadastroNacional.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CNPJ', length: 14, nullable: true }),
    __metadata("design:type", String)
], CadastroNacional.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_AREA_ATUACAO' }),
    __metadata("design:type", Number)
], CadastroNacional.prototype, "areaAtuacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NR_FILIAIS', default: 0 }),
    __metadata("design:type", Number)
], CadastroNacional.prototype, "numeroFiliais", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_NOME_FANTASIA', length: 200 }),
    __metadata("design:type", String)
], CadastroNacional.prototype, "nomeFantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_RAZAO_SOCIAL', length: 200, nullable: true }),
    __metadata("design:type", String)
], CadastroNacional.prototype, "razaoSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CNAE_PRINCIPAL', length: 50, nullable: true }),
    __metadata("design:type", String)
], CadastroNacional.prototype, "cnaePrincipal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CNAE_SECUNDARIO', length: 50, nullable: true }),
    __metadata("design:type", String)
], CadastroNacional.prototype, "cnaeSecundario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'VL_RECEITA_BRUTA', type: 'decimal', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], CadastroNacional.prototype, "receitaBruta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_MODALIDADE_FINANCIAMENTO_CONTRATO' }),
    __metadata("design:type", Number)
], CadastroNacional.prototype, "modalidadeFinanciamentoContrato", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RepresentanteLegal_entity_1.RepresentanteLegal, representante => representante.cadastroNacional),
    __metadata("design:type", RepresentanteLegal_entity_1.RepresentanteLegal)
], CadastroNacional.prototype, "representanteLegal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => RepresentanteTecnico_entity_1.RepresentanteTecnico, representante => representante.cadastroNacional),
    __metadata("design:type", RepresentanteTecnico_entity_1.RepresentanteTecnico)
], CadastroNacional.prototype, "representanteTecnico", void 0);
exports.CadastroNacional = CadastroNacional = __decorate([
    (0, typeorm_1.Entity)('CADASTRO_NACIONAL')
], CadastroNacional);
//# sourceMappingURL=CadastroNacional.entity.js.map