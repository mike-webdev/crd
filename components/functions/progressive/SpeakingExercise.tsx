import speech from 'speech-synth'
import SpeakingSummary from './SpeakingSummary'
import { useEffect, useState } from "react"
import MicRecorder from "mic-recorder-to-mp3"
import ConnectTeacher from '../../sections/ConnectTeacher'
import SubmitModal from '../modals/SubmitModal'

export default function SpeakingExercise(props) {

    let idx = 0
    let instructionText = ""

    // sample data
    if (props.type === "homework") {
        instructionText = "Answer the questions below. To start, click ‘Start Recording’. You have a minute to answer each question. Once it lapses, the recording will automatically stop."
    } else {
        instructionText = "Answer the question as they appear, click Next to go to the next item. To start, click ‘Start Recording’. You have ten minutes to answer each question."
    }

    const questionList = [
        {
            id: 1,
            question: "What standards of behavior should teachers set?"
        },
        {
            id: 2,
            question: "Which method of travel do you consider the safest?"
        },
        {
            id: 3, 
            question: "Do you agree that we learn best from our mistakes?"
        }
    ]

    // for timer
    const totalMinutes = 600000;
    const [initialTime, setInitialTime] = useState(0);
    const [timerProgress, setTimerProgress]= useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [stop, setStop] = useState(false);
    const [deduct, setDeduct] = useState(false);

    // audio recording recorded state
    const [records, updateRecords] = useState([])

    // recording state
    const [recording, setRecording] = useState(false)

    // for audio recording
    const [Mp3Recorder, setMp3Recorder] = useState(
        new MicRecorder({ bitRate: 128 })
    );

    // function to start timer
    const startSessionTimer = () =>{
        setInitialTime(totalMinutes);
        setTimerProgress(100);
        setStartTimer(true);
    }

    // useEffect(() => {
        if (initialTime > 0) {
          setTimeout(() => {
            if(!stop){
                setInitialTime(0);
            }
            else{
                if(deduct){
                    setInitialTime(initialTime - 1);
                    setDeduct(false);
                }
                else setInitialTime(initialTime - 1);
            }
            // setTimerProgress((initialTime/totalMinutes)*100);
          }, 100);
        }
    
        if (initialTime === 0 && startTimer) {
          setStartTimer(false);
        }
    // }, [initialTime, startTimer, stop, deduct]);

    // chapter test start audio recording
    const startRecording = (index) => {
        const startBtn = document.querySelector<HTMLButtonElement>('#homework_start_recording_'+index)
        const stopRecordingContainer = document.querySelector<HTMLElement>('#stop_recording_container_'+index)

        startBtn.style.display = 'none'
        stopRecordingContainer.style.display = 'block'

        startItemTimer(index)
        startRecordingAudio()
    }

    // function to start recording for the test part
    const startTestRecording = (type) => {
        const itemContainer = document.querySelector<HTMLElement>('.speaking_item_container')
        const testStart = document.querySelector<HTMLElement>('.test_start_container')
        const testNext = document.querySelector<HTMLElement>('.test_next_container')
        
        itemContainer.classList.remove('disable_question')
        testStart.style.display = 'none'
        testNext.style.display = 'block'

        startSessionTimer()
        startRecordingAudio()
    }

    // function to stop recording for the test part
    const stopTestRecording = () => {
        const insideContainer = document.querySelector('.speaking_inside_container_'+props.type)
        const submitButton = insideContainer.getElementsByTagName("button")[3]
        
        stopRecordingAudio()
        // submitButton.click()
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
    const stopRecordingAudio = (index=null) => {
        setRecording(false)

        Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            // console.log(buffer, blob);
            const file = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });

            updateRecords([...records, window.URL.createObjectURL(file)])

            if (index !== null) {
                document.querySelector<HTMLButtonElement>('#homework_stop_recording_'+index).classList.add('disable_question')
            }

        }).catch((e) => {
            console.error(e);
        });
    }
    
    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    // next item after 1 minute
    const startItemTimer = (index) => {
        const stopBtn = document.querySelector<HTMLButtonElement>('#homework_stop_recording_'+index)

        setTimeout(() => {
            stopRecordingAudio()
            stopBtn.classList.add('disable_question')
        }, 60000)
    }
    
    // function for next item
    const nextItem = () => {
        showNextItem(questionList[++idx])
    }

    // function to change content to next item
    const showNextItem = (item) => {
        const itemQuestion = document.querySelector<HTMLElement>('#item_question_'+props.type)
        const nextButton = document.querySelector<HTMLButtonElement>('.arrow_next_button_'+props.type)
        const submitButton = document.querySelector<HTMLButtonElement>('.submit_answer_btn_'+props.type)
        const stopButton = document.querySelector<HTMLButtonElement>('.stop_recording_btn_'+props.type)
        const actionButtons = document.querySelector<HTMLButtonElement>('#speaking_action_button_'+props.type)
        itemQuestion.innerText = item.question
        
        if (idx >= questionList.length -1) {
            nextButton.classList.add('hide')
            stopButton.classList.add('show')
            submitButton.classList.add('show')
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

    return (
        <>
            {props.type === "homework" && (
                <p><strong>Part B. Speaking Homework</strong></p>
            )}
            <div className={`container speaking_inside_container_${props.type}`} style={{display: 'none'}}>
                <div className="row">
                    <div className="col-sm-12">
                        <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(instructionText)}></i> &nbsp;
                        <span>       
                            {instructionText}
                        </span>
                    </div> 
                    <div className="col-sm-12 mt-3">
                        {props.type === "test" ? (
                            <>
                                <div className="timer mb-3 row">
                                    <div className="col-1" style={{"width":"10px"}}>
                                        <i className="fas fa-clock" style={{"display":"inline-block"}}></i>
                                    </div>
                                    <div className="col-11 mt-1">
                                        <div className="progress">
                                            <div className="progress-bar" 
                                            role="progressbar" 
                                            aria-valuenow={100} 
                                            aria-valuemin={0} 
                                            aria-valuemax={100}
                                            style={{"width": timerProgress+"%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h5>Questions:</h5>
                                <div className="speaking_item_container disable_question">  
                                    <h2 id={`item_question_${props.type}`}>{questionList[0].question}</h2>
                                </div>
                                <div className="speaking_action_button mt-4" id={`speaking_action_button_${props.type}`}>
                                    <div className="test_start_container">
                                        <button type="button" className="btn btn-md btn-dark" id={`stop_btn_${props.type}`} onClick={() => startTestRecording(props.type)}>Start Recording <i className="fas fa-caret-right"></i></button>
                                    </div>
                                    <div className="test_next_container" style={{display: 'none'}}>
                                        <button type="button" className={`btn btn-md btn-dark float-end arrow_next_button_${props.type}`} onClick={() => nextItem()}>Next Question <i className="fas fa-caret-right"></i></button>
                                        <div className="row justify-content-between mt-4 homework_buttons_container">
                                            <button type="button" className={`btn btn-md btn-dark col-sm-4 stop_recording_btn_${props.type}`} onClick={() => stopTestRecording()} style={{display: 'none'}}><i className="fas fa-microphone-alt"> Stop Recording</i></button>
                                            <button type="button" className={`btn btn-md btn-dark col-sm-4 float-end submit_answer_btn_${props.type}`} style={{display: 'none'}} data-bs-toggle="modal" data-bs-target="#ieltstestSubmitModal"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                                        </div>
                                        <div>
                                            { recording && (
                                                <span className={`text-danger record_progress my-2`}><i className="fas fa-record-vinyl"> recording in progress</i></span>
                                            )}
                                        </div>
                                    </div>
                                </div>  
                            </>
                        ) : (
                            <>
                                {questionList.map((data, index) => (
                                    <div className="list1 mb-3" key={index}>
                                        {data.id}. {data.question}
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-outline-dark" id={`homework_start_recording_${index}`} onClick={() => startRecording(index)}>
                                                <i className="fas fa-microphone-alt"> START RECORDING</i>
                                            </button>
                                        </div>
                                        <div className="row" id={`stop_recording_container_${index}`} style={{display: 'none'}}>
                                            <div className="col-sm-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-danger stop_recording_btn" id={`homework_stop_recording_${index}`} onClick={() => stopRecordingAudio(index)}>
                                                        <i className="fas fa-microphone-alt"> STOP RECORDING</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="speaking_action_button my-4" id={`speaking_action_button_${props.type}`}>
                                    <button type="button" className="btn btn-md btn-dark" data-bs-toggle="modal" data-bs-target="#ieltshomeworkSubmitModal"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                                    {/* <button type="button" className="btn btn-md btn-dark" onClick={() => showSpeakingSummary()}><i className="fab fa-telegram-plane"></i> Submit Answers</button> */}
                                    <button type="button" className="btn btn-md btn-dark float-end">Start Lesson 2 <i className="fas fa-caret-right"></i></button>
                                </div>  

                                <ConnectTeacher connect="true" />
                            </>                            
                        )}
                    </div>
                </div>
                
                {/* <button className="btn btn-sm btn-success my-2 audio_start_btn" id={`start_btn_${props.type}`} onClick={() => startRecordingAudio()}>Start</button> */}
                
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

            <SubmitModal course="ielts" type={props.type} />

            <style jsx>{`
                .speaking_item_container {
                    position: relative;
                    border: 1px solid #000;
                    width: 100%;
                    height: 200px;
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
                .disable_question {
                    pointer-events: none;
                    opacity: 0.4;
                }
            `}</style>
        </>
    )
}