import React from "react";
import { gql, useQuery } from "@apollo/client";

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

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data);
  if (loading) return <h2>Loading ...</h2>;
  if (error) return <h2>Error</h2>;
  return (
    <>
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Name</th>
            </tr>
          </thead>
        </table>
      )}
    </>
  );
}

export default Clients;
