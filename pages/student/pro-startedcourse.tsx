import CourseInfo from "../../components/tabs/CourseInfo";
import RelatedCourses from "../../components/tabs/RelatedCourses";
import Forums from "../../components/tabs/StartedCourse/Forums";
import MyReview from "../../components/tabs/StartedCourse/MyReview";
import OtherCourseInfo from "../../components/tabs/StartedCourse/OtherCourseInfo";
import RecentForums  from "../../components/tabs/StartedCourse/RecentForums";
import Timelines from "../../components/tabs/StartedCourse/Timelines";
import StudentReviews from "../../components/tabs/StudentReviews";
import data from "../../sample_data/proStartedCourse.json";
import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseProgress from "../../components/tabs/CourseProgress";

export default function ProStartedCourse({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {

    // Side nav sample data
    const importantDates = data.importantDates;
    const toLearn = data.toLearn

    //sample data for timeline
    const timeline_data = data.timeline_data;

    //sample data for recent forum section
    const recentForums_data = data.recentForums_data;

    //sample data for My Course goals, Bookmarks, Notes in Course Info Section
    const courseGoals_data = data.courseGoals_data;
    const bookmarks_data= data.bookmarks_data;
    const notes_data = data.notes_data;

    //sample data for forums
    const forums_data = data.forums_data;
    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading=""
                bannerText={bannerText} 
                redirect="/student/pro-startedcourse" 
                isStarted="true"
                course="IELTS"
            />

            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow}
                type="progressive"
                course="IELTS"
            />

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
                                        id="nav-timelines-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-timelines"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-timelines"
                                        aria-selected="true"
                                        >
                                        <strong>Timelines</strong>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-forums-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-forums"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-forums"
                                        aria-selected="true"
                                        >
                                        <strong>Forums</strong>
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
                                    <div className="box mb-4">
                                        <OtherCourseInfo
                                        goals={courseGoals_data}
                                        bookmarks={bookmarks_data}
                                        notes={notes_data}
                                        />
                                     </div> 

                                    <div className="row">
                                        <CourseInfo 
                                            sideTags="Fluency and Coherence, Synonyms and Antonyms, Grammatical Range and Accuracy, Pronounciation" 
                                            type="progressive" 
                                            importantDates={importantDates} 
                                            toLearn={toLearn}
                                            course="IELTS"
                                            isStarted="true" 
                                            page="step1"
                                        />
                                    </div>    
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
                                    id="nav-timelines"
                                    role="tabpanel"
                                    aria-labelledby="nav-timelines-tab"
                                >
                                    
                                    <Timelines
                                        timeline={timeline_data}
                                        progress={10}
                                    />
                                    
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-forums"
                                    role="tabpanel"
                                    aria-labelledby="nav-forums-tab"
                                >
                                    <div className="row">
                                        <Forums
                                        data = {forums_data}
                                        />
                                        <RecentForums
                                        course_type="progressive"
                                        data = {recentForums_data}
                                        />                  
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-student-reviews"
                                    role="tabpanel"
                                    aria-labelledby="nav-student-reviews-tab"
                                >
                                    <MyReview/>
                                    <StudentReviews/>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-related-courses"
                                    role="tabpanel"
                                    aria-labelledby="nav-related-courses-tab"
                                >
                                    <RelatedCourses/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

ProStartedCourse.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    bannerHeading: 'IELTS Step 1',
    bannerText: 'This program is for candidates over the age of 16 who wish to prepare for an internationally recognized IELTS Test.',
    courseTimeLine: '5 WEEKS',
    applicableLevel: 'LEVELS 1-6',
    courseType: 'SELF-PACED',
    mainCategory: 'IELTS',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}