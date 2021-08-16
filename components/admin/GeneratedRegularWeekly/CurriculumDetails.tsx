import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from './sample_data.json';
import LessonDetail from "./LessonDetail";
import Modal from '../../items/Modal'
import Link from 'next/link';

interface ICourseType{
    id:string,
    title:string,
    summary: string,
    lesson: string[]
} 

  

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const uploadChapterOverview = () => {
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

const uploadLinks = () => {
  return (
      <div className="d-flex justify-content-center flex-column">
          <div className="create-additional-materials container">
              <div className="row add-link mt-3">
                  <div className="col-5">
                      <label className="p-2" htmlFor="link-name">Link Name:</label>
                      <input className="form-control" type="text" id="linkName" />
                  </div>
                  <div className="col-5">
                      <label className="p-2" htmlFor="link-address">Link Address:</label>
                      <input className="form-control" type="text" id="linkAddress" />
                  </div>
                  <div className="col-2">
                      <button type="button" className="add-link-btn-modal">Add</button>
                  </div>
              </div>

              <label className="p-2 mt-3" htmlFor="material-list">Additional Materials List:</label>
              <table className="material-list-table mb-3">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Material Name</th>
                          <th>Options</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th>1</th>
                          <td>How to improve your IELTS Band</td>
                          <td>
                              <div className="table-buttons">
                                  <button type="button" className="edit-button-modal">Edit</button>
                                  <button type="button" className="delete-button-modal">Delete</button>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <th>2</th>
                          <td>Knowing how to speak with Confidence</td>
                          <td>
                              <div className="table-buttons">
                                  <button type="button" className="edit-button-modal">Edit</button>
                                  <button type="button" className="delete-button-modal">Delete</button>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>

          </div>
      </div>
  )
}

const insertSubtitle = () =>{
    return(
        <>
        <div className="row">
            <div className="col-4">
                <label htmlFor=""># of lines needed:</label>
            </div>
            <div className="col-4">
                <input className="form-control"/>
            </div>
            <div className="col-4">
                <button className="btn-secondary">Add Lines</button>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-3">
                <label>Timestamp Start:</label>
                <input className="form-control"/>
            </div>
            <div className="col-3">
                <label> Timestamp End:</label>
                <input className="form-control"/>
            </div>
            <div className="col-12">
                <label>Line:</label>
                <input className="form-control"/>
            </div>
            
        </div>
        <hr/>
        </>
    )
}

const createLessonGroup = () => {
  return (
      <div className="d-flex justify-content-center flex-column">
          <div className="lesson-group container">

            <label className="p-2" htmlFor="lesson-name">Lesson Name:</label>
            <input className="form-control" type="text" id="lessonName"/>

            <label className="p-2" htmlFor="youtube-link">Overall Time to Complete Range (<i>in minutes</i>):</label>
            <input className="form-control" type="text" id="youtubeLink"/>
            <hr/>
            <label>Introduction Video (Youtube Link): </label>
            <input className="form-control" type="text" id="linkAddress" />
            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#insertSubtitleIntroVideo">Insert Subtitle</button>
            <div className="generate-video">
                <button type="button" className="btn-create mb-2 mt-3" >Create Lesson</button>
            </div>

          </div>
      </div>
      
  )
}

function ChapterDetails({ detail, index }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const ChangeVideo = () =>{
        let disableValue = isDisabled === true? false:true; 
        setIsDisabled(disableValue);
    }
    
  return (
    <Draggable draggableId={detail.id} index={index}>
      {provided => (
        <div 
            className = "card"
            style={{
                "width": "100%",
                "border": "1px solid grey",
                'marginBottom': {grid}+" px",
                "padding": {grid}+" px"
            }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            
            <a className="btn btn-secondary" data-bs-toggle="collapse" href={"#"+detail.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                WEEK {(index+1)}
            </a>
            <div className="collapse" id={detail.id}>
                <div className="card card-body row">
                    <div className="col-12 mb-3">
                        <label>Chapter Title</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label>Chapter Summary</label>
                        <textarea
                        className="w-100"
                        rows={5}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <a className="btn btn-dark w-100" data-bs-toggle="collapse" href={"#weekOverview-"+detail.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                            Week Overview
                        </a>
                        <div className="collapse" id={"weekOverview-"+detail.id}>
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                        <td> 1. Overview Video</td>
                                        <td className="w-25">
                                        <button type="button" 
                                        className="btn btn-link" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#uploadChapterOverview">
                                          upload video
                                        </button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td> 2. Additional Materials</td>
                                        <td className="w-25">
                                        <button type="button" 
                                        className="btn btn-link" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#uploadLinks">
                                          upload links
                                        </button>                                          
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <a className="btn btn-dark w-100" data-bs-toggle="collapse" href={"#weekConclusion-"+detail.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                            Week Conclusion
                        </a>
                        <div className="collapse" id={"weekConclusion-"+detail.id}>
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                        <td> 1. Quiz </td>
                                        <td className="w-25"><a  href="#" className="text-primary">lesson group</a></td>
                                        </tr>
                                        <tr>
                                        <td> 2. Additional Materials</td>
                                        <td className="w-25"><a  href="#" className="text-primary">upload links</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5">
                        <a className="btn btn-dark w-100" data-bs-toggle="collapse" href={"#lesson-"+detail.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                            Lesson 1: Pauses
                        </a>
                        <div className="collapse" id={"lesson-"+detail.id}>
                            <div className="card card-body">
                                <div className="row mb-3">
                                    <div className="card">
                                        <div className="card-body ">
                                            <div className="row ">
                                                <p>Introduction Video</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <input className="form-control" defaultValue="www.youtube.com/introductionvideo" disabled={isDisabled}/>
                                                </div>
                                                <div className="col-4 mt-1"> 
                                                    <button className="btn btn-link" ><b>Change Uploaded Video</b></button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <LessonDetail/>
                                </div>
                                <div className="row">
                                  <Link href="/admin/course-content" passHref><button className="btn btn-secondary w-100">Add Activity</button></Link>
                                </div>
                                <div className="row">
                                    <button className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#createLessonGroup">Add Lesson Group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </Draggable>
  );
}

const ChapterList = React.memo(function ChapterList({ details }:any) {
  return details.map((detail: ICourseType, index: number) => (
    <ChapterDetails detail={detail} index={index} key={detail.id} />
  ));
});

export default function CurriculumDetails() {
  const [state, setState] = useState({ data: data.chapters });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const data:any = reorder(
      state.data,
      result.source.index,
      result.destination.index
    );

    setState({ data });
  }

  return (
    <>
    <Modal
        modalName="uploadChapterOverview"
        modalTitle="Upload Chapter Overview"
        content={uploadChapterOverview()}
    />
    <Modal
        modalName="uploadLinks"
        modalTitle="Create Additional Materials"
        content={uploadLinks()}
    />
    <Modal
        modalName="createLessonGroup"
        modalTitle="Create Lesson group"
        content={createLessonGroup()}
    />
    <Modal
        modalName="insertSubtitleIntroVideo"
        modalTitle="Subtitle for Introduction Video"
        content={insertSubtitle()}
    />
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ChapterList details={state.data} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  );
}

