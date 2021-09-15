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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItem_1 = require("../../../models/BookableItem");
const Building_1 = require("../../../models/Building");
const Office_1 = require("../../../models/Office");
const OfficeManager_1 = require("../../../models/OfficeManager");
const OfficeBookableItemsArgs_1 = require("./args/OfficeBookableItemsArgs");
const OfficeOfficeManagersArgs_1 = require("./args/OfficeOfficeManagersArgs");
const helpers_1 = require("../../../helpers");
let OfficeRelationsResolver = class OfficeRelationsResolver {
    async building(office, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findUnique({
            where: {
                id: office.id,
            },
        }).building({});
    }
    async bookableItems(office, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findUnique({
            where: {
                id: office.id,
            },
        }).bookableItems(args);
    }
    async officeManagers(office, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).office.findUnique({
            where: {
                id: office.id,
            },
        }).officeManagers(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Building_1.Building, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Office_1.Office, Object]),
    __metadata("design:returntype", Promise)
], OfficeRelationsResolver.prototype, "building", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [BookableItem_1.BookableItem], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Office_1.Office, Object, OfficeBookableItemsArgs_1.OfficeBookableItemsArgs]),
    __metadata("design:returntype", Promise)
], OfficeRelationsResolver.prototype, "bookableItems", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [OfficeManager_1.OfficeManager], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Office_1.Office, Object, OfficeOfficeManagersArgs_1.OfficeOfficeManagersArgs]),
    __metadata("design:returntype", Promise)
], OfficeRelationsResolver.prototype, "officeManagers", null);
OfficeRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Office_1.Office)
], OfficeRelationsResolver);
exports.OfficeRelationsResolver = OfficeRelationsResolver;
//# sourceMappingURL=OfficeRelationsResolver.js.map