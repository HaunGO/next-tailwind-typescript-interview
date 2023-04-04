// import Head from "next/head";
// import Image from "next/image";
// import Nav from "./Nav";
import Footer from "./Footer";
import Aside from "./Aside";
import Brandon from "../components/Brandon/Brandon"

export default function Layout({children}){
    return (
        <>
            {/* <code>app/Layout</code> */}
            {/* <Nav /> */}
            <main>{children}</main>
            <Aside />
            <Brandon />
            <Footer />
        </>
    )
}   ``