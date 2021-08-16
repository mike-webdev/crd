import Link from 'next/link'

export default function CourseBanner(props) {

    return (
        <>
            <section className="p-course-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="course-video py-4 text-center">
                                <h1><strong>Course Preview</strong></h1>
                                <p>In this video, see what this course has in store for you.</p>
                                {props.course === "IELTS" ? (
                                    <>
                                        {props.page === "specialization" ? (
                                            <>
                                                <iframe 
                                                    src="https://drive.google.com/file/d/1wa5eT-3NqCqMZMBKE7dZuwQ7jV-CWjqZ/preview" 
                                                    width="100%" 
                                                    height="380px" 
                                                    allow="autoplay">
                                                </iframe>
                                            </>
                                        ) : (
                                            <>
                                                <iframe width="100%" height="380px" 
                                                    src="https://www.youtube.com/embed/zMlI6D34BJY" 
                                                    title="YouTube video player" 
                                                    frameBorder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                    allowFullScreen>
                                                </iframe>
                                            </>
                                        )}
                                    </>
                                ) : props.course === "Mintography" ? (
                                    <>
                                        <iframe 
                                            src="https://drive.google.com/file/d/1RelEsFQe4WUV5TnM-XFYiC0MPZshjCGq/preview" 
                                            width="100%" 
                                            height="380px" 
                                            allow="autoplay">
                                        </iframe>
                                    </>
                                ) : (
                                    <>
                                        <iframe 
                                            src="https://drive.google.com/file/d/16kCYUNDnDirkfJ6Psm7yd9vR_gw8Vavi/preview" 
                                            width="100%" 
                                            height="380px" 
                                            allow="autoplay">
                                        </iframe>
                                    </>
                                )}
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="course-description">
                                <div>
                                    <h1>{props.bannerHeading}</h1>
                                    <p className="fw-bold text-uppercase">{props.bannerSubHeading}</p>
                                    <label className="fw-bold"><i className="fas fa-star colorMeOrange"></i> 4.9 (150 Reviews)</label>
                                    <h4 className="mt-2">
                                    {props.course === "IELTS" ? (
                                        <>
                                            <small>This program is for candidates over the age of 16 who wish to prepare for an internationally recognized IELTS Test.</small><br/><br/>
                                            <small>The lessons cover both examination skills and techniques and work on improving students’ speaking skills.</small><br/><br/>
                                            <small>There are 18 lessons in Step 1 Workbook.</small>
                                        </>
                                    ) : props.course === "Mintography" ? (
                                        <>
                                            <small>Express yourself in English through photos and fun interactive lessons.</small>
                                        </>
                                    ) : (
                                        <>
                                            <small>Tune in and learn how to talk globally through interactive video lessons</small>
                                        </>
                                    )}
                                    
                                    </h4>
                                    <br />
                                    <div className="row mt-4">
                                    <div className="col-sm-6">
                                        <div className="d-grid">
                                            {props.isStarted === "false" ? (
                                                <>
                                                    <Link href={props.redirect}>
                                                        <a  className="btn btn-success btn-lg">
                                                            Start Course
                                                        </a>
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button type="button" className="btn btn-success btn-lg">
                                                        Resume Course
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-lg">
                                            Save Course
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                    <br />
                                    <label>500 people are currently enrolled in this course</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}