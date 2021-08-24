
export default function SubmitModal(props) {
    let heading = ""
    let content = ""

    if (props.course === "ielts") {
        if (props.type === "homework") {
            heading = "Homework"
            content = "Your homework"
        } else {
            heading = "Speaking Exercise: Chapter Test"
            content = "Your chapter test"
        }
    } else {
        if (props.type === "speaking") {
            heading = "Homework: Speaking"
            content = "This part of your homework"
        } else {
            heading = "Homework: Writing"
            content = "This part of your homework"
        }
    }

    return (
        <>
            {/* modal to show alert after submission */}
            <div className="modal fade" id={`${props.course}${props.type}SubmitModal`} tabIndex={-1} aria-labelledby={`${props.course}${props.type}SubmitModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="float-end p-2">
                        </div>
                        <div className="modal-body text-center" id="enroll_modal">
                            <h4><strong>{heading} Submitted!</strong></h4>
                            <p className="py-5">{content} has been submitted, please wait for your results. It will be posted anytime soon.</p>
                            <button type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal" aria-label="Close">
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}