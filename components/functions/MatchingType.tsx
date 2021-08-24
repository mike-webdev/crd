import {useEffect} from "react";

export default function MatchingType(props) {
    var quest=[];
    var questions = Array.from(props.questions);
    // quest = value.question.split("__").join("<input type='text'/>");

    questions.map((value:any, index:number) => {
        var q = value.question.split("__").join("<input type='text'/>");
        quest.push(q)
    })

    useEffect(()=>{

// ongoing: disable choice if already chosen

        var question = document.querySelectorAll('.question');
        var q_id = "";
        question.forEach(function(e){
            e.addEventListener('click', function() {
                //set clicked question
                q_id = e.id;

                //enable choices after choosing a question
                question.forEach(function(a){
                    a.classList.remove("highlight")
                })
                
                e.classList.add("highlight")
                document.querySelectorAll(".matching_type .multi_choice").forEach(function(choices){
                    var choice = choices as HTMLInputElement
                    choice.disabled = false
                })
            })
        })

        document.querySelectorAll(".matching_type .multi_choice").forEach(function(choices){
            var choice = choices as HTMLInputElement
            choice.disabled = true

            choice.addEventListener('click', function(){
                // put answer to question blank
                var clicked = this as HTMLInputElement
                var label = document.querySelector("#"+this.id+"+label") as HTMLInputElement;
                var a = document.querySelector("#"+q_id+".highlight input") as HTMLInputElement;
                a.value = label.textContent;
                
                // this.classList.add('disabled')
                question.forEach(function(e){
                    e.addEventListener('click', function() {
                        clicked.disabled = true;
                    })
                })
            })

        })


    }, [])
    
    return(
        <div className="row matching_type" id={props.id}>
            <div className="col-sm-9 question_container">
                {
                    quest.map((value:any, index:number) => {
                        return(
                            <p className="question" id={"q"+index+1} dangerouslySetInnerHTML={{__html: value}} key={index+1}></p>

                        )
                    })
                }
            </div>

            <div className="col-sm-3 multi_blank">
            {
                    questions.map((value:any, index:number) => {
                        return(
                            // <p className="question">{value.answer}</p>
                            <div key={index}>
                                <input type="radio" name={props.id} id={"mc_"+props.id+"_"+index} className="multi_choice" key={index+1}/>
                                
                                <label htmlFor={"mc_"+props.id+"_"+index}>{value.answer}</label>
                            </div>

                        )
                    })
                }
            </div>

            
        </div>//.row
    )
}