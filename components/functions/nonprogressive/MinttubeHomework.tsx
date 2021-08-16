import questions from '../../../sample_data/activities.json'
import Essay from '../../items/Essay'
const Homework = () =>{
    const data = questions.minttube_homework;

    return(
        <>
        <p><b>B. Writing.</b> Answer in complete sentences.</p>
        {(data.length === 0)? (<p>No Data</p>):(
            data.map((value,index)=>(
                <Essay
                    key={index}
                    rows={20}
                    index={index}
                    question={value.question}
                />
            ))
        )}

        <div className="row justify-content-between mt-4 homework_buttons_container">
            <button className="btn btn-dark col-sm-4">Bookmark Homework</button>
            <button className="btn btn-dark col-sm-3" id="hw_submit">
            Save Answer
            </button>
            <button className="btn btn-dark col-sm-3" id="speak_btn">
            Submit Homework
            </button>
        </div>
        </>
    )

}
export default Homework;