import { gql } from "@apollo/client";

export const getOffices = gql`
  query GetOffices {
    offices {
      id
      name
      createdAt
    }
  }
`;
