import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingCreateManyInput } from "../../../inputs/BuildingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBuildingArgs {
  @TypeGraphQL.Field(_type => [BuildingCreateManyInput], {
    nullable: false
  })
  data!: BuildingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
