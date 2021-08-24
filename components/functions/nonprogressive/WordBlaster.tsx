import { useEffect, useRef, useState } from 'react';
import items from '../../../sample_data/activities.json'
import { shuffle } from '../../../public/scripts/utils';
import React from 'react';

const WordBlaster = () =>{
    useEffect(()=>{shuffle(items.word_blaster)},[]);
    const [data, setData] = useState(items.word_blaster); 
    const [instruction, setInstruction] = useState("Make all the words on the board disapper before the time runs out. Once you start the warmup, your timer will start so ensure that you are ready. ");
    const [showStart, setShowStart]= useState("block");
    const [showQuestionItems, setShowQuestionItems]= useState("none");
    const [showCorrectAnswer, setShowCorrectAnswer] = useState("");
    const [count, setCount] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [timerProgress, setTimerProgress]= useState(0);
    const totalMinutes = 1200; //120 seconds = 2 minutes; setTimer is 100 ms not 1000 ms for smooth animation, therefore, 120 seconds will be multiplied by 10 => 1200
    const [deduct, setDeduct] = useState(false);
    const [stop, setStop] = useState(false);    
    const [questionItems, setQuestionItems] = useState([]);
    const [disableNext, setDisableNext] = useState(true);
    const shake = useRef(null);
    
    useEffect(()=>{
        let shuffleQuestionItems = [...questionItems];
        shuffle(shuffleQuestionItems);
        setQuestionItems(shuffleQuestionItems);
    },[]);
    
    data.map((value, index)=>{
        questionItems.push(
        <div key={index} className="my-2 text-center">
            <p>{value.definition}</p>
        </div>
        );
    });

    const startGame = () =>{
        setInstruction("This game will RUN IN TWO MINUTES. Click on the word or expression to make it disappear. If it matches the definition or description shown in a box below. If you click on the wrong answer three times in a row, the timer speed will increase.");
        setInitialTime(totalMinutes);
        setTimerProgress(100);
        setStartTimer(true);
        setShowStart("none");
        setShowQuestionItems("block");
    }

    useEffect(() => {
        if (initialTime > 0) {
          setTimeout(() => {
            //console.log("startTime, ", initialTime);
            if(stop){
                setInitialTime(0);
            }
            else{
                if(deduct){
                    setInitialTime(initialTime - 5); //5 seconds
                    setDeduct(false);
                }
                else setInitialTime(initialTime - 1);
            }
            
            
            setTimerProgress((initialTime/totalMinutes)*100);
          }, 100);
        }
    
        if (initialTime === 0 && startTimer) {
          setStartTimer(false);
        }
        //console.log(timerProgress);
    }, [initialTime, startTimer]); 

    const chosenAnswer = (index:number) =>{
        let correctAnswer = questionItems[count].props.children.props.children;
        
        if(data[index].definition === correctAnswer){
            setShowCorrectAnswer(data[index].words);
            let newData = [...data];
            newData[index]["styles"].visibility = "hidden";
            setData(newData);
            setDisableNext(false);            
        }
        else{ //wrong answer
            const clickedItem = document.getElementById("item"+index);
            clickedItem.classList.add("shake-element");
            let newData = [...data];
            newData[index]["styles"].color = "red";
            setData(newData); 
            setTimeout(()=>{
                newData[index]["styles"].color = "black";
                setData(newData);
                clickedItem.classList.remove("shake-element");
            },2000)

            //time deduction
            setDeduct(true);
        }
        
        //stop timer when activity is done:
        if(count >= (data.length-1)){ //count starts at zero
            setStop(true);
        }
        
    }
    const givenItems = (words:string, index:number, visible:any, color:string) =>{
        return(
            <div className="col-sm-12 col-md-12 col-lg-6 my-2" key={index}>
                <button className="btn btn-link" id={"item"+index} onClick={()=>chosenAnswer(index)} style={{visibility:visible, "color":color}}> {words} </button> 
            </div>
        )
    }
    const next = () =>{
        setCount(count + 1);
        setShowCorrectAnswer("");
        setDisableNext(true); 
    }
    return(
        <>
        <p className="mb-3">{instruction}</p>
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
        <div className="row">
            <div className="card mb-3">
                <div className="body row p-3">
                    {data.map((value,index)=>{
                        if(index > (index/2)){
                            return givenItems(value.words, index, value.styles.visibility, value.styles.color);
                        }
                        else{
                            return givenItems(value.words, index, value.styles.visibility, value.styles.color);
                        }
                        
                    })}
                </div>
            </div>
        </div>
        <div className="" style={{"display":showQuestionItems}}>
            <div className="card mb-3">
                <div className="card-body row">
                    <div className="col-lg-10 col-mb-12 col-sm-12">
                        <p className="text-success text-center">{showCorrectAnswer}</p>
                        {questionItems[count]}
                    </div>
                    
                    <div className="col-lg-2 col-mb-12 col-sm-12 next-btn" style={{display:showQuestionItems}} >
                        {count < questionItems.length - 1 && <button className="btn btn-dark w-10" onClick={() => next()} disabled={disableNext}>NEXT</button>}
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-dark" style={{"display":showStart}} onClick={()=>startGame()}>START</button>
        </>
    )
}
export default WordBlaster;