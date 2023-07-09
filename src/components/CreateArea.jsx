import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  // const [NoteArray, setNoteArray] = useState([]);

  function HandleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function HandleClick(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
    // this prevents the note from refreshing to blank when you click the add btn
  }

  return (
    <div>
      <form>
        <input
          onChange={HandleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={HandleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={HandleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
