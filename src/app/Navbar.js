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

//CPDE 3
// src/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <img src="/TEACHTUDORLOGO2.jpg" alt="TEACHTUDOR Logo" style={logoImageStyle} />
        <span style={logoTextStyle}>TEACHTUDOR</span>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}><Link href="/home">HOME</Link></li>
        <li style={liStyle}><Link href="/Activities">ACTIVITIES</Link></li>
        <li style={liStyle}><Link href="/Tools">TOOLS</Link></li>
        <li style={liStyle}><Link href="/about">ABOUT</Link></li>
        <li style={liStyle}><Link href="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  position: 'sticky',
  top: 0,
  background: 'linear-gradient(135deg,rgb(244, 254, 207),rgb(33, 73, 22))', // Gradient background
  padding: '15px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
  zIndex: 10,
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoImageStyle = {
  width: '40px',  // Adjust logo size
  height: 'auto',
  marginRight: '10px',  // Space between logo and text
};

const logoTextStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
};

const ulStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 20px',
  transition: 'transform 0.3s ease',
};

export default Navbar;

