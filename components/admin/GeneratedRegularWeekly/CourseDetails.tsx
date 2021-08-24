import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from './sample_data.json';
import LessonDetail from "./LessonDetail";

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


function ChapterDetails({ detail, index }) {
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
                                        <td className="w-25"><a  href="#" className="text-primary">upload video</a></td>
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
                                <div className="row">
                                    <LessonDetail/>
                                </div>
                                <div className="row">
                                    <button className="btn btn-secondary w-100">Add Activity</button>
                                </div>
                                <div className="row">
                                    <button className="btn btn-primary w-100">Add Lesson Group</button>
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

export default function CourseDetails() {
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
  );
}

