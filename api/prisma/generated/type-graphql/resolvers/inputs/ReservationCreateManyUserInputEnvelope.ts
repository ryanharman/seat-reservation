import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyUserInput } from "../inputs/ReservationCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReservationCreateManyUserInput], {
    nullable: false
  })
  data!: ReservationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
