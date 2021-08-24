import Link from 'next/link'
import Image from 'next/image'
import data from "../../sample_data/proStartedCourse.json"
import ConnectTeacher from './ConnectTeacher'

export default function CourseBannerButton(props) {

    // sample data
    const teacherList = data.teacherList

    // show start course button
    const showStartBtn = () => {
        document.querySelector<HTMLButtonElement>(".banner_inital_btn").style.display = 'none'
        document.querySelector<HTMLButtonElement>(".banner_start_btn").style.display = 'block'
    }

    // redirect to started courses page
    const startCourse = (redirect) => {
        window.location.href = redirect
    }

    return (
        <>
            {props.isStarted === "false" && (
                <>
                    <div className="banner_inital_btn">
                        {props.course === "IELTS" ? (
                            <>
                                {props.courseType === "SELF-PACED" ? (
                                    <>
                                        <div className="col-sm-12">
                                            <div className="d-grid">
                                                <button type="button" className="btn btn-dark btn-lg py-2 text-center" onClick={() => showStartBtn()}>
                                                    Enroll Now<br/>
                                                    <small>starts current date</small>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : props.courseType === "TIME-LOCKED" ? (
                                    <>
                                        <div className="col-sm-12">
                                            <div className="d-grid">
                                                <button type="button" className="btn btn-dark btn-lg py-2 text-center" onClick={() => showStartBtn()}>
                                                    Enroll Now<br/>
                                                    <small>starts at August 1, 2021 - ends at December 31, 2021</small>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-dark btn-lg py-2" onClick={() => showStartBtn()}>
                                                        Enroll Now<br/>
                                                        <small>June 2021- October 31, 2021</small>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-dark btn-lg py-2" data-bs-toggle="modal" data-bs-target="#enrollLaterModal">
                                                        Enroll Later<br/>
                                                        <small>choose a different timeline</small>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="col-sm-12">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-dark btn-lg py-2 text-center" onClick={() => showStartBtn()}>
                                            Enroll Now<br/>
                                            <small>starts current date</small>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
                
            <div className="banner_start_btn" style={{display: 'none'}}>
                <div className="col-sm-12">
                    <div className="d-grid text-center">
                        <button type="button" className="btn btn-success py-2 mb-2" data-bs-toggle="modal" data-bs-target="#assignTeacherModal">
                            START COURSE
                        </button>
                        {props.course === "IELTS" && (
                            <>
                                {props.courseType === "SELF-PACED" ? (
                                    <p></p>
                                ) : props.courseType === "TIME-LOCKED" ? (
                                    <p>Course ends at December 31, 2021</p>
                                ) : (
                                    <p>Your selected timeline is: June 1, 2021 - October 31, 2021</p>
                                )}
                            </>
                        )}       
                    </div>
                </div>
            </div>

            {props.isStarted === "true" && (
                <>
                    <div className="col-sm-12">
                        <div className="d-grid text-center">
                            <button type="button" className="btn btn-success py-2 mb-2">RESUME COURSE</button>
                        </div>
                    </div>

                    <ConnectTeacher connect="false"/>
                </>
            )}  

            {/* modal for enroll later choices */}
            <div className="modal fade" id="enrollLaterModal" tabIndex={-1} aria-labelledby="enrollLaterModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="float-end p-2">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center" id="enroll_modal">
                            <h4><strong>TIMELINES FOR IELTS STEP 1:</strong></h4>
                            <div className="row justify-content-center">
                                <div className="col-sm-10">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light border border-dark mb-2">December 1, 2021 - April 30, 2022</button>
                                        <button type="button" className="btn btn-light border border-dark mb-2">June 1, 2022 - September 30, 2022</button>
                                        <button type="button" className="btn btn-light border border-dark">November 1, 2022 - March 30, 2022</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal to assign teacher */}
            <div className="modal fade" id="assignTeacherModal" tabIndex={-1} aria-labelledby="assignTeacherModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="float-end p-2">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center" id="teacher_modal">
                            <h3>
                                <strong style={{borderBottom: '5px solid #000'}}>ASSIGN TEACHERS TO YOUR COURSE</strong>
                            </h3>
                            <p><strong>Disclaimer:</strong> The teachers you choose from this page are the only ones who will interact with you during lessons.</p>
                            <h5><strong>Top Rated Teachers for IELTS Step 1</strong></h5>
                            <div className="row">
                                {teacherList.map((data, index) => (
                                    <div className="col-sm-3 clearfix" key={index}>
                                        <div className="card mb-3" onClick={() => startCourse(props.redirect)}>
                                            {/* <div className="card-img-top">
                                                <Image src={data.image} width={150} height={150} layout="responsive" alt="Image" />
                                            </div> */}
                                            <img className="card-img-top" src={data.image} alt="Card image cap" />
                                            <div className="status_container">
                                                {data.status === "online" ? (
                                                    <i className="fas fa-circle fa-lg text-success"></i>
                                                ) : (
                                                    <i className="fas fa-circle fa-lg text-secondary"></i>
                                                )}
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title"><strong>{data.name}</strong></h5>
                                                <div className="row justify-content-center">
                                                    <div className="col-sm-8 mb-3">
                                                        <div className="d-grid">
                                                            <p className="card-text" style={{borderBottom: '3px solid #000'}}>
                                                                <i className="fas fa-star colorMeOrange"></i> {data.rate} &nbsp;&nbsp;&nbsp;
                                                                <i className="fas fa-clipboard"></i> {data.points}
                                                            </p>
                                                            <div className="course_container">
                                                                {data.course}
                                                            </div>
                                                        </div>
                                                    </div>
                                    
                                                    <div className="col-sm-12">
                                                        <div className="d-grid">
                                                            <a href="#" className="btn btn-sm btn-primary">View Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .modal-body#enroll_modal {
                    min-height: 300px;
                }
                .modal-body#teacher_modal {
                    min-height: 500px;
                }
                .course_container {
                    background-color: #c4c4c4;
                    border-radius: 5px;
                }
                .card-img-top {
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    margin-left: -30px;
                    width: 70px !important;
                    height: 70px;
                    border-radius: 50%;
                } 
                .card {
                    margin-top: 30px;
                    padding-top: 30px;
                    cursor: pointer;
                }
                .status_container {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 5px;
                }
            `}</style>
        </>
    )
}