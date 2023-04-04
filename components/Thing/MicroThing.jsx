import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MicroThing = (props) => {
    return (
        <>
        <div className="flex flex-row items-center">
           <Image
                src={props.thumb}
                alt={props.title}
                width={50}
                height={50}
                className="mr-2"
                />
            <p>{props.title}</p>
        </div>
        </>
    );
};

export default MicroThing; 