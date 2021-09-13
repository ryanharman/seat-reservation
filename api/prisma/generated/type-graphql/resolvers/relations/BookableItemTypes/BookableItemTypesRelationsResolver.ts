import * as TypeGraphQL from "type-graphql";
import { BookableItem } from "../../../models/BookableItem";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { BookableItemTypesBookableItemsArgs } from "./args/BookableItemTypesBookableItemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class BookableItemTypesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [BookableItem], {
    nullable: false
  })
  async bookableItems(@TypeGraphQL.Root() bookableItemTypes: BookableItemTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookableItemTypesBookableItemsArgs): Promise<BookableItem[]> {
    return getPrismaFromContext(ctx).bookableItemTypes.findUnique({
      where: {
        id: bookableItemTypes.id,
      },
    }).bookableItems(args);
  }
}
