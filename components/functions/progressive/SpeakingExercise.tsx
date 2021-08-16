import Countdown from 'react-countdown'
import speech from 'speech-synth'
import SpeakingSummary from './SpeakingSummary'
import { useEffect, useState } from "react"
import MicRecorder from "mic-recorder-to-mp3"

export default function SpeakingExercise(props) {

    let index = 0

    // sample data
    const speechText = "This is a speaking test. Answer the question that will appear on the screen. You will be given a minute to answer before the question changes. Your answers are automatically recorded. Please take note that if you exit, refresh or go to another page, you would need to retake your homework again."
    const questionList = [
        {
            id: 1,
            question: "1. Do you have a hobby?"
        },
        {
            id: 2,
            question: "2. What is your favourite color?"
        },
        {
            id: 3, 
            question: "3. What kind of clothes do you usually wear?"
        }
    ]

    // audio recording recorded state
    const [records, updateRecords] = useState([])

    // count question replay state
    const [replay, setReplay] = useState(0)

    // recording state
    const [recording, setRecording] = useState(false)

    // for audio recording
    const [Mp3Recorder, setMp3Recorder] = useState(
        new MicRecorder({ bitRate: 128 })
    );

    // chapter test start audio recording
    const startRecording = (index) => {
        const startBtn = document.querySelector<HTMLButtonElement>('#start_recording_btn_'+index)
        const stopBtn = document.querySelector<HTMLButtonElement>('#stop_recording_btn_'+index)
        
        startBtn.style.display = 'none'
        stopBtn.style.display = 'block'

        startRecordingAudio()
    }

    // function to start audio recording
    const startRecordingAudio = () => {
        setRecording(true)
        Mp3Recorder.start().then(() => {
        }).catch((e) => {
            console.error(e);
        });
    }

    // stop audio recording
    const stopRecordingAudio = (type=null) => {
        setRecording(false)
        Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            // console.log(buffer, blob);
            const file = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });

            updateRecords([...records, window.URL.createObjectURL(file)])

            if (type === 'replay') {
                updateRecords([])
            }

        }).catch((e) => {
            console.error(e);
        });
    }

    //count question replay and start recording
    const replayRecording = (index) => {
        setReplay(replay+1)
        stopRecordingAudio('replay')
        startRecordingAudio()
    }
    
    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    // next item after 1 minute
    const startItemTimer = () => {
        setTimeout(() => {
            nextItem()
            if (index < questionList.length -1) {
                startItemTimer()
            }
        }, 60000)
    }
    
    // function for next item
    const nextItem = () => {
        showNextItem(questionList[++index])
    }

    // function to change content to next item
    const showNextItem = (item) => {
        const itemQuestion = document.querySelector<HTMLElement>('#item_question_'+props.type)
        const nextButton = document.querySelector<HTMLButtonElement>('.arrow_next_button_'+props.type)
        const actionButtons = document.querySelector<HTMLButtonElement>('#speaking_action_button_'+props.type)
        itemQuestion.innerText = item.question

        if (index >= questionList.length -1) {
            nextButton.classList.add('hide')
            actionButtons.classList.add('show')
        }
    }

    // function to submit and show homework summary 
    const showSpeakingSummary = () => {
        const insideContainer = document.querySelector<HTMLElement>('.speaking_inside_container_'+props.type)
        const summaryContainer = document.querySelector<HTMLElement>('.speaking_summary_container')
        
        if (props.type === "homework") {
            insideContainer.classList.add('hide')
            summaryContainer.classList.add('show')
        }
    }

    // Render a countdown
    const renderer = ({ minutes, seconds, completed }) => {
        return <span>{minutes}:{seconds}</span>
    }

    return (
        <>
            <div className={`container speaking_inside_container_${props.type}`} style={{display: 'none'}}>
                <div className="row">
                    <div className="speaking_countdown">
                        <p className="float-end">
                            <strong id="timer">
                                <Countdown 
                                    date={Date.now() + 600000} 
                                    renderer={renderer}
                                />
                            </strong>
                        </p>
                    </div>
                    <div className="col-sm-12">
                        <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(speechText)}></i> &nbsp;
                        <span>       
                            {speechText}
                        </span>
                    </div> 
                    <div className="col-sm-12">
                        {props.type === "test" ? (
                            <div className="speaking_item_container">  
                                <h2 id={`item_question_${props.type}`}>{questionList[0].question}</h2>
                                <div className="test_action_btn_container">
                                    <i className={`fas fa-angle-double-right fa-lg float-end arrow_next_button_${props.type}`} style={{cursor: 'pointer', marginTop: '9%'}} onClick={() => nextItem()}></i>
                                </div>
                            </div>
                        ) : (
                            <>
                                {questionList.map((data, index) => (
                                    <div className="speaking_item_container mb-3" key={index}>
                                        <i className="fas fa-reply fa-lg" style={{cursor: 'pointer'}} title="replay" onClick={() => replayRecording(index)}></i>
                                        <h2>{data.question}</h2>
                                        <div className="action_btn_container">
                                            <button type="button" className="btn btn-sm btn-success" id={`start_recording_btn_${index}`} onClick={() => startRecording(index)}>Start Recording</button>
                                            <button type="button" className="btn btn-sm btn-danger" id={`stop_recording_btn_${index}`} style={{display: 'none'}} onClick={() => stopRecordingAudio()}>Stop Recording</button>
                                        </div>
                                    </div>
                                ))}
                            </>                            
                        )}
                    </div>
                </div>
                
                <button className="btn btn-sm btn-success my-2 audio_start_btn" id={`start_btn_${props.type}`} onClick={() => startRecordingAudio()}>Start</button>
                <button className="btn btn-sm btn-secondary timer_start_btn" id={`timer_btn_${props.type}`} onClick={() => startItemTimer()}>Start Timer</button>
                <div className="speaking_action_button mt-4" id={`speaking_action_button_${props.type}`} style={{display: 'none'}}>
                    <button type="button" className="btn btn-md btn-secondary" id={`stop_btn_${props.type}`} onClick={() => stopRecordingAudio()}>STOP RECORDING</button>
                    <button type="button" className="btn btn-md btn-secondary float-end" onClick={() => showSpeakingSummary()}>SUBMIT & SAVE</button>
                </div>    
                
                <div>
                    { recording && (
                        <p className={`text-danger record_progress my-2`}><i className="fas fa-record-vinyl"> recording in progress</i></p>
                    )}
                </div>

                <div className="mt-3">
                    {records.map((data, idx) => (
                        <div key={idx}>
                            <audio src={data} controls preload={'metadata'} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="speaking_summary_container">
                <SpeakingSummary />
            </div>

            <style jsx>{`
                .speaking_item_container {
                    position: relative;
                    border: 1px solid #000;
                    width: 100%;
                    height: 250px;
                    padding: 10px;
                }
                .speaking_item_container h2 {
                    text-align: center;
                    margin-top: 10%;
                }
                .speaking_summary_container {
                    display: none;
                }
                .audio_start_btn,
                .timer_start_btn {
                    display: none;
                }
                .action_btn_container {
                    position: absolute;
                    top: 80%;
                    left:15px;
                }
                .test_action_btn_container {
                    position: absolute;
                    top: 85%;
                    right:15px;
                }
                .disable_section {
                    pointer-events: none;
                    opacity: 0.4;
                }

                @media (max-width: 1024px) {
                    .speaking_item_container {
                        height: 200px;
                    }
                }

                @media (max-width: 768px) {
                    .speaking_item_container {
                        height: 220px;
                    }
                }

                @media (max-width: 480px) {
                    .speaking_item_container {
                        height: 180px;
                    }
                }
            `}</style>
        </>
    )
}