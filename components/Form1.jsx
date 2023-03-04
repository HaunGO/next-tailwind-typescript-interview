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

  function addNewRow(e){
	e.preventDefault();
	console.log('add a new row');
	setRows()
  }
  

  function updateRows(data){
	console.log('updateRows() ', data)
	setRows()
  }
 

  return (
    <div className=" text-semibold sans text-gray-500">
      <form id="form1" className=" max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className="">
          <h1>Household</h1>
          {allRows ? (
          <> 
            {/* <small><code><pre>{JSON.stringify(allRows, null, 2)}</pre></code></small> */}

            <table >
				<thead >
					<tr>
						<th>Covered</th>
						<th>Name</th>
						<th>Subscriber</th>
						<th>Insurance</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody> 
	    	        {allRows.map((row) => (
						<Row key={row.id} id={row.id} name={row.name} nickname={row.nickname} covered={row.covered} subscriber={row.subscriber} insurance={row.insurance} ssn={row.ssn} updateRows={updateRows} />
					))}
				</tbody>
            </table>

			<div className="flex flex-row justify-end">
				<button
					onClick={addNewRow}
				>+Add new member</button>
			</div>

          </>

          ) : (
            <p>Loading...</p>
          )}

   



        </div>
      </form>
    </div>
  );
}
