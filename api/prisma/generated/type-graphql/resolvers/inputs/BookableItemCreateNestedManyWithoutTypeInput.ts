import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyTypeInputEnvelope } from "../inputs/BookableItemCreateManyTypeInputEnvelope";
import { BookableItemCreateOrConnectWithoutTypeInput } from "../inputs/BookableItemCreateOrConnectWithoutTypeInput";
import { BookableItemCreateWithoutTypeInput } from "../inputs/BookableItemCreateWithoutTypeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [BookableItemCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BookableItemCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BookableItemCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BookableItemCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  connect?: BookableItemWhereUniqueInput[] | undefined;
}
