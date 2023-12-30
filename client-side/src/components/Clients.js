import React from "react";
import { useQuery } from "@apollo/client";
import ClientRow from "../components/ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <h2>Something went wrong</h2>;
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
