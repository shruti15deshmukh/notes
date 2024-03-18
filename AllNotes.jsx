import Note from "./Note";
import Add from "./Add";
const AllNotes=({notes, handleAddNote, handleDeleteNote})=>{
    return (
    <div className="NotesList">
        {notes && notes.map((note) =>(
        <Note 
        id={note.id}
        title={note.title}
        content={note.content}
        handleDeleteNote={handleDeleteNote(note)}
        />
        ))}
        <Add handleAddNote={handleAddNote()}/>
        
    </div> 
    );
};
export default AllNotes; 