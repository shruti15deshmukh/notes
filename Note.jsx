import React from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const Note = ({id,title,content, handleDeleteNote}) => {
  
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      

      <button onClick={() => handleDeleteNote(id)}><DeleteSweepIcon/></button>
    </div>
  );
}

export default Note;
