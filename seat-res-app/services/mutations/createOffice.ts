import { gql } from "@apollo/client";

export const createOffice = gql`
  mutation CreateOffice($name: String!, $buildingId: Int!) {
    createOffice(data: { name: $name, building: { connect: { id: $buildingId } } }) {
      id
      name
      building {
        id
        name
      }
    }
  }
`;
