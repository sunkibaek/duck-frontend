import React, { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";

const dateTimeString = (date: string, time: string) => {
  if (!date || !time) {
    return "";
  }

  return `${date} ${time}`;
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
          date={inputs.date}
          foodCategory={inputs.foodCategory}
          foodQuantity={inputs.foodQuantity}
          foodSubcategory={inputs.foodSubcategory}
          howMany={inputs.howMany}
          location={inputs.location}
          time={inputs.time}
          onDateChange={setInput("date")}
          onFoodCategoryChange={setInput("foodCategory")}
          onFoodQuantityChange={setInput("foodQuantity")}
          onFoodSubcategoryChange={setInput("foodSubcategory")}
          onHowManyChange={setInput("howMany")}
          onLocationChange={setInput("location")}
          onTimeChange={setInput("time")}
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
