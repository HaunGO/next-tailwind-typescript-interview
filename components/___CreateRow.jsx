'use client';

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateRow() {
  const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {
    
    await fetch('data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        // content,
      }),
    });

    setTitle('');
    // setContent('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
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
