import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerCreateManyInput } from "../../../inputs/BuildingManagerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBuildingManagerArgs {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateManyInput], {
    nullable: false
  })
  data!: BuildingManagerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
