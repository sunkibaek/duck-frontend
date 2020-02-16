import React from "react";
import Form from "./Form";
import Summary from "./Summary";

const Body = () => (
  <div className="row">
    <div className="col-md-8">
      <h4 className="mb-4">Duck Feed</h4>

      <Form />
    </div>

    <div className="col-md-4">
      <Summary />
    </div>
  </div>
);

export default Body;
