import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from './sample_data.json'

interface LessonType{
    id:string,
    title: string,
    acitivity_type: string
} 


const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


function Lesson({ detail, index }) {
  return (
    <Draggable draggableId={detail.id} index={index}>
      {provided => (
        <div 
            className = "card "
            style={{
                "width": "200px",
                "border": "1px solid grey",
                'marginBottom': {grid}+" px",
                "padding": {grid}+" px"
            }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            <div className="card-body row">
            <div className="col-10">
                {(index+1)+". "+detail.title}  <span className="badge bg-secondary ml-3">{detail.activity_type}</span>
            </div>
            {
              detail.title == "Introduction Video" ? (
              <div className="col-1">
                  <a href="#"><i className="fa fa-upload text-primary"></i></a>
              </div>
              ):(
                <>
                  <div className="col-1">
                      <a href="#"><i className="fa fa-edit text-primary"></i></a>
                  </div>
                  <div className="col-1">
                      <a href="#"><i className="fa fa-trash text-danger"></i></a>
                  </div>
                </>
              )
            }
            
            </div>
        </div>
      )}
    </Draggable>
  );
}

const LessonList = React.memo(function LessonList({ details }:any) {
  return details.map((detail: LessonType, index: number) => (
    <Lesson detail={detail} index={index} key={detail.id} />
  ));
});

export default function CourseDetails() {
  const [state, setState] = useState({ data: data.lesson_1 });

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
            <LessonList details={state.data} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

