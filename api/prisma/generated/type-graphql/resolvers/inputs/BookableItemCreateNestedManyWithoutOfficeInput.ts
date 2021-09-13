import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyOfficeInputEnvelope } from "../inputs/BookableItemCreateManyOfficeInputEnvelope";
import { BookableItemCreateOrConnectWithoutOfficeInput } from "../inputs/BookableItemCreateOrConnectWithoutOfficeInput";
import { BookableItemCreateWithoutOfficeInput } from "../inputs/BookableItemCreateWithoutOfficeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateNestedManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [BookableItemCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: BookableItemCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: BookableItemCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: BookableItemCreateManyOfficeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  connect?: BookableItemWhereUniqueInput[] | undefined;
}
