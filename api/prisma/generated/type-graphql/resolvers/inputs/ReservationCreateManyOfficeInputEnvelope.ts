import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyOfficeInput } from "../inputs/ReservationCreateManyOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateManyOfficeInputEnvelope {
  @TypeGraphQL.Field(_type => [ReservationCreateManyOfficeInput], {
    nullable: false
  })
  data!: ReservationCreateManyOfficeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
