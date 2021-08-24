import data from "../../sample_data/proStartedCourse.json"

export default function CourseProgress(props) {

    //sample data
    let timeline = []

    if (props.course === "IELTS") {
        timeline = data.courseTimeline
    } else {
        timeline = data.nonproCourseTimeline
    }

    return (
        <>
            <h3 className="text-center"><strong>Course Progression Status:</strong></h3>
            <div className="set-size charts-container mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col-sm-3">
                        <h5><strong>Course Completion:</strong></h5>
                        <div className="pie-wrapper progress-8 style-2">
                            <span className="label"><strong>8</strong><span className="smaller"><strong>%</strong><span></span></span></span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h5><strong>Homework Completed:</strong></h5>
                        <div className="pie-wrapper progress-8 style-2">
                            <span className="label"><strong>8</strong><span className="smaller"><strong>%</strong></span></span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h5><strong>Chapter Tests Completed:</strong></h5>
                        <div className="pie-wrapper progress-8 style-2">
                            <span className="label"><strong>8</strong><span className="smaller"><strong>%</strong></span></span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-center"><strong>Course Timeline</strong></h4>
                {timeline.map((data, index) => (
                    <div className="main-timeline" key={index}>
                        <div className="timeline" >
                            <a href="" className="timeline-content">
                                <div className="timeline-icon">
                                    <i className={data.icon}></i>
                                </div>
                                <div className="inner-content timelines">
                                    <div className="timeline-count">{index + 1}</div>&nbsp;&nbsp;
                                    <p>{data.date} : {data.content}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
           
        </>
    )
}