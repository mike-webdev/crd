import SetupModal from "./SpeakingSetupModal"
import SpeakingExercise from "./SpeakingExercise"

export default function ChapterTestSpeaking() {

    // sample data
    const instructionList = [
        {
            id: 1,
            text: "This is an actual speaking evaluation test."
        },
        {
            id: 2,
            text: "You will only be given ten minutes to finish this part, please ensure that you are ready before starting. The faster you answer the questions with proper usage of pauses, the better."
        },
        {
            id: 3,
            text: "Your answers will automatically be recorded."
        },
        {
            id: 4,
            text: "Please make sure that you have a good microphone setup."
        },
        {
            id: 5,
            text: "If you’re not ready, you can bookmark this part of the quiz for now."
        },
        {
            id: 6,
            text: "When you finish your quiz, it will be submitted for assessment. You will receive comments and suggestions on how to improve after."
        }
    ]
    return (
        <>
            <div className="container test_speaking_container">
                <div className="row">
                    <div className="col-sm-12">
                        <p>Before we begin your chapter test speaking exercise, please take note of the following:</p>
                        <ul>
                            {instructionList.map((data, index) => (
                                <li key={index}>{data.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-sm-12">
                        <div className="note_area">
                            <p>1. What standards of behavior should teachers set?</p>
                            <p>2. Which method of travel do you consider the safest?</p>
                            <p>3. Do you agree that we learn best from our mistakes?</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-3 float-end" id="speak_btn" data-bs-toggle="modal" data-bs-target="#testSetupModal">
                        Begin Speaking  <i className="fas fa-caret-right"></i> 
                    </button>
                </div>
                
                {/* Microphone Setup Modal  */}
                <SetupModal type="test"/>
            </div>
            
            <SpeakingExercise type="test" />

            <style jsx>{`
                .note_area {
                    border: 1px solid #000;
                    padding: 10px;
                }
            `}</style>
        </>
    )
}