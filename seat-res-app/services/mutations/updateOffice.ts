import { gql } from "@apollo/client";

export const updateOffice = gql`
  mutation UpdateOffice($name: StringFieldUpdateOperationsInput, $id: Int, $buildingId: Int) {
    updateOffice(
      data: { name: $name, building: { connect: { id: $buildingId } } }
      where: { id: $id }
    ) {
      id
      name
      building {
        id
        name
      }
    }
  }
`;
