import activity from '../../../sample_data/activities.json'

const Identification = () =>{
    const data = activity.identification;
    return(
        <>
        <p>Fill in the blanks based on the choices given.</p>
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
                        <input 
                        className="form-control"
                        type="text"
                        />
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