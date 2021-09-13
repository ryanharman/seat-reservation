import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeWhereUniqueInput } from "../../../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;
}
