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
exports.AggregateBookableItemArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemOrderByInput_1 = require("../../../inputs/BookableItemOrderByInput");
const BookableItemWhereInput_1 = require("../../../inputs/BookableItemWhereInput");
const BookableItemWhereUniqueInput_1 = require("../../../inputs/BookableItemWhereUniqueInput");
let AggregateBookableItemArgs = class AggregateBookableItemArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BookableItemWhereInput_1.BookableItemWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBookableItemArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemOrderByInput_1.BookableItemOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBookableItemArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBookableItemArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBookableItemArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBookableItemArgs.prototype, "skip", void 0);
AggregateBookableItemArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateBookableItemArgs);
exports.AggregateBookableItemArgs = AggregateBookableItemArgs;
//# sourceMappingURL=AggregateBookableItemArgs.js.map