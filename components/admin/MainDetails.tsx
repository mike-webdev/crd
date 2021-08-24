import Image from "next/image";
import Upload from "../../public/images/Admin/Vector.png";
import Link from 'next/link';
import { useState} from "react";
import { toast } from "react-toastify";


export default function MainDetails() {

    const [loading, setLoading] = useState(false);
    const [specializationTitle, setSpecializationTitle] = useState("");
    const [courseSummary, setCourseSummary] = useState("");
    const [minLevel, setMinLevel] = useState("");
    const [maxLevel, setMaxLevel] = useState("");
    const [studentSkills, setStudentSkills] = useState("");
    const [courseLogo, setCourseLogo] = useState("");
    const [coursePreview, setCoursePreview] = useState("");

    async function submitHandler(e) {
        e.preventDefault();

        setLoading(true);
        const response = await fetch("/api/addSpecialization", {
        method: "POST",
        body: JSON.stringify({
            loading,
            specializationTitle,
            courseSummary,
            minLevel,
            maxLevel,
            studentSkills,
            courseLogo,
            coursePreview
        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        console.log(response.status)

        if (response) {
        setLoading(false);
        }

        const data = await response.json();
        if (!response.ok) {
        console.log(data);
        }
        console.log("data", data);

        if (data.message !== null) {
        // setError(data.message)
        if (data.status == "Success") {
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
        }

        // var li_count = $('.nav-tabs li').length;
        // var current_active = $('.nav-tabs li.active').index();

        // if(current_active<li_count){
        //     $('.nav-tabs li.active').next('li').find('a').attr('data-toggle','tab').tab('show');
        // }else{
        //     alert('Last Step');
        // }
    }

    return (
        <>
            <form onSubmit={submitHandler} method="post">
                <div className="specialization-plan p-2"><h5>Specialization Plan</h5></div>
                <h5 className="mt-3 mb-3">Main Details</h5>


                <label className="p-2" htmlFor="specialization-title">Specialization Title:</label>
                <input className="form-control" type="text" id="specializationTitle" name="specializationTitle" value={specializationTitle} onChange={(e) => setSpecializationTitle(e.target.value)} required/>

                <h6 className="mt-3 p-2">Course Summary: <span className="float-end fw-bold">0/500</span></h6>
                <textarea className="form-control" id="courseSummary" name="courseSummary" value={courseSummary} onChange={(e) => setCourseSummary(e.target.value)} ></textarea>

                <label className="mt-3 p-2" htmlFor="student-level">Student Levels Applicable:</label>
                <div className="row student-level">
                    <div className="col-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text fw-bold">MIN</div>
                            </div>
                            <input type="text" className="form-control" id="minLevel" name="minLevel" value={minLevel} onChange={(e) => setMinLevel(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text fw-bold">MAX</div>
                            </div>
                            <input type="text" className="form-control" id="maxLevel" name="maxLevel" value={maxLevel} onChange={(e) => setMaxLevel(e.target.value)} required/>
                        </div>
                    </div>
                </div>

                <label className="mt-3 p-2" htmlFor="student-skills">Skills a student needs to have for this specialization:</label>
                <input className="form-control" type="text" id="studentSkills" name="studentSkills" value={studentSkills} onChange={(e) => setStudentSkills(e.target.value)} required   />


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
                                upload your logo <Link href="/"><a className="fw-bold">here</a></Link>.
                                follow the size:{"\n"}500 x 500
                                <input type="file" name="courseLogo" id="courseLogo" accept="image/png, image/jpeg" value={courseLogo} onChange={(e) => setCourseLogo(e.target.value)} required/>
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
                                upload your video <Link href="/"><a className="fw-bold">here</a></Link>.
                                make it informative{"\n"} and short
                                <input type="file" name="coursePreview" id="coursePreview" accept="video/*" value={coursePreview} onChange={(e) => setCoursePreview(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="save-details">
                    <button type="submit" className="btn btn-light mb-2 mt-3">Save Details</button>
                </div>

            </form>

            <style jsx>{`

                .specialization-plan {
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

                .btn {
                    background-color: #87CEEB; 
                    width: 386px;
                    height: 74pxpx;
                    border-radius: 10px;
                    margin-left: auto; 
                    margin-right: auto;
                    display: block;
                }
                
                `}
            </style>

        </>
    )
}