import activity from '../../../sample_data/activities.json'

const Identification = () =>{
    const data = activity.identification;
    return(
        <>
        <p>Choose from the table the proper answer and type your answer in the blanks provided.</p>
        <div className="card bg-lightgray">
            <div className="card-body row">
                {data.map((value)=>{
                    return (<p className="col-6" key={value.key_answer}>{value.key_answer}</p>)
                })}
            </div>
        </div>
        <div className="mt-3">
            { (data.length === 0)? (<p>No Data</p>) : (
              data.map((value,index)=>(
                <div key={index} className="mb-4 row">
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example">
                            <option value="Intelligibility">Intelligibility</option>
                            <option value="Fluency">Fluency</option>
                            <option value="Coherence">Coherence</option>
                            <option value="Speech Rate">Speech Rate</option>
                            <option value="Functional Language">Functional Language</option>
                            <option value="Lexical Resource">Lexical Resource</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <label> {index+1}. {value.definition}</label>
                    </div>
                </div>
              ))  
            )}
        </div>
        </>
    )
}
export default Identification;