import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";


// import ArrayMethods from "../components/ArrayMethods";

export default function project() {
  return (
  <>
      <Head>
        <title>B:H Projects</title>
        <meta name="description" content="Projects page " />
      </Head>
      <main className="">

        <code>pages/project</code>
        <h1>Projects</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nam voluptatibus dolorem, iste odio voluptatem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut, doloremque, nobis natus soluta, exercitationem temporibus magni possimus illum placeat dolor! Minima laborum quia at ipsa itaque voluptatibus atque aut natus, iusto perferendis excepturi consequuntur, obcaecati modi placeat aperiam optio.</p>
        
        <Image src={`https://placehold.co/600x400`}
                    width={`600`}
                    height={`400`}
                    className="w-full h-auto max-w-lg "
                    alt="placeholder image"
                    />
        {/* <ArrayMethods /> */}
      </main>
  </>
  );
}
