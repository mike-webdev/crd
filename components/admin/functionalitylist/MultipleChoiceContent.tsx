import Head from 'next/head'
import Image from 'next/image'
import Frappe from "../../../public/images/Admin/frappe.jpg";
import Drink1 from "../../../public/images/Admin/drink2.jpg";
import Drink2 from "../../../public/images/Admin/drink3.jpg";
import { useEffect } from 'react';
import Upload from "../../../public/images/Admin/Vector.png"; 
import Modal from '../../items/Modal'

declare global {
    interface Window {
        Annotorious: any;
    }
  }
function BindingBoxTemplate () {
    
    return(
    <>  
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".uploadPhotoModal">
            Upload Photo
        </button>
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <span className="input-group-text h-full" >
                    Question
                </span>
            </div>
            <input
                type="text"
                className="form-control"
            />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text h-full" >
                    Correct Answer
                </span>
            </div>
            <input
                type="text"
                className="form-control"
            />
        </div>
        <div className="card">
            <div className="card-body">
                to add all choices, (the correct answer and other options), click annotate image
            </div>
        </div>
    </>
    )
}
export default function MultipleChoiceContent() {
    useEffect(()=>{
        
        setTimeout(() => {
            let Annotorious:any;
            var anno = window.Annotorious.init({
                image: "raven_cafe",
                widgets: [
                    { widget: 'COMMENT' },
                    { widget: 'TAG', vocabulary: [ 'Animal', 'Building', 'Waterbody'] }
                  ]
              });
              anno.loadAnnotations('/scripts/annotations2.w3c.json');
        }, 500);
    },[]);

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

    const ButtonsInImage = () =>(
        (
            <div className="img-buttons">
                <button type="button" 
                className="btn btn-link edit_btn" 
                data-bs-toggle="modal" 
                data-bs-target=".uploadPhotoModal">
                    <i className="fas fa-edit"></i>
                </button>
                <button type="button" 
                className="btn btn-link edit_btn delete_btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        )
    )

    const HeaderButtons = () =>(
        (   
            <div className="row">
                <div className="col-4">
                    <h3 className="prev_header">Question #1</h3>
                    </div>
                    <div className="col-4">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".uploadPhotoModal">
                        Upload Photo
                    </button>
                    </div>
                    <div className="col-4 text-end">
                    <button className="btn btn-secondary">delete all</button>
                </div>
            </div>
        )
    )

    function MultipleChoiceType(choice) {
        switch (choice) {
            case 'byitem':
                document.getElementById('byitem').classList.remove('d-none')
                document.getElementById('general').classList.add('d-none')

                document.getElementById('photo').classList.remove('d-none')
                break;
            case 'general':
                document.getElementById('byitem').classList.add('d-none')
                document.getElementById('general').classList.remove('d-none')
                break;
            default:
                break;
        }
    }

    function Media(choice) {
        switch (choice) {
            case 'photo':
                document.getElementById('photo').classList.remove('d-none')
                document.getElementById('normal').classList.add('d-none')
                document.getElementById('bindingbox').classList.add('d-none')
                document.getElementById('gallery').classList.add('d-none')
                break;
            case 'normal':
                document.getElementById('photo').classList.add('d-none')
                document.getElementById('normal').classList.remove('d-none')
                document.getElementById('bindingbox').classList.add('d-none')
                document.getElementById('gallery').classList.add('d-none')
                break;
            case 'bindingbox':
                document.getElementById('photo').classList.add('d-none')
                document.getElementById('normal').classList.add('d-none')
                document.getElementById('bindingbox').classList.remove('d-none')
                document.getElementById('gallery').classList.add('d-none')
                break;
            case 'gallery':
                document.getElementById('photo').classList.add('d-none')
                document.getElementById('normal').classList.add('d-none')
                document.getElementById('bindingbox').classList.add('d-none')
                document.getElementById('gallery').classList.remove('d-none')
                break;

        }
    }


    return (
        <>
        <Head>
            <link href="/css/annotorious.min.css" rel="stylesheet"></link>
            <script async type="text/javascript" src="/scripts/annotorious.min.js"></script>
        </Head>
        {/*-----------MODALS--------------*/}
        <Modal
            modalName="uploadPhotoModal"
            modalTitle="Upload Photo"
            content={uploadPhotoContent()}
        />
        {/*-----------END_MODALS--------------*/}
            <label className="form-label  mt-4">Multiple Choice Type:</label>
            <div className="row border p-2">
                <div className="col-sm-6">
                    <div className="d-grid">
                        <button type="button" className="btn btn-light" onClick={() => MultipleChoiceType('byitem')}>By Item</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="d-grid">
                        <button type="button" className="btn btn-light" onClick={() => MultipleChoiceType('general')}>General</button>
                    </div>
                </div>
            </div>

            <div id="byitem" className="d-none">
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label instructions-label">Instructions</label>
                    <textarea className="form-control instructions-textarea" id="instructions" rows={3} placeholder="Type your instructions here..."></textarea>
                </div>

                <div className="border p-2">
                    <div className="border p-2 mb-3"><span className="fw-bold">Add Media: </span>
                        <div className="btn-group" style={{ width: '90%' }}>
                            <button className="btn btn-light" onClick={() => Media('photo')}>Photo</button>
                            <button className="btn btn-light" onClick={() => Media('normal')}>Normal</button>
                            <button className="btn btn-light" onClick={() => Media('bindingbox')}>With Binding Box</button>
                            <button className="btn btn-light" onClick={() => Media('gallery')}>Gallery</button>
                        </div>
                    </div>


                    <div id="photo" className="d-none">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Question
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Correct Answer
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <label className="form-label">Other options:</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Option A
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="input-group mb-3" style={{ width: "50%", marginLeft: "auto" }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    # of Options
                                </span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text h-full" >
                                    add options
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="text-end mt-4">
                            <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>add question</button>
                        </div>

                        {/*INSER MULTIPLE CHOICE PHOTO HERE */}
                        {/* PREVIEW FOR PHOTO  */}
                        <h3 className="mt-4">Added Questions:</h3>
                        <div className="border p-2">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="prev_header">Question #1</h3>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <button className="btn btn-secondary">delete all</button>
                                </div>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Question
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="Athletes in our country are not well-supported. ________" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Correct Answer
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="///" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Option A
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="/" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Option B
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="//" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>

                        </div>
                    </div>


                    <div id="normal" className="d-none">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Question
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Correct Answer
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <label className="form-label">Other options:</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Option A
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Option B
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="input-group mb-3" style={{ width: "50%", marginLeft: "auto" }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    # of Options
                                </span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text h-full" >
                                    add options
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="text-end mt-4">
                            <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>add question</button>
                        </div>


                        {/* PREVIEW FOR PHOTO > NORMAL  */}
                        <h3 className="mt-4">Added Questions:</h3>
                        <div className="border p-2">
                            {HeaderButtons()}

                            <div className="img-btn">
                                <div className="img-container">
                                <Image src={Frappe} layout="responsive" alt="Image"/>
                                </div>

                                {ButtonsInImage()}
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Question
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="What do you see from this photo?" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Correct Answer
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="frappe" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Option A
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="milkshake" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>

                        </div>
                    </div>

                    <div id="bindingbox" className="d-none">
                        {/*MULTIPLE CHOICE BINDING BOX HERE */}
                        <img id="raven_cafe" src="/images/raven_cafe.png" alt="image"/>
                        {BindingBoxTemplate()}
                    </div>


                    <div id="gallery" className="d-none">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Question
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Correct Answer
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <label className="form-label">Other options:</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Option A
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    Option B
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>


                        <div className="input-group mb-3" style={{ width: "50%", marginLeft: "auto" }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text h-full" >
                                    # of Options
                                </span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text h-full" >
                                    add options
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="text-end mt-4">
                            <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>add question</button>
                        </div>

                        {/* PREVIEW FOR PHOTO > GALLERY  */}
                        <h3 className="mt-4">Added Questions:</h3>
                        <div className="border p-2">
                            {HeaderButtons()}

                            <div className="row">
                                <div className="img-btn">
                                    <div className="img-container">
                                        <Image src={Frappe} layout="responsive" width={100} height={100} alt="Image" />
                                    </div>

                                    {ButtonsInImage()}
                                </div>
                                <div className="img-btn">
                                    <div className="img-container">
                                        <Image src={Drink1} layout="responsive" width={100} height={100} alt="Image"/>
                                    </div>

                                    {ButtonsInImage()}
                                </div>
                                <div className="img-btn">
                                    <div className="img-container">
                                        <Image src={Drink2} layout="responsive" width={100} height={100} alt="Image"/>
                                    </div>

                                    {ButtonsInImage()}
                                </div>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Question
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="What is common in this set of pictures?" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Correct Answer
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="drinks" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text h-full" >
                                        Option A
                                    </span>
                                </div>
                                <input type="text" className="form-control" value="Starbucks" disabled/>

                                <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                                <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                            </div>

                        </div>
                    </div>


                </div>{/* border */}
          


            </div>
            <div id="general" className="d-none">
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label instructions-label">Instructions</label>
                    <textarea className="form-control instructions-textarea" id="instructions" rows={3} placeholder="Type your instructions here..."></textarea>
                </div>
                <div className="border p-2">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="input-group mb-3" style={{ width: "50%", marginLeft: "auto" }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                # of Questions
                            </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text h-full" >
                                add questions
                            </span>
                        </div>
                    </div>
                    <br />
                    <div className="text-end mt-4">
                        <button className="btn btn-lg btn-info" style={{ padding: "8px 50px" }}>add question</button>
                    </div>
                </div>

                {/* PREVIEW FOR GENERAL  */}
                <h3 className="mt-4">Added Questions:</h3>
                <div className="border p-2">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="prev_header">Question Group</h3>
                        </div>
                        <div className="col-sm-6 text-end">
                            <button className="btn btn-secondary">delete all</button>
                        </div>
                    </div>

                    <div className="input-group mt-3 mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question #1
                            </span>
                        </div>
                        <input type="text" className="form-control" value="Do you have _________ against her decision?" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input type="text" className="form-control" value="something against" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>

                    <div className="input-group mt-3 mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question #2
                            </span>
                        </div>
                        <input type="text" className="form-control" value="What did you say _______________?" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input type="text" className="form-control" value="cost the main character’s life" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>

                    <div className="input-group mt-3 mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question #3
                            </span>
                        </div>
                        <input type="text" className="form-control" value="Give some ways to _________ accidents in the office." disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input type="text" className="form-control" value="cut down" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>

                    <div className="input-group mt-3 mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question #4
                            </span>
                        </div>
                        <input type="text" className="form-control" value="________ Jim, the program starts at 9." disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input type="text" className="form-control" value="According to" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>

                    <div className="input-group mt-3 mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Question #5
                            </span>
                        </div>
                        <input type="text" className="form-control" value="I’m a bit ___________." disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-full" >
                                Correct Answer
                            </span>
                        </div>
                        <input type="text" className="form-control" value="under the weather" disabled/>

                        <a href="#" className="edit_btn"><i className="fas fa-edit"></i></a>
                        <a href="#" className="delete_btn"><i className="fas fa-trash-alt"></i></a>
                    </div>

                </div>
            
            </div>
        </>
    )
}