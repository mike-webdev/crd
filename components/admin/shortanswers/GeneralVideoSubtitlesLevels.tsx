
export default function GeneralVideoSubtitlesLevels() {

    // sample data
    const contentList = [
        {
            level: "Easy",
            percentage: "25%"
        },
        {
            level: "Normal",
            percentage: "50%"
        },
        {
            level: "Hard",
            percentage: "75%"
        },
        {
            level: "Master",
            percentage: "100%"
        }
    ]

    return (
        <>
            <h3 className="mt-4">Added Levels:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className=" mx-2 text-center">Question Group</p>
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
                        <div className="col-sm-6">
                            <div className="speaking_video_container">
                                <iframe 
                                    width="100%" 
                                    height="250" 
                                    src="https://www.youtube.com/embed/zQGOcOUBi6s" 
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
                        <div className="col-sm-6">
                            <div className="overflow-auto" style={{maxHeight: "250px"}}>
                                <strong>Subtitles:</strong>
                                <div className="float-end">
                                    <i className="fas fa-edit fa-lg text-info"></i> &nbsp;&nbsp;
                                    <i className="fas fa-trash-alt fa-lg text-danger"></i>
                                </div>
                                <p>0:00 Every second of your life you are under attack</p>
                                <p>0:05 Billions of bacteria, viruses, and fungi are trying to make you their home.</p>
                                <p>0:09 So our bodies have developed a super complex little army with guards, soldiers, intelligence, weapon factories and communicators</p>
                                <p>0:15 to protect you from um, well, dying.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {contentList.map((data, index) => (
                            <>
                                <div className="col-sm-10">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-3 question_number_section">
                                                        <p className="mt-3">
                                                            <strong>Level</strong>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <span>
                                                                {data.level}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-4 question_number_section">
                                                        <p className="mt-3">
                                                            <strong>Percentage</strong>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <span>
                                                                {data.percentage}
                                                            </span>
                                                        </div>
                                                    </div>
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