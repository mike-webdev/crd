import {useEffect} from "react";

export default function TrueFalse(props) {
    
    // uncomment for instant checking

    // useEffect(()=>{
    //     //add class choice_true to correct answer
    //     if(props.correct_answer=="t" || props.correct_answer=="T" ){
    //         document.getElementById(props.id+"_true").classList.add("choice_true")
    //     }else{
    //         document.getElementById(props.id+"_false").classList.add("choice_true")
    //     }

    //     document.querySelectorAll("#"+props.id + ' .multi_choice').forEach(function(e){
    //         e.addEventListener('click', function() {

    //             var radio = document.getElementById(e.id) as HTMLInputElement;
    //             if(radio.checked){ 
    //                 var label = document.querySelector("#"+this.id+"+label") as HTMLInputElement;

    //                 if(this.classList.contains("choice_true")){
    //                     label.classList.add("correct");
    //                 }else{
    //                     label.classList.add("wrong");
    //                      //show correct answer box
    //                     if(props.answer_explanation){
    //                         var correct_answer =  document.querySelector("#"+props.id + " .choice_true+label") as HTMLInputElement;
    //                         correct_answer.classList.add("show_correct");
    //                         document.querySelector("#"+props.id+" .answer_explanation").classList.add('show');
    //                         document.getElementById(props.id+"_correct").innerHTML = correct_answer.textContent;
    //                     }
    //                 }

    //             }//if


    //             //disable choices after click
    //             document.querySelectorAll("#"+props.id + ' .multi_choice').forEach(function(e){
    //                 (document.getElementById(e.id) as HTMLInputElement).disabled = true;
    //             })

    //         })
    //     })

        


    //  }, [])

    return(
        <div className="true_false" id={props.id}>
            <div className="row">
                <p>{props.question}</p>

                <div className="d-flex justify-content-center">
                    <div className="form-group">
                        <input type="radio" name={props.id} id={props.id+"_true"} className="multi_choice"/>
                        <label htmlFor={props.id+"_true"}>TRUE</label>
                    </div>
                    <div className="form-group">
                        <input type="radio" name={props.id} id={props.id+"_false"} className="multi_choice"/>
                        <label htmlFor={props.id+"_false"}>FALSE</label>
                    </div>
                </div>

                {
                    props.answer_explanation && (
                        <div className="answer_explanation">
                            <p><b>CORRECT ANSWER: <span id={props.id+"_correct"}></span>.</b>{props.answer_explanation} </p>
                        </div>
                    )
                }
                    
            </div>{/*.row*/}
        </div>
    )
}