import { useState } from 'react';
import homework from '../../../sample_data/activities.json'
import Essay from '../../items/Essay';
/*
*OPTIMIZE: Use Component: Essay
*/
const HomeworkWritingTest = () =>{
    const [data, setData] = useState(homework.homework_speaking_test);
      
    return(
        <>  
            <p><strong>Part A. Written Homework</strong></p>
            <p>Answer the following questions in less than 300 words.</p>
            <div
                className="border col-sm-12 p-3"
            >
                <h4 className="mb-4">WRITTEN HOMEWORK</h4>
                {(data.length === 0)? (<p>No Data</p>):(
                data.map((value,index)=>(
                    <Essay
                        key={index}
                        rows={10}
                        index={index}
                        question={value.question}
                        maxWordCount={300}
                    />
                ))
                )}
            </div>

            <div className="row justify-content-between mt-4 homework_buttons_container">
                <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                <button className="btn btn-dark col-sm-3" id="write_btn" data-bs-toggle="modal" data-bs-target="#homeworkSetupModal">
                    Next: Homework Part B
                </button>
            </div>
        </>
    )
}
export default HomeworkWritingTest;