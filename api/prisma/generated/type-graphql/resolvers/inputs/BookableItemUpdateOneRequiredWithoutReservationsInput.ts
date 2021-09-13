import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateOrConnectWithoutReservationsInput } from "../inputs/BookableItemCreateOrConnectWithoutReservationsInput";
import { BookableItemCreateWithoutReservationsInput } from "../inputs/BookableItemCreateWithoutReservationsInput";
import { BookableItemUpdateWithoutReservationsInput } from "../inputs/BookableItemUpdateWithoutReservationsInput";
import { BookableItemUpsertWithoutReservationsInput } from "../inputs/BookableItemUpsertWithoutReservationsInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpdateOneRequiredWithoutReservationsInput {
  @TypeGraphQL.Field(_type => BookableItemCreateWithoutReservationsInput, {
    nullable: true
  })
  create?: BookableItemCreateWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateOrConnectWithoutReservationsInput, {
    nullable: true
  })
  connectOrCreate?: BookableItemCreateOrConnectWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemUpsertWithoutReservationsInput, {
    nullable: true
  })
  upsert?: BookableItemUpsertWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: true
  })
  connect?: BookableItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemUpdateWithoutReservationsInput, {
    nullable: true
  })
  update?: BookableItemUpdateWithoutReservationsInput | undefined;
}
