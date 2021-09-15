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
exports.BookableItemUpdateManyWithoutTypeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemCreateManyTypeInputEnvelope_1 = require("../inputs/BookableItemCreateManyTypeInputEnvelope");
const BookableItemCreateOrConnectWithoutTypeInput_1 = require("../inputs/BookableItemCreateOrConnectWithoutTypeInput");
const BookableItemCreateWithoutTypeInput_1 = require("../inputs/BookableItemCreateWithoutTypeInput");
const BookableItemScalarWhereInput_1 = require("../inputs/BookableItemScalarWhereInput");
const BookableItemUpdateManyWithWhereWithoutTypeInput_1 = require("../inputs/BookableItemUpdateManyWithWhereWithoutTypeInput");
const BookableItemUpdateWithWhereUniqueWithoutTypeInput_1 = require("../inputs/BookableItemUpdateWithWhereUniqueWithoutTypeInput");
const BookableItemUpsertWithWhereUniqueWithoutTypeInput_1 = require("../inputs/BookableItemUpsertWithWhereUniqueWithoutTypeInput");
const BookableItemWhereUniqueInput_1 = require("../inputs/BookableItemWhereUniqueInput");
let BookableItemUpdateManyWithoutTypeInput = class BookableItemUpdateManyWithoutTypeInput {
};
__decorate([
    TypeGraphQL.Field(_type => [BookableItemCreateWithoutTypeInput_1.BookableItemCreateWithoutTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutTypeInput_1.BookableItemCreateOrConnectWithoutTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpsertWithWhereUniqueWithoutTypeInput_1.BookableItemUpsertWithWhereUniqueWithoutTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemCreateManyTypeInputEnvelope_1.BookableItemCreateManyTypeInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpdateWithWhereUniqueWithoutTypeInput_1.BookableItemUpdateWithWhereUniqueWithoutTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpdateManyWithWhereWithoutTypeInput_1.BookableItemUpdateManyWithWhereWithoutTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemScalarWhereInput_1.BookableItemScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutTypeInput.prototype, "deleteMany", void 0);
BookableItemUpdateManyWithoutTypeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], BookableItemUpdateManyWithoutTypeInput);
exports.BookableItemUpdateManyWithoutTypeInput = BookableItemUpdateManyWithoutTypeInput;
//# sourceMappingURL=BookableItemUpdateManyWithoutTypeInput.js.map