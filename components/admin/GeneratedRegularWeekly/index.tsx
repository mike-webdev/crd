import CurriculumDetails from './CurriculumDetails'
import CurriculumCourses from './CurriculumCourses'
import Modal from '../../items/Modal'


const index = () =>{
    const uploadPhotoContent = () =>{
        return (
            <div className="d-flex justify-content-center flex-column">
                <div>IMAGE HERE</div>
                <button className="btn btn-secondary">Upload Photo</button>
            </div>
        )
    }

    const uploadVideoContent = () =>{
        return (
            <div className="d-flex justify-content-center flex-column">
                <label>Video Title:</label>
                <input type="text" className="form-control"/>
                <label>Youtube Link:</label>
                <input type="text" className="form-control"/>
                <button className="btn btn-secondary mt-2">Generate Video</button>
            </div>
        )
    }

    return(
        <>
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
                
                {/* Buttons here */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadPhotoModal">
                    Upload Photo
                </button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadVideoModal">
                    Upload Video
                </button>

                {/* Modals here */}
                <Modal
                    modalName="uploadPhotoModal"
                    modalTitle="Upload Photo: Normal"
                    content={uploadPhotoContent()}
                />
                <Modal
                    modalName="uploadVideoModal"
                    modalTitle="Upload Video: Normal"
                    content={uploadVideoContent()}
                />
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
        </>
    )
}
export default index;