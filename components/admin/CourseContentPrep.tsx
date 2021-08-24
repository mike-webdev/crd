import {useEffect} from "react"

export default function CourseContentPrepCustom() {

    useEffect(() => {
        document.getElementById('courseDuration').addEventListener("change", function(){
            var val = this as HTMLInputElement
            if(val.value == "2"){
                document.getElementById("setDays").classList.remove("d-none")
            }else{
                document.getElementById("setDays").classList.add("d-none")

            }
            
        })
    
      }, [])

    
    return (
        <>
            <div className="specialization-content p-2"><h5>Specialization Content</h5></div>
            <h5 className="mt-3 mb-3">Course Content Prep</h5> 

            <label className="p-2" htmlFor="number-of-courses">Number of Courses under this specialization:</label>
            <input className="form-control" type="text" id="numberOfCourses" />

            <label className="p-2 mt-3" htmlFor="course-category">Course Category:</label>
            <input className="form-control" type="text" id="courseCategory" placeholder="Regular" disabled/>
            {/* <select id="courseCategory" className="form-select" aria-label="Default select example">
                <option defaultValue="1">Regular</option>
                <option defaultValue="2">Experimental</option>
            </select> */}
            {/* <div className="type-details mt-3">
                <b>Regular Courses</b> are courses based on our existing courses. {"\n"}<b>Experimental Courses</b> are courses that are new to the students. {"\n"}<p className="chosenCategory">You selected <b>Regular</b>.</p>
            </div> */}

            <label className="p-2 mt-3" htmlFor="course-category">Course Duration:</label>
            <select id="courseDuration" className="form-select" aria-label="Default select example" >
                <option value="1">Weekly</option>
                <option value="2">Custom Days</option>
            </select>

            <div id="setDays" className="set-days d-none">
                <label className="p-2 mt-3" htmlFor="set-days">Set Days:</label>
                <input className="form-control" type="text" id="setDays" />
            </div>

            <div className="type-details mt-3 mb-3">
                Your selected course duration takes place every week. The deadlines for activities must be submitted within the week.
            </div>

            <div className="save-details">
                <button type="button" className="btn btn-light mb-2 mt-3">Save Details</button>
            </div>

            <style jsx>{`

                .type-details {
                    white-space: pre-wrap;
                    background: #C4C4C4;
                    border-radius: 20px;
                    padding: 10px 10px;
                }

                .specialization-content {
                    background: #000;
                    color: #fff;
                    padding: 10px 0;
                    width: 75%;
                }

                .btn {
                    background-color: #87CEEB; 
                    width: 386px;
                    height: 74pxpx;
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