import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import argon2 from "argon2";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello there nosey 😇";
  }

  @Mutation(() => User)
  async register(@Arg("data") { email, firstName, lastName, password }: RegisterInput): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }
}
