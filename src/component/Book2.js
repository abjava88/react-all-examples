import React from "react";

export const Book2 = ({ children, isNew }) => {
  if (isNew) return <div>{children}</div>;
  else return <h3>Ancien livre</h3>;
};
