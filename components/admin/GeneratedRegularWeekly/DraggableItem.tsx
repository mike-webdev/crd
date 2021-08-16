import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


interface IProps{
    data: any,
    id?:string,
    title?: string
}

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


function Items({ detail, index }) {
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
                {(index+1)+". "+detail.title}
            </div>
            <div className="col-1">
                <button className="btn btn-link" ><i className="fa fa-edit text-primary"></i></button>
            </div>
            <div className="col-1">
              <button className="btn btn-link" ><i className="fa fa-trash text-danger"></i></button>
            </div>
            </div>
        </div>
      )}
    </Draggable>
  );
}

const DataList = React.memo(function DataList({ details }:any) {
  return details.map((detail: IProps, index: number) => (
    <Items detail={detail} index={index} key={detail.id} />
  ));
});

export default function DraggableItem(props:IProps) {
  const [state, setState] = useState({ data: props.data});

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
            <DataList details={state.data} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

