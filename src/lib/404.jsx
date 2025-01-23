import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Animated 404 */}
      <div className="text-center">
        <h1 className="text-[150px] font-bold text-blue-500 animate-bounce">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or was removed.
        </p>
      </div>

      {/* Call to Action */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-8 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 hover:shadow-lg transition duration-300"
      >
        Go Back Home
      </button>

      <div className="mt-12">
        <div className="flex items-center justify-center gap-6">
          <div className="w-12 h-12 bg-red-400 rounded-full animate-pulse"></div>
          <div className="w-16 h-16 bg-green-400 rounded-lg animate-bounce"></div>
          <div className="w-10 h-10 bg-yellow-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
