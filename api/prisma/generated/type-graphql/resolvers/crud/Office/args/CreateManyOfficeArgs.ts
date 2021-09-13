import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeCreateManyInput } from "../../../inputs/OfficeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOfficeArgs {
  @TypeGraphQL.Field(_type => [OfficeCreateManyInput], {
    nullable: false
  })
  data!: OfficeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
