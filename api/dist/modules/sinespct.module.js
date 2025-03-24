"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinespctModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const CadastroNacional_entity_1 = require("../entities/CadastroNacional.entity");
const RepresentanteLegal_entity_1 = require("../entities/RepresentanteLegal.entity");
const RepresentanteTecnico_entity_1 = require("../entities/RepresentanteTecnico.entity");
const cadastroNacional_service_1 = require("../services/cadastroNacional.service");
const representanteLegal_service_1 = require("../services/representanteLegal.service");
const representanteTecnico_service_1 = require("../services/representanteTecnico.service");
const cadastroNacional_controller_1 = require("../controllers/cadastroNacional.controller");
const representanteLegal_controller_1 = require("../controllers/representanteLegal.controller");
const representanteTecnico_controller_1 = require("../controllers/representanteTecnico.controller");
let SinespctModule = class SinespctModule {
};
exports.SinespctModule = SinespctModule;
exports.SinespctModule = SinespctModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                CadastroNacional_entity_1.CadastroNacional,
                RepresentanteLegal_entity_1.RepresentanteLegal,
                RepresentanteTecnico_entity_1.RepresentanteTecnico,
            ]),
        ],
        controllers: [
            cadastroNacional_controller_1.CadastroNacionalController,
            representanteLegal_controller_1.RepresentanteLegalController,
            representanteTecnico_controller_1.RepresentanteTecnicoController,
        ],
        providers: [
            cadastroNacional_service_1.CadastroNacionalService,
            representanteLegal_service_1.RepresentanteLegalService,
            representanteTecnico_service_1.RepresentanteTecnicoService,
        ],
        exports: [
            cadastroNacional_service_1.CadastroNacionalService,
            representanteLegal_service_1.RepresentanteLegalService,
            representanteTecnico_service_1.RepresentanteTecnicoService,
        ],
    })
], SinespctModule);
//# sourceMappingURL=sinespct.module.js.map