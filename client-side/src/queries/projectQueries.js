import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    allProjects {
      id
      name
      status
    }
  }
`;
export { GET_PROJECTS };
