import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

const MainContainer = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  return (
    <div className="container py-5">
      <Header />

      <Body
        onFormSubmit={() => {
          setIsFormSubmitting(true);
        }}
        isFormSubmitting={isFormSubmitting}
      />

      <div className="container fixed-top pt-3">
        <div className="alert alert-primary" role="alert">
          Submitted successfully!
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
