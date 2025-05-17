// // src/Navbar.js
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link href="/home">Home</Link></li>
//         <li><Link href="/Activities">Activities</Link></li>
//         <li><Link href="/Tools">Tools</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//         <li><Link href="/"></Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

//CODE 2
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logoContainer}>
//         <Image src="/logo2.jpg" alt="Logo2" width={40} height={40} />
//       </div>
//       <ul style={styles.navList}>
//         <li><Link href="/home">Home</Link></li>
//         <li><Link href="/Activities">Activities</Link></li>
//         <li><Link href="/Tools">Tools</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#000', // Light gray background
//     borderBottom: '1px solid #ddd',
//   },
//   logoContainer: {
//     marginRight: '20px',
//   },
//   navList: {
//     display: 'flex',
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     gap: '15px',
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none', // Removes underline by default
//   }
// };

// export default Navbar;

//CODE 3
// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <Image src="/logo2.jpg" alt="Logo2" width={40} height={40} />
//       </div>
//       <ul className="nav-list">
//         <li><Link href="/home">Home</Link></li>
//         <li><Link href="/Activities">Activities</Link></li>
//         <li><Link href="/Tools">Tools</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>

//       <style jsx>{`
//         .navbar {
//           display: flex;
//           align-items: center;
//           padding: 10px 20px;
//           background-color: #000;
//           border-bottom: 1px solid #333;
//           // font-family: 'Cedarville Cursive', cursive; /* Manuscript font */
//           font-family: 'Kunstler Script', 'Lucida Handwriting', cursive; /* Kunstler with fallback */
//         }

//         .logo-container {
//           margin-right: 20px;
//         }

//         .nav-list {
//           display: flex;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           gap: 15px;
//         }

//         .nav-list li a {
//           color: #fff;
//           text-decoration: none; /* Removes underline */
//           transition: color 0.3s ease;
//           font-size: 30px;
//         }

//         .nav-list li a:hover {
//           color: #1e90ff; /* Light blue on hover */
//           text-decoration: none; /* Ensure no underline on hover */
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;


//temp code REGULAR
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import "./globals.css";

// const Navbar = () => {
//   const pathname = usePathname(); // Get the current route

//   const handleNavClick = (event, url) => {
//     if (pathname === url) {
//       event.preventDefault(); // Prevent Next.js handling
//       window.location.reload(); // Force a full page reload
//     } else {
//       // sessionStorage.clear(); // Reset session data when navigating
//       // Only reset session storage when clicking a navbar tab
//       // sessionStorage.removeItem("testProgress"); // Reset only test-related data
//       // ✅ Ensure we're in the client before accessing sessionStorage
//       if (typeof window !== "undefined") {
//         // Reset session data when navigating
//         sessionStorage.removeItem("lastClickTime"); 
//         sessionStorage.removeItem("knownWords");   
//         sessionStorage.removeItem("unknownWords"); 
//         sessionStorage.removeItem("seenWords");    
//         sessionStorage.removeItem("timeBetweenClicks"); 
//         sessionStorage.removeItem("levels"); 
//       }
//     }
//   };

//   return (
//     <nav className="navbar">
//       {/* <div className="logo-container">
//         <Image src="/logo2.jpg" alt="Logo2" width={40} height={40} />
//       </div> */}
//       <ul className="nav-list">
//         <li>
//           <Link href="/home" onClick={(e) => handleNavClick(e, "/home")}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/Store" onClick={(e) => handleNavClick(e, "/Store")}>
//             Must-see
//           </Link>
//         </li>
//         <li>
//           <Link href="/Tools" onClick={(e) => handleNavClick(e, "/Tools")}>
//             Tools
//           </Link>
//         </li>
//         <li>
//           <Link href="/Resume" onClick={(e) => handleNavClick(e, "/Resume")}>
//             Space
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" onClick={(e) => handleNavClick(e, "/contact")}>
//             Bouncy Balls
//           </Link>
//         </li>
//         {/* <li>
//           <Link href="/MoreDev" onClick={(e) => handleNavClick(e, "/MoreDev")}>
//             Actions
//           </Link>
//         </li> */}
//         {/* <li>
//           <Link href="/Ocean" onClick={(e) => handleNavClick(e, "/Ocean")}>
//             Ocean Motion (Caution)
//           </Link>
//         </li> */}
//         <li>
//           <Link href="/PLACES" onClick={(e) => handleNavClick(e, "/PLACES")}>
//             Places
//           </Link>
//         </li>
//          <li>
//           <Link href="/TPR" onClick={(e) => handleNavClick(e, "/TPR")}>
//             TPR 
//           </Link>
//         </li>
//         <li>
//           <Link href="/TPRtest" onClick={(e) => handleNavClick(e, "/TPRtest")}>
//             TPR test
//           </Link>
//         </li>
//       </ul>

//       <style jsx global>{`
//         .navbar {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 10px 20px;
//           background-color: #000;
//           border-bottom: 1px solid #333;
//           font-family: 'Orbitron', sans-serif;
//           font-size: 15px;
//         }

//         .logo-container {
//           margin-right: 20px;
          
//         }

//         .nav-list {
//           display: flex;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           gap: 15px;
          
//         }

//         .nav-list li a {
//           color: #fff;
//           text-decoration: none;
//           transition: color 0.3s ease;
//           font-size: 30px;
//           cursor: pointer;
//           font-family: 'Rajdhani', sans-serif;

//           font-size: 20px;
//         }
//         .nav-list li a:hover {
//           color: silver;
//           text-decoration: none;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

//code hamburger navbar 1
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import "./globals.css";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavClick = (event, url) => {
//     setMenuOpen(false); // Close menu on click
//     if (pathname === url) {
//       event.preventDefault();
//       window.location.reload();
//     } else if (typeof window !== "undefined") {
//       sessionStorage.removeItem("lastClickTime");
//       sessionStorage.removeItem("knownWords");
//       sessionStorage.removeItem("unknownWords");
//       sessionStorage.removeItem("seenWords");
//       sessionStorage.removeItem("timeBetweenClicks");
//       sessionStorage.removeItem("levels");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
//         {[
//           ["Home", "/home"],
//           ["Must-see", "/Store"],
//           ["Tools", "/Tools"],
//           ["Space", "/Resume"],
//           ["Bouncy Balls", "/contact"],
//           ["Places", "/PLACES"],
//           ["TPR", "/TPR"],
//           ["TPR test", "/TPRtest"],
//         ].map(([label, path]) => (
//           <li key={path}>
//             <Link href={path} onClick={(e) => handleNavClick(e, path)}>
//               {label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <style jsx global>{`
//         .navbar {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           background-color: #000;
//           padding: 10px 20px;
//           border-bottom: 1px solid #333;
//           font-family: 'Orbitron', sans-serif;
//           font-size: 15px;
//           position: relative;
//         }

//         .hamburger {
//           font-size: 28px;
//           color: white;
//           cursor: pointer;
//           z-index: 1001;
//         }

//         .nav-list {
//           display: none;
//           flex-direction: column;
//           list-style: none;
//           padding: 10px 0 0;
//           margin: 0;
//           width: 100%;
//         }

//         .nav-list.open {
//           display: flex;
//         }

//         .nav-list li {
//           margin-bottom: 10px;
//         }

//         .nav-list li a {
//           color: #fff;
//           text-decoration: none;
//           transition: color 0.3s ease;
//           font-size: 20px;
//           font-family: 'Rajdhani', sans-serif;
//         }

//         .nav-list li a:hover {
//           color: silver;
//         }

//         @media (min-width: 768px) {
//           .hamburger {
//             display: none;
//           }

//           .nav-list {
//             display: flex !important;
//             flex-direction: row;
//             justify-content: center;
//             gap: 15px;
//           }

//           .nav-list li {
//             margin: 0;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

//code 10 navbar 2
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./globals.css";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, url) => {
    setMenuOpen(false); // Close on click
    if (pathname === url) {
      event.preventDefault();
      window.location.reload();
    } else if (typeof window !== "undefined") {
      sessionStorage.removeItem("lastClickTime");
      sessionStorage.removeItem("knownWords");
      sessionStorage.removeItem("unknownWords");
      sessionStorage.removeItem("seenWords");
      sessionStorage.removeItem("timeBetweenClicks");
      sessionStorage.removeItem("levels");
    }
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {[
          ["Home", "/home"],
          // ["Must-see", "/Store"],
          ["Tools", "/Tools"],
          // ["Space", "/Resume"],
          // ["Bouncy Balls", "/contact"],
          ["Places", "/PLACES"],
          // ["TPR", "/TPR"],
          // ["TPR Gravity", "/TPRGravity"],
          // ["TPR Gravity Test", "/TPRGravitytest"],
          ["TPR", "/TPRGravitytest2"],
          ["ET", "/ET"],
          // ["Maze Game", "/maze-game"],
          // ["BIG Maze", "/BIGMaze"],
          ["Maze", "/maze-gameWL"]
        ].map(([label, path]) => (
          <li key={path}>
            <Link href={path} onClick={(e) => handleNavClick(e, path)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx global>{`
        .navbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: #000;
          padding: 10px 20px;
          border-bottom: 1px solid #333;
          font-family: 'Orbitron', sans-serif;
        }

        .hamburger {
          font-size: 28px;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .nav-list {
          display: none;
          flex-direction: column;
          list-style: none;
          padding: 10px 0 0;
          margin: 0;
          width: 100%;
        }

        .nav-list.open {
          display: flex;
        }

        .nav-list li {
          margin-bottom: 10px;
        }

        .nav-list li a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 20px;
          font-family: 'Rajdhani', sans-serif;
        }

        .nav-list li a:hover {
          color: silver;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;



//3d navbar 1
// 'use client';
// import { Canvas } from '@react-three/fiber';
// import { Text, OrbitControls } from '@react-three/drei';
// import { useRouter } from 'next/navigation';
// import * as THREE from 'three';

// export default function Navbar() {
//   const router = useRouter();

//   return (
//     <Canvas style={{ 
//         height: '15vh', 
//         background: 'transparent', 
//         width: '100%',
//         top:0,
//         left:0 }}>
//       <ambientLight intensity={3} />
//       <pointLight position={[10, 10, 10]} />

//       <OrbitControls />

//       {/* Example 3D Nav Links */}
//       <NavText position={[-20, 0, 0]} text="Home" onClick={() => router.push('/home')} />
//       <NavText position={[-13, 0, 0]} text="Must-see" onClick={() => router.push('/Store')} />
//       <NavText position={[-3, 0, 0]} text="Tools" onClick={() => router.push('/Tools')} />
//       <NavText position={[4, 0, 0]} text="Space" onClick={() => router.push('/Resume')} />
//       <NavText position={[11, 0, 0]} text="Bouncy Balls" onClick={() => router.push('/contact')} />
//     </Canvas>
//   );
// }

// function NavText({ text, position, onClick }) {
//   return (
//     <Text
//       position={position}
//       fontSize={2}
//       color="orange"
//       onPointerOver={(e) => (e.object.color = 'white')}
//       onClick={onClick}
//       anchorX="left"
//       anchorY="middle"
//       font="/Sansation-Regular.ttf"
//       outlineWidth={0.06}
//       outlineColor="black"
//       cursor="pointer"
//     >
//       {text}
//     </Text>
//   );
// }

//3d navbar 2
// 'use client';
// import { Canvas } from '@react-three/fiber';
// import { Text, OrbitControls } from '@react-three/drei';
// import { useRouter } from 'next/navigation';
// import * as THREE from 'three';
// import { useEffect, useState } from 'react';

// export default function Navbar() {
//   const router = useRouter();
//   const [fontSize, setFontSize] = useState(2); // Default font size

//   // Responsive font size based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 480) {
//         setFontSize(0.5); // Mobile
//       } else if (window.innerWidth <= 768) {
//         setFontSize(1.5); // Tablet
//       } else {
//         setFontSize(2); // Desktop
//       }
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Canvas 
//       style={{ 
//         height: '12vh', // Can adjust based on preference
//         background: 'transparent', 
//         width: '100%',
//         position: 'sticky',
//         top: 0,
//         zIndex: 10
//       }}
//     >
//       <ambientLight intensity={3} />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls enableZoom={false} enablePan={false} />

//       <NavText position={[-20, 0, 0]} text="Home" onClick={() => router.push('/home')} fontSize={fontSize} />
//       <NavText position={[-15, 0, 0]} text="Must-see" onClick={() => router.push('/Store')} fontSize={fontSize} />
//       <NavText position={[-8, 0, 0]} text="Tools" onClick={() => router.push('/Tools')} fontSize={fontSize} />
//       <NavText position={[-3, 0, 0]} text="Space" onClick={() => router.push('/Resume')} fontSize={fontSize} />
//       <NavText position={[2, 0, 0]} text="Bouncy Balls" onClick={() => router.push('/contact')} fontSize={fontSize} />
//     </Canvas>
//   );
// }

// function NavText({ text, position, onClick, fontSize }) {
//   return (
//     <Text
//       position={position}
//       fontSize={fontSize}
//       color="orange"
//       onPointerOver={(e) => (e.object.color = 'white')}
//       onClick={onClick}
//       anchorX="left"
//       anchorY="middle"
//       font="/Sansation-Regular.ttf"
//       outlineWidth={0.06}
//       outlineColor="black"
//       cursor="pointer"
//     >
//       {text}
//     </Text>
//   );
// }


// 'use client';
// import { Canvas } from '@react-three/fiber';
// import { Text, OrbitControls } from '@react-three/drei';
// import { useRouter } from 'next/navigation';
// import * as THREE from 'three';
// import { useEffect, useState } from 'react';

// export default function Navbar() {
//   const router = useRouter();
//   const [fontSize, setFontSize] = useState(2); // Default font size
//   const [spacing, setSpacing] = useState(12); // Default spacing between nav items

//   // Responsive font size and spacing based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 480) {
//         setFontSize(0.5); // Mobile
//         setSpacing(4); // Less space on mobile
//       } else if (window.innerWidth <= 768) {
//         setFontSize(1.5); // Tablet
//         setSpacing(6); // Slightly reduced space on tablet
//       } else {
//         setFontSize(2); // Desktop
//         setSpacing(8); // More space on desktop
//       }
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const navItems = [
//     { text: "Home", route: "/home" },
//     { text: "Must-see", route: "/Store" },
//     { text: "Tools", route: "/Tools" },
//     { text: "Space", route: "/Resume" },
//     { text: "Bouncy Balls", route: "/contact" },
//   ];

//   return (
//     <Canvas
//       style={{
//         height: '12vh',
//         background: 'transparent',
//         width: '100%',
//         position: 'sticky',
//         top: 0,
//         zIndex: 10,
//       }}
//     >
//       <ambientLight intensity={3} />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls enableZoom={false} enablePan={false} />

//       {/* Dynamically positioned NavText */}
//       {navItems.map((item, index) => (
//         <NavText
//           key={item.text}
//           position={[(index - Math.floor(navItems.length / 2)) * spacing, 0, 0]}
//           text={item.text}
//           onClick={() => router.push(item.route)}
//           fontSize={fontSize}
//         />
//       ))}
//     </Canvas>
//   );
// }

// function NavText({ text, position, onClick, fontSize }) {
//   return (
//     <Text
//       position={position}
//       fontSize={fontSize}
//       color="orange"
//       onPointerOver={(e) => (e.object.color = 'white')}
//       onClick={onClick}
//       anchorX="left"
//       anchorY="middle"
//       font="/Sansation-Regular.ttf"
//       outlineWidth={0.06}
//       outlineColor="black"
//       cursor="pointer"
//     >
//       {text}
//     </Text>
//   );
// }




























//CODE 4
// src/Navbar.js
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav style={navStyle}>
//       <div style={logoStyle}>TEACHTUDOR</div>
//       <ul style={ulStyle}>
//         <li style={liStyle}><Link href="/home">HOME</Link></li>
//         <li style={liStyle}><Link href="/Activities">ACTIVITIES</Link></li>
//         <li style={liStyle}><Link href="/Tools">TOOLS</Link></li>
//         <li style={liStyle}><Link href="/about">ABOUT</Link></li>
//         <li style={liStyle}><Link href="/contact">CONTACT</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const navStyle = {
//   position: 'sticky',
//   top: 0,
//   background: 'linear-gradient(135deg,rgb(255, 192, 110),rgb(187, 80, 80))', // Gradient background
//   padding: '15px 50px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
//   zIndex: 10,
// };

// const logoStyle = {
//   fontSize: '24px',
//   fontWeight: 'bold',
//   color: '#fff',
// };

// const ulStyle = {
//   display: 'flex',
//   listStyleType: 'none',
//   margin: 0,
//   padding: 0,
// };

// const liStyle = {
//   fontSize: '22px',
//   margin: '0 20px',
//   transition: 'transform 0.3s ease',
// };

// export default Navbar;

//CODE 3
// src/Navbar.js
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav style={navStyle}>
//       <div style={logoContainerStyle}>
//         <img src="/TEACHTUDORLOGO2.jpg" alt="TEACHTUDOR Logo" style={logoImageStyle} />
//         <span style={logoTextStyle}>TEACHTUDOR</span>
//       </div>
//       <ul style={ulStyle}>
//         <li style={liStyle}><Link href="/home">HOME</Link></li>
//         <li style={liStyle}><Link href="/Activities">ACTIVITIES</Link></li>
//         <li style={liStyle}><Link href="/Tools">TOOLS</Link></li>
//         <li style={liStyle}><Link href="/about">ABOUT</Link></li>
//         <li style={liStyle}><Link href="/contact">CONTACT</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const navStyle = {
//   position: 'sticky',
//   top: 0,
//   background: 'linear-gradient(135deg,rgb(244, 254, 207),rgb(33, 73, 22))', // Gradient background
//   padding: '15px 50px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
//   zIndex: 10,
// };

// const logoContainerStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// const logoImageStyle = {
//   width: '40px',  // Adjust logo size
//   height: 'auto',
//   marginRight: '10px',  // Space between logo and text
// };

// const logoTextStyle = {
//   fontSize: '24px',
//   fontWeight: 'bold',
//   color: '#fff',
// };

// const ulStyle = {
//   display: 'flex',
//   listStyleType: 'none',
//   margin: 0,
//   padding: 0,
// };

// const liStyle = {
//   margin: '0 20px',
//   transition: 'transform 0.3s ease',
// };

// export default Navbar;

