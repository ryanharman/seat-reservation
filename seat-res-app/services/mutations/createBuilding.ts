import { gql } from "@apollo/client";

export const createBuilding = gql`
  mutation CreateBuilding($name: String!) {
    createBuilding(data: { name: $name }) {
      id
      name
    }
  }
`;
