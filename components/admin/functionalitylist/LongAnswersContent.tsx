import MediaContent from "../mediacontent/MediaContentLongAnswer";
import General from "../longanswers/General";
import GeneralPhotoGallery from "../longanswers/GeneralPhotoGallery";
import GeneralPhotoNormal from "../longanswers/GeneralPhotoNormal";
import GeneralVideoNormal from "../longanswers/GeneralVideoNormal";
import ItemPhotoNormal from "../longanswers/ItemPhotoNormal";
import ItemPhotoGallery from "../longanswers/ItemPhotoGallery";
import ItemVideoNormal from "../longanswers/ItemVideoNormal";
import WithoutMedia from "../longanswers/WithoutMedia";
import Modal from '../../items/Modal'
import Upload from "../../../public/images/Admin/Vector.png"; 
import Image from "next/image";

export default function LongAnswersContent() {
  function LongAnswerType(choice) {
    switch (choice) {
      case "byitem":
        document.getElementById("byitem2").classList.remove("d-none");
        document.getElementById("general2").classList.add("d-none");

        document.getElementById("photo2ByItem").classList.remove("d-none");
        break;
      case "general":
        document.getElementById("byitem2").classList.add("d-none");
        document.getElementById("general2").classList.remove("d-none");

        document.getElementById("photo2").classList.remove("d-none");
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
        document.getElementById("photo2").classList.remove("d-none");
        document.getElementById("video2").classList.add("d-none");
        //hide buttons photo and video
        document.getElementById("videoBtn").classList.add("d-none");
        document.getElementById("photoBtn").classList.add("d-none");

        //show variation
        document.getElementById("photoOptions").classList.remove("d-none");

        document.getElementById("photoNormal").classList.add("d-none");
        document.getElementById("photoGallery").classList.add("d-none");

        document.getElementById("videoNormal").classList.add("d-none");


      
        //BY ITEM
        //show details
        document.getElementById("photo2ByItem").classList.remove("d-none");
        document.getElementById("video2ByItem").classList.add("d-none");
        //hide buttons photo and video
        document.getElementById("videoBtnByItem").classList.add("d-none");
        document.getElementById("photoBtnByItem").classList.add("d-none");

        //show variation
        document.getElementById("photoOptionsByItem").classList.remove("d-none");

        document.getElementById("photoNormalByItem").classList.add("d-none");
        document.getElementById("photoGalleryByItem").classList.add("d-none");

        document.getElementById("videoNormalByItem").classList.add("d-none");
        break;
      case "video":
        //GENERAL
        //show details
        document.getElementById("photo2").classList.add("d-none");
        document.getElementById("video2").classList.remove("d-none");
        //hide buttons photo and video
        document.getElementById("videoBtn").classList.add("d-none");
        document.getElementById("photoBtn").classList.add("d-none");

        //show variation
        document.getElementById("videoOptions").classList.remove("d-none");

        document.getElementById("photoNormal").classList.add("d-none");
        document.getElementById("photoGallery").classList.add("d-none");

        document.getElementById("videoNormal").classList.add("d-none");


        //BY ITEM
                //show details
                document.getElementById("photo2ByItem").classList.add("d-none");
                document.getElementById("video2ByItem").classList.remove("d-none");
                //hide buttons photo and video
                document.getElementById("videoBtnByItem").classList.add("d-none");
                document.getElementById("photoBtnByItem").classList.add("d-none");
        
                //show variation
                document.getElementById("videoOptionsByItem").classList.remove("d-none");
        
                document.getElementById("photoNormalByItem").classList.add("d-none");
                document.getElementById("photoGalleryByItem").classList.add("d-none");
        
                document.getElementById("videoNormalByItem").classList.add("d-none");
        break;
      default:
        break;
    }
  }

  function closeOptions() {
    //GENERAL
    document.getElementById("photoOptions").classList.add("d-none");
    document.getElementById("videoOptions").classList.add("d-none");

    document.getElementById("videoBtn").classList.remove("d-none");
    document.getElementById("photoBtn").classList.remove("d-none");

    //BY ITEM
    document.getElementById("photoOptionsByItem").classList.add("d-none");
    document.getElementById("videoOptionsByItem").classList.add("d-none");

    document.getElementById("videoBtnByItem").classList.remove("d-none");
    document.getElementById("photoBtnByItem").classList.remove("d-none");
  }

  function PhotoOption(choice) {
    switch (choice) {
      case "normal":
        //GENERAL
        document.getElementById("photoNormal").classList.remove("d-none");
        document.getElementById("photoGallery").classList.add("d-none");

        document.getElementById("photo2").classList.add("d-none");
        document.getElementById("video2").classList.add("d-none");

        //BY ITEM
        document.getElementById("photoNormalByItem").classList.remove("d-none");
        document.getElementById("photoGalleryByItem").classList.add("d-none");

        document.getElementById("photo2ByItem").classList.add("d-none");
        document.getElementById("video2ByItem").classList.add("d-none");
        break;
      case "gallery":
        //GENERAL
        document.getElementById("photoNormal").classList.add("d-none");
        document.getElementById("photoGallery").classList.remove("d-none");

        document.getElementById("photo2").classList.add("d-none");
        document.getElementById("video2").classList.add("d-none");

        //BY ITEM
        document.getElementById("photoNormalByItem").classList.add("d-none");
        document.getElementById("photoGalleryByItem").classList.remove("d-none");

        document.getElementById("photo2ByItem").classList.add("d-none");
        document.getElementById("video2ByItem").classList.add("d-none");
        break;
      default:
        break;
    }
  }

  function VideoOption(choice) {
    switch (choice) {
      case "normal":
        //GENERAL
        document.getElementById("videoNormal").classList.remove("d-none");

        document.getElementById("photo2").classList.add("d-none");
        document.getElementById("video2").classList.add("d-none");

        //BY ITEM
        document.getElementById("videoNormalByItem").classList.remove("d-none");

        document.getElementById("photo2ByItem").classList.add("d-none");
        document.getElementById("video2ByItem").classList.add("d-none");
        break;
      default:
        break;
    }
  }

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

    const uploadVideoContent = () =>{
        return (
            <div className="d-flex justify-content-center flex-column">
                <label>Video Title:</label>
                <input type="text" className="form-control"/>
                <label>Youtube Link:</label>
                <input type="text" className="form-control"/>
                <button className="btn btn-secondary mt-2 ">Generate Video</button>
            </div>
        )
    }  

  return (
    <>
      {/*-----------MODALS--------------*/}
      <Modal
      modalName="uploadPhotoModalLongAnswers"
      modalTitle="Upload Photo"
      content={uploadPhotoContent()}
      />
      <Modal
      modalName="uploadVideoModalLongAnswers"
      modalTitle="Upload Video"
      content={uploadVideoContent()}
      />
      {/*-----------END_MODALS--------------*/}
      <label className="form-label  mt-4">Long Answer Type:</label>
      <div className="row border p-2">
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => LongAnswerType("general")}
            >
              General
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => LongAnswerType("byitem")}
            >
              By Item
            </button>
          </div>
        </div>
      </div>

      <div id="general2" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructions"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructions"
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
                onClick={() => Media("photo")}
              >
                Photo
              </button>
              <span id="photoOptions" className="d-none">
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
                id="videoBtn"
                onClick={() => Media("video")}
              >
                Video
              </button>
              <span id="videoOptions" className="d-none">
                <span className="fw-bold media-type">Video</span>
                <button
                  className="btn btn-light"
                  onClick={() => VideoOption("normal")}
                >
                  Normal
                </button>
                <button className="close-btn" onClick={closeOptions}>
                  <i className="fas fa-times"></i>
                </button>
              </span>
            </div>
          </div>

          <div id="photo2" className="d-none">
            <MediaContent />
            <General />
          </div>
          <div id="video2" className="d-none">
            <MediaContent />
          </div>
          <div id="photoNormal" className="d-none">
            <MediaContent />
            <GeneralPhotoNormal />
          </div>
          <div id="photoGallery" className="d-none">
            <MediaContent />
            <GeneralPhotoGallery />
          </div>
          <div id="videoNormal" className="d-none">
            <MediaContent />
            <GeneralVideoNormal />
          </div>
        </div>
      </div>
      <div id="byitem2" className="d-none">
        <div className="mb-3">
          <label
            htmlFor="instructions2"
            className="form-label instructions-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control instructions-textarea"
            id="instructions2"
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
                id="photoBtnByItem"
                onClick={() => Media("photo")}
              >
                Photo
              </button>
              <span id="photoOptionsByItem" className="d-none">
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
                id="videoBtnByItem"
                onClick={() => Media("video")}
              >
                Video
              </button>
              <span id="videoOptionsByItem" className="d-none">
                <span className="fw-bold media-type">Video</span>
                <button
                  className="btn btn-light"
                  onClick={() => VideoOption("normal")}
                >
                  Normal
                </button>
                <button className="close-btn" onClick={closeOptions}>
                  <i className="fas fa-times"></i>
                </button>
              </span>
            </div>
          </div>

          <div id="photo2ByItem" className="d-none">
            <MediaContent />
            <WithoutMedia />
          </div>
          <div id="video2ByItem" className="d-none">
            <MediaContent />
          </div>
          <div id="photoNormalByItem" className="d-none">
            <MediaContent />
            <ItemPhotoNormal />
          </div>
          <div id="photoGalleryByItem" className="d-none">
            <MediaContent />
            <ItemPhotoGallery />
          </div>
          <div id="videoNormalByItem" className="d-none">
            <MediaContent />
            <ItemVideoNormal />
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
