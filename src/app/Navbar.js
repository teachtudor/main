// src/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/Activities">Activities</Link></li>
        <li><Link href="/Tools">Tools</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/"></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
