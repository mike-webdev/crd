export default function MediaContentLongAnswer() {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text h-full">Word Count Limit</span>
        </div>
        <input type="text" className="form-control" />
        <div
          className="form-check"
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="noWordCount"
          />
          <label className="form-check-label" htmlFor="noWordCount">
            &emsp;No Word Count Limit
          </label>
        </div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text h-full">Question</span>
        </div>
        <input type="text" className="form-control" />
      </div>
      {/* <label className="form-label">Other options:</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text h-full">Option A</span>
        </div>
        <input type="text" className="form-control" />
      </div> */}

      <div
        className="input-group mb-3"
        style={{ width: "50%", marginLeft: "auto" }}
      >
        <div className="input-group-prepend">
          <span className="input-group-text h-full"># of Options</span>
        </div>
        <input type="number" className="form-control" />
        <div className="input-group-append">
          <span className="input-group-text h-full">add options</span>
        </div>
      </div>
      <br />
      <div className="text-end mt-4">
        <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>
          add question
        </button>
      </div>
    </>
  );
}
