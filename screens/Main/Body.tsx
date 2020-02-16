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

  const setInputDate = (newValue: string) => {
    if (newValue === inputs.date) {
      return;
    }

    setInputs({ ...inputs, date: newValue });
  };

  const setInputTime = (newValue: string) => {
    if (newValue === inputs.date) {
      return;
    }

    setInputs({ ...inputs, time: newValue });
  };

  const setInputLocation = (newValue: string) => {
    if (newValue === inputs.date) {
      return;
    }

    setInputs({ ...inputs, location: newValue });
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <h4 className="mb-4">Duck Feed</h4>

        <Form
          inputDate={inputs.date}
          onInputDateChange={setInputDate}
          inputTime={inputs.time}
          onInputTimeChange={setInputTime}
          inputLocation={inputs.location}
          onInputLocationChange={setInputLocation}
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
