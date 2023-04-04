// import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./nav.module.css";



const NavBar = () => {

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.topNav}>
      <Link href='/' className={currentRoute === '/' ? styles.isActive : styles.nonActive}>
        Home
      </Link>

      <Link
        href='/projects'
        className={currentRoute === '/projects' ? styles.isActive : styles.nonActive}
      >
        Projects
      </Link>

      <Link
        href='/contact'
        className={currentRoute === '/contact' ? styles.isActive : styles.nonActive}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;

// const router = useRouter();
// const currentRoute = router.pathname;

// const Nav = () => (
//   <>
//     {/* <code>app/Nav</code> */}
//     <nav className="flex flex-row justify-around align-baseline z-50 w-full">

//         <Link href="/" className={styles.link}>Home</Link>
//         {/* <Link href="/projects" className={styles.link} {currentRoute === "/projects" ? "isActive" : "nonActive"}>Projects</Link> */}
//         {/* <Link href="/contact" className={styles.link} {currentRoute === "/contact" ? "isActive" : "nonActive"}>Contact</Link> */}

//     </nav>
//   </>
// )
// export default Nav 

