import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Sorry, This Page Does Not Exist</p>
      <Link to="/" className="btn btn-primary">Go Back</Link>
    </div>
  );
}

export default NotFoundPage;
