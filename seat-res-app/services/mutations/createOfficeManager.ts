import { gql } from "@apollo/client";

export const createOfficeManager = gql`
  mutation createOfficeManager($userId: Int!, $officeId: Int!) {
    createOfficeManager(
      data: { user: { connect: { id: $userId } }, office: { connect: { id: $officeId } } }
    ) {
      id
      officeId
      userId
      createdAt
    }
    updateUser(where: { id: $userId }, data: { role: { set: OFFICE_MANAGER } }) {
      id
      email
      role
    }
  }
`;
