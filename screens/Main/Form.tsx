import React, { FC } from "react";

interface IFormProps {
  inputDate: string;
  onInputDateChange: (value: string) => void;
  inputTime: string;
  onInputTimeChange: (value: string) => void;
  inputLocation: string;
  onInputLocationChange: (value: string) => void;
  inputHowMany: string;
  onInputHowManyChange: (value: string) => void;
  inputFoodCategory: string;
  onInputFoodCategoryChange: (value: string) => void;
  inputFoodSubcategory: string;
  onInputFoodSubcategoryChange: (value: string) => void;
  inputFoodQuantity: string;
  onInputFoodQuantityChange: (value: string) => void;
}

const Form: FC<IFormProps> = ({
  inputDate,
  onInputDateChange,
  inputTime,
  onInputTimeChange,
  inputLocation,
  onInputLocationChange,
  inputHowMany,
  onInputHowManyChange,
  inputFoodSubcategory,
  onInputFoodSubcategoryChange,
  inputFoodCategory,
  onInputFoodCategoryChange,
  inputFoodQuantity,
  onInputFoodQuantityChange
}) => (
  <form>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="date">Date</label>

        <input
          type="date"
          className="form-control"
          id="date"
          value={inputDate}
          onChange={event => {
            onInputDateChange(event.target.value);
          }}
        />

        <small id="date" className="form-text text-muted">
          The date you fed the duck.
        </small>
      </div>

      <div className="col-md-6">
        <label htmlFor="time">Time</label>

        <input
          type="time"
          className="form-control"
          id="time"
          value={inputTime}
          onChange={event => {
            onInputTimeChange(event.target.value);
          }}
        />

        <small id="time" className="form-text text-muted">
          The time you fed the duck (24 hr).
        </small>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="location">Where</label>

        <input
          className="form-control"
          id="location"
          value={inputLocation}
          onChange={event => {
            onInputLocationChange(event.target.value);
          }}
        />

        <small id="location" className="form-text text-muted">
          Where the ducks are fed?
        </small>
      </div>
    </div>

    <hr />

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="how-many">How many ducks</label>

        <input
          type="number"
          className="form-control"
          id="how-many"
          min={0}
          step={1}
          value={inputHowMany}
          onChange={event => {
            onInputHowManyChange(event.target.value);
          }}
        />

        <small id="how-many" className="form-text text-muted">
          How many ducks are fed?
        </small>
      </div>
    </div>

    <hr />

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="category">Food type</label>

        <input
          className="form-control"
          id="category"
          value={inputFoodCategory}
          onChange={event => {
            onInputFoodCategoryChange(event.target.value);
          }}
        />

        <small id="category" className="form-text text-muted">
          What kind of food the ducks are fed?
        </small>
      </div>

      <div className="col-md-6">
        <label htmlFor="food-subcategory">What food</label>

        <input
          className="form-control"
          id="food-subcategory"
          value={inputFoodSubcategory}
          onChange={event => {
            onInputFoodSubcategoryChange(event.target.value);
          }}
        />

        <small id="food-subcategory" className="form-text text-muted">
          What foods the ducks are fed?
        </small>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="quantity">Food quantity</label>

        <input
          className="form-control"
          id="quantity"
          value={inputFoodQuantity}
          onChange={event => {
            onInputFoodQuantityChange(event.target.value);
          }}
        />

        <small id="quantity" className="form-text text-muted">
          How much food the ducks are fed?
        </small>
      </div>
    </div>

    <hr />

    <button type="submit" className="btn btn-primary btn-lg btn-block">
      Submit
    </button>
  </form>
);

export default Form;
