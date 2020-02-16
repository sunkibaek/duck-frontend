import React, { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";

const dateTimeString = (inputDate: string, inputTime: string) => {
  if (!inputDate || !inputTime) {
    return "";
  }

  return `${inputDate} ${inputTime}`;
};

interface IInputsState {
  date: string;
  time: string;
  location: string;
}

const Body = () => {
  const [inputs, setInputs] = useState<IInputsState>({
    date: "",
    time: "",
    location: ""
  });

  const setInput = (type: keyof IInputsState) => (newValue: string) => {
    if (newValue === inputs[type]) {
      return;
    }

    setInputs({ ...inputs, [type]: newValue });
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <h4 className="mb-4">Duck Feed</h4>

        <Form
          inputDate={inputs.date}
          onInputDateChange={setInput("date")}
          inputTime={inputs.time}
          onInputTimeChange={setInput("time")}
          inputLocation={inputs.location}
          onInputLocationChange={setInput("location")}
        />
      </div>

      <div className="col-md-4">
        <Summary
          date={dateTimeString(inputs.date, inputs.time)}
          location={inputs.location}
        />
      </div>
    </div>
  );
};

export default Body;
