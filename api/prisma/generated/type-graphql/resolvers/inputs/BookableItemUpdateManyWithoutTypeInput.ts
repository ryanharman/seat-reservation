import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyTypeInputEnvelope } from "../inputs/BookableItemCreateManyTypeInputEnvelope";
import { BookableItemCreateOrConnectWithoutTypeInput } from "../inputs/BookableItemCreateOrConnectWithoutTypeInput";
import { BookableItemCreateWithoutTypeInput } from "../inputs/BookableItemCreateWithoutTypeInput";
import { BookableItemScalarWhereInput } from "../inputs/BookableItemScalarWhereInput";
import { BookableItemUpdateManyWithWhereWithoutTypeInput } from "../inputs/BookableItemUpdateManyWithWhereWithoutTypeInput";
import { BookableItemUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/BookableItemUpdateWithWhereUniqueWithoutTypeInput";
import { BookableItemUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/BookableItemUpsertWithWhereUniqueWithoutTypeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpdateManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [BookableItemCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BookableItemCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BookableItemCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: BookableItemUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BookableItemCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  connect?: BookableItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  set?: BookableItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookableItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput], {
    nullable: true
  })
  delete?: BookableItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: BookableItemUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: BookableItemUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookableItemScalarWhereInput[] | undefined;
}
