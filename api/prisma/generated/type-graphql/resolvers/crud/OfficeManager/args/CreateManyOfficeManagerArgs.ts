import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerCreateManyInput } from "../../../inputs/OfficeManagerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOfficeManagerArgs {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateManyInput], {
    nullable: false
  })
  data!: OfficeManagerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
