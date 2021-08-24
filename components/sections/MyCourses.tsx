import CourseItem from "../items/CourseItem"
import Option from "../items/CourseOption"

export default function StudentDashboard() {

    return (
        <section className="my-courses space">
            <div className="container">
                <div className="d-flex">
                    <h2>My Courses</h2>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <div className="">
                            <nav>
                                <div className="nav nav-tabs" id="my-courses" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-inprogress-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-inprogress"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-inprogress"
                                        aria-selected="true"
                                    >
                                        In Progress
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-assigned-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-assigned"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-assigned"
                                        aria-selected="true"
                                    >
                                        Assigned
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-completed-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-completed"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-completed"
                                        aria-selected="true"
                                    >
                                        Completed
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-saved-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-saved"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-saved"
                                        aria-selected="true"
                                    >
                                        Saved
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-archived-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-archived"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-archived"
                                        aria-selected="true"
                                    >
                                        Archived
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-all-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-all"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-all"
                                        aria-selected="true"
                                    >
                                        All
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content box" id="mycourses-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-inprogress"
                                    role="tabpanel"
                                    aria-labelledby="nav-inprogress-tab"
                                >
                                    <div className="row dashboard-courses">
                                        <div className="col-sm-4">
                                            <div className="course-box">

                                                <CourseItem link="/student/progressive" img="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                    description="Introduce the four evaluation items (fluency and consistency, vocabulary ability, grammatical range and accuracy, pronunciation) and detailed items of IELTS Speaking one by one, and practice to put these skills in the test according to the standards. " 
                                                    course="IELTS Step 1" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" type="1"/>
                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-4">

                                            <div className="course-box">

                                                <CourseItem link="/student/nonprogressive" img="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                    course="Mintography" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">

                                            <div className="course-box">

                                                {/* <CourseItem link="#" img="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 1" rating="4.9" duration="4 weeks" level="5 above" /> */}
                                                <CourseItem link="/student/nonprogressive2" img="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?cs=srgb&dl=pexels-donald-tong-66134.jpg&fm=jpg"
                                                    course="MintTube" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />
                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-assigned"
                                    role="tabpanel"
                                    aria-labelledby="nav-assigned-tab"
                                >
                                    <div className="row dashboard-courses">
                                        <div className="col-sm-4">

                                            <div className="course-box">

                                                <CourseItem link="/student/progressive" img="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                    course="IELTS Step 1" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6"  type="1"/>

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-4">

                                            <div className="course-box">
                                                <CourseItem link="/student/noneprogressive" img="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                    course="Mintography" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-completed"
                                    role="tabpanel"
                                    aria-labelledby="nav-completed-tab"
                                >
                                    <div className="row dashboard-courses">
                                        <div className="col-sm-4">
                                            <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 2" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6"/>

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Retake" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-saved"
                                    role="tabpanel"
                                    aria-labelledby="nav-saved-tab"
                                >
                                    <div className="row dashboard-courses">
                                        <div className="col-sm-4">
                                            <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 3" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-archived"
                                    role="tabpanel"
                                    aria-labelledby="nav-archived-tab"
                                >
                                    <div className="row dashboard-courses">
                                        <div className="col-sm-4">
                                            <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/162055/pexels-photo-162055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    course="Sample Course # 4" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6"/>

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-all"
                                    role="tabpanel"
                                    aria-labelledby="nav-all-tab"
                                >

                                    <div className="row dashboard-courses">

                                        <div className="col-sm-4">
                                            <div className="course-box">
                                                {/* <CourseItem link="#" img="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 1" rating="4.9" duration="4 weeks" level="5 above" /> */}
                                                <CourseItem link="/student/nonprogressive2" img="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?cs=srgb&dl=pexels-donald-tong-66134.jpg&fm=jpg"
                                                    course="MintTube" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />
                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="course-box">
                                                <CourseItem link="/student/progressive" img="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                    course="IELTS Step 1" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6"  type="1"/>

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="course-box">
                                                <CourseItem link="/student/nonprogressive" img="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                    course="Mintography" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Request Removal" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 2" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Retake" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    course="Sample Course # 3" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="course-box">
                                                <CourseItem link="#" img="https://images.pexels.com/photos/162055/pexels-photo-162055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    course="Sample Course # 4" rating="4.9" description="Gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better." 
                                                    reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" />

                                                <div className="btn-group dropstart options">
                                                    <button
                                                        type="button"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <Option option="Remove" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="box p-3 quote">
                            <span className="bookmark"><i className="fas fa-bookmark"></i></span>
                            <div className="wordDay">
                                <h5>Word/Quote of the day:</h5>
                                <br />
                                <span id="wordDay"><em className="fw-bold">virtuoso</em><br /> - one who excels in the technique of an art; especially : a highly skilled musical performer (as on the violin).</span>
                            </div>
                            <hr />

                            <div className="quoteDay">
                                <span className="quote-left"><i className="fas fa-quote-left"></i></span>
                                <span className="quote-right"><i className="fas fa-quote-right"></i></span>
                                <span id="quoteDay"><em className="fw-bold">Always remember that you are absolutely unique. Just like everyone else.</em><br /> - Margaret Mead</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
