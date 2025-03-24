"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepresentanteTecnicoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RepresentanteTecnico_entity_1 = require("../entities/RepresentanteTecnico.entity");
const representanteTecnico_service_1 = require("../services/representanteTecnico.service");
const representanteTecnico_controller_1 = require("../controllers/representanteTecnico.controller");
let RepresentanteTecnicoModule = class RepresentanteTecnicoModule {
};
exports.RepresentanteTecnicoModule = RepresentanteTecnicoModule;
exports.RepresentanteTecnicoModule = RepresentanteTecnicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([RepresentanteTecnico_entity_1.RepresentanteTecnico]),
        ],
        controllers: [representanteTecnico_controller_1.RepresentanteTecnicoController],
        providers: [representanteTecnico_service_1.RepresentanteTecnicoService],
        exports: [representanteTecnico_service_1.RepresentanteTecnicoService],
    })
], RepresentanteTecnicoModule);
//# sourceMappingURL=representanteTecnico.module.js.map