import * as React from 'react'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react';
import data from '../../../sample_data/activities.json'
import {shuffle} from '../../../public/scripts/utils'
import annotatedData from '../../../public/scripts/annotations.w3c.json'

declare global {
    interface Window {
        Annotorious: any;
    }
}

const BindingBox = () =>{
    const [questions, setQuestions] = useState(data.binding_box);
    const [count, setCount] = useState(0);
    // const [buttonColor, setButtonColor] = useState("btn-gray");
    //const buttonColor = useRef(null);
    const [answerText, setAnswerText] = useState("text-black");
    const [disabled, setDisabled] = useState(false);
    const [showNext, setShowNext] = useState("none");
    const [showCheck, setShowCheck] = useState("block");
    const items:any = [];
    const [choices, setChoices] = useState([]);
    //const [buttonChoices, setButtonChoices] = useState([]);
    

    useEffect(()=>{
        //shuffle(questions); 
        // questions.map((value)=>{
        //     let shuffledChoices = [...questions];
        //     shuffledChoices.choices = shuffle(value.choices); 
        //     setQuestions(shuffledChoices);
        // });
        // let shuffledItems = [...questions];
        // shuffle(shuffledItems); //shuffle sentence with blank items
        // setQuestions(shuffledItems); 
        
    },[]) //execute once
    questions.map((value,index)=>{
        let phrase = value.sentence.split("_");
        items.push(
            <li className="my-2" key={index}>
            {phrase[0]} 
            <input 
            className={"form-control w-25 mx-1 "+answerText} 
            style={{"display":"inline-block"}} 
            type="text"
            
            value={value.answer}
            disabled={true}
            /> 
            {phrase[1]}
            </li>
        );
        //let buttonChoices:any = [];
        let buttons:any = [];
        value.choices.map((choice,i)=>{
            // return buttonChoices.push(
            //     <button className={"btn m-1 w-100 btn-gray"} key={i} onClick={() => chosenAnswer(choice, index, i)} disabled={disabled} >{choice}</button>
            // );
            
            buttons.push(
                {
                    "value" : choice,
                    "buttonColor" : "btn-gray"
                }
            );
            
        });
        //setButtonChoices(buttons);
        
        // console.log(buttons);
        //choices.push(buttonChoices);
        choices.push(buttons);
        
    });
    
    
    
    
    const [finalAnswer, setFinalAnswer] = useState(0);
    const [specificValue, setSpecificValue] = useState(0);
    const [annotatedObject, setAnnotatedObject] = useState("");
    const chosenAnswer = ( answer:string , id:number, choiceIndex: number ) =>{
        let addAnswer = [...questions];
        addAnswer[id]["answer"] = answer;
        setQuestions(addAnswer);
        setFinalAnswer(id); //get the id of the <choice> array
        setSpecificValue(choiceIndex); //get the index of the chosen answer

        //show the selected item in the picture
        annotatedData.map(selectedItem=>{
            if(answer === selectedItem.value){
                setAnnotatedObject(selectedItem.id);
            setTimeout(() => {
                let getObject = document.querySelectorAll(`g[data-id="`+selectedItem.id+`"]`);
                getObject[0].classList.add('selected');
                
 
                //ADDED THIS
                var x = document.querySelector('.selected rect').getAttribute("x"); 
                var y = document.querySelector('.selected rect').getAttribute("y"); 

                let element = document.querySelector('.selected');
                let elementText = document.querySelector('.selected text');
                if(elementText === null){
                    element.innerHTML += '<text x="'+x+'" y="'+y+'">'+answer+'</text>';
                }
                else{
                    elementText.innerHTML = answer;
                }
                
              }, 500);
            }
            else {
                setTimeout(() => {
                    let getObject = document.querySelectorAll(`g[data-id="`+selectedItem.id+`"]`);
                    getObject[0].classList.remove('selected');
                    
                }, 500);
            }
            
            }
        )
    }

    const checkAnswer = () =>{
        
        let data = [...questions];
        let answer = data[finalAnswer]["answer"];
        let chosenBtn = [...choices];
        //choices[id][choiceIndex]
        if(data[finalAnswer]["key"] === answer){
            setAnswerText("text-success");
            chosenBtn[finalAnswer][specificValue].buttonColor = "btn-success";
            setChoices(chosenBtn);
        }else{
            setAnswerText("text-danger");
            chosenBtn[finalAnswer][specificValue].buttonColor = "btn-danger";
            setChoices(chosenBtn);
        }
        setDisabled(true);
        setShowNext("block");
        setShowCheck("none");
        
    }

    const next = () =>{
        setCount(count + 1);
        setDisabled(false);
        setShowNext("none");
        setShowCheck("block");
        setAnswerText("text-black");
        let chosenBtn = [...choices];
        chosenBtn[finalAnswer][specificValue].buttonColor = "btn-gray";
        setChoices(chosenBtn);

        setTimeout(() => {
            let getObject = document.querySelectorAll(`g[data-id="`+annotatedObject+`"]`);
            getObject[0].classList.remove('selected');
        }, 500);
    }

    useEffect(()=>{
        
        setTimeout(() => {
            var anno = window.Annotorious.init({
                image: "raven_cafe",
                readOnly: true,
              });
              anno.loadAnnotations('/scripts/annotations.w3c.json');
              //disable displaying the binding box when selected on the image
              anno.on('selectAnnotation', function(data) {
                let element = document.querySelector(`g[data-id="`+data.id+`"]`);
                element.classList.remove('selected');
              });
        }, 100);
      },[]);


 return(
    <>
    <Head>
        <link href="/css/bindingbox.min.css" rel="stylesheet"></link>
        <script async type="text/javascript" src="/scripts/annotorious.min.js"></script>
    </Head>
    <p>Complete the sentences by choosing the correct word <span className="float-end"></span></p>
    <div className="row mt-5">
        <div className="col-lg-4 col-md-12 col-sm-12">
        {choices[count].map((btn,i)=>(
            <button className={"btn m-1 w-100 "+btn.buttonColor} key={i} onClick={() => chosenAnswer(btn.value, count, i)} disabled={disabled} >{btn.value}</button>
        ))}
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12  binding-box ">
            <img id="raven_cafe" src="/images/raven_cafe.png" alt=""/>
        </div>
    </div>
    <div className="row mt-5 fillintheblank">
        <div className="col-12">
            <div className="card p-2">
                <ul>
                {items[count]}
                </ul>
                
                <button className="btn btn-sm btn-dark" style={{width: "5em", display: showCheck}} onClick={()=>checkAnswer()} >Check</button>
                <div className="col-12 next-btn" style={{display:showNext}} >
                    {/* hide next button if we are at the last element */}
                    {count < items.length - 1 && <button className="btn btn-dark w-10" onClick={() => next()}>next</button>}
                </div>
            </div>
        </div>
    </div>
    </>
 )
}


export default BindingBox;