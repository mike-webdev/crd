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
        <div className="instruction">
            <p>Before you begin your homework, please take note of the following:</p>
            <ul>
            <li>This is an actual practice test. There will be two parts, a written and a speaking exercise. The written part of the homework prepares you for the spoken part.</li>
            <li><strong>WRITTEN PART</strong></li>
            <ul>
                <li>answer them below within 300 words.</li>
                <li>you may start the spoken part after you finish the written part</li>
            </ul>
            <li><strong>SPOKEN PART</strong></li>
            <ul>
                <li>This is timed. Please ensure that you are ready before starting. The faster you answer the questions with proper usage of pauses, the better.</li>
                <li>You will have a minute to answer each item and your answers will automatically be recorded. Please make sure that you have a good microphone setup for the spoken part.</li>
                <li>If you’re not ready, you can bookmark this homework for now.</li>
            </ul>
            <li>When you finish your homework, it will be submitted for assessment. You will receive comments and suggestions on how to improve after.</li>
            </ul>
        </div>
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
        </>
    )
}
export default HomeworkWritingTest;