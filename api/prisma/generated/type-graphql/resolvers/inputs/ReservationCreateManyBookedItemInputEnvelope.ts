import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyBookedItemInput } from "../inputs/ReservationCreateManyBookedItemInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateManyBookedItemInputEnvelope {
  @TypeGraphQL.Field(_type => [ReservationCreateManyBookedItemInput], {
    nullable: false
  })
  data!: ReservationCreateManyBookedItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
