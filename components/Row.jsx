import React, { useState, useEffect } from 'react';


const Row = (props) => {


  const [isCovered, setIsCovered] = useState(false); 
  const [isSubscribed, setIsSubscribed] = useState(false); 
  
  // const [nameIs, setNameIs] = useState(false); 

  const updateRows = props.updateRows;

  const handleCoveredChange = (e)=>{
    updateRows({"covered":!isCovered});
    setIsCovered(!isCovered);
  }

  const handleSubscribeChange = (e)=>{
    setIsSubscribed(!isSubscribed);
    // console.log('check', e.target.checked);
    // updateRows();
  }

  const onNameChange = (e) => {
    manageInputSize(e);
  }

  const manageInputSize = (input) => {
    input.target.setAttribute('size', input.target.value.length||=1)
  }




    return (
       <>
        <tr className="">


          <td className="border flex-none">
            <input className="mx-4" type="checkbox" checked={isCovered} onChange={handleCoveredChange}/>
          </td>
          

          <td className="border flex-auto flex flex-row justify-start">
            <svg className="block mx-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input type="text" size="1" className="pr-1" defaultValue={props.name} onChange={onNameChange} />
            <input type="text" size="1" className="pl-1" defaultValue={props.nickname} onChange={onNameChange} />
          </td>
          

          <td className="border flex-none">
            <input type="radio" checked={isSubscribed} onClick={handleSubscribeChange} readOnly />
          </td>


          <td className="border ">
            <select>
              <option value={props.insurance}>Primary</option>
              <option value={props.insurance}>Secondary</option>
            </select>
          </td>


          <td className="border flex-none">
            <input size="15" type="text" defaultValue={props.ssn} />
          </td>


        </tr>





       </>
    );
};


export default Row;
