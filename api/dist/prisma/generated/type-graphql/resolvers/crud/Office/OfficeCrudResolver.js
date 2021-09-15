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
exports.OfficeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateOfficeArgs_1 = require("./args/AggregateOfficeArgs");
const CreateManyOfficeArgs_1 = require("./args/CreateManyOfficeArgs");
const CreateOfficeArgs_1 = require("./args/CreateOfficeArgs");
const DeleteManyOfficeArgs_1 = require("./args/DeleteManyOfficeArgs");
const DeleteOfficeArgs_1 = require("./args/DeleteOfficeArgs");
const FindFirstOfficeArgs_1 = require("./args/FindFirstOfficeArgs");
const FindManyOfficeArgs_1 = require("./args/FindManyOfficeArgs");
const FindUniqueOfficeArgs_1 = require("./args/FindUniqueOfficeArgs");
const GroupByOfficeArgs_1 = require("./args/GroupByOfficeArgs");
const UpdateManyOfficeArgs_1 = require("./args/UpdateManyOfficeArgs");
const UpdateOfficeArgs_1 = require("./args/UpdateOfficeArgs");
const UpsertOfficeArgs_1 = require("./args/UpsertOfficeArgs");
const helpers_1 = require("../../../helpers");
const Office_1 = require("../../../models/Office");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOffice_1 = require("../../outputs/AggregateOffice");
const OfficeGroupBy_1 = require("../../outputs/OfficeGroupBy");
let OfficeCrudResolver = class OfficeCrudResolver {
    async office(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findUnique(args);
    }
    async findFirstOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findFirst(args);
    }
    async offices(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findMany(args);
    }
    async createOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.create(args);
    }
    async createManyOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.createMany(args);
    }
    async deleteOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.delete(args);
    }
    async updateOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.update(args);
    }
    async deleteManyOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.deleteMany(args);
    }
    async updateManyOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.updateMany(args);
    }
    async upsertOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.upsert(args);
    }
    async aggregateOffice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOffice(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).office.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Office_1.Office, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOfficeArgs_1.FindUniqueOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "office", null);
__decorate([
    TypeGraphQL.Query(_returns => Office_1.Office, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOfficeArgs_1.FindFirstOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "findFirstOffice", null);
__decorate([
    TypeGraphQL.Query(_returns => [Office_1.Office], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOfficeArgs_1.FindManyOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "offices", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Office_1.Office, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOfficeArgs_1.CreateOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "createOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOfficeArgs_1.CreateManyOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "createManyOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Office_1.Office, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOfficeArgs_1.DeleteOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "deleteOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Office_1.Office, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOfficeArgs_1.UpdateOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "updateOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOfficeArgs_1.DeleteManyOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "deleteManyOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOfficeArgs_1.UpdateManyOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "updateManyOffice", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Office_1.Office, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOfficeArgs_1.UpsertOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "upsertOffice", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateOffice_1.AggregateOffice, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOfficeArgs_1.AggregateOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "aggregateOffice", null);
__decorate([
    TypeGraphQL.Query(_returns => [OfficeGroupBy_1.OfficeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOfficeArgs_1.GroupByOfficeArgs]),
    __metadata("design:returntype", Promise)
], OfficeCrudResolver.prototype, "groupByOffice", null);
OfficeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Office_1.Office)
], OfficeCrudResolver);
exports.OfficeCrudResolver = OfficeCrudResolver;
//# sourceMappingURL=OfficeCrudResolver.js.map