export default function MediaContentShortAnswer() {
    return (
      <>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text h-full">Question</span>
          </div>
          <input type="text" className="form-control" />
        </div>

  
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
  