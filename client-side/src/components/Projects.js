import React from "react";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <h2>Something went wrong</h2>;
  return (
    <>
      {data?.allProjects.length > 0 ? (
        <div className="row mt-4">
          {data?.allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
