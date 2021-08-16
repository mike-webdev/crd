import { useState, useEffect } from 'react'
import WordBankModal from './WordBankModal'
import data from '../../../sample_data/lessonPreview.json'
import Image from "next/image"

export default function Vocabulary() {
    const [state, setState] = useState([])
    // sample data
    const vocabularyList = data.vocabularyList
    
    // function to show image details on click
    const showImage = (data) => {
        setState(data)
        let container = document.querySelector<HTMLElement>('.image_container')
        let showContainer = document.querySelector<HTMLElement>('.show_image_container')

        showContainer.style.display = 'block'
        container.style.display = 'none'
    }

    // function to close shown image
    const closeImage = () => {
        let container = document.querySelector<HTMLElement>('.image_container')
        let showContainer = document.querySelector<HTMLElement>('.show_image_container')

        showContainer.style.display = 'none'
        container.style.display = 'block'
    }

    let index = 0

    useEffect(() => {
        const prevButton = document.querySelector('#prev')
        const nextButton = document.querySelector('#next')

        prevButton.addEventListener('click', function() {
            displayItem(vocabularyList[--index])
        });

        nextButton.addEventListener('click', function() {
            displayItem(vocabularyList[++index])
        });
    }, [])

    // function to change contents
    const displayItem = (item) => {
        setState(item)
        const prevButton = document.querySelector('#prev') as HTMLButtonElement
        const nextButton = document.querySelector('#next') as HTMLButtonElement

        prevButton.disabled = index <= 0
        nextButton.disabled = index >= vocabularyList.length -1
    }
    
    return (
        <>
            <div className="image_container">
                {vocabularyList.map((data, index) => (
                    <div key={index} className="image_column">
                        <a onClick={() => showImage(data)} >
                            <Image src={data.image} width={300} height={200} layout="responsive" placeholder="blur" blurDataURL={data.image}  alt="Sample Image" />
                        </a>
                    </div>
                ))}
            </div>

            <div className="show_image_container">
                <div className="m-2 image_show_column">
                    <div style={{backgroundImage: 'url('+state['image']+')', width: "100%", height: "450px", backgroundSize: 'cover', backgroundPosition: "center center"}}>
                    </div>
                    {/* <img 
                        src={state['image']}
                        alt="Sample Image" 
                        className="mb-2"
                        style={{width: '100%', height: '450px'}}
                    /> */}
                </div>
                <div className="m-2 p-3 border border-muted image_show_column">
                    <div className="top_buttons">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#vocabularyWordBankModal">
                            <i className="fas fa-bookmark fa-2x my-2"></i>
                        </a>
                        <a href="#" onClick={() => closeImage()} className="float-end">
                            <i className="fas fa-times-circle fa-2x"></i>
                        </a>
                    </div>

                    <div className="image_content my-3">
                        <h5><strong>{state['name']} <i>(noun)</i></strong></h5>
                        <small>{state['text']}</small>
                        { state['note'] ? (
                            <>
                                <hr />
                                <p><strong><i>Cultural Note:</i></strong></p>
                                <small>{state['note']}</small>
                            </>
                            ) : ""
                        }
                    </div>
                    <div className="arrow_buttons"> 
                        <button className="btn btn-secondary" id="prev" data-id={state['id']}>
                            <i className="fas fa-angle-left icons"></i>
                        </button>
                        
                        <button className="btn btn-secondary" id="next" data-id={state['id']}>
                            <i className="fas fa-angle-right icons"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <WordBankModal text="vocabulary"/>
        </>
    )
}
