import React from 'react';

function Task(props){
  return (
    <div className="Task draggable"
         key={props.name}
         onDragStart={e=>props.ods(e,props.name)}
         draggable
         style={{backgroundColor: props.bg}}
    >
      {props.name}
    </div>
  )
}

export default Task;