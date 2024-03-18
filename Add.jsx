import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
const Add = (handleAddNote) => {
    const [noteTitle, setNoteTitle]= useState("");
    
    const [noteContent, setNoteContent]= useState("");
    const handleChange=(event) => {
        setNoteTitle(event.target.value);
        setNoteContent(event.target.value);


    };
    const handleSubmit = () => {
        if(noteTitle.trim().length>0 || noteContent.trim().length>0){
            handleAddNote(noteTitle,noteContent);
            setNoteTitle("");
            setNoteContent("");

        }
        


    };
    return (<div>
        <textarea 
        rows='10'
        cols='2'
        placeholder="What's on your mind...."
        value={noteTitle}
        onChange={handleChange}
        ></textarea>

        <textarea 
        rows='10'
        cols='10'
        placeholder="Describe...."
        value={noteContent}
        onChange={handleChange}
        >

        </textarea>
        <button onClick={handleSubmit}><AddIcon/></button>



    </div>
    );

};
export default Add;


































// function Add(props){
//     const [note, setNote]=useState({
//         title:"" ,
//         content:""

//     });
//     function handleChange(event) {
//         const {name, value}=event.target;
//         setNote(prev=>{
//             return{
//                 ...prev,
//                 [name]:value
//             };
//         });
//     }
    
//     function submitHandler(event){
//         props.onAdd(note);
//         setNote({
//             title:"",
//             content:""
    
//         });
//         event.preventDefault();

//     }
//     return(
//         <div>
//             <form className="note" method="post" action="/add">
//                 <input name="title" 
//                 onChange={handleChange}
//                 value={note.title}

//                 placeholder="Title"/>
//                 <textarea name="content" 
//                 onChange={handleChange}
//                 value={note.content}
//                 placeholder="What's on your mind, buddy..?" rows="4"/>
//                 <button onClick={submitHandler}><AddIcon/></button>
//             </form>
//         </div>

//     );
// }
// export default Add;