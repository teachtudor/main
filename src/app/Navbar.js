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
'use client';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Image src="/logo2.jpg" alt="Logo2" width={40} height={40} />
      </div>
      <ul className="nav-list">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/Activities">Activities</Link></li>
        <li><Link href="/Tools">Tools</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          background-color: #000;
          border-bottom: 1px solid #333;
          // font-family: 'Cedarville Cursive', cursive; /* Manuscript font */
          font-family: 'Kunstler Script', 'Lucida Handwriting', cursive; /* Kunstler with fallback */
        }

        .logo-container {
          margin-right: 20px;
        }

        .nav-list {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 15px;
        }

        .nav-list li a {
          color: #fff;
          text-decoration: none; /* Removes underline */
          transition: color 0.3s ease;
          font-size: 30px;
        }

        .nav-list li a:hover {
          color: #1e90ff; /* Light blue on hover */
          text-decoration: none; /* Ensure no underline on hover */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;



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

