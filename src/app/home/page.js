// //CODE 2 WITH OVERLAP FIX
// 'use client';
// import Navbar from '../Navbar';

// export default function Home() {


 

//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', backgroundColor: '#f4f8fb', padding: '20px' }}>
//         <div style={{ textAlign: 'center', maxWidth: '1200px', paddingTop: '120px' }}>
//           <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
//             FULLY FUNCTIONAL TOOLS TAB
//           </h1>
//           <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
//           </p>

//           <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
//             Don't Miss Out on These Must-Have Tools!
//           </h2>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
//               <h1 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h1>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.internationalteflacademy.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 ENROLL NOW!
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
//               <h1 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h1>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.preply.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 ENROLL NOW!
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
//               <h1 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h1>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX569_.jpg" alt="Product 4" style={{ width: '50%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-24-Ounce/dp/B085DTZQNZ?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B085DTZQNZ&th=1&linkCode=ll1&tag=teachtudor-20&linkId=cdea4b3d5f1254a1a6282e1f4d740d5a&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg" alt="Product 4" style={{ width: '75%', height: 'auto', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CRMWHW47?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CRMWHW47&th=1&linkCode=ll1&tag=teachtudor-20&linkId=ce1aacc7cb2950c88225e12d641ca749&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Etekcity-Multifunction-Stainless-Batteries-Included/dp/B0113UZJE2?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0113UZJE2&th=1&linkCode=ll1&tag=teachtudor-20&linkId=12c96bc4aa4eecb13e9cd84fafdb6864&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/71xHRLEofPL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Organizer-Storage-Cabinet-Shelves-Bathroom/dp/B0C5DBMYZF?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0C5DBMYZF&th=1&linkCode=ll1&tag=teachtudor-20&linkId=06301d83a8cf819803081fc520beca0e&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/71n2yIfcpRL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/YARRAMATE-Dispenser-Sprayer-Cooking-Food-grade/dp/B0CP4XY9QC?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CP4XY9QC&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1d38ff4b434f44a502d32f280bd24585&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/815FWesbK3L._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B06X9NQ8GX&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=9d9b36385d5d7a0103664f6e712b04f5&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
            
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/81esmIBZIJL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Air-Fryer-Paper-Liners-Disposable/dp/B0B6PLG6G2?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0B6PLG6G2&th=1&linkCode=ll1&tag=teachtudor-20&linkId=64225c095198e2fab6fab7b22764b243&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/51yO+bt+mqL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/KitchenAid-KE199OHOBA-Classic-Multifunction-Opener/dp/B07YP2VH4B?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07YP2VH4B&th=1&linkCode=ll1&tag=teachtudor-20&linkId=5569a9c24a7db602b76b25157c20c3c7&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/81bpKKv68-L._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Thermometer-Cooking-BACKLIGHT-WATERPROOF-Temperature/dp/B00S93EQUK?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00S93EQUK&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=058f1b239e4ed015eecd3dbd32f65812&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61neCjTolQL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Hanes-Ecosmart-Fleece-Sweatshirt-Black/dp/B01L8JJ5KC?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B01L8JJ5KC&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a077d77566e06a9458e2cb8d7c361bd1&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/51X5PPehAKL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/SINOPHANT-High-Waisted-Leggings-Women/dp/B0BVFDH9CP?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BVFDH9CP&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=1abe0e02b237718bbc8195c170d277b5&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY741_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Fruit-Loom-Mens-Tucked-T-Shirt/dp/B00W66LQFO?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00W66LQFO&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ea4d6e3aac5a33d14123d64c6bb8bf9e&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX522_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D1XD1ZV3&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=97a876523002c312dec40cba41f0a9a6&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61c7Upe2KHL._AC_SY450_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/all-new-amazon-fire-tv-stick-4k-max/dp/B0BP9SNVH9?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BP9SNVH9&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=15a6a1ae0aba0bebecc76ffbe210efa0&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61pp+20Oo0L._SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/eos-Cashmere-Moisture-Lightweight-Non-Greasy/dp/B08KT2Z93D?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B08KT2Z93D&th=1&linkCode=ll1&tag=teachtudor-20&linkId=e7de0bbb3c3f823b61c4142b74ccb0de&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61IqZD8hYDL._AC_SY741_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/GYM-PEOPLE-Pockets-Control-Leggings/dp/B07HQPKDZB?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07HQPKDZB&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=930ebb61154d0d94900410354066100e&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61SuPkDGYfL._AC_SY695_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/crocs-Unisex-Classic-Black-Women/dp/B0014C5S7S?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0014C5S7S&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=6d3bac835d98e13722e6e44f6480fde4&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/71QZExoIbxL._AC_SY741_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/ANRABESS-Crewneck-T-Shirt-Workout-Outfits/dp/B0CYZM5RSM?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CYZM5RSM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=273c1f916a01b7153f4a8d49571799a3&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61bMNCeAUAL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Apple-MX542LL-A-AirTag-Pack/dp/B0D54JZTHY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D54JZTHY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=cb5632881fba552d7993badab47608c1&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61NGPmmMAIL._AC_SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Surge-Protector-Power-Strip-Extension/dp/B09PDLBFKY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B09PDLBFKY&th=1&linkCode=ll1&tag=teachtudor-20&linkId=2f6408812e92b40be69553f8a8a4976d&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>


//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61K6cQhw4EL._SX679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/essence-Princess-Effect-Mascara-Cruelty/dp/B00T0C9XRK?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00T0C9XRK&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1543c71207688f46de993b17361fb860&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>

//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
            
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}>
//               </p>
//               <a href="https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=e8db03c7d8f36fa6b0c3a859b187191c&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
            
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/81GJ84ejdBL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Ventures-Level-1-Value-Pack/dp/1108646018?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=f45bcf4cbe35b1fdc7a51d37420cca9e&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/71-IEZsXEpL._SY425_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Palabras-Usadas-Ingles-Spanish-English/dp/970775382X?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=d674df66a6dac777d26992d4b140a87f&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}></h3>
//               <p style={{ color: '#777' }}></p>
//               <a href="https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
            
//           </div>

//           <p style={{ fontSize: '1.1rem', color: '#444', marginTop: '30px' }}>
//             Stay tuned for more updates and exciting content as we continue to improve your teaching experience! 💫
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// CODE 3 STILL WORKING ON IT
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     imageUrl: 'https://via.placeholder.com/150',
//     productUrl: 'https://example.com/product1'
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     imageUrl: 'https://via.placeholder.com/150',
//     productUrl: 'https://example.com/product2'
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     imageUrl: 'https://via.placeholder.com/150',
//     productUrl: 'https://example.com/product3'
//   }
// ];

// export default function ProductGridWithNavbar() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold">My Store</h1>
//         <ul className="flex space-x-6">
//           <li><a href="#" className="hover:underline">Home</a></li>
//           <li><a href="#" className="hover:underline">Products</a></li>
//           <li><a href="#" className="hover:underline">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Product Grid */}
//       <div className="flex flex-wrap justify-center gap-6 p-4">
//         {products.map((product) => (
//           <div key={product.id} className="text-center w-48">
//             <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
//               <Image 
//                 src={product.imageUrl} 
//                 alt={product.name} 
//                 width={150} 
//                 height={150} 
//                 className="rounded-lg"
//               />
//             </a>
//             <br />
//             <a 
//               className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//               href={product.productUrl} 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               Shop Now
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//CODE 4 BEANS
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';

const products = [
  {
    id: 1,
    name: 'INTERNATIONAL TEFL ACADEMY',
    imageUrl: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png',
    productUrl: 'https://www.internationalteflacademy.com/'
  },
  {
    id: 2,
    name: 'PREPLY.COM',
    imageUrl: 'https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png',
    productUrl: 'https://wwwpreply.com'
  },
  {
    id: 3,
    name: 'AMAZON BEST SELLER',
    imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
    productUrl: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 4,
    name: 'INSULATED STAINLESS STEEL PUSH BUTTON',
    imageUrl: 'https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX569_.jpg',
    productUrl: 'https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-24-Ounce/dp/B085DTZQNZ?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B085DTZQNZ&th=1&linkCode=ll1&tag=teachtudor-20&linkId=cdea4b3d5f1254a1a6282e1f4d740d5a&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 5,
    name: 'QUENCHER',
    imageUrl: 'https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg',
    productUrl: 'https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CRMWHW47?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CRMWHW47&th=1&linkCode=ll1&tag=teachtudor-20&linkId=ce1aacc7cb2950c88225e12d641ca749&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 6,
    name: 'MULTIFUNCTION STAINLESS BATTERIES',
    imageUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg',
    productUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg'
  },
  {
    id: 7,
    name: 'ORGANIZER STORAGE CABINET SHELVES',
    imageUrl: 'https://m.media-amazon.com/images/I/71xHRLEofPL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Organizer-Storage-Cabinet-Shelves-Bathroom/dp/B0C5DBMYZF?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0C5DBMYZF&th=1&linkCode=ll1&tag=teachtudor-20&linkId=06301d83a8cf819803081fc520beca0e&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 8,
    name: 'SPRAYER',
    imageUrl: 'https://m.media-amazon.com/images/I/71n2yIfcpRL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/YARRAMATE-Dispenser-Sprayer-Cooking-Food-grade/dp/B0CP4XY9QC?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CP4XY9QC&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1d38ff4b434f44a502d32f280bd24585&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 9,
    name: 'DIGITAL BATTERIES',
    imageUrl: 'https://m.media-amazon.com/images/I/815FWesbK3L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B06X9NQ8GX&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=9d9b36385d5d7a0103664f6e712b04f5&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 10,
    name: 'PAPER LINERS',
    imageUrl: 'https://m.media-amazon.com/images/I/81esmIBZIJL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Air-Fryer-Paper-Liners-Disposable/dp/B0B6PLG6G2?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0B6PLG6G2&th=1&linkCode=ll1&tag=teachtudor-20&linkId=64225c095198e2fab6fab7b22764b243&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 11,
    name: 'ACTION BOOK',
    imageUrl: 'https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg',
    productUrl: 'https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 12,
    name: 'KITCHEN AID OPENER',
    imageUrl: 'https://m.media-amazon.com/images/I/51yO+bt+mqL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/KitchenAid-KE199OHOBA-Classic-Multifunction-Opener/dp/B07YP2VH4B?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07YP2VH4B&th=1&linkCode=ll1&tag=teachtudor-20&linkId=5569a9c24a7db602b76b25157c20c3c7&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 13,
    name: 'COOKING THERMOMETER',
    imageUrl: 'https://m.media-amazon.com/images/I/81bpKKv68-L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Thermometer-Cooking-BACKLIGHT-WATERPROOF-Temperature/dp/B00S93EQUK?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00S93EQUK&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=058f1b239e4ed015eecd3dbd32f65812&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 14,
    name: 'HANES SHIRT',
    imageUrl: 'https://m.media-amazon.com/images/I/61neCjTolQL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Hanes-Ecosmart-Fleece-Sweatshirt-Black/dp/B01L8JJ5KC?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B01L8JJ5KC&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a077d77566e06a9458e2cb8d7c361bd1&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 15,
    name: 'HIGH-WAISTED LEGGINGS',
    imageUrl: 'https://m.media-amazon.com/images/I/51X5PPehAKL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/SINOPHANT-High-Waisted-Leggings-Women/dp/B0BVFDH9CP?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BVFDH9CP&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=1abe0e02b237718bbc8195c170d277b5&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 16,
    name: 'FRUIT LOOM SHIRT',
    imageUrl: 'https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY741_.jpg',
    productUrl: 'https://www.amazon.com/Fruit-Loom-Mens-Tucked-T-Shirt/dp/B00W66LQFO?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00W66LQFO&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ea4d6e3aac5a33d14123d64c6bb8bf9e&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 17,
    name: 'APPLE PRODUCT',
    imageUrl: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX522_.jpg',
    productUrl: 'https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D1XD1ZV3&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=97a876523002c312dec40cba41f0a9a6&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer'
  },
  {
    id: 18,
    name: 'AMAZON FIRE STICK',
    imageUrl: 'https://m.media-amazon.com/images/I/61c7Upe2KHL._AC_SY450_.jpg',
    productUrl: 'https://www.amazon.com/all-new-amazon-fire-tv-stick-4k-max/dp/B0BP9SNVH9?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BP9SNVH9&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=15a6a1ae0aba0bebecc76ffbe210efa0&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 19,
    name: 'CASHMERE MOISTURE LIGHTWEIGHT',
    imageUrl: 'https://m.media-amazon.com/images/I/61pp+20Oo0L._SX679_.jpg',
    productUrl: 'https://www.amazon.com/eos-Cashmere-Moisture-Lightweight-Non-Greasy/dp/B08KT2Z93D?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B08KT2Z93D&th=1&linkCode=ll1&tag=teachtudor-20&linkId=e7de0bbb3c3f823b61c4142b74ccb0de&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 20,
    name: 'LEGGINGS',
    imageUrl: 'https://m.media-amazon.com/images/I/61IqZD8hYDL._AC_SY741_.jpg',
    productUrl: 'https://www.amazon.com/GYM-PEOPLE-Pockets-Control-Leggings/dp/B07HQPKDZB?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07HQPKDZB&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=930ebb61154d0d94900410354066100e&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 21,
    name: 'CROCS',
    imageUrl: 'https://m.media-amazon.com/images/I/61SuPkDGYfL._AC_SY695_.jpg',
    productUrl: 'https://www.amazon.com/crocs-Unisex-Classic-Black-Women/dp/B0014C5S7S?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0014C5S7S&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=6d3bac835d98e13722e6e44f6480fde4&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 22,
    name: 'T-SHIRT',
    imageUrl: 'https://m.media-amazon.com/images/I/71QZExoIbxL._AC_SY741_.jpg',
    productUrl: 'https://www.amazon.com/ANRABESS-Crewneck-T-Shirt-Workout-Outfits/dp/B0CYZM5RSM?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CYZM5RSM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=273c1f916a01b7153f4a8d49571799a3&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 23,
    name: 'AIRTAG',
    imageUrl: 'https://m.media-amazon.com/images/I/61bMNCeAUAL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Apple-MX542LL-A-AirTag-Pack/dp/B0D54JZTHY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D54JZTHY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=cb5632881fba552d7993badab47608c1&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 24,
    name: 'SURGE PROTECTOR',
    imageUrl: 'https://m.media-amazon.com/images/I/61NGPmmMAIL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/Surge-Protector-Power-Strip-Extension/dp/B09PDLBFKY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B09PDLBFKY&th=1&linkCode=ll1&tag=teachtudor-20&linkId=2f6408812e92b40be69553f8a8a4976d&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 25,
    name: 'MASCARA',
    imageUrl: 'https://m.media-amazon.com/images/I/61K6cQhw4EL._SX679_.jpg',
    productUrl: 'https://www.amazon.com/essence-Princess-Effect-Mascara-Cruelty/dp/B00T0C9XRK?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00T0C9XRK&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1543c71207688f46de993b17361fb860&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 26,
    name: 'VOCABULARY WORKBOOK',
    imageUrl: 'https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg',
    productUrl: 'https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 27,
    name: 'ESL SPEAKING ACTIVITIES',
    imageUrl: 'https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg',
    productUrl: 'https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 28,
    name: 'CATERPILLAR BOOK',
    imageUrl: 'https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg',
    productUrl: 'https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=e8db03c7d8f36fa6b0c3a859b187191c&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 29,
    name: 'VENTURES BOOK',
    imageUrl: 'https://m.media-amazon.com/images/I/81GJ84ejdBL._SY385_.jpg',
    productUrl: 'https://www.amazon.com/Ventures-Level-1-Value-Pack/dp/1108646018?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=f45bcf4cbe35b1fdc7a51d37420cca9e&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 30,
    name: 'PALABRAS USADAS',
    imageUrl: 'https://m.media-amazon.com/images/I/71-IEZsXEpL._SY425_.jpg',
    productUrl: 'https://www.amazon.com/Palabras-Usadas-Ingles-Spanish-English/dp/970775382X?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=d674df66a6dac777d26992d4b140a87f&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 31,
    name: 'GRAMMAR BOOK',
    imageUrl: 'https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg',
    productUrl: 'https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl'
  },
 
];

export default function ProductGridWithNavbar() {
  return (
    <div>
      <Navbar />
      {/* <h1 style={{fontSize: '40px'}}>FULLY FUNCTIONAL TOOLS TAB!</h1> */}
      <h1 style={{ fontSize: '40px',
         textAlign: 'center', 
         margin: '0', 
         display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        FULLY FUNCTIONAL TOOLS TAB!
      </h1>
      {/* Product Grid */}
      {/* <div className="relative flex flex-wrap justify-start gap-6 p-4"> */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',  // Adjust the gap between images
        justifyContent: 'center',
      }}>
        {products.map((product) => (
          // <div
          //   key={product.id}
          //   className="relative transform transition-all duration-500 ease-in-out"
          //   style={{
          //     left: `${Math.random() * 80}vw`, // Randomize position on X-axis
          //     top: `${Math.random() * 30 + 10}vh`,  // Randomize position on Y-axis
          //   }}
          // >
          <div key={product.id} style={{ flex: '1 1 200px', textAlign: 'center' }}>
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={130}   // Adjusted image size
                height={130}  // Adjusted image size
                className="rounded-lg"
                style={{ objectFit: 'contain'}}//Ensures the image doesn't stretch
              />
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex: 1 1 45%;
          }
          
          /* Adjusting image size for smaller screens (tablets) */
          div img {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          div {
            flex: 1 1 45%; /* 2 images per row */
          }

          
        }
      `}</style>
    </div>
  );
}

