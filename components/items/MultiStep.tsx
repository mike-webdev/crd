import {useEffect, useState} from "react";

export default function MultipleStep(props) {
    const [count, setCount] = useState(0);
    let totalItems = props.children.length;

    return(
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="md-stepper-horizontal black" id="multiple-choice-stepper">
                    {
                        Array(totalItems).fill(1).map((value,index) =>
                        {
                            let active="";
                            if(index === count){
                                active="active";
                            }
                            else "";
                            return(
                            <div className={"md-step "+active} >
                                <div className="md-step-circle" id={"md-step-"+(index+1)}><span>{index+1}</span></div>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            )
                        }
                        )
                    }
                    </div>
                </div>
                <div className="col-12 content">
                    {props.children[count]}
                </div>
                <div className="col-12 next-prev-btns mt-3">
                {count > 0 && <button className="btn btn-dark w-10 float-end" style={{"marginLeft": "0.5em"}} onClick={() => setCount(count - 1)}><i className="fas fa-angle-double-left icons"></i></button>}

                {/* hide next button if we are at the last element */}
                {count < totalItems- 1 && <button className="btn btn-dark w-10 float-end" onClick={() => setCount(count + 1)}><i className="fas fa-angle-double-right icons"></i></button>}
                </div>
            </div>
        </div>
    )
}