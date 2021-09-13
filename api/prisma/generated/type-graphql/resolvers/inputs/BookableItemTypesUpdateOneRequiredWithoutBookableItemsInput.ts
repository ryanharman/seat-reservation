import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesCreateOrConnectWithoutBookableItemsInput } from "../inputs/BookableItemTypesCreateOrConnectWithoutBookableItemsInput";
import { BookableItemTypesCreateWithoutBookableItemsInput } from "../inputs/BookableItemTypesCreateWithoutBookableItemsInput";
import { BookableItemTypesUpdateWithoutBookableItemsInput } from "../inputs/BookableItemTypesUpdateWithoutBookableItemsInput";
import { BookableItemTypesUpsertWithoutBookableItemsInput } from "../inputs/BookableItemTypesUpsertWithoutBookableItemsInput";
import { BookableItemTypesWhereUniqueInput } from "../inputs/BookableItemTypesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => BookableItemTypesCreateWithoutBookableItemsInput, {
    nullable: true
  })
  create?: BookableItemTypesCreateWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesCreateOrConnectWithoutBookableItemsInput, {
    nullable: true
  })
  connectOrCreate?: BookableItemTypesCreateOrConnectWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesUpsertWithoutBookableItemsInput, {
    nullable: true
  })
  upsert?: BookableItemTypesUpsertWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: true
  })
  connect?: BookableItemTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesUpdateWithoutBookableItemsInput, {
    nullable: true
  })
  update?: BookableItemTypesUpdateWithoutBookableItemsInput | undefined;
}
