// {/* @ts-expect-error Server Component */}

// async function getData() {
//   const res = await fetch('https://api.kucoin.com/api/v1/market/allTickers');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   console.log(res);
//   return res.json();
// }

// export default function Thing() {
//   const data = getData();
//   return (
//     <>
//       <code>Thing</code>
//       <div>
//         {/* {data} */}
//       </div>
//     </>
//   );
// }




  



import React, { useState, useEffect } from 'react';

function Thing() {
  const [allTickers, setAllTickers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://api.kucoin.com/api/v1/market/allTickers');
      const response = await fetch('allTickers.json');
      const data = await response.json();
      setAllTickers(data);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      {allTickers ? (
        <pre>{JSON.stringify(allTickers, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Thing;




