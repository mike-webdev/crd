export default function MediaContentShortAnswer2() {
  return (
    <>
      Indicate the percentage of the level added. With these levels, words from
      the subtitle will be erased based on the indicated percentage.
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Level</span>
            </div>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Percentage</span>
            </div>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
      <div
        className="input-group mb-3"
        style={{ width: "50%", marginLeft: "auto" }}
      >
        <div className="input-group-prepend">
          <span className="input-group-text h-full"># of Levels</span>
        </div>
        <input type="number" className="form-control" />
        <div className="input-group-append">
          <span className="input-group-text h-full">add level</span>
        </div>
      </div>
      <br />
      <div className="text-end mt-4">
        <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>
          add levels
        </button>
      </div>
    </>
  );
}
