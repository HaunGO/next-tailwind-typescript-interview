import React, { useState, useEffect, useRef } from 'react';


const Row = (props) => {
  

  
  
  
  
  
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [covered, setCovered] = useState(props.covered); 
  const [subscribed, setSubscribed] = useState(props.subscriber); 
  const [name, setName] = useState(props.name); 
  const [nickname, setNickname] = useState(props.nickname); 
  const [insID, setInsID] = useState(props.ssn); 
  const [insurance, setInsurance] = useState(props.insurance); 

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onNicknameChange = (e) => {
    setNickname(e.target.value);
  }
  const onCoveredChange = (e)=>{
    setCovered(!covered);
  }
  const onSubscribeChange = (e)=>{
    setSubscribed(!subscribed);
  }
  const onInsChange = (e) => {
    setInsurance(e.target.value);
  }
  const onInsIDChange = (e) => {
    setInsID(e.target.value);
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // This is passed back up to parent component to update parent state.

  const updateRows = props.updateRows;

  useEffect(() => {
    // console.log('hi from Row');
    updateRows({thisIndex:props.index, rowData:{
      "name": name,
      "nickname": nickname, 
      "covered": covered,
      "insurance": insurance,
      "subscriber": subscribed,
      "ssn": insID
    }});

  },[covered, subscribed, name, nickname, insID, insurance])
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // This section is the trick to expand the input size based on character length:
  const [nameSize, setNameSize] = useState(2);
  const [nicknameSize, setNicknameSize] = useState(2);
  
  const nameField = useRef(null);
  const nicknameField = useRef(null);
  
  useEffect(() => {
    // console.log(name);
    if(name) { 
      setNameSize(name.length || 1);
    }else{
      setNameSize(nameField.current.placeholder.length || 1);
    }
  }, [name]);
  
  useEffect(() => {
    // console.log(nickname);
    if(nickname) { 
      setNicknameSize(nickname.length || 1);
    }else{
      setNicknameSize(nicknameField.current.placeholder.length || 1);
    }
  }, [nickname]);
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  


    return (
       <>
        <tr className="">

          <td className="flex justify-center items-center">
            <input 
              className="text-teal-500 rounded-sm
                focus:outline focus:outline-offset-2
              focus:outline-teal-500" 
              type="checkbox" 
              checked={covered} 
              onChange={onCoveredChange}/>
          </td>

          <td className="flex flex-row justify-start items-center flex-grow-0">
            <svg className="block w-6 h-6 flex-none mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input 
              className="px-0 border-0" 
              type="text" 
              size={nameSize}  
              defaultValue={name} 
              placeholder="Full Name"
              onChange={onNameChange} 
              ref={nameField}
              />
            <span className="text-slate-400">(</span>
            <input 
              className="pl-0 pr-0 border-0 
                      text-slate-400 
                      placeholder:text-slate-400
                      text-sm" 
              type="text" 
              size={nicknameSize}  
              defaultValue={nickname} 
              placeholder="Nickname"
              onChange={onNicknameChange} 
              ref={nicknameField}
              />
            <span className="text-slate-400">)</span>
          </td>
          

          <td className="flex justify-center items-center">
            <input 
              className="
              bg-white 
              border-0
              outline outline-1 outline-offset-2 outline-slate-200
              text-teal-500 
              shadow-teal-500 
              checked:outline-teal-500 
              checked:text-teal-500 
              focus:outline-teal-500
              disabled:checked:outline-teal-100
              disabled:checked:text-teal-100"
              type="radio" 
              disabled={!covered} 
              checked={subscribed} 
              readOnly 
              onClick={onSubscribeChange}  />
          </td>


          <td className="flex justify-center items-center" >
            <select 
              className="rounded border-slate-200
              disabled:bg-slate-50 
              disabled:text-slate-300/0" 
              defaultValue={insurance} 
              disabled={!covered} 
              onChange={onInsChange}>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
            </select>
          </td>

          
          <td className="flex justify-center items-center" >
            <input 
              className="rounded border-slate-200 
              text-slate-500 
              placeholder:text-slate-300 
              disabled:bg-slate-50 
              disabled:text-slate-300/0
              disabled:placeholder:text-slate-300/0"
              type="text" 
              placeholder="Ins. ID/SSN" 
              disabled={!covered} size="10" 
              onChange={onInsIDChange} />
          </td>


        </tr>





       </>
    );
};


export default Row;
