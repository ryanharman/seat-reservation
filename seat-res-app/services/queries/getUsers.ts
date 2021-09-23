import { gql } from "@apollo/client";

export const getUsers = gql`
  query GetUsers {
    users {
      id
      email
      firstName
      lastName
      role
    }
  }
`;
