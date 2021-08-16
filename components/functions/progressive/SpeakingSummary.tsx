
export default function SpeakingSummary() {

    //sample data
    const summaryList = [
        {
            id: 1,
            file: "210714_Park_John_Homework_Q1.mp3",
            duration: "1 minute",
            replay: 1
        },
        {
            id: 2,
            file: "210714_Park_John_Homework_Q2.mp3",
            duration: "1 minute",
            replay: 2
        },
        {
            id: 3,
            file: "210714_Park_John_Homework_Q3.mp3",
            duration: "1 minute",
            replay: 3
        }
    ]

    return (
        <>
            <div className="row">
                <p><strong>Time consumed: 10 minutes</strong></p>
                <div className="col-sm-12">
                    <ul className="list-group list-group-flush">
                        {summaryList.map((data, index) => (
                            <li className="list-group-item recordings_list" key={index}>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p>{data.file}</p>
                                        <small>{data.duration}</small><br />
                                        <small>replay/s: {data.replay}</small>
                                    </div>
                                    <div className="col-sm-7">
                                        <button type="button" className="btn btn-dark btn-sm float-end px-4"><i className="fas fa-play"> Play Recording</i></button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-12">
                    <div className="admin_note_area">
                        <h3><strong>ADMIN NOTES:</strong></h3>
                        <p>Hi, John, you are slower by two minutes but faster than 60% of people who took this activity. To improve your time, I suggest that you try typing your answers first and practice. Once you feel more confident, you can try retaking this homework. Best wishes to you and may your attempts be fruitful.</p>
                    </div>
                </div>
                <div className="col-sm-12">
                    <button type="button" className="btn btn-sm btn-secondary mt-2 float-end">RETAKE HOMEWORK</button>
                </div>
            </div>

            <style jsx>{`
                .recordings_list {
                    background-color: #999999;
                    margin-bottom: 3%;
                }
                .recordings_list p {
                    border-bottom: 5px solid #000;
                }
                .recordings_list button {
                    margin-top: 5%;
                }
                .admin_note_area {
                    border: 1px solid #000;
                    padding: 10px;
                }
            `}</style>
        </>
    )
}