import React, { useState, useEffect } from 'react';
import Row from '../components/Row';

export default function Form1() {

  const [allRows, setRows] = useState(null);
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('data.json');
      const data = await response.json();
      setRows(data);
    };

    fetchData();

  }, []);


  
  return (
    <div className=" text-semibold sans text-gray-500">
      <form className=" max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className="">
          
          <h1>Household</h1>

          {allRows ? (
          <>
            {/* <small><code><pre>{JSON.stringify(allRows, null, 2)}</pre></code></small> */}

            <table className="">

              {allRows.map((row) => (

                // <tr key={row.id} className="">
                //   <td className="border">
                //     <input type="checkbox" value={row.covered} />
                //   </td>
                //   <td className="border flex flex-row">
                //     <svg className="block mr-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                //         <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                //     </svg>
                //     <input type="text" value={row.name}/>
                //     <span className="text-sm text-gray-400">({row.nickname})</span>
                //   </td>
                //   <td className="border">
                //     <input type="radio" value={row.subscriber} />
                //   </td>
                //   <td className="border">
                //     <select>
                //       <option value={row.insurance}>{row.insurance}</option>
                //     </select>
                //   </td>
                //   <td className="border">
                //     <input type="text" value={row.ssn} />
                //   </td>
                // </tr>

                <Row key={row.id} id={row.id} name={row.name} covered={row.covered} subscriber={row.subscriber} insurance={row.insurance} />

                ))}
            </table>

            <button>+Add new member</button>

          </>
            
          ) : (
            <p>Loading...</p>
          )}

   



        </div>
      </form>
    </div>
  );
}
