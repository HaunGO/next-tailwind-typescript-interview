import React, { useState, useEffect } from 'react';
import Row from '../components/Row';
import CreateRow from '../components/CreateRow';

export default function Form1() {

  const [allRows, setAllRows] = useState();
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('data.json', {cache: 'no-store' });  //data.json is an array of objects.
      const rows = await response.json();
      setAllRows(rows); // this data is an array of objects.
    };

    fetchData();

  }, []);


	const testNew = {
		"ssn": "111",
		"name": "Daisy Bell",
		"nickname": "Dazey",
		"covered": false,
		"subscriber": false,
		"insurance": "Secondary"
	};


	function addNewRow(data){
		// e.preventDefault();
		console.log('addNewRow', testNew);
		setAllRows([...allRows, testNew]);
	}


	function updateRows(data){
		console.log('updateRows() ', data)
		setAllRows([...allRows, data]);
	}
	

  return (
    <div className=" text-semibold sans text-gray-500">
        <div className="">
          <h1>Household</h1>
          {allRows ? (
			  <> 

      		<form id="form1" className="max-w-32 border border-gray-300 p-4 m-4 rounded-md">

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
						{allRows.map((row, index) => (
							<Row key={index} name={row.name} nickname={row.nickname} covered={row.covered} subscriber={row.subscriber} insurance={row.insurance} ssn={row.ssn} updateRows={updateRows} />
						))}
					</tbody>
				</table>
				
			</form>

			<CreateRow allRows={allRows} addNewRow={addNewRow}  />

			{/* <div className="flex flex-row justify-end">
				<button
					onClick={addNewRow}
				>+Add new member</button>
			</div> */}



            <small className="text-xs"><code><pre>{JSON.stringify(allRows, null, 2)}</pre></code></small>



          </>
          ) : (
            <p>Loading...</p>
          )}

   



        </div>
    </div>
  );
}
