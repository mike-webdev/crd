import {useEffect} from "react";
import Image from 'next/image'

export default function MultipleChoice(props) {
    var choices=[];
    if(props.choices){
        choices = Array.from(props.choices);
    }
    
    var question="";
    if(props.question){
        question = props.question;
    }

    //convert blanks to input field
    if(question.includes("__")){
        question = question.split("__").join("<input type='text'/>");
    }
  

    useEffect(()=>{

        document.querySelectorAll("#"+props.id + ' .multi_choice').forEach(function(e){
            e.addEventListener('click', function() {

                var radio = document.getElementById(e.id) as HTMLInputElement;
                if(radio.checked){
                    var label = document.querySelector("#"+this.id+"+label") as HTMLInputElement;
                 
                    if(this.classList.contains("choice_true")){
                        label.classList.add("correct");
                        if(props.img_src){
                            document.querySelector("#"+props.id+"_img").classList.add("correct-overlay");
                        }
                    }else{
                        label.classList.add("wrong");
                        
                        if(props.img_src){
                            document.querySelector("#"+props.id+"_img").classList.add("wrong-overlay");
                        }else{
                            //show correct answer box
                            var correct_answer =  document.querySelector("#"+props.id + " .choice_true+label") as HTMLInputElement;
                            correct_answer.classList.add("show_correct");
                           
                        }

                        if(props.answer_explanation){
                            document.querySelector("#"+props.id+" .answer_explanation").classList.add('show');
                            document.getElementById(props.id+"_correct").innerHTML = correct_answer.textContent;
                        }
                    }
                }

                if(props.img_src){
                    //show definition
                    document.querySelector("#"+props.id+ ' .definition_container').classList.add("show");
                }
                else if(props.question){
                    //put chosen answer to blanks
                    // var ques = document.querySelector("#"+props.id+ " .question input") as HTMLInputElement;
                    // ques.value = label.textContent;

                    document.querySelectorAll("#"+props.id+ " .question input").forEach(function(e){
                        var a = e as HTMLInputElement;
                        a.value = label.textContent;
                    })
                }
                

                //disable choices after click
                document.querySelectorAll("#"+props.id + ' .multi_choice').forEach(function(e){
                    (document.getElementById(e.id) as HTMLInputElement).disabled = true;
                })
              
                
            });
        });

    })

    return (
        <div className="multiple_choice" id={props.id} key={props.id}>
            {/* <p>{props.instruction}</p> */}

            {/* MULTIPLE CHOICE WITH IMAGE */}
            {
                props.img_src ? (
                <div className="row multi_img">
                    <div className="col-sm-6 position-relative" id={props.id+"_img"}>
                        <div className="overlay"></div>
                        {/* <img src={props.img_src} alt=""  /> */}
                        <Image src={props.img_src}  layout='responsive' height="427" width="285" alt="Image"/>
                        <i className="fas fa-check-circle text-success hide"></i>
                        <i className="fas fa-times-circle text-danger hide"></i>
                    </div>

                    <div className="col-sm-6 d-flex flex-column justify-content-center position-relative text-center">
                        {
                            choices.map((value:any, index:number) => {
                                return(
                                <>
                                    {
                                        value.definition && (
                                            <div className="definition_container">
                                                <h3>{value.choice} {value.identifier}</h3>
                                                <p>{value.definition}</p>
                                            </div>
                                        )
                                    }
                                    
                                    <div className="form-group">
                                        <input type="radio" name={props.id} id={"mc_"+props.id+"_"+index} className={value.is_correct == "1" ? ("choice_true multi_choice") : "multi_choice" } key={index+1}/>
                                        
                                        <label htmlFor={"mc_"+props.id+"_"+index}>{value.choice}</label>
                                    </div>

                                </>
                                )
                                
                            })
                        }

                        

                    </div>
                </div>//.multi_img


                ):(
                    // FOR MULTIPLE CHOICE WITH BLANK 
                    <div className="row">
                        <div className="multi_blank">
                            <p dangerouslySetInnerHTML={{__html: question}} className="question"></p>

                            <div className="d-flex justify-content-between">
                                {
                                    choices.map((value:any, index:number) => {
                                        return(
    
                                            <div className="form-group" key={index}>
                                                <input type="radio" name={props.id} id={"mc_"+props.id+"_"+index} className={value.is_correct == "1" ? ("choice_true multi_choice") : "multi_choice" } key={index+1}/>
                                                
                                                <label htmlFor={"mc_"+props.id+"_"+index}>{value.choice}</label>
                                            </div>
      
                                        )
                                    })
                                }
                            </div>

                            {
                                props.answer_explanation && (
                                    <div className="answer_explanation">
                                        <p><b>CORRECT ANSWER: <span id={props.id+"_correct"}></span>.</b>{props.answer_explanation} </p>
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>//.row
                )
            }


                
        </div>//.multiple_choice
    )
}


{/* <MultipleChoice 
    id
    **instruction
    **img_src
    choices={[
        {
            "choice":"", 
            "definition":"", 
            "is_correct":"1/0/*or don't insert*"
        }
        
    ]}

    // FOR Multiple Choice with blank
    <MultipleChoice 
    id
    **instruction
    question
    choices={[
        {
            "choice":"",  
            "is_correct":"1/0/*or don't insert*"
        }
        
    ]
    }

    ** - optional/ for different multiple choice functions
/> */}