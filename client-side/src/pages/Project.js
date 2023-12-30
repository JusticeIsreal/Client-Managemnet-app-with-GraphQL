import React from "react";
import { GET_PROJECT } from "../queries/projectQueries";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <h2>Something went wrong</h2>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn0-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data?.singleProject.name}</h1>
          <p>{data?.singleProject.description}</p>
          <h5 className="mt-3">Project status</h5>
          <p className="lead">{data?.singleProject.status}</p>

          <ClientInfo client={data?.singleProject.client} />
        </div>
      )}
    </>
  );
}

export default Project;
