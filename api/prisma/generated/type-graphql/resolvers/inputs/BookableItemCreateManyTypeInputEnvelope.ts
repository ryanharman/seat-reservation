import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyTypeInput } from "../inputs/BookableItemCreateManyTypeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BookableItemCreateManyTypeInput], {
    nullable: false
  })
  data!: BookableItemCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
