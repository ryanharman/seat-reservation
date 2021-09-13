import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyOfficeInputEnvelope } from "../inputs/BookableItemCreateManyOfficeInputEnvelope";
import { BookableItemCreateOrConnectWithoutOfficeInput } from "../inputs/BookableItemCreateOrConnectWithoutOfficeInput";
import { BookableItemCreateWithoutOfficeInput } from "../inputs/BookableItemCreateWithoutOfficeInput";
import { BookableItemScalarWhereInput } from "../inputs/BookableItemScalarWhereInput";
import { BookableItemUpdateManyWithWhereWithoutOfficeInput } from "../inputs/BookableItemUpdateManyWithWhereWithoutOfficeInput";
import { BookableItemUpdateWithWhereUniqueWithoutOfficeInput } from "../inputs/BookableItemUpdateWithWhereUniqueWithoutOfficeInput";
import { BookableItemUpsertWithWhereUniqueWithoutOfficeInput } from "../inputs/BookableItemUpsertWithWhereUniqueWithoutOfficeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpdateManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [BookableItemCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: BookableItemCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: BookableItemCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemUpsertWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  upsert?: BookableItemUpsertWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: BookableItemCreateManyOfficeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookableItemUpdateWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  update?: BookableItemUpdateWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemUpdateManyWithWhereWithoutOfficeInput], {
    nullable: true
  })
  updateMany?: BookableItemUpdateManyWithWhereWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookableItemScalarWhereInput[] | undefined;
}
