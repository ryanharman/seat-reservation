import { gql } from "@apollo/client";

export const getOffice = gql`
  query GetOffice($id: Int!) {
    office(where: { id: $id }) {
      id
      name
      createdAt
      building {
        id
        name
      }
      officeManagers {
        id
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
