
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateRow(props) {
  const [title, setTitle] = useState('');

const addNewRow = props.addNewRow;


const addRow = (e)=>{
    e.preventDefault();
    addNewRow({'hi':42})
}


  return (
    <form onSubmit={addRow}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
     <button type="submit">
        +Add new member
      </button>
    </form>
  ); 
}
