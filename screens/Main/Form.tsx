import React, { FC } from "react";

interface IFormProps {
  date: string;
  foodCategory: string;
  foodQuantity: string;
  foodSubcategory: string;
  howMany: string;
  isFormFilled: boolean;
  isAnyFormFilled: boolean;
  location: string;
  time: string;

  onDateChange: (value: string) => void;
  onFoodCategoryChange: (value: string) => void;
  onFoodQuantityChange: (value: string) => void;
  onFoodSubcategoryChange: (value: string) => void;
  onHowManyChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  onReset: () => void;
}

const Form: FC<IFormProps> = ({
  date,
  foodCategory,
  foodQuantity,
  foodSubcategory,
  howMany,
  isFormFilled,
  isAnyFormFilled,
  location,
  time,
  onDateChange,
  onFoodCategoryChange,
  onFoodQuantityChange,
  onFoodSubcategoryChange,
  onHowManyChange,
  onLocationChange,
  onTimeChange,
  onReset
}) => (
  <form>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="date">Date</label>

        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={event => {
            onDateChange(event.target.value);
          }}
          required={true}
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
          value={time}
          onChange={event => {
            onTimeChange(event.target.value);
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
          value={location}
          onChange={event => {
            onLocationChange(event.target.value);
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
          value={howMany}
          onChange={event => {
            onHowManyChange(event.target.value);
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
          value={foodCategory}
          onChange={event => {
            onFoodCategoryChange(event.target.value);
          }}
        />

        <small id="category" className="form-text text-muted">
          What kind of food the ducks are fed?
        </small>
      </div>

      <div className="col-md-6">
        <label htmlFor="subcategory">What food</label>

        <input
          className="form-control"
          id="subcategory"
          value={foodSubcategory}
          onChange={event => {
            onFoodSubcategoryChange(event.target.value);
          }}
        />

        <small id="subcategory" className="form-text text-muted">
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
          value={foodQuantity}
          onChange={event => {
            onFoodQuantityChange(event.target.value);
          }}
        />

        <small id="quantity" className="form-text text-muted">
          How much food the ducks are fed?
        </small>
      </div>
    </div>

    <hr />

    <div className="row mb-3">
      <div className="col-md-9">
        <button
          disabled={!isFormFilled}
          type="submit"
          className="btn btn-primary btn-lg btn-block"
        >
          Submit
        </button>
      </div>

      <div className="col-md-3">
        <button
          disabled={!isAnyFormFilled}
          type="reset"
          className="btn btn-light btn-lg btn-block"
          onClick={event => {
            event.preventDefault();

            onReset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  </form>
);

export default Form;
