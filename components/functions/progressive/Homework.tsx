import SessionModal from "../modals/SessionModal"

export default function Homework() {

    return (
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
                    <li>You will answer the same questions from the written part verbally. You will only have a minute to answer each questions.</li>
                    <li>Please make sure that you have a good microphone setup for the spoken part.</li>
                    <li>If you’re not ready, you don’t need to take the spoken part for now. When you finish your homework, it will be submitted for assessment. You will receive comments and suggestions on how to improve after. Once your start your homework, your session with your teacher will end. Please ask your teacher for more information or clarifications before starting the homework.</li>
                </ul>
                    <li>When you finish your homework, it will be submitted for assessment. You will receive comments and suggestions on how to improve after.</li>
                    <li>Once your start your homework, your session with your teacher will end. Please ask your teacher for more information or clarifications before starting the homework.</li>
                </ul>
            </div>

            <div className="row justify-content-between mt-4">
                <button type="button" className="btn btn-dark col-sm-3" data-bs-toggle="modal" data-bs-target="#ieltsSessionModal">Begin Homework <i className="fas fa-caret-right"></i></button>
                <button type="button" className="btn btn-dark col-sm-3">Proceed to Lesson 2 <i className="fas fa-caret-right"></i></button>
            </div>

            <SessionModal course="ielts"/>
        </>
    )
}