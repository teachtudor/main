// import Navbar from './Navbar';
// import './globals.css';

// export default function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the homepage of the website.</p>
//     </div>
//   );
// }
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure you import 'useRouter' from 'next/navigation'

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect automatically to the '/home' page
    router.push('/home');  // Correct relative path to 'home/page.js'
  }, [router]);

  return null; // No content is displayed, as it immediately redirects
}
