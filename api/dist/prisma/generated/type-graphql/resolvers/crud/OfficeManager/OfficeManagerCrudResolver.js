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
exports.OfficeManagerCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateOfficeManagerArgs_1 = require("./args/AggregateOfficeManagerArgs");
const CreateManyOfficeManagerArgs_1 = require("./args/CreateManyOfficeManagerArgs");
const CreateOfficeManagerArgs_1 = require("./args/CreateOfficeManagerArgs");
const DeleteManyOfficeManagerArgs_1 = require("./args/DeleteManyOfficeManagerArgs");
const DeleteOfficeManagerArgs_1 = require("./args/DeleteOfficeManagerArgs");
const FindFirstOfficeManagerArgs_1 = require("./args/FindFirstOfficeManagerArgs");
const FindManyOfficeManagerArgs_1 = require("./args/FindManyOfficeManagerArgs");
const FindUniqueOfficeManagerArgs_1 = require("./args/FindUniqueOfficeManagerArgs");
const GroupByOfficeManagerArgs_1 = require("./args/GroupByOfficeManagerArgs");
const UpdateManyOfficeManagerArgs_1 = require("./args/UpdateManyOfficeManagerArgs");
const UpdateOfficeManagerArgs_1 = require("./args/UpdateOfficeManagerArgs");
const UpsertOfficeManagerArgs_1 = require("./args/UpsertOfficeManagerArgs");
const helpers_1 = require("../../../helpers");
const OfficeManager_1 = require("../../../models/OfficeManager");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOfficeManager_1 = require("../../outputs/AggregateOfficeManager");
const OfficeManagerGroupBy_1 = require("../../outputs/OfficeManagerGroupBy");
let OfficeManagerCrudResolver = class OfficeManagerCrudResolver {
    async officeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.findUnique(args);
    }
    async findFirstOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.findFirst(args);
    }
    async officeManagers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.findMany(args);
    }
    async createOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.create(args);
    }
    async createManyOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.createMany(args);
    }
    async deleteOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.delete(args);
    }
    async updateOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.update(args);
    }
    async deleteManyOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.deleteMany(args);
    }
    async updateManyOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.updateMany(args);
    }
    async upsertOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.upsert(args);
    }
    async aggregateOfficeManager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOfficeManager(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).officeManager.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => OfficeManager_1.OfficeManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOfficeManagerArgs_1.FindUniqueOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "officeManager", null);
__decorate([
    TypeGraphQL.Query(_returns => OfficeManager_1.OfficeManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOfficeManagerArgs_1.FindFirstOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "findFirstOfficeManager", null);
__decorate([
    TypeGraphQL.Query(_returns => [OfficeManager_1.OfficeManager], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOfficeManagerArgs_1.FindManyOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "officeManagers", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OfficeManager_1.OfficeManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOfficeManagerArgs_1.CreateOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "createOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOfficeManagerArgs_1.CreateManyOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "createManyOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OfficeManager_1.OfficeManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOfficeManagerArgs_1.DeleteOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "deleteOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OfficeManager_1.OfficeManager, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOfficeManagerArgs_1.UpdateOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "updateOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOfficeManagerArgs_1.DeleteManyOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "deleteManyOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOfficeManagerArgs_1.UpdateManyOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "updateManyOfficeManager", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OfficeManager_1.OfficeManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOfficeManagerArgs_1.UpsertOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "upsertOfficeManager", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateOfficeManager_1.AggregateOfficeManager, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOfficeManagerArgs_1.AggregateOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "aggregateOfficeManager", null);
__decorate([
    TypeGraphQL.Query(_returns => [OfficeManagerGroupBy_1.OfficeManagerGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOfficeManagerArgs_1.GroupByOfficeManagerArgs]),
    __metadata("design:returntype", Promise)
], OfficeManagerCrudResolver.prototype, "groupByOfficeManager", null);
OfficeManagerCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => OfficeManager_1.OfficeManager)
], OfficeManagerCrudResolver);
exports.OfficeManagerCrudResolver = OfficeManagerCrudResolver;
//# sourceMappingURL=OfficeManagerCrudResolver.js.map