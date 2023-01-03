import React from "react";



function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (

    <div className="note">
        
      <h1 contenteditable="true" >{props.title}</h1>
      <p contenteditable="true" >{props.content}</p>
      <button onClick={handleClick}><h1>❌</h1></button>
    
    </div>
  );
}

export default Note;
