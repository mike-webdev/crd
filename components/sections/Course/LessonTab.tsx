import Link from "next/link"

export default function LessonTab(props, children) {
    var breadcrumbs =[];
    if(props.breadcrumbs){
        breadcrumbs = Array.from(props.breadcrumbs);
    }
    
    const is_active = props.is_active;
    return (
<>
    <div
        className={is_active == 1 ? "show active tab-pane fade" : "tab-pane fade"  }
        id={props.id}
        role="tabpanel"
        aria-labelledby={props.id+"-tab"}
        >
            
            <div className="row mb-3">
                {
                breadcrumbs &&
                    <div className="col-sm-9">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        {
                                breadcrumbs.map((value, index) => {
                                    return(
                                    <li key={index} className="breadcrumb-item"><Link href="#"><a>{value}</a></Link></li>
                                    )
                                })
                            }
                            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">{props.title}</li>
                        </ol>
                    </nav>
                    </div>
                }
                <div className="col-sm-3">
                <div className="float-end">
                    <Link href="#"><a className="btn btn-dark"
                    ><i className="fas fa-angle-double-left icons"></i
                    ></a></Link>
                    <Link href="#"><a className="btn btn-dark"
                    ><i className="fas fa-angle-double-right icons"></i
                    ></a></Link>
                </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-7">
                <h4>{props.title}</h4>
                </div>
                {props.learn_with_teacher_btn == 1 && 
                    <div className="col-sm-5">
                        <div className="float-end">
                            <button className="float-end btn btn-dark">
                            Learn with a Teacher
                            </button>
                        </div>
                    </div>
                }
                {props.learning_goals && 
                    <div className="row mb-2">
                        <div className="col-8 border">
                        <p><b>Learning Goals:</b> {props.learning_goals}</p>
                        </div>
                        <div className="col-4 border">
                        <p><b>Keywords:</b> {props.keywords}</p>
                        </div>
                    </div>
                }
            </div>

            {props.is_done == 1 &&
                <div className="row justify-content-between">
                    <p className="col-sm-6">Instructions here...</p>
                    <p className="col-sm-6 text-end"><b>Score:</b> 10/10</p>
                </div>
            }
           {props.children}
    </div>

           
            
</>
    )
}