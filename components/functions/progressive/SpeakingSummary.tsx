
export default function SpeakingSummary() {

    //sample data
    const summaryList = [
        {
            id: 1,
            question: "What standards of behavior should teachers set?",
            status: [
                {
                    title: "pauses",
                    value: 5
                },
                {
                    title: "sentences",
                    value: 5
                }
            ]
        },
        {
            id: 2,
            question: "Which method of travel do you consider the safest?",
            status: [
                {
                    title: "pauses",
                    value: 4
                },
                {
                    title: "sentences",
                    value: 5
                }
            ]
        },
        {
            id: 3, 
            question: "Do you agree that we learn best from our mistakes?",
            status: [
                {
                    title: "pauses",
                    value: 3
                },
                {
                    title: "sentences",
                    value: 5
                }
            ]
        }
    ]

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    {summaryList.map((data, index) => (
                        <div key={index}>
                            <div className="list1 mb-3" >
                                {data.id}. {data.question}
                                <div className="d-grid">
                                    <button type="button" className="btn btn-success" id={`homework_start_recording_${index}`}>
                                        <i className="fas fa-microphone-alt"> Listen To Recording</i>
                                    </button>
                                </div>
                            </div>
                            <div className="d-grid">
                                <table className="table">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th>Item Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.status.map((item, idx) => (
                                             <tr key={idx}>
                                                <td># {item.title}</td>
                                                <td>{item.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-sm-12">
                    <div className="admin_note_area">
                        <h3><strong>ADMIN NOTES:</strong></h3>
                        <p>Hi, John. This is your first homework, but I can tell from this that you’re an amazing student. You are able to grasp how to use pauses and have used them consistently on all your answers. You also paid attention to how the proper pause beat works. Just keep practicing and you will get better and don’t forget pauses, you will be able to use this more in the future.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .admin_note_area {
                    border: 1px solid #000;
                    padding: 10px;
                }
            `}</style>
        </>
    )
}