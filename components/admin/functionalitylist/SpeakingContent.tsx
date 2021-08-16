import WithoutRecording from "../speaking/WithoutRecording";
import SessionRecording from "../speaking/SessionRecording";
import ItemRecordingQA from "../speaking/ItemRecordingQA";
import ItemRecordingRepetition from "../speaking/ItemRecordingRepetition";
import Modal from '../../items/Modal'
import Upload from "../../../public/images/Admin/Vector.png"; 
import Image from "next/image";

export default function SpeakingContent() {
  function SpeakingType(choice) {
    switch (choice) {
      case "withoutrecording":
        document.getElementById("withoutrecording").classList.remove("d-none");
        document.getElementById("qanda").classList.add("d-none");
        document.getElementById("wholesession").classList.add("d-none");
        document.getElementById("repetition").classList.add("d-none");
        break;
      case "qanda":
        document.getElementById("withoutrecording").classList.add("d-none");
        document.getElementById("qanda").classList.remove("d-none");
        document.getElementById("wholesession").classList.add("d-none");
        document.getElementById("repetition").classList.add("d-none");
        break;
      case "wholesession":
        document.getElementById("withoutrecording").classList.add("d-none");
        document.getElementById("qanda").classList.add("d-none");
        document.getElementById("wholesession").classList.remove("d-none");
        document.getElementById("repetition").classList.add("d-none");
        break;
      case "repetition":
        document.getElementById("withoutrecording").classList.add("d-none");
        document.getElementById("qanda").classList.add("d-none");
        document.getElementById("wholesession").classList.add("d-none");
        document.getElementById("repetition").classList.remove("d-none");
        break;
      default:
        break;
    }
  }
    /*---------------------------------CONTENT OF MODALS----------------------------------------*/
    const uploadPhotoContent = () =>{
      return (
          <div className="d-flex justify-content-center flex-column">
              <div className="row mb-3">
                  <div className="course-upload-modal">
                      <div className="course-upload-image-modal">
                          <Image
                              src={Upload}
                              layout="responsive"
                              sizes="100vw"
                              placeholder="blur"
                              alt="Upload"
                          />
                      </div>
                  
                      <div className="course-upload-label-modal">
                          Upload a photo.
                          {"\n"}Maximum size:{"\n"}1400 x 600
                      </div>
                  </div>
              </div>
              <button className="btn btn-secondary">Upload Photo</button>
          </div>
      )
    }


    const uploadAudioContent = () =>{
      return (
          <div className="d-flex justify-content-center flex-column">
              <div className="row mb-3">
                  <div className="course-upload-modal">
                      <div className="course-upload-image-modal">
                          <Image
                              src={Upload}
                              layout="responsive"
                              sizes="100vw"
                              placeholder="blur"
                              alt="Upload"
                          />
                      </div>
                  
                      <div className="course-upload-label-modal">
                          Must be .mp3 file
                      </div>
                  </div>
              </div>
              <button className="btn btn-secondary">Upload Audio</button>
          </div>
      )
    }    
  /*---------------------------------END OF MODAL CONTENTS----------------------------------------*/
  return (
    <>
      {/*-----------MODALS--------------*/}
      <Modal
      modalName="uploadPhotoModalSpeakingContent"
      modalTitle="Upload Photo"
      content={uploadPhotoContent()}
      />
      <Modal
      modalName="uploadAudioModalSpeakingContent"
      modalTitle="Upload Audio"
      content={uploadAudioContent()}
      />
      {/*-----------END_MODALS--------------*/}
      <label className="form-label  mt-4">Long Answer Type:</label>
      <div className="row border p-2">
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => SpeakingType("withoutrecording")}
            >
              Without Recording
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => SpeakingType("qanda")}
            >
              By Item Recording - Q & A
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => SpeakingType("wholesession")}
            >
              Whole Session Recording
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => SpeakingType("repetition")}
            >
              By Item Recording - Repetition
            </button>
          </div>
        </div>
      </div>

      <div id="withoutrecording" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructionswithoutrecording"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructionswithoutrecording"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>

        <div className="border p-2">
          <div className="border p-2 mb-3">
            <span className="fw-bold">Add Media: </span>
            <div className="btn-group">
              <button
                className="btn btn-light"
                id="photoBtn"
                data-bs-toggle="modal" 
                data-bs-target=".uploadPhotoModalSpeakingContent"
              >
                Photo
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="withrecordingquestion"
              className="form-label instructions-label"
            >
              Question
            </label>
            <textarea
              className="form-control instructions-textarea"
              id="withrecordingquestion"
              rows={3}
            ></textarea>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-lg btn-info"
              style={{ padding: "8px 50px" }}
            >
              add question
            </button>
          </div>
          <WithoutRecording />
        </div>
      </div>

      <div id="qanda" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructionsqanda"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructionsqanda"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>

        <div className="border p-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Question</span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div
            className="input-group mb-3"
            style={{ width: "50%", marginLeft: "auto" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text h-full"># of questions</span>
            </div>
            <input type="number" className="form-control" />
            <div className="input-group-append">
              <span className="input-group-text h-full">add question</span>
            </div>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-lg btn-info"
              style={{ padding: "8px 50px" }}
            >
              add question group
            </button>
          </div>
          <ItemRecordingQA />
        </div>
      </div>

      <div id="wholesession" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructionswholesession"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructionswholesession"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>

        <div className="border p-2">
          <div className="border p-2 mb-3 input-group">
            <span className="fw-bold" style={{ padding: "5px 10px" }}>
              Set Timer:{" "}
            </span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Question</span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div
            className="input-group mb-3"
            style={{ width: "50%", marginLeft: "auto" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text h-full"># of questions</span>
            </div>
            <input type="number" className="form-control" />
            <div className="input-group-append">
              <span className="input-group-text h-full">add question</span>
            </div>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-lg btn-info"
              style={{ padding: "8px 50px" }}
            >
              add question group
            </button>
          </div>
          <SessionRecording />
        </div>
      </div>

      <div id="repetition" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructionsrepetition"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructionsrepetition"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>

        <div className="border p-2">
          <div className="border p-2 mb-3">
            <span className="fw-bold">Add Media: </span>
            <div className="btn-group">
              <button
                className="btn btn-light"
                id="photoBtn"
                data-bs-toggle="modal" 
                data-bs-target=".uploadAudioModalSpeakingContent"
              >
               Audio
              </button>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Statement</span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-lg btn-info"
              style={{ padding: "8px 50px" }}
            >
              add statement
            </button>
          </div>
          <ItemRecordingRepetition />
        </div>
      </div>
    </>
  );
}
