import React, { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";

const dateTimeString = (inputDate: string, inputTime: string) => {
  if (!inputDate || !inputTime) {
    return "";
  }

  return `${inputDate} ${inputTime}`;
};

const Body = () => {
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  return (
    <div className="row">
      <div className="col-md-8">
        <h4 className="mb-4">Duck Feed</h4>

        <Form
          inputDate={inputDate}
          onInputDateChange={setInputDate}
          inputTime={inputTime}
          onInputTimeChange={setInputTime}
          inputLocation={inputLocation}
          onInputLocationChange={setInputLocation}
        />
      </div>

      <div className="col-md-4">
        <Summary
          date={dateTimeString(inputDate, inputTime)}
          location={inputLocation}
        />
      </div>
    </div>
  );
};

export default Body;
