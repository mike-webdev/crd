
export default function NormalTable() {
    
    //sample data
    const tableContentList = [
        {
            id: 1, 
            content: [
                {
                    id: 1,
                    title: "given answer # 1:",
                    content: "Short Pauses"
                },
                {
                    id: 2,
                    title: "correct answer # 1a:",
                    content: "used in thought groups or in cutting a long sentence. It can be done after a noun phrase, verb phrase, and clause or before a prepositional phrase"
                },
                {
                    id: 3,
                    title: "correct answer # 1b:",
                    content: "1 beat"
                }
            ]
        },
        {
            id: 2, 
            content: [
                {
                    id: 4,
                    title: "correct answer # 2a:",
                    content: "Medium Pauses"
                },
                {
                    id: 5,
                    title: "given answer # 2:",
                    content: "separates ideas from one sentence to another and gives the listener a chance to process your ideas"
                },
                {
                    id: 6,
                    title: "correct answer # 2b:",
                    content: "2 beats"
                }
            ]
        },
        {
            id: 3, 
            content: [
                {
                    id: 7,
                    title: "correct answer # 3a:",
                    content: "Long Pauses"
                },
                {
                    id: 8,
                    title: "correct answer # 3b:",
                    content: "predes or follows a statement that is significant. This type of pause may also be used to add emphasis to your points."
                },
                {
                    id: 9,
                    title: "given answer # 3:",
                    content: "3 beats"
                }
            ]
        }
    ]

    return (
        <>
            <h3 className="mt-4">Added Table:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="float-end mx-2">
                                <button className="btn btn-secondary">delete all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            <small>heading 1</small>
                                            <div className="float-end">
                                                <i className="fas fa-edit text-info"></i> &nbsp;
                                                <i className="fas fa-trash-alt text-danger"></i>
                                            </div>
                                            <div className="table_content_container">
                                                <span>Type of Pauses</span>
                                            </div>
                                        </th>
                                        <th>
                                            <small>heading 2</small>
                                            <div className="float-end">
                                                <i className="fas fa-edit text-info"></i> &nbsp;
                                                <i className="fas fa-trash-alt text-danger"></i>
                                            </div>
                                            <div className="table_content_container">
                                                <span>Definition</span>
                                            </div>
                                        </th>
                                        <th>
                                            <small>heading 3</small>
                                            <div className="float-end">
                                                <i className="fas fa-edit text-info"></i> &nbsp;
                                                <i className="fas fa-trash-alt text-danger"></i>
                                            </div>
                                            <div className="table_content_container">
                                                <span>Beat Equivalent</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableContentList.map((data, index) => (
                                        <>
                                            <tr>
                                                {data.content.map((item, idx) => (
                                                    <>
                                                        <td>
                                                            <small>{item.title}</small>
                                                            <div className="float-end">
                                                                <i className="fas fa-edit text-info"></i> &nbsp;
                                                                <i className="fas fa-trash-alt text-danger"></i>
                                                            </div>
                                                            <div className="table_content_container">
                                                                <span>{item.content}</span>
                                                            </div>
                                                        </td>
                                                    </>
                                                ))}
                                                
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .table_content_container {
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                    padding: 10px;
                    height: 150px;
                }
                tr td {
                    width: 33.3%;
                }
            `}</style>
        </>
    )
}