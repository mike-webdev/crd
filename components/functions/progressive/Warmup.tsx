//Intro Warmup for Progressive

import TdItem from "../../items/TdItem";

export default function Warmup() {
  return (
    <>
      <h5>Complete the table below and answer the summary.</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>TYPES OF PAUSES</th>
            <th>Pass through</th>
            <th>BEAT EQUIVALENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdItem value="Short Pauses" />
            <TdItem value="Type your answer here ..." />
            <TdItem value="Type your answer here ..." />
          </tr>
          <tr>
            <TdItem value="Type your answer here ..." />
            <TdItem
              value="separates ideas from one sentence to another and gives the
              listener a chance to process your ideas"
            />
            <TdItem value="Type your answer here ..." />
          </tr>
          <tr>
            <TdItem value="Type your answer here ..." />
            <TdItem value="Type your answer here ..." />
            <TdItem value="3 beats" />
          </tr>
        </tbody>
      </table>



      <div className="mb-3 mt-4">
        <label htmlFor="" className="form-label">
        Based on the introductory video, what are pauses?
        </label>
        <input
          type="text"
          className="form-control"
          id=""
          placeholder="Type your answer here..."
        />
      </div>
    </>
  );
}
