import {useEffect} from "react"

export default function SecondaryDetails() {

    useEffect(() => {
        document.getElementById('timelineType').addEventListener("change", function(){
            var val = this as HTMLInputElement
            if(val.value == "1"){
                document.getElementById("selected").classList.remove("d-none")
                document.getElementById("selectedType").innerHTML = "Self-paced"
            }else if(val.value == "2"){
                document.getElementById("selected").classList.remove("d-none")
                document.getElementById("selectedType").innerHTML = "Time-locked"
            }else{
                document.getElementById("selected").classList.remove("d-none")
                document.getElementById("selectedType").innerHTML = "Continuous"
            }
            
        })
    
      }, [])

    return (
        <>
            <div className="specialization-plan p-2"><h5>Specialization Plan</h5></div> 
            <h5 className="mt-3 mb-3">Secondary Details</h5>

            <label className="p-2" htmlFor="list-overview">List Overview:</label>
            <textarea className="form-control" id="listOverview"></textarea>
            
            <label className="p-2 mt-3" htmlFor="list-overview">Specialization Tags: <i>(seperate tags by comma)</i></label>
            <input className="form-control" type="text" id="specializationTags" />

            <label className="p-2 mt-3" htmlFor="course-timeline-type">Course Timeline Type:</label>
            <select id="timelineType" className="form-select" aria-label="Default select example">
                <option value="1">Self-paced</option>
                <option value="2">Time-locked</option>
                <option value="3">Continuous</option>
            </select>
            <br />
            <div className="type-details">
                <b>Self-paced Courses</b> allow the student to complete the course anytime. {"\n"}<b>Time-locked Courses</b> archives the course after a set period of time. {"\n"}<b>Continuous Courses</b> are courses that can stop for a set period of time then restart again. {"\n"}
                <span id="selected" className="d-none">You selected <b id='selectedType'></b>.</span>
            </div>

            <div className="save-details">
                <button type="button" className="btn btn-light mb-2 mt-3"><b>Save Details</b></button>
            </div>

            <style jsx>{`

                .type-details {
                    white-space: pre-wrap;
                    background: #C4C4C4;
                    border-radius: 20px;
                    padding: 10px 10px;
                }

                .specialization-plan {
                    background: #000;
                    color: #fff;
                    padding: 10px 0;
                    width: 75%;
                }

                .btn {
                    background-color: #87CEEB; 
                    width: 90%;
                    height: 50px;
                    border-radius: 10px;
                    margin-left: auto; 
                    margin-right: auto;
                    display: block;
                }
                
                `}
            </style>

        </>
    )
}