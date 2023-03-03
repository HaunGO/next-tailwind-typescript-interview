import React, { useState, useEffect } from 'react';
import MicroThing from '../components/MicroThing';


function Thing() {
  const [allSomething, setAllSomething] = useState(null);
  
  useEffect(() => {

    const fetchData = async () => {
      // https://jsonplaceholder.typicode.com/photos
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
      // const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await response.json();
      // I just want 10, so I'll going to slice them off 
      const lessData = data.slice(0, 10);
      setAllSomething(lessData);
    };

    fetchData();

  }, []);
  
  return (
    <div>

      {allSomething ? (
        <div>
          {/* <small><code><pre>{JSON.stringify(allSomething, null, 2)}</pre></code></small> */}

          {allSomething.map((thing) => (
              // <p key={thing.id}>{thing.title}</p>
              // <MicroThing key={thing.id} props={thing} />
              <MicroThing key={thing.id} id={thing.id} title={thing.title} url={thing.url} thumb={thing.thumbnailUrl} />
          ))}

        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Thing;




