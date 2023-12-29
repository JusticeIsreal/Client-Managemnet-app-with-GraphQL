import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    allClients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };
