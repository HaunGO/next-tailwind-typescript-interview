import React, { useState, useEffect } from 'react';
import Image from 'next/image';



// const MicroThing = () => {
const MicroThing = (props) => {
    return (
        <div>
           {/* <small>{props.title}</small> */}
           <p>{props.title}</p>
           <Image
                src={props.thumb}
                alt={props.title}
                width={50}
                height={50}
                />
        </div>
    );
};


export default MicroThing;
