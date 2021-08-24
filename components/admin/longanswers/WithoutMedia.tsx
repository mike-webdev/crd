
export default function WithoutMedia() {
    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-3">
                            <p className=" mx-2 text-center">Question Group</p>
                        </div>
                        <div className="col-9">
                            <div className="float-end mx-2">
                                <button className="btn btn-secondary">delete all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-3 question_number_section">
                                        <p className="mt-3">
                                            <strong>Question</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <span>
                                                What is your favorite sea creature? Why is that your favorite?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <i className="fas fa-edit fa-lg text-info"></i> &nbsp;&nbsp;
                            <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card_custom_header p {
                    background-color: #000;
                    color: #fff;
                    border-radius: 5px;
                    padding: 3px 5px;
                }
                .question_number_section {
                    text-align: center;
                    background-color: #e9ecef;
                }
                .speaking_img_container {
                    position: relative;
                    max-width: max-content;
                    margin: 0 auto;
                }
                .action_btn_container {
                    position: absolute;
                    top: 10px;
                    right: 10px; 
                }
            `}</style>
        </>
    )
}