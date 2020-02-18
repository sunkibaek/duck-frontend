import React, { FC } from "react";
import { FoodCategory } from "../../types";

interface IFormProps {
  date: string;
  foodCategory: string;
  foodQuantity: string;
  foodSubcategory: string;
  howMany: string;
  isFormFilled: boolean;
  isAnyFormFilled: boolean;
  isSubmitting: boolean;
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
  onSubmit: () => void;
}

const Form: FC<IFormProps> = ({
  date,
  foodCategory,
  foodQuantity,
  foodSubcategory,
  howMany,
  isFormFilled,
  isAnyFormFilled,
  isSubmitting,
  location,
  time,
  onDateChange,
  onFoodCategoryChange,
  onFoodQuantityChange,
  onFoodSubcategoryChange,
  onHowManyChange,
  onLocationChange,
  onTimeChange,
  onReset,
  onSubmit
}) => (
  <form
    onSubmit={event => {
      event.preventDefault();

      onSubmit();
    }}
  >
    <fieldset disabled={isSubmitting}>
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
            placeholder="yyyy-mm-dd"
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
            placeholder="hh:mm"
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

          <select
            className="form-control"
            id="category"
            value={foodCategory}
            onChange={event => {
              onFoodCategoryChange(event.target.value);
            }}
          >
            <option />
            {Object.keys(FoodCategory).map(fc => (
              <option key={fc} value={fc}>
                {fc}
              </option>
            ))}
          </select>

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
            type="number"
            min={0}
            step={1}
            placeholder="(in boxes)"
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
            disabled={!isFormFilled || isSubmitting}
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >
            {isSubmitting ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>

        <div className="col-md-3">
          <button
            disabled={!isAnyFormFilled || isSubmitting}
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
    </fieldset>
  </form>
);

export default Form;
