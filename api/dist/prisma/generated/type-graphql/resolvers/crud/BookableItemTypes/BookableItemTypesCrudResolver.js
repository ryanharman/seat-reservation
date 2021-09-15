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
exports.BookableItemTypesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateBookableItemTypesArgs_1 = require("./args/AggregateBookableItemTypesArgs");
const CreateBookableItemTypesArgs_1 = require("./args/CreateBookableItemTypesArgs");
const CreateManyBookableItemTypesArgs_1 = require("./args/CreateManyBookableItemTypesArgs");
const DeleteBookableItemTypesArgs_1 = require("./args/DeleteBookableItemTypesArgs");
const DeleteManyBookableItemTypesArgs_1 = require("./args/DeleteManyBookableItemTypesArgs");
const FindFirstBookableItemTypesArgs_1 = require("./args/FindFirstBookableItemTypesArgs");
const FindManyBookableItemTypesArgs_1 = require("./args/FindManyBookableItemTypesArgs");
const FindUniqueBookableItemTypesArgs_1 = require("./args/FindUniqueBookableItemTypesArgs");
const GroupByBookableItemTypesArgs_1 = require("./args/GroupByBookableItemTypesArgs");
const UpdateBookableItemTypesArgs_1 = require("./args/UpdateBookableItemTypesArgs");
const UpdateManyBookableItemTypesArgs_1 = require("./args/UpdateManyBookableItemTypesArgs");
const UpsertBookableItemTypesArgs_1 = require("./args/UpsertBookableItemTypesArgs");
const helpers_1 = require("../../../helpers");
const BookableItemTypes_1 = require("../../../models/BookableItemTypes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookableItemTypes_1 = require("../../outputs/AggregateBookableItemTypes");
const BookableItemTypesGroupBy_1 = require("../../outputs/BookableItemTypesGroupBy");
let BookableItemTypesCrudResolver = class BookableItemTypesCrudResolver {
    async findUniqueBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.findUnique(args);
    }
    async findFirstBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.findFirst(args);
    }
    async findManyBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.findMany(args);
    }
    async createBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.create(args);
    }
    async createManyBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.createMany(args);
    }
    async deleteBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.delete(args);
    }
    async updateBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.update(args);
    }
    async deleteManyBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.deleteMany(args);
    }
    async updateManyBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.updateMany(args);
    }
    async upsertBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.upsert(args);
    }
    async aggregateBookableItemTypes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBookableItemTypes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItemTypes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBookableItemTypesArgs_1.FindUniqueBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "findUniqueBookableItemTypes", null);
__decorate([
    TypeGraphQL.Query(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBookableItemTypesArgs_1.FindFirstBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "findFirstBookableItemTypes", null);
__decorate([
    TypeGraphQL.Query(_returns => [BookableItemTypes_1.BookableItemTypes], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBookableItemTypesArgs_1.FindManyBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "findManyBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateBookableItemTypesArgs_1.CreateBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "createBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBookableItemTypesArgs_1.CreateManyBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "createManyBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteBookableItemTypesArgs_1.DeleteBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "deleteBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateBookableItemTypesArgs_1.UpdateBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "updateBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBookableItemTypesArgs_1.DeleteManyBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "deleteManyBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBookableItemTypesArgs_1.UpdateManyBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "updateManyBookableItemTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItemTypes_1.BookableItemTypes, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertBookableItemTypesArgs_1.UpsertBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "upsertBookableItemTypes", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateBookableItemTypes_1.AggregateBookableItemTypes, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBookableItemTypesArgs_1.AggregateBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "aggregateBookableItemTypes", null);
__decorate([
    TypeGraphQL.Query(_returns => [BookableItemTypesGroupBy_1.BookableItemTypesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBookableItemTypesArgs_1.GroupByBookableItemTypesArgs]),
    __metadata("design:returntype", Promise)
], BookableItemTypesCrudResolver.prototype, "groupByBookableItemTypes", null);
BookableItemTypesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => BookableItemTypes_1.BookableItemTypes)
], BookableItemTypesCrudResolver);
exports.BookableItemTypesCrudResolver = BookableItemTypesCrudResolver;
//# sourceMappingURL=BookableItemTypesCrudResolver.js.map