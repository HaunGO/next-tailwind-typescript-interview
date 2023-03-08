import React, { useState, useEffect } from 'react';
import Row from '../components/Row';
// import RowTest from '../components/RowTest';
// import CreateRow from '../components/CreateRow';

export default function Form1() {

  const [allRows, setAllRows] = useState();
  
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('data.json', {cache: 'no-store' });  //data.json is an array of objects.
			const rows = await response.json();
			setAllRows(rows); // this data is an array of objects.
		};
		fetchData();
	}, []); // this will execute only on first render.


	// const testNew = {
	// 	"ssn": "111",
	// 	"name": "Daisy Bell",
	// 	"nickname": "Dazy",
	// 	"covered": false,
	// 	"subscriber": false,
	// 	"insurance": "Secondary"
	// };

	const blankRow = {
		"ssn": "",
		"name": "",
		"nickname": "",
		"covered": false,
		"subscriber": false,
		"insurance": ""
	};


	function addNewRow(data){
		// e.preventDefault();
		console.log('addNewRow', blankRow);
		setAllRows([...allRows, blankRow]);
	}


	function updateRows(data){
		// console.log('updateRows() ', data.thisIndex);
		// setAllRows( [allRows[data.thisIndex], data.rowData]);
		// setAllRows([...allRows, data]);
		// setAllRows( [ data ]);
		
		let newRowData = data.rowData;
		let newAllRows = allRows.splice(data.thisIndex,1, newRowData);
		// console.log(newAllRows);
		
		// setAllRows([...allRows, newAllRows]);
		setAllRows([...allRows]);
		
		
		// console.log(allRows[data.thisIndex]);
	}
	


  return (
    <div className=" sans text-gray-500">
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-md font-semibold text-black">Household</h1>
          {allRows ? (
			  <>  

      		<form id="form1" className="">

				<table  className="text-left w-full ">
					<thead className="text-xs text-black" >
						<tr>
							<th className="font-normal">Covered</th>
							<th className="font-normal">Name</th>
							<th className="font-normal">Subscriber</th>
							<th className="font-normal">Insurance</th>
							<th className="font-normal">ID</th>
						</tr>
					</thead>
					<tbody className="text-sm "> 
						{allRows.map((row, index) => (
							<Row key={index} index={index} name={row.name} nickname={row.nickname} covered={row.covered} subscriber={row.subscriber} insurance={row.insurance} ssn={row.ssn} updateRows={updateRows} />
						))}
					</tbody>
				</table>
				
			</form>

			{/* <CreateRow allRows={allRows} addNewRow={addNewRow}  /> */}

			<div className="flex flex-row justify-end">
				<button
					onClick={addNewRow}
				>+Add new member</button>
			</div>

		{/* <div>
		{allRows.map((row, index) => (
			<RowTest key={index} name={row.name} nickname={row.nickname} updateRows={updateRows} />
		))} 
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
