import Image from "next/image";

export default function WithoutRecording() {
    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className=" mx-2 text-center">Question # 1</p>
                        </div>
                        <div className="col-sm-9">
                            <div className="float-end mx-2">
                                <button className="btn btn-secondary">delete all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <div className="speaking_img_container">
                            <Image src="/images/Admin/speaking.jpg" width={300} height={200} alt="Intro Image" />
                            <div className="action_btn_container">
                                <i className="fas fa-edit text-info"></i> &nbsp;
                                <i className="fas fa-trash-alt text-danger"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="question_container">
                                <div className="question_header">
                                    <p>Question</p>
                                </div>
                                <div className="question_content">
                                    <i>You&apos;re thinking of what to order in the cafe, so you go to the counter and talk to the person in the counter. What would you say?</i>
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
                .question_container {
                    border: 1px solid #000;
                    border-radius: 10px;
                    padding: 10px;
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