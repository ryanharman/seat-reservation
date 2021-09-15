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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Reservation: crudResolvers.ReservationCrudResolver,
    Office: crudResolvers.OfficeCrudResolver,
    OfficeManager: crudResolvers.OfficeManagerCrudResolver,
    BookableItem: crudResolvers.BookableItemCrudResolver,
    BookableItemTypes: crudResolvers.BookableItemTypesCrudResolver,
    Building: crudResolvers.BuildingCrudResolver,
    BuildingManager: crudResolvers.BuildingManagerCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Reservation: relationResolvers.ReservationRelationsResolver,
    Office: relationResolvers.OfficeRelationsResolver,
    OfficeManager: relationResolvers.OfficeManagerRelationsResolver,
    BookableItem: relationResolvers.BookableItemRelationsResolver,
    BookableItemTypes: relationResolvers.BookableItemTypesRelationsResolver,
    Building: relationResolvers.BuildingRelationsResolver,
    BuildingManager: relationResolvers.BuildingManagerRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Reservation: {
        reservation: actionResolvers.FindUniqueReservationResolver,
        findFirstReservation: actionResolvers.FindFirstReservationResolver,
        reservations: actionResolvers.FindManyReservationResolver,
        createReservation: actionResolvers.CreateReservationResolver,
        createManyReservation: actionResolvers.CreateManyReservationResolver,
        deleteReservation: actionResolvers.DeleteReservationResolver,
        updateReservation: actionResolvers.UpdateReservationResolver,
        deleteManyReservation: actionResolvers.DeleteManyReservationResolver,
        updateManyReservation: actionResolvers.UpdateManyReservationResolver,
        upsertReservation: actionResolvers.UpsertReservationResolver,
        aggregateReservation: actionResolvers.AggregateReservationResolver,
        groupByReservation: actionResolvers.GroupByReservationResolver
    },
    Office: {
        office: actionResolvers.FindUniqueOfficeResolver,
        findFirstOffice: actionResolvers.FindFirstOfficeResolver,
        offices: actionResolvers.FindManyOfficeResolver,
        createOffice: actionResolvers.CreateOfficeResolver,
        createManyOffice: actionResolvers.CreateManyOfficeResolver,
        deleteOffice: actionResolvers.DeleteOfficeResolver,
        updateOffice: actionResolvers.UpdateOfficeResolver,
        deleteManyOffice: actionResolvers.DeleteManyOfficeResolver,
        updateManyOffice: actionResolvers.UpdateManyOfficeResolver,
        upsertOffice: actionResolvers.UpsertOfficeResolver,
        aggregateOffice: actionResolvers.AggregateOfficeResolver,
        groupByOffice: actionResolvers.GroupByOfficeResolver
    },
    OfficeManager: {
        officeManager: actionResolvers.FindUniqueOfficeManagerResolver,
        findFirstOfficeManager: actionResolvers.FindFirstOfficeManagerResolver,
        officeManagers: actionResolvers.FindManyOfficeManagerResolver,
        createOfficeManager: actionResolvers.CreateOfficeManagerResolver,
        createManyOfficeManager: actionResolvers.CreateManyOfficeManagerResolver,
        deleteOfficeManager: actionResolvers.DeleteOfficeManagerResolver,
        updateOfficeManager: actionResolvers.UpdateOfficeManagerResolver,
        deleteManyOfficeManager: actionResolvers.DeleteManyOfficeManagerResolver,
        updateManyOfficeManager: actionResolvers.UpdateManyOfficeManagerResolver,
        upsertOfficeManager: actionResolvers.UpsertOfficeManagerResolver,
        aggregateOfficeManager: actionResolvers.AggregateOfficeManagerResolver,
        groupByOfficeManager: actionResolvers.GroupByOfficeManagerResolver
    },
    BookableItem: {
        bookableItem: actionResolvers.FindUniqueBookableItemResolver,
        findFirstBookableItem: actionResolvers.FindFirstBookableItemResolver,
        bookableItems: actionResolvers.FindManyBookableItemResolver,
        createBookableItem: actionResolvers.CreateBookableItemResolver,
        createManyBookableItem: actionResolvers.CreateManyBookableItemResolver,
        deleteBookableItem: actionResolvers.DeleteBookableItemResolver,
        updateBookableItem: actionResolvers.UpdateBookableItemResolver,
        deleteManyBookableItem: actionResolvers.DeleteManyBookableItemResolver,
        updateManyBookableItem: actionResolvers.UpdateManyBookableItemResolver,
        upsertBookableItem: actionResolvers.UpsertBookableItemResolver,
        aggregateBookableItem: actionResolvers.AggregateBookableItemResolver,
        groupByBookableItem: actionResolvers.GroupByBookableItemResolver
    },
    BookableItemTypes: {
        findUniqueBookableItemTypes: actionResolvers.FindUniqueBookableItemTypesResolver,
        findFirstBookableItemTypes: actionResolvers.FindFirstBookableItemTypesResolver,
        findManyBookableItemTypes: actionResolvers.FindManyBookableItemTypesResolver,
        createBookableItemTypes: actionResolvers.CreateBookableItemTypesResolver,
        createManyBookableItemTypes: actionResolvers.CreateManyBookableItemTypesResolver,
        deleteBookableItemTypes: actionResolvers.DeleteBookableItemTypesResolver,
        updateBookableItemTypes: actionResolvers.UpdateBookableItemTypesResolver,
        deleteManyBookableItemTypes: actionResolvers.DeleteManyBookableItemTypesResolver,
        updateManyBookableItemTypes: actionResolvers.UpdateManyBookableItemTypesResolver,
        upsertBookableItemTypes: actionResolvers.UpsertBookableItemTypesResolver,
        aggregateBookableItemTypes: actionResolvers.AggregateBookableItemTypesResolver,
        groupByBookableItemTypes: actionResolvers.GroupByBookableItemTypesResolver
    },
    Building: {
        building: actionResolvers.FindUniqueBuildingResolver,
        findFirstBuilding: actionResolvers.FindFirstBuildingResolver,
        buildings: actionResolvers.FindManyBuildingResolver,
        createBuilding: actionResolvers.CreateBuildingResolver,
        createManyBuilding: actionResolvers.CreateManyBuildingResolver,
        deleteBuilding: actionResolvers.DeleteBuildingResolver,
        updateBuilding: actionResolvers.UpdateBuildingResolver,
        deleteManyBuilding: actionResolvers.DeleteManyBuildingResolver,
        updateManyBuilding: actionResolvers.UpdateManyBuildingResolver,
        upsertBuilding: actionResolvers.UpsertBuildingResolver,
        aggregateBuilding: actionResolvers.AggregateBuildingResolver,
        groupByBuilding: actionResolvers.GroupByBuildingResolver
    },
    BuildingManager: {
        buildingManager: actionResolvers.FindUniqueBuildingManagerResolver,
        findFirstBuildingManager: actionResolvers.FindFirstBuildingManagerResolver,
        buildingManagers: actionResolvers.FindManyBuildingManagerResolver,
        createBuildingManager: actionResolvers.CreateBuildingManagerResolver,
        createManyBuildingManager: actionResolvers.CreateManyBuildingManagerResolver,
        deleteBuildingManager: actionResolvers.DeleteBuildingManagerResolver,
        updateBuildingManager: actionResolvers.UpdateBuildingManagerResolver,
        deleteManyBuildingManager: actionResolvers.DeleteManyBuildingManagerResolver,
        updateManyBuildingManager: actionResolvers.UpdateManyBuildingManagerResolver,
        upsertBuildingManager: actionResolvers.UpsertBuildingManagerResolver,
        aggregateBuildingManager: actionResolvers.AggregateBuildingManagerResolver,
        groupByBuildingManager: actionResolvers.GroupByBuildingManagerResolver
    }
};
const resolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Reservation: ["reservation", "findFirstReservation", "reservations", "createReservation", "createManyReservation", "deleteReservation", "updateReservation", "deleteManyReservation", "updateManyReservation", "upsertReservation", "aggregateReservation", "groupByReservation"],
    Office: ["office", "findFirstOffice", "offices", "createOffice", "createManyOffice", "deleteOffice", "updateOffice", "deleteManyOffice", "updateManyOffice", "upsertOffice", "aggregateOffice", "groupByOffice"],
    OfficeManager: ["officeManager", "findFirstOfficeManager", "officeManagers", "createOfficeManager", "createManyOfficeManager", "deleteOfficeManager", "updateOfficeManager", "deleteManyOfficeManager", "updateManyOfficeManager", "upsertOfficeManager", "aggregateOfficeManager", "groupByOfficeManager"],
    BookableItem: ["bookableItem", "findFirstBookableItem", "bookableItems", "createBookableItem", "createManyBookableItem", "deleteBookableItem", "updateBookableItem", "deleteManyBookableItem", "updateManyBookableItem", "upsertBookableItem", "aggregateBookableItem", "groupByBookableItem"],
    BookableItemTypes: ["findUniqueBookableItemTypes", "findFirstBookableItemTypes", "findManyBookableItemTypes", "createBookableItemTypes", "createManyBookableItemTypes", "deleteBookableItemTypes", "updateBookableItemTypes", "deleteManyBookableItemTypes", "updateManyBookableItemTypes", "upsertBookableItemTypes", "aggregateBookableItemTypes", "groupByBookableItemTypes"],
    Building: ["building", "findFirstBuilding", "buildings", "createBuilding", "createManyBuilding", "deleteBuilding", "updateBuilding", "deleteManyBuilding", "updateManyBuilding", "upsertBuilding", "aggregateBuilding", "groupByBuilding"],
    BuildingManager: ["buildingManager", "findFirstBuildingManager", "buildingManagers", "createBuildingManager", "createManyBuildingManager", "deleteBuildingManager", "updateBuildingManager", "deleteManyBuildingManager", "updateManyBuildingManager", "upsertBuildingManager", "aggregateBuildingManager", "groupByBuildingManager"]
};
const relationResolversInfo = {
    User: ["reservations"],
    Reservation: ["user", "bookedItem"],
    Office: ["building", "bookableItems", "officeManagers"],
    OfficeManager: ["office"],
    BookableItem: ["office", "type", "reservations"],
    BookableItemTypes: ["bookableItems"],
    Building: ["offices", "buildingManagers"],
    BuildingManager: ["building"]
};
const modelsInfo = {
    User: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    Reservation: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    Office: ["id", "buildingId", "createdAt", "updatedAt"],
    OfficeManager: ["id", "officeId", "name", "createdAt", "updatedAt"],
    BookableItem: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemTypes: ["id", "name", "createdAt", "updatedAt"],
    Building: ["id", "name", "createdAt", "updatedAt"],
    BuildingManager: ["id", "buildingId", "name", "createdAt", "updatedAt"]
};
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "role", "reservations", "createdAt", "updatedAt"],
    UserOrderByInput: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    UserWhereUniqueInput: ["id", "email"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    ReservationWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "bookedItem", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationOrderByInput: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationWhereUniqueInput: ["id"],
    ReservationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    OfficeWhereInput: ["AND", "OR", "NOT", "id", "building", "buildingId", "createdAt", "updatedAt", "bookableItems", "officeManagers"],
    OfficeOrderByInput: ["id", "buildingId", "createdAt", "updatedAt"],
    OfficeWhereUniqueInput: ["id"],
    OfficeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "buildingId", "createdAt", "updatedAt"],
    OfficeManagerWhereInput: ["AND", "OR", "NOT", "id", "office", "officeId", "name", "createdAt", "updatedAt"],
    OfficeManagerOrderByInput: ["id", "officeId", "name", "createdAt", "updatedAt"],
    OfficeManagerWhereUniqueInput: ["id"],
    OfficeManagerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "officeId", "name", "createdAt", "updatedAt"],
    BookableItemWhereInput: ["AND", "OR", "NOT", "id", "office", "officeId", "type", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt", "reservations"],
    BookableItemOrderByInput: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemWhereUniqueInput: ["id"],
    BookableItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemTypesWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "bookableItems"],
    BookableItemTypesOrderByInput: ["id", "name", "createdAt", "updatedAt"],
    BookableItemTypesWhereUniqueInput: ["id"],
    BookableItemTypesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
    BuildingWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "offices", "buildingManagers"],
    BuildingOrderByInput: ["id", "name", "createdAt", "updatedAt"],
    BuildingWhereUniqueInput: ["id"],
    BuildingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
    BuildingManagerWhereInput: ["AND", "OR", "NOT", "id", "building", "buildingId", "name", "createdAt", "updatedAt"],
    BuildingManagerOrderByInput: ["id", "buildingId", "name", "createdAt", "updatedAt"],
    BuildingManagerWhereUniqueInput: ["id"],
    BuildingManagerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "buildingId", "name", "createdAt", "updatedAt"],
    UserCreateInput: ["email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt", "reservations"],
    UserUpdateInput: ["email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt", "reservations"],
    UserCreateManyInput: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    ReservationCreateInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "user", "bookedItem"],
    ReservationUpdateInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "user", "bookedItem"],
    ReservationCreateManyInput: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationUpdateManyMutationInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    OfficeCreateInput: ["createdAt", "updatedAt", "building", "bookableItems", "officeManagers"],
    OfficeUpdateInput: ["createdAt", "updatedAt", "building", "bookableItems", "officeManagers"],
    OfficeCreateManyInput: ["id", "buildingId", "createdAt", "updatedAt"],
    OfficeUpdateManyMutationInput: ["createdAt", "updatedAt"],
    OfficeManagerCreateInput: ["name", "createdAt", "updatedAt", "office"],
    OfficeManagerUpdateInput: ["name", "createdAt", "updatedAt", "office"],
    OfficeManagerCreateManyInput: ["id", "officeId", "name", "createdAt", "updatedAt"],
    OfficeManagerUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
    BookableItemCreateInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "type", "reservations"],
    BookableItemUpdateInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "type", "reservations"],
    BookableItemCreateManyInput: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemUpdateManyMutationInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemTypesCreateInput: ["name", "createdAt", "updatedAt", "bookableItems"],
    BookableItemTypesUpdateInput: ["name", "createdAt", "updatedAt", "bookableItems"],
    BookableItemTypesCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
    BookableItemTypesUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
    BuildingCreateInput: ["name", "createdAt", "updatedAt", "offices", "buildingManagers"],
    BuildingUpdateInput: ["name", "createdAt", "updatedAt", "offices", "buildingManagers"],
    BuildingCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
    BuildingUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
    BuildingManagerCreateInput: ["name", "createdAt", "updatedAt", "building"],
    BuildingManagerUpdateInput: ["name", "createdAt", "updatedAt", "building"],
    BuildingManagerCreateManyInput: ["id", "buildingId", "name", "createdAt", "updatedAt"],
    BuildingManagerUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    ReservationListRelationFilter: ["every", "some", "none"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    BookableItemRelationFilter: ["is", "isNot"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    BuildingRelationFilter: ["is", "isNot"],
    BookableItemListRelationFilter: ["every", "some", "none"],
    OfficeManagerListRelationFilter: ["every", "some", "none"],
    OfficeRelationFilter: ["is", "isNot"],
    BookableItemTypesRelationFilter: ["is", "isNot"],
    BoolNullableFilter: ["equals", "not"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    OfficeListRelationFilter: ["every", "some", "none"],
    BuildingManagerListRelationFilter: ["every", "some", "none"],
    ReservationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    ReservationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutReservationsInput: ["create", "connectOrCreate", "connect"],
    BookableItemCreateNestedOneWithoutReservationsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutReservationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookableItemUpdateOneRequiredWithoutReservationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BuildingCreateNestedOneWithoutOfficesInput: ["create", "connectOrCreate", "connect"],
    BookableItemCreateNestedManyWithoutOfficeInput: ["create", "connectOrCreate", "createMany", "connect"],
    OfficeManagerCreateNestedManyWithoutOfficeInput: ["create", "connectOrCreate", "createMany", "connect"],
    BuildingUpdateOneRequiredWithoutOfficesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookableItemUpdateManyWithoutOfficeInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OfficeManagerUpdateManyWithoutOfficeInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OfficeCreateNestedOneWithoutOfficeManagersInput: ["create", "connectOrCreate", "connect"],
    OfficeUpdateOneRequiredWithoutOfficeManagersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OfficeCreateNestedOneWithoutBookableItemsInput: ["create", "connectOrCreate", "connect"],
    BookableItemTypesCreateNestedOneWithoutBookableItemsInput: ["create", "connectOrCreate", "connect"],
    ReservationCreateNestedManyWithoutBookedItemInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    OfficeUpdateOneRequiredWithoutBookableItemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ReservationUpdateManyWithoutBookedItemInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    BookableItemCreateNestedManyWithoutTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
    BookableItemUpdateManyWithoutTypeInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OfficeCreateNestedManyWithoutBuildingInput: ["create", "connectOrCreate", "createMany", "connect"],
    BuildingManagerCreateNestedManyWithoutBuildingInput: ["create", "connectOrCreate", "createMany", "connect"],
    OfficeUpdateManyWithoutBuildingInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    BuildingManagerUpdateManyWithoutBuildingInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    BuildingCreateNestedOneWithoutBuildingManagersInput: ["create", "connectOrCreate", "connect"],
    BuildingUpdateOneRequiredWithoutBuildingManagersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    ReservationCreateWithoutUserInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "bookedItem"],
    ReservationCreateOrConnectWithoutUserInput: ["where", "create"],
    ReservationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ReservationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    ReservationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    ReservationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    ReservationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    UserCreateWithoutReservationsInput: ["email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    UserCreateOrConnectWithoutReservationsInput: ["where", "create"],
    BookableItemCreateWithoutReservationsInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "type"],
    BookableItemCreateOrConnectWithoutReservationsInput: ["where", "create"],
    UserUpsertWithoutReservationsInput: ["update", "create"],
    UserUpdateWithoutReservationsInput: ["email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    BookableItemUpsertWithoutReservationsInput: ["update", "create"],
    BookableItemUpdateWithoutReservationsInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "type"],
    BuildingCreateWithoutOfficesInput: ["name", "createdAt", "updatedAt", "buildingManagers"],
    BuildingCreateOrConnectWithoutOfficesInput: ["where", "create"],
    BookableItemCreateWithoutOfficeInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "type", "reservations"],
    BookableItemCreateOrConnectWithoutOfficeInput: ["where", "create"],
    BookableItemCreateManyOfficeInputEnvelope: ["data", "skipDuplicates"],
    OfficeManagerCreateWithoutOfficeInput: ["name", "createdAt", "updatedAt"],
    OfficeManagerCreateOrConnectWithoutOfficeInput: ["where", "create"],
    OfficeManagerCreateManyOfficeInputEnvelope: ["data", "skipDuplicates"],
    BuildingUpsertWithoutOfficesInput: ["update", "create"],
    BuildingUpdateWithoutOfficesInput: ["name", "createdAt", "updatedAt", "buildingManagers"],
    BookableItemUpsertWithWhereUniqueWithoutOfficeInput: ["where", "update", "create"],
    BookableItemUpdateWithWhereUniqueWithoutOfficeInput: ["where", "data"],
    BookableItemUpdateManyWithWhereWithoutOfficeInput: ["where", "data"],
    BookableItemScalarWhereInput: ["AND", "OR", "NOT", "id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput: ["where", "update", "create"],
    OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput: ["where", "data"],
    OfficeManagerUpdateManyWithWhereWithoutOfficeInput: ["where", "data"],
    OfficeManagerScalarWhereInput: ["AND", "OR", "NOT", "id", "officeId", "name", "createdAt", "updatedAt"],
    OfficeCreateWithoutOfficeManagersInput: ["createdAt", "updatedAt", "building", "bookableItems"],
    OfficeCreateOrConnectWithoutOfficeManagersInput: ["where", "create"],
    OfficeUpsertWithoutOfficeManagersInput: ["update", "create"],
    OfficeUpdateWithoutOfficeManagersInput: ["createdAt", "updatedAt", "building", "bookableItems"],
    OfficeCreateWithoutBookableItemsInput: ["createdAt", "updatedAt", "building", "officeManagers"],
    OfficeCreateOrConnectWithoutBookableItemsInput: ["where", "create"],
    BookableItemTypesCreateWithoutBookableItemsInput: ["name", "createdAt", "updatedAt"],
    BookableItemTypesCreateOrConnectWithoutBookableItemsInput: ["where", "create"],
    ReservationCreateWithoutBookedItemInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "user"],
    ReservationCreateOrConnectWithoutBookedItemInput: ["where", "create"],
    ReservationCreateManyBookedItemInputEnvelope: ["data", "skipDuplicates"],
    OfficeUpsertWithoutBookableItemsInput: ["update", "create"],
    OfficeUpdateWithoutBookableItemsInput: ["createdAt", "updatedAt", "building", "officeManagers"],
    BookableItemTypesUpsertWithoutBookableItemsInput: ["update", "create"],
    BookableItemTypesUpdateWithoutBookableItemsInput: ["name", "createdAt", "updatedAt"],
    ReservationUpsertWithWhereUniqueWithoutBookedItemInput: ["where", "update", "create"],
    ReservationUpdateWithWhereUniqueWithoutBookedItemInput: ["where", "data"],
    ReservationUpdateManyWithWhereWithoutBookedItemInput: ["where", "data"],
    BookableItemCreateWithoutTypeInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "reservations"],
    BookableItemCreateOrConnectWithoutTypeInput: ["where", "create"],
    BookableItemCreateManyTypeInputEnvelope: ["data", "skipDuplicates"],
    BookableItemUpsertWithWhereUniqueWithoutTypeInput: ["where", "update", "create"],
    BookableItemUpdateWithWhereUniqueWithoutTypeInput: ["where", "data"],
    BookableItemUpdateManyWithWhereWithoutTypeInput: ["where", "data"],
    OfficeCreateWithoutBuildingInput: ["createdAt", "updatedAt", "bookableItems", "officeManagers"],
    OfficeCreateOrConnectWithoutBuildingInput: ["where", "create"],
    OfficeCreateManyBuildingInputEnvelope: ["data", "skipDuplicates"],
    BuildingManagerCreateWithoutBuildingInput: ["name", "createdAt", "updatedAt"],
    BuildingManagerCreateOrConnectWithoutBuildingInput: ["where", "create"],
    BuildingManagerCreateManyBuildingInputEnvelope: ["data", "skipDuplicates"],
    OfficeUpsertWithWhereUniqueWithoutBuildingInput: ["where", "update", "create"],
    OfficeUpdateWithWhereUniqueWithoutBuildingInput: ["where", "data"],
    OfficeUpdateManyWithWhereWithoutBuildingInput: ["where", "data"],
    OfficeScalarWhereInput: ["AND", "OR", "NOT", "id", "buildingId", "createdAt", "updatedAt"],
    BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput: ["where", "update", "create"],
    BuildingManagerUpdateWithWhereUniqueWithoutBuildingInput: ["where", "data"],
    BuildingManagerUpdateManyWithWhereWithoutBuildingInput: ["where", "data"],
    BuildingManagerScalarWhereInput: ["AND", "OR", "NOT", "id", "buildingId", "name", "createdAt", "updatedAt"],
    BuildingCreateWithoutBuildingManagersInput: ["name", "createdAt", "updatedAt", "offices"],
    BuildingCreateOrConnectWithoutBuildingManagersInput: ["where", "create"],
    BuildingUpsertWithoutBuildingManagersInput: ["update", "create"],
    BuildingUpdateWithoutBuildingManagersInput: ["name", "createdAt", "updatedAt", "offices"],
    ReservationCreateManyUserInput: ["id", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationUpdateWithoutUserInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "bookedItem"],
    BookableItemCreateManyOfficeInput: ["id", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    OfficeManagerCreateManyOfficeInput: ["id", "name", "createdAt", "updatedAt"],
    BookableItemUpdateWithoutOfficeInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "type", "reservations"],
    OfficeManagerUpdateWithoutOfficeInput: ["name", "createdAt", "updatedAt"],
    ReservationCreateManyBookedItemInput: ["id", "userId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationUpdateWithoutBookedItemInput: ["dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "user"],
    BookableItemCreateManyTypeInput: ["id", "officeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemUpdateWithoutTypeInput: ["name", "officeExclusive", "available", "createdAt", "updatedAt", "office", "reservations"],
    OfficeCreateManyBuildingInput: ["id", "createdAt", "updatedAt"],
    BuildingManagerCreateManyBuildingInput: ["id", "name", "createdAt", "updatedAt"],
    OfficeUpdateWithoutBuildingInput: ["createdAt", "updatedAt", "bookableItems", "officeManagers"],
    BuildingManagerUpdateWithoutBuildingInput: ["name", "createdAt", "updatedAt"]
};
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateReservation: ["_count", "_avg", "_sum", "_min", "_max"],
    ReservationGroupBy: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOffice: ["_count", "_avg", "_sum", "_min", "_max"],
    OfficeGroupBy: ["id", "buildingId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOfficeManager: ["_count", "_avg", "_sum", "_min", "_max"],
    OfficeManagerGroupBy: ["id", "officeId", "name", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBookableItem: ["_count", "_avg", "_sum", "_min", "_max"],
    BookableItemGroupBy: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBookableItemTypes: ["_count", "_avg", "_sum", "_min", "_max"],
    BookableItemTypesGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBuilding: ["_count", "_avg", "_sum", "_min", "_max"],
    BuildingGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBuildingManager: ["_count", "_avg", "_sum", "_min", "_max"],
    BuildingManagerGroupBy: ["id", "buildingId", "name", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCountAggregate: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "email", "firstName", "lastName", "password", "role", "createdAt", "updatedAt"],
    ReservationCountAggregate: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt", "_all"],
    ReservationAvgAggregate: ["id", "userId", "bookedItemId"],
    ReservationSumAggregate: ["id", "userId", "bookedItemId"],
    ReservationMinAggregate: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    ReservationMaxAggregate: ["id", "userId", "bookedItemId", "dateBookedFrom", "dateBookedTo", "cancelled", "createdAt", "updatedAt"],
    OfficeCountAggregate: ["id", "buildingId", "createdAt", "updatedAt", "_all"],
    OfficeAvgAggregate: ["id", "buildingId"],
    OfficeSumAggregate: ["id", "buildingId"],
    OfficeMinAggregate: ["id", "buildingId", "createdAt", "updatedAt"],
    OfficeMaxAggregate: ["id", "buildingId", "createdAt", "updatedAt"],
    OfficeManagerCountAggregate: ["id", "officeId", "name", "createdAt", "updatedAt", "_all"],
    OfficeManagerAvgAggregate: ["id", "officeId"],
    OfficeManagerSumAggregate: ["id", "officeId"],
    OfficeManagerMinAggregate: ["id", "officeId", "name", "createdAt", "updatedAt"],
    OfficeManagerMaxAggregate: ["id", "officeId", "name", "createdAt", "updatedAt"],
    BookableItemCountAggregate: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt", "_all"],
    BookableItemAvgAggregate: ["id", "officeId", "typeId"],
    BookableItemSumAggregate: ["id", "officeId", "typeId"],
    BookableItemMinAggregate: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemMaxAggregate: ["id", "officeId", "typeId", "name", "officeExclusive", "available", "createdAt", "updatedAt"],
    BookableItemTypesCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
    BookableItemTypesAvgAggregate: ["id"],
    BookableItemTypesSumAggregate: ["id"],
    BookableItemTypesMinAggregate: ["id", "name", "createdAt", "updatedAt"],
    BookableItemTypesMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
    BuildingCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
    BuildingAvgAggregate: ["id"],
    BuildingSumAggregate: ["id"],
    BuildingMinAggregate: ["id", "name", "createdAt", "updatedAt"],
    BuildingMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
    BuildingManagerCountAggregate: ["id", "buildingId", "name", "createdAt", "updatedAt", "_all"],
    BuildingManagerAvgAggregate: ["id", "buildingId"],
    BuildingManagerSumAggregate: ["id", "buildingId"],
    BuildingManagerMinAggregate: ["id", "buildingId", "name", "createdAt", "updatedAt"],
    BuildingManagerMaxAggregate: ["id", "buildingId", "name", "createdAt", "updatedAt"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueReservationArgs: ["where"],
    FindFirstReservationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyReservationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateReservationArgs: ["data"],
    CreateManyReservationArgs: ["data", "skipDuplicates"],
    DeleteReservationArgs: ["where"],
    UpdateReservationArgs: ["data", "where"],
    DeleteManyReservationArgs: ["where"],
    UpdateManyReservationArgs: ["data", "where"],
    UpsertReservationArgs: ["where", "create", "update"],
    AggregateReservationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByReservationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueOfficeArgs: ["where"],
    FindFirstOfficeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOfficeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOfficeArgs: ["data"],
    CreateManyOfficeArgs: ["data", "skipDuplicates"],
    DeleteOfficeArgs: ["where"],
    UpdateOfficeArgs: ["data", "where"],
    DeleteManyOfficeArgs: ["where"],
    UpdateManyOfficeArgs: ["data", "where"],
    UpsertOfficeArgs: ["where", "create", "update"],
    AggregateOfficeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOfficeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueOfficeManagerArgs: ["where"],
    FindFirstOfficeManagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOfficeManagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOfficeManagerArgs: ["data"],
    CreateManyOfficeManagerArgs: ["data", "skipDuplicates"],
    DeleteOfficeManagerArgs: ["where"],
    UpdateOfficeManagerArgs: ["data", "where"],
    DeleteManyOfficeManagerArgs: ["where"],
    UpdateManyOfficeManagerArgs: ["data", "where"],
    UpsertOfficeManagerArgs: ["where", "create", "update"],
    AggregateOfficeManagerArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOfficeManagerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBookableItemArgs: ["where"],
    FindFirstBookableItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookableItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBookableItemArgs: ["data"],
    CreateManyBookableItemArgs: ["data", "skipDuplicates"],
    DeleteBookableItemArgs: ["where"],
    UpdateBookableItemArgs: ["data", "where"],
    DeleteManyBookableItemArgs: ["where"],
    UpdateManyBookableItemArgs: ["data", "where"],
    UpsertBookableItemArgs: ["where", "create", "update"],
    AggregateBookableItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBookableItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBookableItemTypesArgs: ["where"],
    FindFirstBookableItemTypesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookableItemTypesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBookableItemTypesArgs: ["data"],
    CreateManyBookableItemTypesArgs: ["data", "skipDuplicates"],
    DeleteBookableItemTypesArgs: ["where"],
    UpdateBookableItemTypesArgs: ["data", "where"],
    DeleteManyBookableItemTypesArgs: ["where"],
    UpdateManyBookableItemTypesArgs: ["data", "where"],
    UpsertBookableItemTypesArgs: ["where", "create", "update"],
    AggregateBookableItemTypesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBookableItemTypesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBuildingArgs: ["where"],
    FindFirstBuildingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBuildingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBuildingArgs: ["data"],
    CreateManyBuildingArgs: ["data", "skipDuplicates"],
    DeleteBuildingArgs: ["where"],
    UpdateBuildingArgs: ["data", "where"],
    DeleteManyBuildingArgs: ["where"],
    UpdateManyBuildingArgs: ["data", "where"],
    UpsertBuildingArgs: ["where", "create", "update"],
    AggregateBuildingArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBuildingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBuildingManagerArgs: ["where"],
    FindFirstBuildingManagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBuildingManagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBuildingManagerArgs: ["data"],
    CreateManyBuildingManagerArgs: ["data", "skipDuplicates"],
    DeleteBuildingManagerArgs: ["where"],
    UpdateBuildingManagerArgs: ["data", "where"],
    DeleteManyBuildingManagerArgs: ["where"],
    UpdateManyBuildingManagerArgs: ["data", "where"],
    UpsertBuildingManagerArgs: ["where", "create", "update"],
    AggregateBuildingManagerArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBuildingManagerArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map