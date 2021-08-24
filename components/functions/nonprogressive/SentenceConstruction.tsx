import words from '../../../sample_data/activities.json'

const SentenceConstruction = () =>{
    const data = words.sentence_construction;
    return(
        <>
        <p>Part II: Sentence Construction. Make sentences using the vocabulary you have learned.</p>
        <div className="mt-3">
            { (data.length ===0) ? (<p>No Data</p>) : (
                data.map((value)=>(
                    <div className="row mb-3" key={value.id}>
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5><b>{value.word}</b></h5>
                                </div>
                                <div className="card-body">
                                    <textarea
                                        rows={5}
                                        className="w-100"
                                        placeholder="type your answer here..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )

            }
        </div>
        </>
    )
}
export default SentenceConstruction;