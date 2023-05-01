import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <h3 className="error">Error : {message}</h3>
    </div>
  );
};

export default Error;
