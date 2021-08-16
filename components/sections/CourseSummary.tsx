import CourseInfo from '../tabs/CourseInfo'
import StudentReviews from '../tabs/StudentReviews'
import RelatedCourses from '../tabs/RelatedCourses'
import CourseProgress from '../tabs/CourseProgress'

export default function CourseSummary(props) {
    return (
        <>
            <section className="course-summary space2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav>
                                <div className="nav nav-tabs" id="course-summary-nav" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-course-info-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-course-info"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-course-info"
                                        aria-selected="true"
                                    >
                                        <strong>Course Info</strong>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-course-progress-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-course-progress"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-course-progress"
                                        aria-selected="true"
                                    >
                                        <strong>Progress</strong>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-student-reviews-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-student-reviews"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-student-reviews"
                                        aria-selected="false"
                                    >
                                        <strong>Student Reviews</strong>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-related-courses-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-related-courses"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-related-courses"
                                        aria-selected="false"
                                    >
                                        <strong>Related Courses</strong>
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content mt-4" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-course-info"
                                    role="tabpanel"
                                    aria-labelledby="nav-course-info-tab"
                                >
                                    <CourseInfo 
                                        sideTags={props.sideTags} 
                                        type={props.type} 
                                        importantDates={props.importantDates} 
                                        toLearn={props.toLearn} 
                                        course={props.course}
                                        isStarted="false"
                                        page={props.page}
                                    />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-course-progress"
                                    role="tabpanel"
                                    aria-labelledby="nav-course-progress-tab"
                                >
                                    <CourseProgress />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-student-reviews"
                                    role="tabpanel"
                                    aria-labelledby="nav-student-reviews-tab"
                                >
                                    <StudentReviews />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-related-courses"
                                    role="tabpanel"
                                    aria-labelledby="nav-related-courses-tab"
                                >
                                    <RelatedCourses />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </section>
        </>
    )
}