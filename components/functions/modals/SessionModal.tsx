
export default function SessionModal(props) {

    const goToHomework = () => {
        const homeworkContainer = document.querySelector('.homework_container')
        const writingContainer = document.querySelector('.writing_container')
        const minttubeRecording = document.querySelector('#tab-homework-recording-tab') as HTMLButtonElement
        
        if (props.course === "ielts") {
            homeworkContainer.getElementsByTagName('button')[3].click()
            homeworkContainer.classList.add('hide')
            writingContainer.classList.add('show')
        } else if (props.course === "mintography") {
            homeworkContainer.getElementsByTagName('button')[3].click()
            document.querySelector('#cafe_begin_btn').classList.add('hide')
            document.querySelector('#cafe_submit_btn').classList.add('show')
        } else {
            homeworkContainer.getElementsByTagName('button')[5].click()
            minttubeRecording.click()
        }
        
    }

    return (
        <>
            {/* modal for end session */}
            <div className="modal fade" id={`${props.course}SessionModal`} tabIndex={-1} aria-labelledby={`${props.course}SessionModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="float-end p-2">
                        </div>
                        <div className="modal-body text-center" id="enroll_modal">
                            <h4 className="py-5"><strong>End session with your teacher?</strong></h4>
                            <button type="button" className="btn btn-secondary px-5" data-bs-toggle="modal" data-bs-target={`#${props.course}EndSessionModal`}>
                                Yes
                            </button> &nbsp;
                            <button type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal" aria-label="Close">
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal for ended session */}
            <div className="modal fade" id={`${props.course}EndSessionModal`} tabIndex={-1} aria-labelledby={`${props.course}EndSessionModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="float-end p-2">
                        </div>
                        <div className="modal-body text-center" id="enroll_modal">
                            <h4 className="py-5"><strong>Your session with a teacher has ended.</strong></h4>
                            <button type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal" onClick={() => goToHomework()}>
                                Go to Homework
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}