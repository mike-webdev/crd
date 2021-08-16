import questions from '../../../sample_data/activities.json';
import ReactPlayer from "react-player";
import { useRef, useState } from 'react';
import Essay from '../../items/Essay';
const LessonPreview = () =>{
    const data = questions.minttube_lesson_preview;
    const [state, setState] = useState({
        playing: false,
    });
    const { playing } = state;
    
    const playerRef = useRef(null);
    const src_video = "https://youtu.be/L-NSPhLHIBA";
    return(
        <>
        <div className="row">
            <div className="col-9">
                <p>Watch the video, and answer the guided questions.</p>
            </div>
            <div className="col-3">
                <button className="btn-dark">Connect with teacher</button>
            </div>
        </div>
        
        <ReactPlayer
            ref={playerRef}
            controls
            url={src_video}
            playing={playing}
            className="w-100 h-500"
        />
        <h6 className="my-3"><b>Guide Questions</b></h6>
        {(data.length === 0)? (<p>No Data</p>):(
            data.map((value,index)=>(
                <Essay
                    key={index}
                    rows={5}
                    index={index}
                    question={value.question}
                />
            ))
        )}
        
        </>
    )    
}
export default LessonPreview;