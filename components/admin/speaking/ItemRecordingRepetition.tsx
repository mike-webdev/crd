
export default function ItemRecordingRepetition() {
    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className="mx-2 text-center">Question #1</p>
                        </div>
                        <div className="col-sm-9">
                            <div className="float-end mx-2">
                                <button className="btn btn-secondary">delete all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-10">
                            <audio src="" controls style={{width: "100%"}} />
                        </div>

                        <div className="col-sm-2">
                            <i className="fas fa-edit fa-lg text-info"></i> &nbsp;&nbsp;
                            <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-10">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-3 question_number_section">
                                        <p>
                                            <strong>Statement</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <span>
                                                And according to a study done by the University of Arizona, they’ve discovered that your keyboards have hundreds of time more bacteria, per square inch, than a toilet seat.
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
                    height: 130px;
                    line-height: 130px;
                    text-align: center;
                    background-color: #e9ecef;
                }
            `}</style>
        </>
    )
}