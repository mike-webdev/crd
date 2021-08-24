import Image from "next/image";

export default function Dialogue() {

    //sample data
    const contentList = [
        {
            title: "Sample Line",
            content: "Hi, may I take your order?"
        },
        {
            title: "Characters",
            content: "Cashier, Me"
        },
        {
            title: "Starting Character",
            content: "Cashier"
        },
        {
            title: "# of lines needed",
            content: 5
        }
    ]

    return (
        <>
            <h3 className="mt-4">Added Dialogues:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className="mx-2 text-center">Dialogue # 1</p>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".uploadPhotoModalShortAnswer">
                                Upload Photo
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
                        <div className="speaking_img_container">
                            <Image src="/images/Admin/dialogue.jpg" width={300} height={200} alt="Intro Image" />
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
                                    <h4>Sample Conversation</h4>
                                </div>
                                <div className="question_content">
                                    <small><i>Cashier:</i> Hello there, may I take your order?</small><br/>
                                    <small><i>Me:</i> Yes. Can I have iced cafe latte?</small><br/>
                                    <small><i>Cashier:</i> Sure thing, what size would you like your drink to be?</small><br/>
                                    <small><i>Me:</i> It’s my first time trying coffee. Will ordering a large one too much?</small><br/>
                                    <small><i>Cashier:</i> Not really. But if you think you can’t handle it, go for the regular.</small><br/>
                                    <small><i>Me:</i> Okay, regular it is then.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <i className="fas fa-edit fa-lg text-info"></i> &nbsp;&nbsp;
                            <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {contentList.map((data, index) => (
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
                .question_container {
                    border: 1px solid #000;
                    border-radius: 10px;
                    padding: 10px;
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
                    right: 20px; 
                }
            `}</style>
        </>
    )
}