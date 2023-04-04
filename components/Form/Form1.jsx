import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Form1() {

  const [allRows, setAllRows] = useState();
  
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('data.json', {cache: 'no-store' });  //data.json is an array of objects.
			const rows = await response.json();
			setAllRows(rows); 
		};
		fetchData();
	}, []); 


	function addNewRow(data){
		setAllRows([...allRows, {
			"covered": false,
			"name": "",
			"nickname": "",
			"subscriber": false,
			"insurance": "",
			"ssn": ""
		}]);
	}


	// I expect this can be improved. 
	// This function is called up from the Row, 
	// passing up the date to be added to state here.
	function updateRows(data){
		let newRowData = data.rowData;
		allRows.splice(data.thisIndex,1, newRowData);
		setAllRows([...allRows]);
	}
	

	return (
		<div className="max-w-2xl mx-auto sans text-gray-500">
			
			<h3 className="text-md font-semibold text-black">Household</h3>
			
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

				<div className="flex flex-row justify-end">
					<button
					className="text-xs text-teal-500 mt-3 mr-3
								hover:underline"
						onClick={addNewRow}
					>+Add new member</button>
				</div>

				<small className="text-xs"><code><pre>{JSON.stringify(allRows, null, 2)}</pre></code></small>

			</>
			) : (
				<p>Loading...</p>
			)}
	

		</div>
	);
}
