import { useState, useRef } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [state, setState] = useState({
    playing: false,
  });
  const { playing } = state;

  const playerRef = useRef(null);

  //DATA
  const src_video = "https://youtu.be/zMlI6D34BJY";
  const transcript = [
    {
      id: 1,
      start: 0,
      end: 3,
      sentence: "Hello and welcome to another lesson on IELTS.",
    },
    {
      id: 2,
      start: 4,
      end: 9,
      sentence:
        "This is Steve and today we are going to talk about another important topic.",
    },
    {
      id: 3,
      start: 10,
      end: 15,
      sentence:
        "This time we will look at Pause and why it is so useful in IELTS speaking.",
    },
    {
      id: 4,
      start: 16,
      end: 20,
      sentence: "Pausing is one characteristic of speech.",
    },
    {
      id: 5,
      start: 21,
      end: 25,
      sentence: "It is a temporary stop in clauses and sentences.",
    },
    {
      id: 6,
      start: 26,
      end: 32,
      sentence: "There are three types of pauses: short, medium, and long.",
    },
    {
      id: 7,
      start: 33,
      end: 37,
      sentence:
        "A short pause is used in thought groups or in cutting a long sentence.",
    },
    {
      id: 8,
      start: 38,
      end: 48,
      sentence:
        "A medium pause is used after a sentence and a long pause is used at the end of a paragraph or to give emphasis to a statement.",
    },
  ];
  //END OF DATA

  const onProgress = (changeState) => {
    var curTime = playerRef.current.getCurrentTime();
    // console.log(curTime);
    setState({ ...state, ...changeState });

    transcript.forEach(function (item: any, index: number) {
      if (curTime >= item.start && curTime <= item.end) {
        document.getElementById(item.id.toString()).classList.add("current");


        var myElement = document.getElementById("child" + item.id);
        var topPos = myElement.offsetTop;
        document.getElementById('transcript').scrollTop = topPos - 50;



      } else {
        document.getElementById(item.id.toString()).classList.remove("current");
      }
    });
  };

  function JumpTo(start: number) {
    playerRef.current.seekTo(start);
    setState({ playing: true });
  }




  return (
    <>
      <ReactPlayer
        ref={playerRef}
        controls
        url={src_video}
        playing={playing}
        onProgress={onProgress}
        className="w-100 h-500"
      />

      <h5 className="mt-4">Transcript</h5>
      <div className="transcript" id="transcript">
        {transcript.map((item: any, index: number) => {
          return (
            <p key={index} id={"child" + item.id}>
              <span
                id={item.id}
                className="sentence"
                onClick={() => JumpTo(item.start)}
              >
                {item.sentence}
              </span>
            </p>
          );
        })}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-dark">Book a Teacher</button>
      </div>

      <style jsx>{`
        .transcript {
          height: 150px;
          overflow-y: scroll;
          border: 1px solid #dadada;
          padding: 10px 5px;
          position: relative
        }
        .sentence:hover {
          cursor: pointer;
          background: rgba(126, 126, 126, 0.4);
        }

        .current {
          background: yellowgreen;
          color: #000;
        }
      `}</style>
    </>
  );
}
