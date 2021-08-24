
export default function ChoiceTable() {

    //sample data
    const questionList = [
        {
            title: "Question # 1",
            content: "This criterion measures the number of times you stopped or paused while speaking or explaining"
        },
        {
            title: "Correct Answer # 1",
            content: "Fluency"
        },
        {
            title: "Question # 2",
            content: "It is the speed at which a person speaks."
        },
        {
            title: "Correct Answer # 2",
            content: "Speech Rate"
        },
        {
            title: "Question # 3",
            content: "It is the logical arrangement of an answer and how all its parts fit together."
        },
        {
            title: "Correct Answer # 3",
            content: "Grammatical Range"
        },
        {
            title: "Question # 4",
            content: "It is used to perform various functions and are tested in the speaking test especially in Part 3."
        },
        {
            title: "Correct Answer # 4",
            content: "Pronounciation"
        },
        {
            id: 9,
            title: "Question # 5",
            content: "It is affected by the proper articulation of individual sounds."
        },
        {
            id: 10,
            title: "Correct Answer # 5",
            content: "Intelligibility"
        }
    ]

    const optionList = [
        {
            title: "Option A",
            content: "Lexical Resource"
        },
        {
            title: "Option B",
            content: "Coherence"
        },
        {
            title: "Option C",
            content: "Functional Language"
        }
    ]

    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className="mx-2 text-center">Table Group</p>
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

                    <div className="card_custom_header">
                        <div className="row mt-2">
                            <div className="col-sm-3">
                                <p className="mx-2 text-center">Additional Options</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {optionList.map((data, index) => (
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
            `}</style>
        </>
    )
}