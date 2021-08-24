import { useState } from "react"
import MicRecorder from "mic-recorder-to-mp3"

export default function HomeworkRecording(props) {

    // sample data
    const recordingList = [
        {
            id: 1,
            content: "1. And according to a study done by the University of Arizona, they’ve discovered that your keyboards have hundreds of time more bacteria, per square inch, than a toilet seat."
        },
        {
            id: 2,
            content: "2. One of the simplest ways to cut down on the spread of germs is to use something called the vampire cough."
        },
        {
            id: 3,
            content: "3. If Sabre really cared about our well-being, they would set up hand de-sanitizing stations, a simple bowl at every juncture filled with dirt, vomit, fecal matter."
        }
    ]

    // for audio recording
    const [Mp3Recorder, setMp3Recorder] = useState(
        new MicRecorder({ bitRate: 128 })
    );

    // recording state
    const [recording, setRecording] = useState(false)

    // function to start audio recording
    const startRecordingAudio = () => {
        Mp3Recorder.start().then(() => {
        }).catch((e) => {
            console.error(e);
        });
    }

    // stop audio recording
    const stopRecordingAudio = (index, type) => {
        Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            // console.log(buffer, blob);
            const file = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });

            if (type === 'stop') {
                document.querySelector<HTMLElement>('#recording_action_btn_'+index).style.display = 'none'
                document.querySelector<HTMLElement>('#recording_upload_play_'+index).style.display = 'flex'
            }

            const player = new Audio(URL.createObjectURL(file));
            player.controls = true;
            document.querySelector('#playlist_'+index).innerHTML = ""
            document.querySelector('#playlist_'+index).appendChild(player);

        }).catch((e) => {
            console.error(e);
        });
    }

    // play uploaded audio recording
    const playUploadedRecording = (index) => {
        document.querySelector<HTMLElement>('#recording_upload_play_'+index).style.display = 'none'
        document.querySelector<HTMLElement>('#recording_upload_stop_'+index).style.display = 'flex'

        document.querySelector('#playlist_'+index).getElementsByTagName('audio')[0].play();
    }

    // stop uploaded audio recording
    const stopUploadedRecording = (index) => {
        document.querySelector('#playlist_'+index).getElementsByTagName('audio')[0].pause();

        document.querySelector<HTMLElement>('#recording_upload_stop_'+index).style.display = 'none'
        document.querySelector<HTMLElement>('#recording_upload_play_'+index).style.display = 'flex'
    }

    // pause uploaded audio recording
    const pauseUploadedRecording = (index) => {
        document.querySelector('#playlist_'+index).getElementsByTagName('audio')[0].pause();
        document.querySelector<HTMLButtonElement>('#pause_uploaded_'+index).style.display = 'none'
        document.querySelector<HTMLButtonElement>('#resume_uploaded_'+index).style.display = 'block'
    }

    // resume uploaded audio recording
    const resumeUploadedRecording = (index) => {
        document.querySelector('#playlist_'+index).getElementsByTagName('audio')[0].play();
        document.querySelector<HTMLButtonElement>('#pause_uploaded_'+index).style.display = 'block'
        document.querySelector<HTMLButtonElement>('#resume_uploaded_'+index).style.display = 'none'
    }

    // change uploaded audio recording
    const changeUploadedRecording = (index) => {
        document.querySelector<HTMLElement>('#recording_upload_stop_'+index).style.display = 'none'
        document.querySelector<HTMLElement>('#recording_upload_play_'+index).style.display = 'none'
        document.querySelector<HTMLButtonElement>("#recording_btn_"+index).style.display = 'block'
    }

    // start recording and show action buttons
    const startRecording = (index) => {
        startItemTimer(index)
        startRecordingAudio()
        document.querySelector<HTMLButtonElement>("#recording_btn_"+index).style.display = 'none' 
        document.querySelector<HTMLButtonElement>("#recording_action_btn_"+index).style.display = 'flex' 
    }

    // reset recording audio 
    const resetRecordingAudio = (index) => {
        stopRecordingAudio(index, 'reset')
        startRecordingAudio()
    }

    // stop recording after 2 minutes
    const startItemTimer = (index) => {
        setTimeout(() => {
            stopRecordingAudio(index, 'stop')
        }, 120000)
    }

    return (
        <>
            <div className="row">
                <p><strong>Recording</strong></p>
                <p>Listening to the following, and then record yourself repeating each sentence.</p>
                <p>Each recording should be one minute long or less.</p>
                <p>To start recording, click the button for start recording.</p>

                {recordingList.map((data, index) => (
                    <div className="col-sm-12 mb-5" key={index}>
                        <div>
                            <audio src="" controls style={{width: "100%"}} />
                        </div>
                        {props.isStarted === "false" ? (
                            <>
                                <p>{data.content}</p>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-outline-dark">
                                        <i className="fas fa-microphone-alt"> START RECORDING</i>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>{data.content}</p>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-outline-dark" id={`recording_btn_${index}`} onClick={() => startRecording(index)}>
                                        <i className="fas fa-microphone-alt"> START RECORDING</i>
                                    </button>
                                </div>
                                <div className="row" id={`recording_action_btn_${index}`} style={{display: 'none'}}>
                                    <div className="col-sm-8">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-danger stop_recording_btn" onClick={() => stopRecordingAudio(index, 'stop')}>
                                                <i className="fas fa-microphone-alt"> STOP RECORDING</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-dark">
                                                <i className="fas fa-pause"> PAUSE</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-dark" onClick={() => resetRecordingAudio(index)}>
                                                <i className="fas fa-undo"> RESET</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id={`recording_upload_play_${index}`} style={{display: "none"}}>
                                    <div className="col-sm-9">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary" onClick={() => playUploadedRecording(index)}>
                                                <i className="fas fa-microphone-alt"> PLAY UPLOADED RECORDING</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-dark" onClick={() => changeUploadedRecording(index)}>
                                                <i className="fas fa-undo"> CHANGE</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id={`recording_upload_stop_${index}`} style={{display: "none"}}>
                                    <div className="col-sm-6">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-danger" onClick={() => stopUploadedRecording(index)}>
                                                <i className="fas fa-microphone-alt"> STOP PLAYING UPLOADED RECORDING</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-dark" id={`pause_uploaded_${index}`} onClick={() => pauseUploadedRecording(index)}>
                                                <i className="fas fa-pause"> PAUSE</i>
                                            </button>
                                            <button className="btn btn-outline-dark" id={`resume_uploaded_${index}`} onClick={() => resumeUploadedRecording(index)} style={{display: "none"}}>
                                                <i className="fas fa-play"> RESUME</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-dark" onClick={() => changeUploadedRecording(index)}>
                                                <i className="fas fa-undo"> CHANGE</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div id={`playlist_${index}`} style={{display: 'none'}}></div>
                            </>
                        )}
                        
                    </div>
                ))}
            </div>
        </>
    )
}