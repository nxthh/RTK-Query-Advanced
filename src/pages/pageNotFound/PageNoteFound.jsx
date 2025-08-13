import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center text-center text-white min-h-screen">
      <div>
        <h1 className=" text-4xl font-bold">404 Error</h1>
        <p>Oops! The page you're looking for does not exist.</p>

        <div>
          <Link
            to="/"
            className="text-white font-medium bg-primary-700 hover:bg-primary-800 p-4 rounded-2xl mt-4 inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
