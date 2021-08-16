import data from '../../../sample_data/lessonPreview.json'
import speech from 'speech-synth'
import Image from "next/image"

export default function WordBank(props) {

    // sample data
    const wordBankList = data.wordBankList
    const mintubeWordBank = data.mintubeWordBank

    // function to show cultural note
    const showCulturalNotes = (data) => {
        const itemContainer = document.querySelector<HTMLElement>('#item_container_'+data.id)
        itemContainer.style.zIndex = '5000';
    }

    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    { props.course === "mintography" ? (
                        <>  
                            {wordBankList.map((data, index) => (
                                <button className={index !== 0 ? "nav-link" : "nav-link active"} id={`nav-${data.name}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${data.name}`} type="button" role="tab" aria-controls={`nav-${data.name}`} aria-selected={index !== 0 ? "true" : "false"} key={index}>{data.name}</button>
                            ))}
                        </>
                    ) : (
                        <>
                            {mintubeWordBank.map((data, index) => (
                                <button className={index !== 0 ? "nav-link" : "nav-link active"} id={`nav-${data.name}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${data.name}`} type="button" role="tab" aria-controls={`nav-${data.name}`} aria-selected={index !== 0 ? "true" : "false"} key={index}>{data.name}</button>
                            ))}
                        </>
                    )}
                    
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                { props.course === "mintography" ? (
                    <>
                        {wordBankList.map((data, index) => (
                            <div className={index !== 0 ? "tab-pane fade" : "tab-pane fade show active"} id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`} key={index}>
                                { data.name === "Vocabulary" ? (
                                    <>
                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                            {data.content.map((item) => (
                                                <div className="col" key={item.id}>
                                                    <div className="card h-100" id={`item_${item.id}`}>
                                                        <div className="course_note_container text-center" id={`item_container_${item.id}`}>
                                                            <div className="p-3">
                                                                <p><strong><i>Cultural Note:</i></strong></p>
                                                                <small>{item.note}</small>
                                                            </div>
                                                        </div>
                                                        <Image src={item.image} width={300} height={200} layout="responsive" alt="Sample Image" />
                                                        <div className="card-body text-center">
                                                            <h5 className="card-title">
                                                                <i>{item.name} <strong>(noun)</strong></i> &nbsp; 
                                                                <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(item.name)}></i>
                                                            </h5>
                                                            <small className="card-text">{item.text}</small>
                                                            
                                                            { item.note && (
                                                                <div className="note_button">
                                                                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => showCulturalNotes(item)}>View Cultural Note</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}                                               
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {data.content.map((item) => (
                                            <div className="row mb-3" key={item.id}>
                                                <div className="col-sm-12">
                                                    <Image src={item.image} width={300} height={150} layout="responsive" alt="Sample Image" />
                                                    <p className="text-center text-light bg-dark py-2">{item.name}</p>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        {item.items.map((text) => (
                                                            <div className="content_column" key={text.id}>
                                                                <button type="button" className="btn btn-lg btn-outline-dark btn-block word_button">{text.text}</button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {mintubeWordBank.map((data, index) => (
                            <div className={index !== 0 ? "tab-pane fade" : "tab-pane fade show active"} id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`} key={index}>
                                {data.content.map((item, idx) => (
                                    <div className="card mb-3" style={{maxWidth: "100%"}} key={idx}>
                                        <div className="row g-0">
                                            <div className="col-md-4 text-center py-2 px-2" style={{backgroundColor: "#c4c4c4"}}>
                                                <i>{item.name} <strong>(noun)</strong></i> &nbsp;
                                                <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(item.name)}></i>
                                                <br/>
                                                <small>{item.pronounce}</small>
                                                <p className="mt-2">{item.description}</p>
                                            </div>
                                            <div className="col-md-8 py-2 px-2">
                                                <div className="card-body">
                                                    <h5 className="card-title"><strong>Examples:</strong></h5>
                                                    {item.sample.map((sample, i) => (
                                                        <p className="card-text" key={i}>
                                                            {sample}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </>
                )}
            </div>

            <style jsx>{`
                .course_note_container {
                    position: absolute;
                    z-index: -1000;
                    background-color: #fff;
                    margin: 10px;
                    width: 92%;
                    height: 94%;
                }
            `}</style>
        </>
    )
}