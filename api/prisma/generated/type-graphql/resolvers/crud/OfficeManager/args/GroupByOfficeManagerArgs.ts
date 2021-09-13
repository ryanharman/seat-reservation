import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerOrderByInput } from "../../../inputs/OfficeManagerOrderByInput";
import { OfficeManagerScalarWhereWithAggregatesInput } from "../../../inputs/OfficeManagerScalarWhereWithAggregatesInput";
import { OfficeManagerWhereInput } from "../../../inputs/OfficeManagerWhereInput";
import { OfficeManagerScalarFieldEnum } from "../../../../enums/OfficeManagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  where?: OfficeManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerOrderByInput], {
    nullable: true
  })
  orderBy?: OfficeManagerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "officeId" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => OfficeManagerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OfficeManagerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
