import Image from "next/image";
import Upload from "../../public/images/Admin/Vector.png";
import Link from "next/link";
import Modal from '../items/Modal'
 
export default function CourseContentDetails() { 
  function saveDetails() {
    alert("Details Saved!");
  }

  const uploadLogoContent = () =>{
    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="row mb-3">
              <div className="mb-3">
                <label  className="form-label">UPLOAD LOGO</label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <button className="btn btn-secondary">INSERT</button>
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
              <button className="btn btn-secondary mt-2 ">Insert Video Link</button>
          </div>
      )
  }

  return (
    <>
      <Modal
          modalName="uploadLogoModal"
          modalTitle="Upload Photo"
          content={uploadLogoContent()}
      />
      <Modal
          modalName="uploadVideoLinkModal"
          modalTitle="Upload Video"
          content={uploadVideoContent()}
      />
      <div className="course-body">
        <label className="p-2" htmlFor="course-title">
          Course Title:
        </label>
        <input className="form-control" type="text" id="courseTitle" />

        <h6 className="mt-3 p-2">
          Course Summary: <span className="float-end fw-bold">0/500</span>
        </h6>
        <textarea className="form-control" id="courseSummary"></textarea> 

        {/* <h6 className="mt-3 p-2">Course Summary:</h6>
        <div className="course-summary"> 
            <Essay
              rows={10}
              index={0}
              question=""
              maxWordCount={500} 
            />
        </div>   */}

        <label className="mt-3 p-2" htmlFor="student-level">
          Student Levels Applicable:
        </label>
        <div className="row student-level">
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text fw-bold">MIN</div>
              </div>
              <input type="text" className="form-control" id="minLevel" />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text fw-bold">MAX</div>
              </div>
              <input type="text" className="form-control" id="maxLevel" />
            </div>
          </div>
        </div>

        <label className="mt-3 p-2" htmlFor="student-skills">
          Skills a student needs to have for this course:
        </label>
        <input className="form-control" type="text" id="studentSkills" />

        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="p-2">Course Logo: </label>
            <div className="course-upload">
              <div className="course-upload-image">
                <Image
                  src={Upload}
                  layout="responsive"
                  sizes="100vw"
                  placeholder="blur"
                  alt="Upload"
                />
              </div>
              <div className="course-upload-label">
                upload your logo{" "}
                <Link href="/">
                  <a className="fw-bold" data-bs-toggle="modal" data-bs-target="#uploadLogoModal" >here</a>
                </Link>
                . follow the size:{"\n"}500 x 500
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="p-2">Course Preview: </label>
            <div className="course-upload">
              <div className="course-upload-image">
                <Image
                  src={Upload}
                  layout="responsive"
                  sizes="100vw"
                  placeholder="blur"
                  alt="Upload"
                />
              </div>
              <div className="course-upload-label">
                upload your video{" "}
                <Link href="/">
                  <a className="fw-bold" data-bs-toggle="modal" data-bs-target="#uploadVideoLinkModal">here</a>
                </Link>
                . make it informative{"\n"} and short
              </div>
            </div>
          </div>
        </div>

        <label className="p-2 mt-3" htmlFor="list-overview">
          List Overview:
        </label>
        <textarea className="form-control" id="listOverview"></textarea>
        
        <label className="p-2 mt-3" htmlFor="list-overview">
          Course Tags:
        </label>
        <input className="form-control" type="text" id="specializationTags" />

        <div className="row">
            <div className="col-6">
                <div className="save-details">
                    <button type="button" className="btnSave mb-2 mt-3" onClick={() => saveDetails()}>
                        Save Course Details
                    </button>
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

          .course-upload {
            border: 1px solid;
            border-radius: 10px;
            width: 90%;
            margin: auto;
          }

          .course-upload-image {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 15%;
            margin-bottom: 5%;
            width: 30%;
          }

          .course-upload-label {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            margin-bottom: 10%;
            width: 70%;
            white-space: pre-wrap;
            text-align: center;
          }

          a:hover {
            text-decoration: underline;
          }

          .btnSave, .gotoCurriculum {
            background-color: #87ceeb;
            border-radius: 10px;
            margin-left: auto;
            margin-right: auto;
            border: none;
            display:block;
            padding: 5px 10px 5px 10px;
            width: 90%;
          }

          .btnDetails {
            border-radius: 10px;
            width: 100%;
            background: #ffffff;
            border: 1px solid;
          }

          .btnCurriculum {
            border-radius: 10px;
            width: 100%;
            background: #c4c4c4;
            border: none;
          }

          .course-body {
            border: 1px solid;
            border-radius: 20px;
            padding: 10px 10px 10px 10px;
        `}
      </style>
    </>
  );
}
