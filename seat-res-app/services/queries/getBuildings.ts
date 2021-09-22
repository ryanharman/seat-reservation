import { gql } from "@apollo/client";

export const getBuildings = gql`
  query GetBuildings {
    buildings {
      id
      name
      createdAt
      offices {
        id
        name
      }
    }
  }
`;
