import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700">Profile</h1>
      <hr className="border-green-400 w-full mb-4" />
      <div className="flex items-center mb-4">
        <p className="text-2xl font-semibold text-green-700 mr-4">
          Profile page:
        </p>
        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
          {params.id}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
