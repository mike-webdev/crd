import * as React from "react"
import { useState } from "react"
import MicRecorder from "mic-recorder-to-mp3"

export default function SpeakingSetupModal(props) {

    // for audio recording
    const [Mp3Recorder, setMp3Recorder] = useState(
        new MicRecorder({ bitRate: 128 })
    );
    
    // start audio recording
    const startRecordingAudio = () => {
        Mp3Recorder.start().then(() => {
        }).catch((e) => {
            console.error(e);
        });
    }

    // stop audio recording
    const stopRecordingAudio = () => {
        Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            // console.log(buffer, blob);
            const file2 = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });

            const player2 = new Audio(URL.createObjectURL(file2));
            player2.controls = true;
            document.querySelector('#'+props.type+'_playlist_trial').innerHTML = ""
            document.querySelector('#'+props.type+'_playlist_trial').appendChild(player2);

            document.querySelector<HTMLButtonElement>('#'+props.type+'_start_btn').style.display = 'none'
            document.querySelector<HTMLButtonElement>('#'+props.type+'_stop_btn').style.display = 'none'
            document.querySelector<HTMLButtonElement>('#'+props.type+'_play_btn').style.display = 'inline'
        }).catch((e) => {
            console.error(e);
        });
    }

    // play recorded audio
    const playTrialAudioRecording = () => {
        document.querySelector('#'+props.type+'_playlist_trial').getElementsByTagName('audio')[0].play()
    }
 
    // function to change homework content and open speaking exercise
    const changeContent = () => {
        const writingContainer = document.querySelector('.writing_container')
        const speakingContainer = document.querySelector('.speaking_container')
        const buttonContainer = document.querySelector('.homework_buttons_container')
        const insideContainer = document.querySelector('.speaking_inside_container_'+props.type)
        const testContainer = document.querySelector('.test_speaking_container')

        const startRecordButton = insideContainer.getElementsByTagName("button")[0]
        const startItemTimerButton = insideContainer.getElementsByTagName("button")[1]

        if (props.type === "homework") {
            writingContainer.classList.add('hide')
            speakingContainer.classList.add('show')
            buttonContainer.classList.add('hide')
        } else {
            testContainer.classList.add('hide')
        }

        insideContainer.classList.add('show')
        if (props.type === "test") {
            startRecordButton.click()
            startItemTimerButton.click()
        }
    }

    // function to show test mic action buttons
    const showTestMic = () => {
        document.querySelector('#'+props.type+'_action_buttons').classList.add('show')
        document.querySelector('#test_mic_'+props.type).classList.add('hide')
    }

    return (
        <>
            <div className="modal fade" id={`${props.type}SetupModal`} tabIndex={-1} aria-labelledby={`${props.type}SetupModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="py-5 text-center">
                                <div className="py-3">
                                    <h3><strong>
                                        {props.type === "homework" ? 'PREHOMEWORK SETUP' : 'PRETEST SETUP'}
                                        
                                    </strong></h3>
                                    <p className="float-start">Microphone:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Microsoft Lifechat</option>
                                    </select>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn-secondary form-control" id={`test_mic_${props.type}`} onClick={() => showTestMic()}>
                                            <i className="fas fa-headset"> Test Microphone</i> 
                                        </button>
                                        <div className="row justify-content-center" id={`${props.type}_action_buttons`} style={{display: 'none'}}>
                                            <div className="col-sm-12">
                                                <button type="button" className="btn btn-sm btn-success" id={`${props.type}_start_btn`} onClick={() => startRecordingAudio()}>Start</button>
                                                <button type="button" className="btn btn-sm btn-danger" id={`${props.type}_stop_btn`} onClick={() => stopRecordingAudio()}>Stop</button>
                                                <button type="button" className="btn btn-sm btn-primary" id={`${props.type}_play_btn`} onClick={() => playTrialAudioRecording()} style={{display: 'none'}}>Play Recording</button>
                                            </div>
                                            <div className="col-sm-12 mt-3">
                                                <div id={`${props.type}_playlist_trial`} style={{display: 'none'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn-secondary form-control" data-bs-dismiss="modal" 
                                            onClick={() => changeContent()}
                                        >
                                            <i className="fas fa-check-circle"> Finish Setup</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}