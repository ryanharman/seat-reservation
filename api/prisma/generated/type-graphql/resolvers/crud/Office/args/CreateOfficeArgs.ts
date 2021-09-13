import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeCreateInput } from "../../../inputs/OfficeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeCreateInput, {
    nullable: false
  })
  data!: OfficeCreateInput;
}
