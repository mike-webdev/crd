
import LongAnswersContent from "./functionalitylist/LongAnswersContent";
import MultipleChoiceContent from "./functionalitylist/MultipleChoiceContent";
import ShortAnswerContent from "./functionalitylist/ShortAnswerContent";
import SpeakingContent from "./functionalitylist/SpeakingContent";

export default function CourseContent() {


    function Functionality(choice) {
        switch (choice) {
            case 'multiplechoice':
                document.getElementById('multiplechoice').classList.remove('d-none')
                document.getElementById('longanswers').classList.add('d-none')
                document.getElementById('shortanswers').classList.add('d-none')
                document.getElementById('speaking').classList.add('d-none')
                break;
            case 'longanswers':
                document.getElementById('multiplechoice').classList.add('d-none')
                document.getElementById('longanswers').classList.remove('d-none')
                document.getElementById('shortanswers').classList.add('d-none')
                document.getElementById('speaking').classList.add('d-none')
                break;
            case 'shortanswers':
                document.getElementById('multiplechoice').classList.add('d-none')
                document.getElementById('longanswers').classList.add('d-none')
                document.getElementById('shortanswers').classList.remove('d-none')
                document.getElementById('speaking').classList.add('d-none')
                break;
            case 'speaking':
                document.getElementById('multiplechoice').classList.add('d-none')
                document.getElementById('longanswers').classList.add('d-none')
                document.getElementById('shortanswers').classList.add('d-none')
                document.getElementById('speaking').classList.remove('d-none')
                break;
            default:
                console.log("no choice")
                break;
        }

    }



    return (
        <>
            <div className="specialization-content"><h5>Specialization Content</h5></div>
            <h5 className="mt-3 mb-3">Course Content<span className="float-end fw-bold">Course 1 of 4</span></h5>
            <div className="mb-3">
                <span className="text-muted">Curriculum / </span>
                <span className="fw-bold">Week 1. Add Activity</span>
            </div>

            <label htmlFor="activitytype">Activity Type:</label>
            <select id="activitytype" className="form-select" aria-label="Default select example">
                <option defaultValue="1">Warmup</option>
                <option defaultValue="2">Activity</option>
                <option defaultValue="3">Homework</option>
            </select>

            <div className="row mt-4">
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="activityTitle" className="form-label">Activity Title:</label>
                        <input className="form-control" id="activityTitle" type="text" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="activityTime" className="form-label">Activity Time in minutes:</label>
                        <input className="form-control" id="activityTime" type="text" />
                    </div>
                </div>
            </div>

            <label className="form-label  mt-4 p-2">Functionality List:</label>
            <div className="row border p-3">
                <div className="col-sm-6">
                    <div className="d-grid">
                        <button type="button" className="btn btn-light mb-2" onClick={() => Functionality('multiplechoice')}>Multiple Choice</button>
                        <button type="button" className="btn btn-light" onClick={() => Functionality('longanswers')}>Long Answers</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="d-grid">
                        <button type="button" className="btn btn-light mb-2" onClick={() => Functionality('shortanswers')}>Short Answers</button>
                        <button type="button" className="btn btn-light" onClick={() => Functionality('speaking')}>Speaking</button>
                    </div>
                </div>
            </div>


            <section id="multiplechoice" className="d-none">
                <MultipleChoiceContent/>
            </section>


            <section id="longanswers" className="d-none">
                <LongAnswersContent/>
            </section>

            <section id="shortanswers" className="d-none">
                <ShortAnswerContent/>
            </section>


            <section id="speaking" className="d-none">
               <SpeakingContent/>
            </section>

            <style jsx>
                {
                    `
            .specialization-content {
                background: #000;
                color: #fff;
                padding: 10px 0;
                width: 75%;
            }
            .instructions-label{
                background: #C4C4C4;
                transform: translate(6px, 19px);
                padding: 0 20px;
                border-radius: 5px;
            }
            .instructions-textarea{
                padding-top: 20px;
            }
            button:focus:not(:focus-visible) {
                outline: 0;
                background: black;
                color: #fff;
            }
            `
                }
            </style>
        </>
    )
}