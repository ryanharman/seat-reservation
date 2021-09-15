"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BuildingManagerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingManagerWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BuildingRelationFilter_1 = require("../inputs/BuildingRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BuildingManagerWhereInput = BuildingManagerWhereInput_1 = class BuildingManagerWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [BuildingManagerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BuildingManagerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BuildingManagerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingRelationFilter_1.BuildingRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "building", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "buildingId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingManagerWhereInput.prototype, "updatedAt", void 0);
BuildingManagerWhereInput = BuildingManagerWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], BuildingManagerWhereInput);
exports.BuildingManagerWhereInput = BuildingManagerWhereInput;
//# sourceMappingURL=BuildingManagerWhereInput.js.map