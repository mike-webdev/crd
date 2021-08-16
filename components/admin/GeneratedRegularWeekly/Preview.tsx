import CurriculumDetails from './CurriculumDetails'
import CurriculumCourses from './CurriculumCourses'
import Modal from '../../items/Modal'
import CourseContentDetails from '../CourseContentDetails'


export default function Preview(){

    return(
        <>
        <div className="specialization-content mb-3 p-2">
            <h5>Specialization Content</h5>
        </div>

        <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Course Details</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Curriculum</button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <CourseContentDetails/>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="AllCourses">
                    <CurriculumCourses/>
                    <div className="row mt-5">
                        <div className="col">
                            <button className="btn btn-secondary w-100">ADD ANOTHER COURSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>
        {`
            .specialization-content {
            background: #000;
            color: #fff;
            padding: 10px 0;
            width: 75%;
            }

        `}
        </style>

        </>
    )
}
