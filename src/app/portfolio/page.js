// // // pages/portfolio.js
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function Portfolio() {
  return (
    <>
    <Navbar/>
      <Head>
        <title>Edward Pablo de Sa Sauerbrunn – Portfolio</title>
        <meta name="description" content="Portfolio of Edward Pablo de Sa Sauerbrunn – Civil Engineer, ESL Educator, Data Analyst" />
      </Head>

      <main style={styles.main}>
        {/* Hero Section */}
        {/* <section style={styles.hero}>
          <h1 style={styles.name}>Edward Pablo de Sa Sauerbrunn</h1>
          <p style={styles.tagline}>
            Civil Engineer • Data Analyst • ESL Educator • Bilingual (English/Spanish)
          </p>
          <Link href="https://www.linkedin.com/in/pablo-d-8a6856169" target="_blank" style={styles.button}>
            View LinkedIn
          </Link>
        </section> */}
        <section style={styles.hero}>
            {/* <h1 style={styles.name}>Edward Pablo de Sa Sauerbrunn</h1>
            <p style={styles.tagline}>
                Civil Engineer • Data Analyst • ESL Educator • Bilingual (English/Spanish)
            </p> */}
            <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
                Edward Sauerbrunn
            </h1>
            <p style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Civil Engineer • Data Analyst • ESL Educator • Bilingual (English/Spanish)
            </p>

            {/* <Link href="https://www.linkedin.com/in/pablo-d-8a6856169" target="_blank" style={styles.button}>
                View LinkedIn
            </Link> */}

            {/* Scroll hint arrow */}
            <span className="scroll-hint" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                ↓
            </span>
        </section>

        {/* Projects/Experience Section */}
        <section style={styles.projects}>
          <h2 style={styles.sectionTitle}>Key Professional Experience</h2>

          {/* Preply */}
          <div style={styles.projectCard}>
            <h3>Preply.com — Online English Tutor (08/2024 – Present)</h3>
            <ul className="project-list">
              <li>Develop personalized ESL lesson plans using Communicative Approach, TBL, and TPR.</li>
              <li>Analyze CEFR A1–C2 data with MySQL to tailor lessons effectively.</li>
              <li>Created TeachTudor.com, an interactive Next.js-powered ESL platform.</li>
            </ul>
          </div>

          {/* Kiewit */}
          <div style={styles.projectCard}>
            <h3>Kiewit, Inc. — Takeoff Analyst (12/2019 – 09/2020)</h3>
            <ul className="project-list"> 
              <li>Performed detailed quantity takeoffs for civil infrastructure projects using Excel, AutoCAD, Revit, SketchUp, and Bluebeam.</li>
              <li>Applied data analysis with pivot tables, VLOOKUP, and basic VBA to support project budgeting.</li>
            </ul>
          </div>

          {/* JET Programme */}
          <div style={styles.projectCard}>
            <h3>JET Programme (Japan) — Language Teacher (07/2004 – 07/2006)</h3>
            <ul className="project-list">
              <li>Designed and delivered English curriculum enhancing speaking, reading, writing, and listening skills.</li>
              <li>Collaborated with local teachers to refine pedagogy and pronunciation techniques.</li>
            </ul>
          </div>

          {/* Johnston Burkholder Associates */}
          <div style={styles.projectCard}>
            <h3>Johnston Burkholder Associates — BIM Specialist (Contract) (12/2023 – 03/2024)</h3>
            <ul className="project-list">
              <li>Developed automation scripts in C# and Python for Revit to optimize engineering workflows.</li>
              <li>Created Windows batch scripts and Outlook macros to support remote work operations.</li>
            </ul>
          </div>

          {/* U.S. Air Force */}
        <div style={styles.projectCard}>
            <h3>U.S. Air Force — Finance Technician (10/2008 – 09/2012)</h3>
            <ul className="project-list">
                <li>Maintained compliance with federal pay regulations and payroll systems for military personnel.</li>
                <li>Utilized mathematics for payroll processing and discrepancy resolution.</li>
            </ul>
        </div>

        </section>

        {/* Footer / Contact */}
        <section style={styles.footer}>
            <p style={{ color: '#555' }}>
                Thank you! 
            </p>
        </section>
        {/* Sample Student Data Analysis PDF Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          SAMPLE STUDENT DATA ANALYSIS
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: '#555', textAlign: 'center' }}>
          Using Jupyter & Python
        </h2>

        {/* PDF Link */}
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          <a
            href="/Final_analysis.pdf" // Put your PDF in the /public folder
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0070f3',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            View / Download PDF
          </a>
        </p>

        {/* Optional: Embed PDF Preview */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <iframe
            src="/Final_analysis.pdf"
            width="100%"
            height="600px"
            style={{ border: '1px solid #ddd', borderRadius: '8px' }}
          ></iframe>
        </div>
      </section>

      </main>
    </>
  );
}

// Minimal inline styles for simplicity
const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  name: { fontSize: '2.5rem', marginBottom: '0.5rem' },
  tagline: { fontSize: '1.2rem', marginBottom: '1.5rem' },
  button: { 
    padding: '0.75rem 1.5rem', 
    backgroundColor: '#0070f3', 
    color: '#fff', 
    borderRadius: '5px', 
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  projects: { padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' },
  sectionTitle: { fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' },
  projectCard: { 
    marginBottom: '2rem', 
    padding: '1.5rem', 
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    backgroundColor: '#fff' 
  },
  footer: { 
    textAlign: 'center', 
    padding: '2rem', 
    backgroundColor: '#f5f5f5' 
  }
};


//code 2
// pages/portfolio.js
// import Head from 'next/head';
// import Link from 'next/link';

// export default function Portfolio() {
//   return (
//     <>
//       <Head>
//         <title>Edward Pablo de Sa Sauerbrunn – Portfolio</title>
//         <meta
//           name="description"
//           content="Portfolio of Edward Pablo de Sa Sauerbrunn – Civil Engineer, ESL Educator, Data Analyst"
//         />
//       </Head>

//       <main style={styles.main}>
//         {/* Hero Section */}
//         <section style={styles.hero}>
//           <h1 style={styles.name}>Edward Pablo de Sa Sauerbrunn</h1>
//           <p style={styles.tagline}>
//             Civil Engineer • Data Analyst • ESL Educator • Bilingual (English/Spanish)
//           </p>
//           <Link
//             href="https://www.linkedin.com/in/edward-de-sa-sauerbrunn"
//             target="_blank"
//             style={styles.button}
//           >
//             View LinkedIn
//           </Link>
//         </section>

//         {/* Projects/Experience Section */}
//         <section style={styles.projects}>
//           <h2 style={styles.sectionTitle}>Key Professional Experience</h2>

//           {/* Preply */}
//           <div style={styles.projectCard}>
//             <h3>Preply.com — Online English Tutor (08/2024 – Present)</h3>
//             <ul>
//               <li>
//                 Develop personalized ESL lesson plans using Communicative Approach, TBL, and TPR.
//               </li>
//               <li>Analyze CEFR A1–C2 data with MySQL to tailor lessons effectively.</li>
//               <li>
//                 Created TeachTudor.com, an interactive Next.js-powered ESL platform.
//               </li>
//             </ul>
//             <Link href="https://www.teachtudor.com" target="_blank" style={styles.projectLink}>
//               View Project
//             </Link>
//           </div>

//           {/* Kiewit */}
//           <div style={styles.projectCard}>
//             <h3>Kiewit, Inc. — Takeoff Analyst (12/2019 – 09/2020)</h3>
//             <ul>
//               <li>
//                 Performed detailed quantity takeoffs for civil infrastructure projects using
//                 Excel, AutoCAD, Revit, SketchUp, and Bluebeam.
//               </li>
//               <li>Applied data analysis with pivot tables, VLOOKUP, and basic VBA to support project budgeting.</li>
//             </ul>
//             <Link href="#" target="_blank" style={styles.projectLink}>
//               View Example
//             </Link>
//           </div>

//           {/* JET Programme */}
//           <div style={styles.projectCard}>
//             <h3>JET Programme (Japan) — Language Teacher (07/2004 – 07/2006)</h3>
//             <ul>
//               <li>Designed and delivered English curriculum enhancing speaking, reading, writing, and listening skills.</li>
//               <li>Collaborated with local teachers to refine pedagogy and pronunciation techniques.</li>
//             </ul>
//             <Link
//               href="https://www.preply.com/en/tutor/edward6en10748493"
//               target="_blank"
//               style={styles.projectLink}
//             >
//               View Profile
//             </Link>
//           </div>

//           {/* Johnston Burkholder Associates */}
//           <div style={styles.projectCard}>
//             <h3>Johnston Burkholder Associates — BIM Specialist (Contract) (12/2023 – 03/2024)</h3>
//             <ul>
//               <li>Developed automation scripts in C# and Python for Revit to optimize engineering workflows.</li>
//               <li>Created Windows batch scripts and Outlook macros to support remote work operations.</li>
//             </ul>
//             <Link href="#" target="_blank" style={styles.projectLink}>
//               View Example
//             </Link>
//           </div>
//         </section>

//         {/* Footer / Contact */}
//         <section style={styles.footer}>
//           <p>
//             Connect with me on{' '}
//             <Link
//               href="https://www.linkedin.com/in/edward-de-sa-sauerbrunn"
//               target="_blank"
//               style={{ color: '#0070f3', textDecoration: 'none' }}
//             >
//               LinkedIn
//             </Link>
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }

// // Minimal inline styles for simplicity
// const styles = {
//   main: {
//     fontFamily: 'Arial, sans-serif',
//     lineHeight: 1.6,
//     color: '#333',
//   },
//   hero: {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: '2rem',
//   },
//   name: { fontSize: '2.5rem', marginBottom: '0.5rem' },
//   tagline: { fontSize: '1.2rem', marginBottom: '1.5rem' },
//   button: {
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
//   projects: { padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' },
//   sectionTitle: { fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' },
//   projectCard: {
//     marginBottom: '2rem',
//     padding: '1.5rem',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//   },
//   projectLink: {
//     display: 'inline-block',
//     marginTop: '1rem',
//     padding: '0.5rem 1rem',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
//   footer: {
//     textAlign: 'center',
//     padding: '2rem',
//     backgroundColor: '#f5f5f5',
//   },
// };
