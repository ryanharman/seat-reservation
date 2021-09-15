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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateBuildingArgs_1 = require("./args/AggregateBuildingArgs");
const CreateBuildingArgs_1 = require("./args/CreateBuildingArgs");
const CreateManyBuildingArgs_1 = require("./args/CreateManyBuildingArgs");
const DeleteBuildingArgs_1 = require("./args/DeleteBuildingArgs");
const DeleteManyBuildingArgs_1 = require("./args/DeleteManyBuildingArgs");
const FindFirstBuildingArgs_1 = require("./args/FindFirstBuildingArgs");
const FindManyBuildingArgs_1 = require("./args/FindManyBuildingArgs");
const FindUniqueBuildingArgs_1 = require("./args/FindUniqueBuildingArgs");
const GroupByBuildingArgs_1 = require("./args/GroupByBuildingArgs");
const UpdateBuildingArgs_1 = require("./args/UpdateBuildingArgs");
const UpdateManyBuildingArgs_1 = require("./args/UpdateManyBuildingArgs");
const UpsertBuildingArgs_1 = require("./args/UpsertBuildingArgs");
const helpers_1 = require("../../../helpers");
const Building_1 = require("../../../models/Building");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBuilding_1 = require("../../outputs/AggregateBuilding");
const BuildingGroupBy_1 = require("../../outputs/BuildingGroupBy");
let BuildingCrudResolver = class BuildingCrudResolver {
    async building(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.findUnique(args);
    }
    async findFirstBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.findFirst(args);
    }
    async buildings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.findMany(args);
    }
    async createBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.create(args);
    }
    async createManyBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.createMany(args);
    }
    async deleteBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.delete(args);
    }
    async updateBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.update(args);
    }
    async deleteManyBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.deleteMany(args);
    }
    async updateManyBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.updateMany(args);
    }
    async upsertBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.upsert(args);
    }
    async aggregateBuilding(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).building.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBuilding(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).building.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Building_1.Building, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBuildingArgs_1.FindUniqueBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "building", null);
__decorate([
    TypeGraphQL.Query(_returns => Building_1.Building, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBuildingArgs_1.FindFirstBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "findFirstBuilding", null);
__decorate([
    TypeGraphQL.Query(_returns => [Building_1.Building], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBuildingArgs_1.FindManyBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "buildings", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Building_1.Building, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateBuildingArgs_1.CreateBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "createBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBuildingArgs_1.CreateManyBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "createManyBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Building_1.Building, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteBuildingArgs_1.DeleteBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "deleteBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Building_1.Building, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateBuildingArgs_1.UpdateBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "updateBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBuildingArgs_1.DeleteManyBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "deleteManyBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBuildingArgs_1.UpdateManyBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "updateManyBuilding", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Building_1.Building, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertBuildingArgs_1.UpsertBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "upsertBuilding", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateBuilding_1.AggregateBuilding, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBuildingArgs_1.AggregateBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "aggregateBuilding", null);
__decorate([
    TypeGraphQL.Query(_returns => [BuildingGroupBy_1.BuildingGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBuildingArgs_1.GroupByBuildingArgs]),
    __metadata("design:returntype", Promise)
], BuildingCrudResolver.prototype, "groupByBuilding", null);
BuildingCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Building_1.Building)
], BuildingCrudResolver);
exports.BuildingCrudResolver = BuildingCrudResolver;
//# sourceMappingURL=BuildingCrudResolver.js.map