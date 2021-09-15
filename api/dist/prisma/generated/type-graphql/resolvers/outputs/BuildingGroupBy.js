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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BuildingAvgAggregate_1 = require("../outputs/BuildingAvgAggregate");
const BuildingCountAggregate_1 = require("../outputs/BuildingCountAggregate");
const BuildingMaxAggregate_1 = require("../outputs/BuildingMaxAggregate");
const BuildingMinAggregate_1 = require("../outputs/BuildingMinAggregate");
const BuildingSumAggregate_1 = require("../outputs/BuildingSumAggregate");
let BuildingGroupBy = class BuildingGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BuildingGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], BuildingGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingCountAggregate_1.BuildingCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingAvgAggregate_1.BuildingAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingSumAggregate_1.BuildingSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingMinAggregate_1.BuildingMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BuildingMaxAggregate_1.BuildingMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BuildingGroupBy.prototype, "_max", void 0);
BuildingGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], BuildingGroupBy);
exports.BuildingGroupBy = BuildingGroupBy;
//# sourceMappingURL=BuildingGroupBy.js.map