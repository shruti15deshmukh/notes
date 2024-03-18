import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import Header from "./Header";
import Footer from "./Footer";
import AllNotes from "./AllNotes";
// import Add from "./Add";
// import Note from "./Note";



const App =() => {
  const [notes, setNotes]=useState([ 
    {
    id: nanoid(),
    title: "buy eggs",
    content: "go to grocery shop"
    },
    {
      id: nanoid(),
      title: "buy eggs 2",
      content: "go to grocery shop"
    },
    {
        id: nanoid(),
        title: "buy eggs 3",
        content: "go to grocery shop"
    }
]);
useEffect(()=> {
  localStorage.setItem("react-notes-data", 
  JSON.stringify(notes)
  );
}, [notes]);

const addNote=(title,content) => {
  const CreateNote={
    id: nanoid(),
    title: title,
    content: content
  }
  const CreatedNotes = [...notes, CreateNote];
  setNotes(CreatedNotes);

};





const deleteNote = (id) => {
  const CreatedNotes = notes.filter((note) => note.id !== id);
  setNotes(CreatedNotes);
  
  
  

}


  return <div className="container">
    <Header/>
    
   

    
    {/* <AllNotes>notes = {notes} </AllNotes> 
    <Add>handleAddNote={addNote}</Add>
    <Note>handleDeleteNote={deleteNote}</Note> */}
    <AllNotes>notes = {notes} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    </AllNotes> 
    
   
    <Footer/>

    

  </div>;
};



// function App() {
//   const[notes,setNotes]=useState([]);



//   function addNote(note){
//     setNotes(prev=>{
//       return [...prev,note];

//     });

//   }
//   function deleteNote(id){
//     setNotes(prev=>{
//       return prev.filter((noteItem, index) =>{
//         return index!== id;
//       });
//     });

//   }
//   return (
//     <div>
//       <Header />
      
//       <Add onAdd={addNote}/>
//       {notes.map((noteItem, index)=>{
//         return <Note 
//         key={index}
//         id={index}
//         title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
        
//       })}
//       <Footer />
//     </div>
//   );
// }

export default App;
