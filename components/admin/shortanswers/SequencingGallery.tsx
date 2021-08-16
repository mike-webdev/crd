import Image from "next/image";

export default function SequencingGallery() {

    // sample data
    const imageList = [
        {
            image: "/images/Admin/videogallery1.jpg"
        },
        {
            image: "/images/Admin/videogallery2.jpg"
        },
        {
            image: "/images/Admin/videogallery3.jpg"
        }
    ]

    return (
        <>
            <h3 className="mt-4">Added Questions:</h3>
            <div className="card">
                <div className="card_custom_header">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <p className=" mx-2 text-center">Question #1</p>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".uploadPhotoModalShortAnswer">
                                    Upload Photo
                                </button>
                            </div>
                            <div className="col-sm-6">
                                <div className="float-end mx-2">
                                    <button className="btn btn-secondary">delete all</button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                        {imageList.map((data,index) => (
                            <div className="speaking_img_container image_column" key={index}>
                                <Image src={data.image} width={300} height={200} layout="responsive" alt="Intro Image" />
                                <div className="action_btn_container px-3">
                                    <i className="fas fa-edit text-info"></i> &nbsp;
                                    <i className="fas fa-trash-alt text-danger"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-3 question_number_section">
                                        <p className="mt-3">
                                            <strong>Question</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <span>
                                                What is your favorite website?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <i className="fas fa-edit fa-lg text-info"></i> &nbsp;&nbsp;
                            <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card_custom_header p {
                    background-color: #000;
                    color: #fff;
                    border-radius: 5px;
                    padding: 3px 5px;
                }
                .question_number_section {
                    text-align: center;
                    background-color: #e9ecef;
                }
                .speaking_img_container {
                    position: relative;
                }
                .action_btn_container {
                    position: absolute;
                    top: 10px;
                    right: 0;
                }
            `}</style>
        </>
    )
}