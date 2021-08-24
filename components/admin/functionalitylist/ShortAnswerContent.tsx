import MediaContent from "../mediacontent/MediaContentShortAnswer";
import MediaContent2 from "../mediacontent/MediaContentShortAnswer2";
import MediaContent3 from "../mediacontent/MediaContentShortAnswer3";
import ChoiceTable from "../shortanswers/ChoiceTable";
import NormalTable from "../shortanswers/NormalTable";
import Dialogue from "../shortanswers/Dialogue";
import General from "../shortanswers/General";
import GeneralPhotoGallery from "../shortanswers/GeneralPhotoGallery";
import GeneralPhotoNormal from "../shortanswers/GeneralPhotoNormal";
import GeneralVideoNormal from "../shortanswers/GeneralVideoNormal";
import GeneralVideoSubtitles from "../shortanswers/GeneralVideoSubtitles";
import GeneralVideoSubtitlesLevels from "../shortanswers/GeneralVideoSubtitlesLevels";
import SequencingGallery from "../shortanswers/SequencingGallery";
import SequencingPhoto from "../shortanswers/SequencingPhoto";
import Modal from '../../items/Modal'
import Upload from "../../../public/images/Admin/Vector.png"; 
import Image from "next/image";


export default function ShortAnswerContent() {


  function ShortAnswerType(choice) {
    switch (choice) {
      case "general":
        document
          .getElementById("generalShortAnswer")
          .classList.remove("d-none");
        document
          .getElementById("sequencingShortAnswer")
          .classList.add("d-none");
        document.getElementById("dialogueShortAnswer").classList.add("d-none");
        document.getElementById("tableShortAnswer").classList.add("d-none");

        document.getElementById('photo2General').classList.remove('d-none')
        break;
      case "sequencing":
        document.getElementById("generalShortAnswer").classList.add("d-none");
        document
          .getElementById("sequencingShortAnswer")
          .classList.remove("d-none");
        document.getElementById("dialogueShortAnswer").classList.add("d-none");
        document.getElementById("tableShortAnswer").classList.add("d-none");

        document.getElementById('photo2Sequencing').classList.remove("d-none")
        break;
      case "dialogue":
        document.getElementById("generalShortAnswer").classList.add("d-none");
        document
          .getElementById("sequencingShortAnswer")
          .classList.add("d-none");
        document
          .getElementById("dialogueShortAnswer")
          .classList.remove("d-none");
        document.getElementById("tableShortAnswer").classList.add("d-none");
        break;
      case "table":
        document.getElementById("generalShortAnswer").classList.add("d-none");
        document
          .getElementById("sequencingShortAnswer")
          .classList.add("d-none");
        document.getElementById("dialogueShortAnswer").classList.add("d-none");
        document.getElementById("tableShortAnswer").classList.remove("d-none");
        break;
      default:
        break;
    }
  }

  function Media(choice) {
    switch (choice) {
      case "photo":
        //GENERAL
        //show details
        document.getElementById("photo2General").classList.remove("d-none");
        document.getElementById("video2General").classList.add("d-none");
        //hide buttons photo and video
        document.getElementById("videoBtnGeneral").classList.add("d-none");
        document.getElementById("photoBtnGeneral").classList.add("d-none");

        //show variation
        document
          .getElementById("photoOptionsGeneral")
          .classList.remove("d-none");

        document.getElementById("photoNormalGeneral").classList.add("d-none");
        document.getElementById("photoGalleryGeneral").classList.add("d-none");

        document.getElementById("videoNormalGeneral").classList.add("d-none");

        //SEQUENCING
        document
          .getElementById("photoOptionsSequencing")
          .classList.remove("d-none");
        document.getElementById("photoBtnSequencing").classList.add("d-none");

        document.getElementById("photo2Sequencing").classList.remove("d-none");
        document
          .getElementById("photoGallerySequencing")
          .classList.add("d-none");

        break;
      case "video":
        //GENERAL
        //show details
        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.remove("d-none");
        //hide buttons photo and video
        document.getElementById("videoBtnGeneral").classList.add("d-none");
        document.getElementById("photoBtnGeneral").classList.add("d-none");

        //show variation
        document
          .getElementById("videoOptionsGeneral")
          .classList.remove("d-none");

        document.getElementById("photoNormalGeneral").classList.add("d-none");
        document.getElementById("photoGalleryGeneral").classList.add("d-none");

        document.getElementById("videoNormalGeneral").classList.add("d-none");

        break;
      case "normaltable":
        document.getElementById("normalTable").classList.remove("d-none");
        document.getElementById("choiceTable").classList.add("d-none");
        break;
      case "choicetable":
        document.getElementById("normalTable").classList.add("d-none");
        document.getElementById("choiceTable").classList.remove("d-none");
        break;
      default:
        break;
    }
  }

  function closeOptions() {
    //GENERAL
    document.getElementById("photoOptionsGeneral").classList.add("d-none");
    document.getElementById("videoOptionsGeneral").classList.add("d-none");

    document.getElementById("videoBtnGeneral").classList.remove("d-none");
    document.getElementById("photoBtnGeneral").classList.remove("d-none");

    //SEQUENCING
    document.getElementById("photoOptionsSequencing").classList.add("d-none");
    document.getElementById("photoBtnSequencing").classList.remove("d-none");
  }

  function PhotoOption(choice) {
    switch (choice) {
      case "normal":
        //GENERAL
        document
          .getElementById("photoNormalGeneral")
          .classList.remove("d-none");
        document.getElementById("photoGalleryGeneral").classList.add("d-none");

        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.add("d-none");

        break;
      case "gallery":
        //GENERAL
        document.getElementById("photoNormalGeneral").classList.add("d-none");
        document
          .getElementById("photoGalleryGeneral")
          .classList.remove("d-none");

        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.add("d-none");

        //SEQUENCING
        document.getElementById("photo2Sequencing").classList.add("d-none");
        document
          .getElementById("photoGallerySequencing")
          .classList.remove("d-none");

        break;
      default:
        break;
    }
  }

  function VideoOption(choice) {
    switch (choice) {
      case "normal":
        //GENERAL
        document
          .getElementById("videoNormalGeneral")
          .classList.remove("d-none");
        document
          .getElementById("videoWithSubtitlesGeneral")
          .classList.add("d-none");
        document
          .getElementById("videoWithSubtitlesLevelsGeneral")
          .classList.add("d-none");

        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.add("d-none");

        break;
      case "withsubtitles":
        //GENERAL
        document.getElementById("videoNormalGeneral").classList.add("d-none");
        document
          .getElementById("videoWithSubtitlesGeneral")
          .classList.remove("d-none");
        document
          .getElementById("videoWithSubtitlesLevelsGeneral")
          .classList.add("d-none");

        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.add("d-none");

        break;
      case "subtitlesandlevels":
        //GENERAL
        document.getElementById("videoNormalGeneral").classList.add("d-none");
        document
          .getElementById("videoWithSubtitlesGeneral")
          .classList.add("d-none");
        document
          .getElementById("videoWithSubtitlesLevelsGeneral")
          .classList.remove("d-none");

        document.getElementById("photo2General").classList.add("d-none");
        document.getElementById("video2General").classList.add("d-none");

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

  /*---------------------------------END OF MODAL CONTENTS----------------------------------------*/
  return (
    <>
      {/*-----------MODALS--------------*/}
      <Modal
      modalName="uploadPhotoModalShortAnswer"
      modalTitle="Upload Photo"
      content={uploadPhotoContent()}
      />
      {/*-----------END_MODALS--------------*/}
      <label className="form-label  mt-4">Short Answer Type:</label>
      <div className="row border p-2">
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => ShortAnswerType("general")}
            >
              General
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => ShortAnswerType("dialogue")}
            >
              Dialogue
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => ShortAnswerType("sequencing")}
            >
              Sequencing
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => ShortAnswerType("table")}
            >
              Table
            </button>
          </div>
        </div>
      </div>

      <div id="generalShortAnswer" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="generalShortAnswerInstructions"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="generalShortAnswerInstructions"
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
                id="photoBtnGeneral"
                onClick={() => Media("photo")}
              >
                Photo
              </button>
              <span id="photoOptionsGeneral" className="d-none">
                <span className="fw-bold media-type">Photo</span>
                <button
                  className="btn btn-light"
                  onClick={() => PhotoOption("normal")}
                >
                  Normal
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => PhotoOption("gallery")}
                >
                  Gallery
                </button>
                <button className="close-btn" onClick={closeOptions}>
                  <i className="fas fa-times"></i>
                </button>
              </span>

              <button
                className="btn btn-light"
                id="videoBtnGeneral"
                onClick={() => Media("video")}
              >
                Video
              </button>
              <span id="videoOptionsGeneral" className="d-none">
                <span className="fw-bold media-type">Video</span>
                <button
                  className="btn btn-light"
                  onClick={() => VideoOption("normal")}
                >
                  Normal
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => VideoOption("withsubtitles")}
                >
                  With Subtitles
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => VideoOption("subtitlesandlevels")}
                >
                  Subtitles and Levels
                </button>
                <button className="close-btn" onClick={closeOptions}>
                  <i className="fas fa-times"></i>
                </button>
              </span>
            </div>
          </div>

          <div id="photo2General" className="d-none">
            <MediaContent />
            <General />
          </div>
          <div id="video2General" className="d-none">
            <MediaContent />
          </div>
          <div id="photoNormalGeneral" className="d-none">
            <MediaContent />
            <GeneralPhotoNormal />
          </div>
          <div id="photoGalleryGeneral" className="d-none">
            <MediaContent />
            <GeneralPhotoGallery />
          </div>
          <div id="videoNormalGeneral" className="d-none">
            <MediaContent />
            <GeneralVideoNormal />
          </div>
          <div id="videoWithSubtitlesGeneral" className="d-none">
            <MediaContent />
            <GeneralVideoSubtitles />
          </div>
          <div id="videoWithSubtitlesLevelsGeneral" className="d-none">
            <MediaContent2 />
            <GeneralVideoSubtitlesLevels />
          </div>
        </div>
      </div>
      <div id="sequencingShortAnswer" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="sequencingShortAnswerInstructions"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="sequencingShortAnswerInstructions"
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
                id="photoBtnSequencing"
                onClick={() => Media("photo")}
              >
                Photo
              </button>
              <span id="photoOptionsSequencing" className="d-none">
                <span className="fw-bold media-type">Photo</span>
                <button
                  className="btn btn-light"
                  onClick={() => PhotoOption("gallery")}
                >
                  Gallery
                </button>
                <button className="close-btn" onClick={closeOptions}>
                  <i className="fas fa-times"></i>
                </button>
              </span>
            </div>
          </div>

          <div id="photo2Sequencing" className="d-none">
            <MediaContent3 />
            <SequencingPhoto />
          </div>
          <div id="photoGallerySequencing" className="d-none">
            <MediaContent />
            <SequencingGallery />
          </div>
        </div>
      </div>
      <div id="dialogueShortAnswer" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="dialogueShortAnswerInstructions"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="dialogueShortAnswerInstructions"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>

        <div className="border p-2">
          <div className="border p-2 mb-3">
            <span className="fw-bold">Add Media: </span>
            <div className="btn-group">
              <button className="btn btn-light" id="photoBtnDialogue">
                Photo
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="dialogueSampleConversation"
              className="form-label instructions-label"
            >
              Sample Conversation
            </label>
            <textarea
              className="form-control instructions-textarea"
              id="dialogueSampleConversation"
              rows={5}
              placeholder="Type sample conversation here..."
            ></textarea>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Sample Line</span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">Characters</span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-full">
                Starting Character
              </span>
            </div>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div style={{ background: "#e9ecef", padding: "10px" }}>
                Note: The number of lines needed are added ito the sample line.
              </div>
            </div>
            <div className="col-sm-8">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full">
                    # of line needed
                  </span>
                </div>
                <input type="number" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text h-full">add lines</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="text-end mt-4">
            <button
              className="btn btn-lg btn-info"
              style={{ padding: "8px 50px" }}
            >
              add dialogue
            </button>
          </div>
          <Dialogue />
        </div>
      </div>
      <div id="tableShortAnswer" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="tableShortAnswerInstructions"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="tableShortAnswerInstructions"
            rows={3}
            placeholder="Type your instructions here..."
          ></textarea>
        </div>
        <div className="border p-2">
          <div className="border p-2 mb-3">
            <span className="fw-bold">Add Variation: </span>
            <div className="btn-group">
              <button
                className="btn btn-light"
                id="normalTableShortAnswer"
                onClick={() => Media("normaltable")}
              >
                Normal Table
              </button>

              <button
                className="btn btn-light"
                id="choiceTableShortAnswer"
                onClick={() => Media("choicetable")}
              >
                Choice Table
              </button>
            </div>
          </div>

          <div id="normalTable" className="d-none">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <small>heading 1</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={1}></textarea>
                    </div>
                  </th>
                  <th>
                    <small>heading 2</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={1}></textarea>
                    </div>
                  </th>
                  <th>
                    <small>heading 3</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={1}></textarea>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <small>given answer #1</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>correct answer # 1a:</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>correct answer # 1b:</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <small>correct answer # 2a:</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>given answer #2</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>correct answer # 2b:</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <small>correct answer # 3a: </small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>correct answer # 3b:</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                  <td>
                    <small>given answer #3</small>
                    <div className="table_content_container">
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-end mt-4">
              <button
                className="btn btn-lg btn-info"
                style={{ padding: "8px 50px" }}
              >
                add table
              </button>
            </div>
            <NormalTable />
          </div>
          <div id="choiceTable" className="d-none">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-full">Question</span>
              </div>
              <input type="text" className="form-control" />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-full">Correct Answer</span>
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
                <span className="input-group-text h-full">add items</span>
              </div>
            </div>

            <div style={{ background: "#e9ecef", padding: "10px" }} className="mb-3">
            Additional Options: These options are part of the choices but are not the correct answers.
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-full">Additional Option</span>
              </div>
              <input type="text" className="form-control" />
            </div>

            <div
              className="input-group mb-3"
              style={{ width: "50%", marginLeft: "auto" }}
            >
              <div className="input-group-prepend">
                <span className="input-group-text h-full"># of options</span>
              </div>
              <input type="number" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text h-full">add items</span>
              </div>
            </div>

            <div className="text-end mt-4">
              <button
                className="btn btn-lg btn-info"
                style={{ padding: "8px 50px" }}
              >
                add table
              </button>
            </div>
            <ChoiceTable />


          </div>
        </div>
      </div>
      <style jsx>
        {`
          .media-type {
            background: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: 10px 0 0 10px;
          }
          .close-btn {
            background: red;
            color: #fff;
            border: 0;
            padding: 6px 12px;
          }
        `}
      </style>
    </>
  );
}
