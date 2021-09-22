import { gql } from "@apollo/client";

export const getBuilding = gql`
  query GetBuilding($id: Int!) {
    building(where: { id: $id }) {
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
