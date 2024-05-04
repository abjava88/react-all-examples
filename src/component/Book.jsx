import React from "react";

const Page = () => {
  return (
    <>
      <h3>Title</h3>
      <h6>Content</h6>
    </>
  );
};

const Book = () => {
  return (
    <div>
      <Page />
      <Page />
      <Page />
    </div>
  );
};

export default Book;
