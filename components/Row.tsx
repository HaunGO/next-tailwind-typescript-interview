import React, { useState, useEffect } from 'react';


const Row = (props) => {
    return (
       <>

                <tr key={props.id} className="">
                  <td className="border">
                    <input type="checkbox" value={props.covered} />
                  </td>
                  <td className="border flex flex-row">
                    <svg className="block mr-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input type="text" value={props.name}/>
                  </td>
                  <td className="border">
                    <input type="radio" value={props.subscriber} />
                  </td>
                  <td className="border">
                    <select>
                      <option value={props.insurance}>{props.insurance}</option>
                    </select>
                  </td>
                  <td className="border">
                    <input type="text" value={props.ssn} />
                  </td>
                </tr>

       </>
    );
};


export default Row;
