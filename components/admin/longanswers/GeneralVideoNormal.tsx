
export default function GeneralVideoNormal() {

    //sample data
    const questionList = [
        { 
            title: "Question # 1",
            content: "What is your favorite sea creature? Why is that your favorite?"
        },
        {
            title: "Question # 2",
            content: "Do you like going to the beach? Why or why not?"
        },
        {
            title: "Question # 3",
            content: "What is the significance of being prepared for incidents?"
        },
        {
            title: "Question # 4",
            content: "How will you prepare for a day out in a beach?"
        },
        {
            title: "Question # 5",
            content: "Who will you invite for an outing? Why will you invite them?"
        }
    ]
    
    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-3">
                            <p className=" mx-2 text-center">Question Group</p>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".uploadVideoModalLongAnswers">
                                Upload Video
                            </button>
                        </div>
                        <div className="col-6">
                            <div className="float-end mx-2">
                                <button className="btn btn-secondary">delete all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="speaking_video_container">
                            <iframe 
                                width="500" 
                                height="300" 
                                src="https://www.youtube.com/embed/3Ay4Sk7NRCY" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className="action_btn_container">
                                <i className="fas fa-edit text-info"></i> &nbsp;
                                <i className="fas fa-trash-alt text-danger"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {questionList.map((data, index) => (
                            <>
                                <div className="col-sm-10">
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-3 question_number_section">
                                                <p className="mt-3">
                                                    <strong>{data.title}</strong>
                                                </p>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <span>
                                                        {data.content}
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
                            </>
                        ))}
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
                .speaking_video_container {
                    position: relative;
                    max-width: max-content;
                    margin: 0 auto;
                }
                .action_btn_container {
                    position: absolute;
                    top: 10px;
                    right: 20px; 
                }
            `}</style>
        </>
    )
}