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
exports.BuildingManagerCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateBuildingManagerArgs_1 = require("./args/AggregateBuildingManagerArgs");
const CreateBuildingManagerArgs_1 = require("./args/CreateBuildingManagerArgs");
const CreateManyBuildingManagerArgs_1 = require("./args/CreateManyBuildingManagerArgs");
const DeleteBuildingManagerArgs_1 = require("./args/DeleteBuildingManagerArgs");
const DeleteManyBuildingManagerArgs_1 = require("./args/DeleteManyBuildingManagerArgs");
const FindFirstBuildingManagerArgs_1 = require("./args/FindFirstBuildingManagerArgs");
const FindManyBuildingManagerArgs_1 = require("./args/FindManyBuildingManagerArgs");
const FindUniqueBuildingManagerArgs_1 = require("./args/FindUniqueBuildingManagerArgs");
const GroupByBuildingManagerArgs_1 = require("./args/GroupByBuildingManagerArgs");
const UpdateBuildingManagerArgs_1 = require("./args/UpdateBuildingManagerArgs");
const UpdateManyBuildingManagerArgs_1 = require("./args/UpdateManyBuildingManagerArgs");
const UpsertBuildingManagerArgs_1 = require("./args/UpsertBuildingManagerArgs");
const helpers_1 = require("../../../helpers");
const BuildingManager_1 = require("../../../models/BuildingManager");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBuildingManager_1 = require("../../outputs/AggregateBuildingManager");
const BuildingManagerGroupBy_1 = require("../../outputs/BuildingManagerGroupBy");
let BuildingManagerCrudResolver = class BuildingManagerCrudResolver {
    async buildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.findUnique(args);
    }
    async findFirstBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.findFirst(args);
    }
    async buildingManagers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.findMany(args);
    }
    async createBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.create(args);
    }
    async createManyBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.createMany(args);
    }
    async deleteBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.delete(args);
    }
    async updateBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.update(args);
    }
    async deleteManyBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.deleteMany(args);
    }
    async updateManyBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.updateMany(args);
    }
    async upsertBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.upsert(args);
    }
    async aggregateBuildingManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBuildingManager(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).buildingManager.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => BuildingManager_1.BuildingManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBuildingManagerArgs_1.FindUniqueBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "buildingManager", null);
__decorate([
    TypeGraphQL.Query(_returns => BuildingManager_1.BuildingManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBuildingManagerArgs_1.FindFirstBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "findFirstBuildingManager", null);
__decorate([
    TypeGraphQL.Query(_returns => [BuildingManager_1.BuildingManager], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBuildingManagerArgs_1.FindManyBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "buildingManagers", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BuildingManager_1.BuildingManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateBuildingManagerArgs_1.CreateBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "createBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBuildingManagerArgs_1.CreateManyBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "createManyBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BuildingManager_1.BuildingManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteBuildingManagerArgs_1.DeleteBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "deleteBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BuildingManager_1.BuildingManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateBuildingManagerArgs_1.UpdateBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "updateBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBuildingManagerArgs_1.DeleteManyBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "deleteManyBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBuildingManagerArgs_1.UpdateManyBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "updateManyBuildingManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BuildingManager_1.BuildingManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertBuildingManagerArgs_1.UpsertBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "upsertBuildingManager", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateBuildingManager_1.AggregateBuildingManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBuildingManagerArgs_1.AggregateBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "aggregateBuildingManager", null);
__decorate([
    TypeGraphQL.Query(_returns => [BuildingManagerGroupBy_1.BuildingManagerGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBuildingManagerArgs_1.GroupByBuildingManagerArgs]),
    __metadata("design:returntype", Promise)
], BuildingManagerCrudResolver.prototype, "groupByBuildingManager", null);
BuildingManagerCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => BuildingManager_1.BuildingManager)
], BuildingManagerCrudResolver);
exports.BuildingManagerCrudResolver = BuildingManagerCrudResolver;
//# sourceMappingURL=BuildingManagerCrudResolver.js.map