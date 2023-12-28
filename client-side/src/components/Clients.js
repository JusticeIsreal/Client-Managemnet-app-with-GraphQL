import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "../components/ClientRow";

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
        <table className="table table hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.allClients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Clients;
