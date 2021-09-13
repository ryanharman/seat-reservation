import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateManyOfficeInput } from "../inputs/BookableItemCreateManyOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateManyOfficeInputEnvelope {
  @TypeGraphQL.Field(_type => [BookableItemCreateManyOfficeInput], {
    nullable: false
  })
  data!: BookableItemCreateManyOfficeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
