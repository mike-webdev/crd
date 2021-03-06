import { useEffect, useState } from 'react'
import WordBankModal from './WordBankModal'
import data from '../../../sample_data/lessonPreview.json'
import speech from 'speech-synth'

export default function VocabularyKey() {
    const [content, setContent] = useState([])

    // sample data
    const vocabularyList = data.keyVocabularyList

    // function to close shown content
    const closeImage = () => {
        document.querySelector<HTMLElement>('.content_container').style.display = 'block'
        document.querySelector<HTMLElement>('.show_content_container').style.display = 'none'
    }

    // function to show individual contents
    const showContent = (data) => {
        setContent(data)
        document.querySelector<HTMLElement>('.content_container').style.display = 'none'
        document.querySelector<HTMLElement>('.show_content_container').style.display = 'block'
    }

    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    let index = 0

    useEffect(() => {
        const prevButton = document.querySelector('#vocabPrev')
        const nextButton = document.querySelector('#vocabNext')

        prevButton.addEventListener('click', function() {
            displayItem(vocabularyList[--index])
        });

        nextButton.addEventListener('click', function() {
            displayItem(vocabularyList[++index])
        });
    }, [])

     // function to change contents
     const displayItem = (item) => {
        setContent(item)
        const prevButton = document.querySelector('#vocabPrev') as HTMLButtonElement
        const nextButton = document.querySelector('#vocabNext') as HTMLButtonElement

        prevButton.disabled = index <= 0
        nextButton.disabled = index >= vocabularyList.length -1
    }

    return (
        <>
            <div className="content_container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {vocabularyList.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100" style={{backgroundColor: "#C4C4C4"}}>
                                <div className="card-body text-center py-5">
                                    <p className="card-text">
                                        <a onClick={() => showContent(data)} style={{cursor: 'pointer'}}>{data.name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="show_content_container" style={{display: 'none'}}>
                <div className="row">
                    <div className="col-sm-12">   
                        <div className="card" style={{backgroundColor: "#C4C4C4"}}>
                            <div className="row content_header">
                                <div className="col-sm-11">
                                    <div className="bg-dark">
                                        <div className="text-light px-2 title-box">
                                            {content['name']} (noun) &nbsp;
                                            <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(content['name'])}></i>
                                            <div className="float-end">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#keyvocabularyWordBankModal">
                                                    <i className="fas fa-bookmark fa-lg" style={{cursor: "pointer"}}></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <small className="px-2">{content['pronounce']}</small>
                                    <p className="px-2">{content['description']}</p>
                                </div>
                                <div className="col-sm-1 px-4 py-2">
                                    <a href="#" onClick={() => closeImage()} className="float-end text-danger">
                                        <i className="fas fa-times-circle fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title">Examples:</h5>
                                <ul className="list-group list-group-flush">
                                    {content['sample'] && content['sample'].map((data, i) => (
                                        <p key={i}>
                                            {data}
                                        </p>
                                    ))}
                                </ul>
                            </div>

                            <div className="arrow_buttons" style={{right: '10px'}}> 
                                <button className="btn btn-secondary" id="vocabPrev" data-id={content['id']}>
                                    <i className="fas fa-angle-left icons"></i>
                                </button>
                                
                                <button className="btn btn-secondary" id="vocabNext" data-id={content['id']}>
                                    <i className="fas fa-angle-right icons"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <WordBankModal text="keyvocabulary"/>

            <style jsx>{`
                .content_header .title-box, 
                .content_header .title-box {
                    padding: 10px 0;
                    color: #000;
                }
                .title-box{
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    )
}