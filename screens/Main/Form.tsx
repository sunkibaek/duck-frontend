const Form = () => (
  <form>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="date">Date</label>

        <input type="date" className="form-control" id="date" />

        <small id="date" className="form-text text-muted">
          The date you fed the duck.
        </small>
      </div>

      <div className="col-md-6">
        <label htmlFor="time">Time</label>

        <input type="time" className="form-control" id="time" />

        <small id="time" className="form-text text-muted">
          The time you fed the duck (24 hr).
        </small>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="location">Where</label>

        <input className="form-control" id="location" />

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

        <input className="form-control" id="category" />

        <small id="category" className="form-text text-muted">
          What kind of food the ducks are fed?
        </small>
      </div>

      <div className="col-md-6">
        <label htmlFor="what-food">What food</label>

        <input className="form-control" id="what-food" />

        <small id="what-food" className="form-text text-muted">
          What foods the ducks are fed?
        </small>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="quantity">Food quantity</label>

        <input className="form-control" id="quantity" />

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
