import React, { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";

const dateTimeString = (inputDate: string, inputTime: string) => {
  if (!inputDate || !inputTime) {
    return "";
  }

  return `${inputDate} ${inputTime}`;
};

const food = (category: string, subcategory: string) => {
  if (!category || !subcategory) {
    return "";
  }

  return `${category} - ${subcategory}`;
};

interface IInputsState {
  date: string;
  time: string;
  location: string;
  howMany: string;
  foodCategory: string;
  foodSubcategory: string;
  foodQuantity: string;
}

const Body = () => {
  const [inputs, setInputs] = useState<IInputsState>({
    date: "",
    time: "",
    location: "",
    howMany: "0",
    foodCategory: "",
    foodSubcategory: "",
    foodQuantity: "0"
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
          inputHowMany={inputs.howMany}
          onInputHowManyChange={setInput("howMany")}
          inputFoodCategory={inputs.foodCategory}
          onInputFoodCategoryChange={setInput("foodCategory")}
          inputFoodSubcategory={inputs.foodSubcategory}
          onInputFoodSubcategoryChange={setInput("foodSubcategory")}
          inputFoodQuantity={inputs.foodQuantity}
          onInputFoodQuantityChange={setInput("foodQuantity")}
        />
      </div>

      <div className="col-md-4">
        <Summary
          date={dateTimeString(inputs.date, inputs.time)}
          location={inputs.location}
          howMany={inputs.howMany}
          food={food(inputs.foodCategory, inputs.foodSubcategory)}
          foodQuantity={inputs.foodQuantity}
        />
      </div>
    </div>
  );
};

export default Body;
