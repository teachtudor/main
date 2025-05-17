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


//CODE 4 BEANS IT WORKS static
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';

// const products = [
//   {
//     id: 1,
//     name: 'INTERNATIONAL TEFL ACADEMY',
//     imageUrl: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png',
//     productUrl: 'https://www.internationalteflacademy.com/'
//   },
//   {
//     id: 2,
//     name: 'PREPLY.COM',
//     imageUrl: 'https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png',
//     productUrl: 'https://www.preply.com'
//   },
//   {
//     id: 3,
//     name: 'AMAZON BEST SELLER',
//     imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
//     productUrl: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 4,
//     name: 'INSULATED STAINLESS STEEL PUSH BUTTON',
//     imageUrl: 'https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX569_.jpg',
//     productUrl: 'https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-24-Ounce/dp/B085DTZQNZ?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B085DTZQNZ&th=1&linkCode=ll1&tag=teachtudor-20&linkId=cdea4b3d5f1254a1a6282e1f4d740d5a&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 5,
//     name: 'QUENCHER',
//     imageUrl: 'https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg',
//     productUrl: 'https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CRMWHW47?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CRMWHW47&th=1&linkCode=ll1&tag=teachtudor-20&linkId=ce1aacc7cb2950c88225e12d641ca749&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 6,
//     name: 'MULTIFUNCTION STAINLESS BATTERIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg',
//     productUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg'
//   },
//   {
//     id: 7,
//     name: 'ORGANIZER STORAGE CABINET SHELVES',
//     imageUrl: 'https://m.media-amazon.com/images/I/71xHRLEofPL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Organizer-Storage-Cabinet-Shelves-Bathroom/dp/B0C5DBMYZF?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0C5DBMYZF&th=1&linkCode=ll1&tag=teachtudor-20&linkId=06301d83a8cf819803081fc520beca0e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 8,
//     name: 'SPRAYER',
//     imageUrl: 'https://m.media-amazon.com/images/I/71n2yIfcpRL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/YARRAMATE-Dispenser-Sprayer-Cooking-Food-grade/dp/B0CP4XY9QC?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CP4XY9QC&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1d38ff4b434f44a502d32f280bd24585&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 9,
//     name: 'DIGITAL BATTERIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/815FWesbK3L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B06X9NQ8GX&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=9d9b36385d5d7a0103664f6e712b04f5&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 10,
//     name: 'PAPER LINERS',
//     imageUrl: 'https://m.media-amazon.com/images/I/81esmIBZIJL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Air-Fryer-Paper-Liners-Disposable/dp/B0B6PLG6G2?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0B6PLG6G2&th=1&linkCode=ll1&tag=teachtudor-20&linkId=64225c095198e2fab6fab7b22764b243&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 11,
//     name: 'ACTION BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 12,
//     name: 'KITCHEN AID OPENER',
//     imageUrl: 'https://m.media-amazon.com/images/I/51yO+bt+mqL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/KitchenAid-KE199OHOBA-Classic-Multifunction-Opener/dp/B07YP2VH4B?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07YP2VH4B&th=1&linkCode=ll1&tag=teachtudor-20&linkId=5569a9c24a7db602b76b25157c20c3c7&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 13,
//     name: 'COOKING THERMOMETER',
//     imageUrl: 'https://m.media-amazon.com/images/I/81bpKKv68-L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Thermometer-Cooking-BACKLIGHT-WATERPROOF-Temperature/dp/B00S93EQUK?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00S93EQUK&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=058f1b239e4ed015eecd3dbd32f65812&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 14,
//     name: 'HANES SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61neCjTolQL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Hanes-Ecosmart-Fleece-Sweatshirt-Black/dp/B01L8JJ5KC?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B01L8JJ5KC&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a077d77566e06a9458e2cb8d7c361bd1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 15,
//     name: 'HIGH-WAISTED LEGGINGS',
//     imageUrl: 'https://m.media-amazon.com/images/I/51X5PPehAKL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/SINOPHANT-High-Waisted-Leggings-Women/dp/B0BVFDH9CP?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BVFDH9CP&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=1abe0e02b237718bbc8195c170d277b5&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 16,
//     name: 'FRUIT LOOM SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/Fruit-Loom-Mens-Tucked-T-Shirt/dp/B00W66LQFO?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00W66LQFO&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ea4d6e3aac5a33d14123d64c6bb8bf9e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 17,
//     name: 'APPLE PRODUCT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX522_.jpg',
//     productUrl: 'https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D1XD1ZV3&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=97a876523002c312dec40cba41f0a9a6&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer'
//   },
//   {
//     id: 18,
//     name: 'AMAZON FIRE STICK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61c7Upe2KHL._AC_SY450_.jpg',
//     productUrl: 'https://www.amazon.com/all-new-amazon-fire-tv-stick-4k-max/dp/B0BP9SNVH9?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BP9SNVH9&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=15a6a1ae0aba0bebecc76ffbe210efa0&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 19,
//     name: 'CASHMERE MOISTURE LIGHTWEIGHT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61pp+20Oo0L._SX679_.jpg',
//     productUrl: 'https://www.amazon.com/eos-Cashmere-Moisture-Lightweight-Non-Greasy/dp/B08KT2Z93D?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B08KT2Z93D&th=1&linkCode=ll1&tag=teachtudor-20&linkId=e7de0bbb3c3f823b61c4142b74ccb0de&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 20,
//     name: 'LEGGINGS',
//     imageUrl: 'https://m.media-amazon.com/images/I/61IqZD8hYDL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/GYM-PEOPLE-Pockets-Control-Leggings/dp/B07HQPKDZB?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07HQPKDZB&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=930ebb61154d0d94900410354066100e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 21,
//     name: 'CROCS',
//     imageUrl: 'https://m.media-amazon.com/images/I/61SuPkDGYfL._AC_SY695_.jpg',
//     productUrl: 'https://www.amazon.com/crocs-Unisex-Classic-Black-Women/dp/B0014C5S7S?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0014C5S7S&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=6d3bac835d98e13722e6e44f6480fde4&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 22,
//     name: 'T-SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/71QZExoIbxL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/ANRABESS-Crewneck-T-Shirt-Workout-Outfits/dp/B0CYZM5RSM?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CYZM5RSM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=273c1f916a01b7153f4a8d49571799a3&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 23,
//     name: 'AIRTAG',
//     imageUrl: 'https://m.media-amazon.com/images/I/61bMNCeAUAL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Apple-MX542LL-A-AirTag-Pack/dp/B0D54JZTHY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D54JZTHY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=cb5632881fba552d7993badab47608c1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 24,
//     name: 'SURGE PROTECTOR',
//     imageUrl: 'https://m.media-amazon.com/images/I/61NGPmmMAIL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Surge-Protector-Power-Strip-Extension/dp/B09PDLBFKY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B09PDLBFKY&th=1&linkCode=ll1&tag=teachtudor-20&linkId=2f6408812e92b40be69553f8a8a4976d&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 25,
//     name: 'MASCARA',
//     imageUrl: 'https://m.media-amazon.com/images/I/61K6cQhw4EL._SX679_.jpg',
//     productUrl: 'https://www.amazon.com/essence-Princess-Effect-Mascara-Cruelty/dp/B00T0C9XRK?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00T0C9XRK&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1543c71207688f46de993b17361fb860&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 26,
//     name: 'VOCABULARY WORKBOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 27,
//     name: 'ESL SPEAKING ACTIVITIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg',
//     productUrl: 'https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 28,
//     name: 'CATERPILLAR BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg',
//     productUrl: 'https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=e8db03c7d8f36fa6b0c3a859b187191c&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 29,
//     name: 'VENTURES BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/81GJ84ejdBL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Ventures-Level-1-Value-Pack/dp/1108646018?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=f45bcf4cbe35b1fdc7a51d37420cca9e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 30,
//     name: 'PALABRAS USADAS',
//     imageUrl: 'https://m.media-amazon.com/images/I/71-IEZsXEpL._SY425_.jpg',
//     productUrl: 'https://www.amazon.com/Palabras-Usadas-Ingles-Spanish-English/dp/970775382X?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=d674df66a6dac777d26992d4b140a87f&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 31,
//     name: 'GRAMMAR BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl'
//   },
 
// ];

// export default function ProductGridWithNavbar() {
//   return (
//     <div>
//       <Navbar />
//       {/* <h1 style={{fontSize: '40px'}}>FULLY FUNCTIONAL TOOLS TAB!</h1> */}
//       <h1 style={{ fontSize: '40px',
//          textAlign: 'center', 
//          margin: '0', 
//          display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {/* FULLY FUNCTIONAL TOOLS TAB! */}
//       </h1>
//       {/* Product Grid */}
//       {/* <div className="relative flex flex-wrap justify-start gap-6 p-4"> */}
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '16px',  // Adjust the gap between images
//         justifyContent: 'center',
//       }}>
//         {products.map((product) => (
//           // <div
//           //   key={product.id}
//           //   className="relative transform transition-all duration-500 ease-in-out"
//           //   style={{
//           //     left: `${Math.random() * 80}vw`, // Randomize position on X-axis
//           //     top: `${Math.random() * 30 + 10}vh`,  // Randomize position on Y-axis
//           //   }}
//           // >
//           <div key={product.id} style={{ flex: '1 1 200px', textAlign: 'center' }}>
//             <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width={130}   // Adjusted image size
//                 height={130}  // Adjusted image size
//                 className="rounded-lg"
//                 style={{ objectFit: 'contain'}}//Ensures the image doesn't stretch
//               />
//             </a>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
       
//         /* For phone-sized screens (max-width 480px), adjust the layout */
//         @media (max-width: 480px) {
//           div {
//             display: flex;
//             flex-wrap: wrap;
//             flex: 1 1 45%; /* 2 images per row */
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

//CODE 5 moving THIS IS ALWAYS GOOD
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';

export const products = [
  {
    id: 1,
    name: 'INTERNATIONAL TEFL ACADEMY',
    imageUrl: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png',
    productUrl: 'https://www.internationalteflacademy.com/'
  },
  {
    id: 2,
    name: 'PREPLY.COM',
    // imageUrl: 'https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png',
    imageUrl: '/preply.png',
    productUrl: 'https://www.preply.com'
  },
  {
    id: 3,
    name: 'AMAZON BEST SELLER',
    // imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
    imageUrl: '/amazon.png',
    productUrl: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 32,
    name: 'Tube Resistance Bands',
    imageUrl: 'https://m.media-amazon.com/images/I/71jQgHH1cwL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0C26DJYPJ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.27BOK049G26P6&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.27BOK049G26P6_1739311827695'
  },
  {
    id: 33,
    name: 'Tube Resistance Bands',
    imageUrl: 'https://m.media-amazon.com/images/I/71I2e74gIPL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0C267MYRX?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.12TFATJKL1UJB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.12TFATJKL1UJB_1739312338924'
  },
  {
    id: 34,
    name: 'PopDarts',
    imageUrl: 'https://m.media-amazon.com/images/I/7126HJ83ZsL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B09LJVS68N?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1I8K2OU3PLZEU&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1I8K2OU3PLZEU_1739312586130'
  },
  {
    id: 35,
    name: 'Ks First Case',
    imageUrl: 'https://m.media-amazon.com/images/I/51qrHRbtlsL.jpg',
    productUrl: 'https://www.amazon.com/First-Longman-American-Structural-Readers/dp/0582798159?crid=E5O3AJPVE5GR&dib=eyJ2IjoiMSJ9.1wfU7WGwaqVsu7QzhCZ8LQ.IXCTVTDnZbMxtRS7G6JABX3dQnrXmU9u6Li99BAPW3s&dib_tag=se&keywords=longman+series+k%27s+first+case&qid=1739306503&sprefix=longman+series+k%27s+first+case%2Caps%2C239&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=1450333de7f2dcfd0f58a0d9da40cfed&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 36,
    name: 'Thermal Coffee',
    imageUrl: 'https://m.media-amazon.com/images/I/81U76KoptOL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B01F8P78IS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1LIFAZ2LGG7B8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1LIFAZ2LGG7B8_1739313331670'
  },
  {
    id: 37,
    name: 'Summer Top',
    imageUrl: 'https://m.media-amazon.com/images/I/61QqcJy5OIL._AC_SY679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DKNMHR26?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3DEG4OG4B8OA6&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3DEG4OG4B8OA6_1739313753537'
  },
  {
    id: 38,
    name: 'Thermal Coffee Carafe',
    imageUrl: 'https://m.media-amazon.com/images/I/613enkB6anL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0CY39JGRS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.PNN34P88OG6R&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.PNN34P88OG6R_1739313909212'
  },
  {
    id: 39,
    name: 'Flashlight',
    imageUrl: 'https://m.media-amazon.com/images/I/71hLcNeMTkL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B095BQ24ZN?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.19PVV6AM8R8ZB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.19PVV6AM8R8ZB_1739314063355'
  },
  {
    id: 40,
    name: 'Flashlight',
    imageUrl: 'https://m.media-amazon.com/images/I/71EwtRxT0aL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0B2WF4R93?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3VUNUKR2M6HF8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3VUNUKR2M6HF8_1739314235999'
  },
  {
    id: 41,
    name: 'Thermal Coffee Carafe',
    imageUrl: 'https://m.media-amazon.com/images/I/61cKxvBubJL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B09YRZ9FSC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2V1540O2WSLVS&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2V1540O2WSLVS_1739314317856'
  },
  {
    id: 42,
    name: 'Thermal Coffee Carafe',
    imageUrl: 'https://m.media-amazon.com/images/I/71OV9vGufPL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B07H5QS6F3?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3KWJL39PQVAXR&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3KWJL39PQVAXR_1739314453047'
  },
  {
    id: 43,
    name: 'Thermal Coffee Carafe',
    imageUrl: 'https://m.media-amazon.com/images/I/81U76KoptOL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B01F8P78IS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1LIFAZ2LGG7B8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1LIFAZ2LGG7B8_1739314590172'
  },
  {
    id: 44,
    name: 'Coffee with Pump',
    imageUrl: 'https://m.media-amazon.com/images/I/71DPozAAxiL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B01M7QKEEE?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3L6A8R836U5KS&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3L6A8R836U5KS_1739314681414'
  },
  {
    id: 45,
    name: 'Y2K Off',
    imageUrl: 'https://m.media-amazon.com/images/I/718aeD1c43L._AC_SX569_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0D2HKDN11?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3BDT5U39AWJ8P&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3BDT5U39AWJ8P_1739314777480'
  },
  {
    id: 46,
    name: 'Bird Feeder',
    imageUrl: 'https://m.media-amazon.com/images/I/91xbIJa0zQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productUrl: 'https://www.amazon.com/dp/B078Z7VTCF?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2TECI5PTWQ16G&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2TECI5PTWQ16G_1739314932596'
  },
  {
    id: 47,
    name: 'Bird Feeder',
    imageUrl: 'https://m.media-amazon.com/images/I/91+rrX5Y7+L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0C46TKZNK?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.E7AYBVC1PJ5B&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.E7AYBVC1PJ5B_1739314998561'
  },
  {
    id: 48,
    name: 'Water Bottle',
    imageUrl: 'https://m.media-amazon.com/images/I/61Ch6nZvtXL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0CH5ZFWDV?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.E1W6LDK5QVNB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.E1W6LDK5QVNB_1739315156594'
  },
  {
    id: 49,
    name: 'Heated Cat House',
    imageUrl: 'https://m.media-amazon.com/images/I/71bkJxrtcEL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DJWL9VG5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.18JI3VQU4U89I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.18JI3VQU4U89I_1739315247766'
  },
  {
    id: 67,
    name: 'Amazon Best Seller Self Care',
    // imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
    imageUrl: '/amazon.png',
    productUrl: 'https://www.amazon.com/gp/bestsellers/books?&linkCode=ll2&tag=teachtudor-20&linkId=c5c597f0c82a101c9974a3d9f5592bd0&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 50,
    name: 'Heated Cat House',
    imageUrl: 'https://m.media-amazon.com/images/I/71fqDCfg7YL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DJ68FFGC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.18JI3VQU4U89I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.18JI3VQU4U89I_1739315247768'
  },
  {
    id: 51,
    name: 'Shower Head',
    imageUrl: 'https://m.media-amazon.com/images/I/81ArkpQlXNL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0D14HLMYS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3SIEUPH29YJE4&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3SIEUPH29YJE4_1739315452720'
  },
  {
    id: 52,
    name: 'Rug',
    imageUrl: 'https://m.media-amazon.com/images/I/91WR5FR0H+L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0D8L26YF5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1ZHCXVU25STQL&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1ZHCXVU25STQL_1739315604142'
  },
  {
    id: 53,
    name: 'Bird Feeder',
    imageUrl: 'https://m.media-amazon.com/images/I/91aai3g4SXL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B00YSU3WG2?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.218UDK530K0AW&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.218UDK530K0AW_1739315680370'
  },
  {
    id: 54,
    name: 'Bird Feeder',
    imageUrl: 'https://m.media-amazon.com/images/I/81Y6gC4h2-L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0C59GSWS1?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2SOQA8G9SGVKZ&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2SOQA8G9SGVKZ_1739315760428'
  },
  {
    id: 55,
    name: 'Dog Harness',
    imageUrl: 'https://m.media-amazon.com/images/I/51zfoPVKenL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DL42H8R8?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3J9HKV9GGRSEQ&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3J9HKV9GGRSEQ_1739315870918'
  },
  {
    id: 56,
    name: 'Flashlight',
    imageUrl: 'https://m.media-amazon.com/images/I/61Lv52CA1XL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DBGJPN4M?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3FXHVGL8GFCAD&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3FXHVGL8GFCAD_1739315945848'
  },
  {
    id: 57,
    name: 'Rug',
    imageUrl: 'https://m.media-amazon.com/images/I/81qI16rIDXL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0D8B2KWLC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1ONGIMBMF3ORX&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1ONGIMBMF3ORX_1739316015191'
  },
  {
    id: 58,
    name: 'Tortilla Warmer',
    imageUrl: 'https://m.media-amazon.com/images/I/71Sj9LsFkkL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0D8RRS82L?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3ICNH5NZBROFF&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3ICNH5NZBROFF_1739316096598'
  },
  {
    id: 59,
    name: 'Lifting Belt',
    imageUrl: 'https://m.media-amazon.com/images/I/81PpVdd09qL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0CY3P16W3?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1S9NVW6N6YSEL&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1S9NVW6N6YSEL_1739316168422'
  },
  {
    id: 60,
    name: 'Desk Calendar',
    imageUrl: 'https://m.media-amazon.com/images/I/61HOfsVIL7L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DJZLLG9K?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.13BKGBEBL4V2I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.13BKGBEBL4V2I_1739316247991'
  },
  {
    id: 61,
    name: 'Waist Trimmer Belt',
    imageUrl: 'https://m.media-amazon.com/images/I/71RZ45+3TzL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0CZ7CRMJZ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2JQ50DQYYHBER&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2JQ50DQYYHBER_1739316329250'
  },
  {
    id: 62,
    name: 'Bird Toys',
    imageUrl: 'https://m.media-amazon.com/images/I/71SFwN3zQWL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DHSV6LG4?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316596704'
  },
  {
    id: 63,
    name: 'Flirt Pole',
    imageUrl: 'https://m.media-amazon.com/images/I/71OLPtNGafL._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DC1PJPD5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316662912'
  },
  {
    id: 64,
    name: 'Bird Toys',
    imageUrl: 'https://m.media-amazon.com/images/I/71kmqAxki1L._AC_SX679_.jpg',
    productUrl: 'https://www.amazon.com/dp/B0DS2WRMRY?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316715338'
  },
  {
    id: 65,
    name: 'Pride and Prejudice',
    imageUrl: 'https://m.media-amazon.com/images/I/81yMHkZAI9L._SY466_.jpg',
    productUrl: '  https://www.amazon.com/Pride-Prejudice-Longman-Classics-Stage/dp/0582030455?crid=1KDB6BR90ZALE&dib=eyJ2IjoiMSJ9.G29WMRwRUuVHvaqJ8QWgP0twmlLQhCX1LTiGYl3JKgN1UgK1_pcbIeIXcT0Qr3eEhPlxQqNLlhP-XtCAxX3CDRDAcYlQ1u3pTBXnH4yonosQOppntO1vcqU85HprcUBb4yha-PepOhmGYWnXg_yTOamVzYtYcdEBEjRWosNr7-E.1ybcvLZlIq2cEYnBSd36pBCl4OBt-LnoXmO4eHROKHA&dib_tag=se&keywords=longman+classics+pride+and+prejudice&qid=1739316863&sprefix=longman+classics+pride+and+prejudic%2Caps%2C263&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=10436b149fb383b296fc10a4dfcd2169&language=en_US&ref_=as_li_ss_tl'
  },
  {
    id: 66,
    name: 'Amazon Best Seller Self Care',
    // imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
    imageUrl: '/amazon.png',
    productUrl: 'https://www.amazon.com/gp/bestsellers/beauty?&linkCode=ll2&tag=teachtudor-20&linkId=72ff6375808f2938bdb551440faab0c0&language=en_US&ref_=as_li_ss_tl'
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

export default function ProductFloatingWithNavbar() {
  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: '40px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
      </h1>

      {/* Container for floating effect */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '65px',  // Increased gap to space out the images
          marginTop: '50px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              textAlign: 'center',
              animation: 'floating 3s ease-in-out infinite',  // Floating animation
              animationDelay: `${Math.random() * 2}s`, // Randomize delay for different effects
            }}
            onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'} // Pause animation on hover
            onMouseLeave={(e) => e.target.style.animationPlayState = 'running'} // Resume animation on mouse leave
          >
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg"
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
       @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);  // Adjust the floating height
          }
          100% {
            transform: translateY(0);
          }
        }


       
      `}</style>
    </div>
  );
}


// 'use client';
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const products = [
//   { id: 1, name: "INTERNATIONAL TEFL ACADEMY", imageUrl: "https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png", productUrl: "https://www.internationalteflacademy.com/" },
//   // { id: 2, name: "PREPLY.COM", imageUrl: "https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png", productUrl: "https://www.preply.com" },
//   // { id: 3, name: "AMAZON BEST SELLER", imageUrl: "https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png", productUrl: "https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref" },
//   { id: 1, name: "GRAMMAR BOOK", imageUrl: "https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg", productUrl: "https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl" },
//   { id: 2, name: "PREPLY.COM", imageUrl: "https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png", productUrl: "https://www.preply.com" },
//   { id: 3, name: "AMAZON BEST SELLER", imageUrl: "https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png", productUrl: "https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl" },
//   { id: 32, name: "Tube Resistance Bands", imageUrl: "https://m.media-amazon.com/images/I/71jQgHH1cwL.__AC_SY300_SX300_QL70_FMwebp_.jpg", productUrl: "https://www.amazon.com/dp/B0C26DJYPJ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.27BOK049G26P6&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.27BOK049G26P6_1739311827695" },
//   { id: 33, name: "Tube Resistance Bands", imageUrl: "https://m.media-amazon.com/images/I/71I2e74gIPL.__AC_SX300_SY300_QL70_FMwebp_.jpg", productUrl: "https://www.amazon.com/dp/B0C267MYRX?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.12TFATJKL1UJB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.12TFATJKL1UJB_1739312338924" },
//   { id: 34, name: "PopDarts", imageUrl: "https://m.media-amazon.com/images/I/7126HJ83ZsL._AC_SX679_.jpg", productUrl: "https://www.amazon.com/dp/B09LJVS68N?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1I8K2OU3PLZEU&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1I8K2OU3PLZEU_1739312586130" },
//   { id: 35, name: "Ks First Case", imageUrl: "https://m.media-amazon.com/images/I/51qrHRbtlsL.jpg", productUrl: "https://www.amazon.com/First-Longman-American-Structural-Readers/dp/0582798159?crid=E5O3AJPVE5GR&dib=eyJ2IjoiMSJ9.1wfU7WGwaqVsu7QzhCZ8LQ.IXCTVTDnZbMxtRS7G6JABX3dQnrXmU9u6Li99BAPW3s&dib_tag=se&keywords=longman+series+k%27s+first+case&qid=1739306503&sprefix=longman+series+k%27s+first+case%2Caps%2C239&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=1450333de7f2dcfd0f58a0d9da40cfed&language=en_US&ref_=as_li_ss_tl" },
//   { id: 36, name: "Thermal Coffee", imageUrl: "https://m.media-amazon.com/images/I/81U76KoptOL.__AC_SX300_SY300_QL70_FMwebp_.jpg", productUrl: "https://www.amazon.com/dp/B01F8P78IS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1LIFAZ2LGG7B8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1LIFAZ2LGG7B8_1739313331670" }
// ];

// export default function HoneycombProducts() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 0, 5);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     const hexRadius = 1;
//     const hexWidth = Math.sqrt(3) * hexRadius;
//     const hexHeight = 2 * hexRadius;

//     const textureLoader = new THREE.TextureLoader();

//     products.forEach((product, i) => {
//       textureLoader.load(
//         product.imageUrl,
//         (texture) => {
//           const geometry = new THREE.CircleGeometry(hexRadius, 6);
//           const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
//           const hexagon = new THREE.Mesh(geometry, material);

//           const row = Math.floor(i / 3);
//           const col = i % 3;
//           const xOffset = col * hexWidth - (row % 2) * (hexWidth / 2);
//           const yOffset = -row * (hexHeight * 0.75);
          
//           hexagon.position.set(xOffset, yOffset, 0);
//           hexagon.userData = { url: product.productUrl };

//           scene.add(hexagon);

//           hexagon.callback = () => window.open(product.productUrl, "_blank");
//         },
//         undefined,
//         (error) => console.error(`Error loading texture for ${product.name}:`, error)
//       );
//     });

//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     function onMouseClick(event) {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects(scene.children);
//       if (intersects.length > 0 && intersects[0].object.callback) {
//         intersects[0].object.callback();
//       }
//     }
//     window.addEventListener("click", onMouseClick);

//     function animate() {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     }
//     animate();

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("click", onMouseClick);
//     };
//   }, []);

//   return <div ref={mountRef} />;
// }
















//play code
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const products = [
//   {
//     id: 1,
//     name: 'INTERNATIONAL TEFL ACADEMY',
//     imageUrl: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png',
//     productUrl: 'https://www.internationalteflacademy.com/'
//   },
//   {
//     id: 2,
//     name: 'PREPLY.COM',
//     imageUrl: 'https://preply.com/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png',
//     productUrl: 'https://www.preply.com'
//   },
//   {
//     id: 3,
//     name: 'AMAZON BEST SELLER',
//     imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
//     productUrl: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 32,
//     name: 'Tube Resistance Bands',
//     imageUrl: 'https://m.media-amazon.com/images/I/71jQgHH1cwL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0C26DJYPJ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.27BOK049G26P6&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.27BOK049G26P6_1739311827695'
//   },
//   {
//     id: 33,
//     name: 'Tube Resistance Bands',
//     imageUrl: 'https://m.media-amazon.com/images/I/71I2e74gIPL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0C267MYRX?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.12TFATJKL1UJB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.12TFATJKL1UJB_1739312338924'
//   },
//   {
//     id: 34,
//     name: 'PopDarts',
//     imageUrl: 'https://m.media-amazon.com/images/I/7126HJ83ZsL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B09LJVS68N?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1I8K2OU3PLZEU&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1I8K2OU3PLZEU_1739312586130'
//   },
//   {
//     id: 35,
//     name: 'Ks First Case',
//     imageUrl: 'https://m.media-amazon.com/images/I/51qrHRbtlsL.jpg',
//     productUrl: 'https://www.amazon.com/First-Longman-American-Structural-Readers/dp/0582798159?crid=E5O3AJPVE5GR&dib=eyJ2IjoiMSJ9.1wfU7WGwaqVsu7QzhCZ8LQ.IXCTVTDnZbMxtRS7G6JABX3dQnrXmU9u6Li99BAPW3s&dib_tag=se&keywords=longman+series+k%27s+first+case&qid=1739306503&sprefix=longman+series+k%27s+first+case%2Caps%2C239&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=1450333de7f2dcfd0f58a0d9da40cfed&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 36,
//     name: 'Thermal Coffee',
//     imageUrl: 'https://m.media-amazon.com/images/I/81U76KoptOL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B01F8P78IS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1LIFAZ2LGG7B8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1LIFAZ2LGG7B8_1739313331670'
//   },
//   {
//     id: 37,
//     name: 'Summer Top',
//     imageUrl: 'https://m.media-amazon.com/images/I/61QqcJy5OIL._AC_SY679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DKNMHR26?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3DEG4OG4B8OA6&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3DEG4OG4B8OA6_1739313753537'
//   },
//   {
//     id: 38,
//     name: 'Thermal Coffee Carafe',
//     imageUrl: 'https://m.media-amazon.com/images/I/613enkB6anL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0CY39JGRS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.PNN34P88OG6R&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.PNN34P88OG6R_1739313909212'
//   },
//   {
//     id: 39,
//     name: 'Flashlight',
//     imageUrl: 'https://m.media-amazon.com/images/I/71hLcNeMTkL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B095BQ24ZN?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.19PVV6AM8R8ZB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.19PVV6AM8R8ZB_1739314063355'
//   },
//   {
//     id: 40,
//     name: 'Flashlight',
//     imageUrl: 'https://m.media-amazon.com/images/I/71EwtRxT0aL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0B2WF4R93?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3VUNUKR2M6HF8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3VUNUKR2M6HF8_1739314235999'
//   },
//   {
//     id: 41,
//     name: 'Thermal Coffee Carafe',
//     imageUrl: 'https://m.media-amazon.com/images/I/61cKxvBubJL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B09YRZ9FSC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2V1540O2WSLVS&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2V1540O2WSLVS_1739314317856'
//   },
//   {
//     id: 42,
//     name: 'Thermal Coffee Carafe',
//     imageUrl: 'https://m.media-amazon.com/images/I/71OV9vGufPL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B07H5QS6F3?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3KWJL39PQVAXR&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3KWJL39PQVAXR_1739314453047'
//   },
//   {
//     id: 43,
//     name: 'Thermal Coffee Carafe',
//     imageUrl: 'https://m.media-amazon.com/images/I/81U76KoptOL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B01F8P78IS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1LIFAZ2LGG7B8&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1LIFAZ2LGG7B8_1739314590172'
//   },
//   {
//     id: 44,
//     name: 'Coffee with Pump',
//     imageUrl: 'https://m.media-amazon.com/images/I/71DPozAAxiL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B01M7QKEEE?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3L6A8R836U5KS&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3L6A8R836U5KS_1739314681414'
//   },
//   {
//     id: 45,
//     name: 'Y2K Off',
//     imageUrl: 'https://m.media-amazon.com/images/I/718aeD1c43L._AC_SX569_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0D2HKDN11?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3BDT5U39AWJ8P&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3BDT5U39AWJ8P_1739314777480'
//   },
//   {
//     id: 46,
//     name: 'Bird Feeder',
//     imageUrl: 'https://m.media-amazon.com/images/I/91xbIJa0zQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B078Z7VTCF?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2TECI5PTWQ16G&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2TECI5PTWQ16G_1739314932596'
//   },
//   {
//     id: 47,
//     name: 'Bird Feeder',
//     imageUrl: 'https://m.media-amazon.com/images/I/91+rrX5Y7+L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0C46TKZNK?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.E7AYBVC1PJ5B&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.E7AYBVC1PJ5B_1739314998561'
//   },
//   {
//     id: 48,
//     name: 'Water Bottle',
//     imageUrl: 'https://m.media-amazon.com/images/I/61Ch6nZvtXL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0CH5ZFWDV?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.E1W6LDK5QVNB&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.E1W6LDK5QVNB_1739315156594'
//   },
//   {
//     id: 49,
//     name: 'Heated Cat House',
//     imageUrl: 'https://m.media-amazon.com/images/I/71bkJxrtcEL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DJWL9VG5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.18JI3VQU4U89I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.18JI3VQU4U89I_1739315247766'
//   },
//   {
//     id: 67,
//     name: 'Amazon Best Seller Self Care',
//     imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
//     productUrl: 'https://www.amazon.com/gp/bestsellers/books?&linkCode=ll2&tag=teachtudor-20&linkId=c5c597f0c82a101c9974a3d9f5592bd0&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 50,
//     name: 'Heated Cat House',
//     imageUrl: 'https://m.media-amazon.com/images/I/71fqDCfg7YL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DJ68FFGC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.18JI3VQU4U89I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.18JI3VQU4U89I_1739315247768'
//   },
//   {
//     id: 51,
//     name: 'Shower Head',
//     imageUrl: 'https://m.media-amazon.com/images/I/81ArkpQlXNL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0D14HLMYS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3SIEUPH29YJE4&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3SIEUPH29YJE4_1739315452720'
//   },
//   {
//     id: 52,
//     name: 'Rug',
//     imageUrl: 'https://m.media-amazon.com/images/I/91WR5FR0H+L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0D8L26YF5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1ZHCXVU25STQL&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1ZHCXVU25STQL_1739315604142'
//   },
//   {
//     id: 53,
//     name: 'Bird Feeder',
//     imageUrl: 'https://m.media-amazon.com/images/I/91aai3g4SXL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B00YSU3WG2?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.218UDK530K0AW&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.218UDK530K0AW_1739315680370'
//   },
//   {
//     id: 54,
//     name: 'Bird Feeder',
//     imageUrl: 'https://m.media-amazon.com/images/I/81Y6gC4h2-L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0C59GSWS1?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2SOQA8G9SGVKZ&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2SOQA8G9SGVKZ_1739315760428'
//   },
//   {
//     id: 55,
//     name: 'Dog Harness',
//     imageUrl: 'https://m.media-amazon.com/images/I/51zfoPVKenL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DL42H8R8?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3J9HKV9GGRSEQ&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3J9HKV9GGRSEQ_1739315870918'
//   },
//   {
//     id: 56,
//     name: 'Flashlight',
//     imageUrl: 'https://m.media-amazon.com/images/I/61Lv52CA1XL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DBGJPN4M?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3FXHVGL8GFCAD&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3FXHVGL8GFCAD_1739315945848'
//   },
//   {
//     id: 57,
//     name: 'Rug',
//     imageUrl: 'https://m.media-amazon.com/images/I/81qI16rIDXL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0D8B2KWLC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1ONGIMBMF3ORX&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1ONGIMBMF3ORX_1739316015191'
//   },
//   {
//     id: 58,
//     name: 'Tortilla Warmer',
//     imageUrl: 'https://m.media-amazon.com/images/I/71Sj9LsFkkL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0D8RRS82L?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3ICNH5NZBROFF&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.3ICNH5NZBROFF_1739316096598'
//   },
//   {
//     id: 59,
//     name: 'Lifting Belt',
//     imageUrl: 'https://m.media-amazon.com/images/I/81PpVdd09qL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0CY3P16W3?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1S9NVW6N6YSEL&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.1S9NVW6N6YSEL_1739316168422'
//   },
//   {
//     id: 60,
//     name: 'Desk Calendar',
//     imageUrl: 'https://m.media-amazon.com/images/I/61HOfsVIL7L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DJZLLG9K?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.13BKGBEBL4V2I&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.13BKGBEBL4V2I_1739316247991'
//   },
//   {
//     id: 61,
//     name: 'Waist Trimmer Belt',
//     imageUrl: 'https://m.media-amazon.com/images/I/71RZ45+3TzL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0CZ7CRMJZ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2JQ50DQYYHBER&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.2JQ50DQYYHBER_1739316329250'
//   },
//   {
//     id: 62,
//     name: 'Bird Toys',
//     imageUrl: 'https://m.media-amazon.com/images/I/71SFwN3zQWL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DHSV6LG4?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316596704'
//   },
//   {
//     id: 63,
//     name: 'Flirt Pole',
//     imageUrl: 'https://m.media-amazon.com/images/I/71OLPtNGafL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DC1PJPD5?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316662912'
//   },
//   {
//     id: 64,
//     name: 'Bird Toys',
//     imageUrl: 'https://m.media-amazon.com/images/I/71kmqAxki1L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/dp/B0DS2WRMRY?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.36FOT59GKCYGT&linkCode=tr1&tag=teachtudor-20&linkId=amzn1.campaign.36FOT59GKCYGT_1739316715338'
//   },
//   {
//     id: 65,
//     name: 'Pride and Prejudice',
//     imageUrl: 'https://m.media-amazon.com/images/I/81yMHkZAI9L._SY466_.jpg',
//     productUrl: '  https://www.amazon.com/Pride-Prejudice-Longman-Classics-Stage/dp/0582030455?crid=1KDB6BR90ZALE&dib=eyJ2IjoiMSJ9.G29WMRwRUuVHvaqJ8QWgP0twmlLQhCX1LTiGYl3JKgN1UgK1_pcbIeIXcT0Qr3eEhPlxQqNLlhP-XtCAxX3CDRDAcYlQ1u3pTBXnH4yonosQOppntO1vcqU85HprcUBb4yha-PepOhmGYWnXg_yTOamVzYtYcdEBEjRWosNr7-E.1ybcvLZlIq2cEYnBSd36pBCl4OBt-LnoXmO4eHROKHA&dib_tag=se&keywords=longman+classics+pride+and+prejudice&qid=1739316863&sprefix=longman+classics+pride+and+prejudic%2Caps%2C263&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=10436b149fb383b296fc10a4dfcd2169&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 66,
//     name: 'Amazon Best Seller Self Care',
//     imageUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png',
//     productUrl: 'https://www.amazon.com/gp/bestsellers/beauty?&linkCode=ll2&tag=teachtudor-20&linkId=72ff6375808f2938bdb551440faab0c0&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 4,
//     name: 'INSULATED STAINLESS STEEL PUSH BUTTON',
//     imageUrl: 'https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX569_.jpg',
//     productUrl: 'https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-24-Ounce/dp/B085DTZQNZ?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B085DTZQNZ&th=1&linkCode=ll1&tag=teachtudor-20&linkId=cdea4b3d5f1254a1a6282e1f4d740d5a&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 5,
//     name: 'QUENCHER',
//     imageUrl: 'https://m.media-amazon.com/images/I/61WM1xukklL._AC_SY879_.jpg',
//     productUrl: 'https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CRMWHW47?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CRMWHW47&th=1&linkCode=ll1&tag=teachtudor-20&linkId=ce1aacc7cb2950c88225e12d641ca749&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 6,
//     name: 'MULTIFUNCTION STAINLESS BATTERIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg',
//     productUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SX522_.jpg'
//   },
//   {
//     id: 7,
//     name: 'ORGANIZER STORAGE CABINET SHELVES',
//     imageUrl: 'https://m.media-amazon.com/images/I/71xHRLEofPL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Organizer-Storage-Cabinet-Shelves-Bathroom/dp/B0C5DBMYZF?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0C5DBMYZF&th=1&linkCode=ll1&tag=teachtudor-20&linkId=06301d83a8cf819803081fc520beca0e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 8,
//     name: 'SPRAYER',
//     imageUrl: 'https://m.media-amazon.com/images/I/71n2yIfcpRL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/YARRAMATE-Dispenser-Sprayer-Cooking-Food-grade/dp/B0CP4XY9QC?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CP4XY9QC&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1d38ff4b434f44a502d32f280bd24585&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 9,
//     name: 'DIGITAL BATTERIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/815FWesbK3L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B06X9NQ8GX&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=9d9b36385d5d7a0103664f6e712b04f5&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 10,
//     name: 'PAPER LINERS',
//     imageUrl: 'https://m.media-amazon.com/images/I/81esmIBZIJL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Air-Fryer-Paper-Liners-Disposable/dp/B0B6PLG6G2?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0B6PLG6G2&th=1&linkCode=ll1&tag=teachtudor-20&linkId=64225c095198e2fab6fab7b22764b243&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 11,
//     name: 'ACTION BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 12,
//     name: 'KITCHEN AID OPENER',
//     imageUrl: 'https://m.media-amazon.com/images/I/51yO+bt+mqL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/KitchenAid-KE199OHOBA-Classic-Multifunction-Opener/dp/B07YP2VH4B?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07YP2VH4B&th=1&linkCode=ll1&tag=teachtudor-20&linkId=5569a9c24a7db602b76b25157c20c3c7&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 13,
//     name: 'COOKING THERMOMETER',
//     imageUrl: 'https://m.media-amazon.com/images/I/81bpKKv68-L._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Thermometer-Cooking-BACKLIGHT-WATERPROOF-Temperature/dp/B00S93EQUK?pd_rd_w=bbiLT&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00S93EQUK&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=058f1b239e4ed015eecd3dbd32f65812&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 14,
//     name: 'HANES SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61neCjTolQL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Hanes-Ecosmart-Fleece-Sweatshirt-Black/dp/B01L8JJ5KC?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B01L8JJ5KC&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a077d77566e06a9458e2cb8d7c361bd1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 15,
//     name: 'HIGH-WAISTED LEGGINGS',
//     imageUrl: 'https://m.media-amazon.com/images/I/51X5PPehAKL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/SINOPHANT-High-Waisted-Leggings-Women/dp/B0BVFDH9CP?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BVFDH9CP&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=1abe0e02b237718bbc8195c170d277b5&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 16,
//     name: 'FRUIT LOOM SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/Fruit-Loom-Mens-Tucked-T-Shirt/dp/B00W66LQFO?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00W66LQFO&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ea4d6e3aac5a33d14123d64c6bb8bf9e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 17,
//     name: 'APPLE PRODUCT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX522_.jpg',
//     productUrl: 'https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D1XD1ZV3&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=97a876523002c312dec40cba41f0a9a6&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer'
//   },
//   {
//     id: 18,
//     name: 'AMAZON FIRE STICK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61c7Upe2KHL._AC_SY450_.jpg',
//     productUrl: 'https://www.amazon.com/all-new-amazon-fire-tv-stick-4k-max/dp/B0BP9SNVH9?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0BP9SNVH9&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=15a6a1ae0aba0bebecc76ffbe210efa0&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 19,
//     name: 'CASHMERE MOISTURE LIGHTWEIGHT',
//     imageUrl: 'https://m.media-amazon.com/images/I/61pp+20Oo0L._SX679_.jpg',
//     productUrl: 'https://www.amazon.com/eos-Cashmere-Moisture-Lightweight-Non-Greasy/dp/B08KT2Z93D?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B08KT2Z93D&th=1&linkCode=ll1&tag=teachtudor-20&linkId=e7de0bbb3c3f823b61c4142b74ccb0de&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 20,
//     name: 'LEGGINGS',
//     imageUrl: 'https://m.media-amazon.com/images/I/61IqZD8hYDL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/GYM-PEOPLE-Pockets-Control-Leggings/dp/B07HQPKDZB?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B07HQPKDZB&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=930ebb61154d0d94900410354066100e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 21,
//     name: 'CROCS',
//     imageUrl: 'https://m.media-amazon.com/images/I/61SuPkDGYfL._AC_SY695_.jpg',
//     productUrl: 'https://www.amazon.com/crocs-Unisex-Classic-Black-Women/dp/B0014C5S7S?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0014C5S7S&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=6d3bac835d98e13722e6e44f6480fde4&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 22,
//     name: 'T-SHIRT',
//     imageUrl: 'https://m.media-amazon.com/images/I/71QZExoIbxL._AC_SY741_.jpg',
//     productUrl: 'https://www.amazon.com/ANRABESS-Crewneck-T-Shirt-Workout-Outfits/dp/B0CYZM5RSM?pd_rd_w=nUH8N&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0CYZM5RSM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=273c1f916a01b7153f4a8d49571799a3&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 23,
//     name: 'AIRTAG',
//     imageUrl: 'https://m.media-amazon.com/images/I/61bMNCeAUAL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Apple-MX542LL-A-AirTag-Pack/dp/B0D54JZTHY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B0D54JZTHY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=cb5632881fba552d7993badab47608c1&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 24,
//     name: 'SURGE PROTECTOR',
//     imageUrl: 'https://m.media-amazon.com/images/I/61NGPmmMAIL._AC_SX679_.jpg',
//     productUrl: 'https://www.amazon.com/Surge-Protector-Power-Strip-Extension/dp/B09PDLBFKY?pd_rd_w=r8dhX&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B09PDLBFKY&th=1&linkCode=ll1&tag=teachtudor-20&linkId=2f6408812e92b40be69553f8a8a4976d&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 25,
//     name: 'MASCARA',
//     imageUrl: 'https://m.media-amazon.com/images/I/61K6cQhw4EL._SX679_.jpg',
//     productUrl: 'https://www.amazon.com/essence-Princess-Effect-Mascara-Cruelty/dp/B00T0C9XRK?pd_rd_w=cGuGc&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=0QEV942TAZXW9E291BP3&pd_rd_wg=ihGNO&pd_rd_r=b641ee5b-1410-4c0d-bd3c-0acfbbee00d4&pd_rd_i=B00T0C9XRK&th=1&linkCode=ll1&tag=teachtudor-20&linkId=1543c71207688f46de993b17361fb860&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 26,
//     name: 'VOCABULARY WORKBOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 27,
//     name: 'ESL SPEAKING ACTIVITIES',
//     imageUrl: 'https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg',
//     productUrl: 'https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 28,
//     name: 'CATERPILLAR BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg',
//     productUrl: 'https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=e8db03c7d8f36fa6b0c3a859b187191c&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 29,
//     name: 'VENTURES BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/81GJ84ejdBL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Ventures-Level-1-Value-Pack/dp/1108646018?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=f45bcf4cbe35b1fdc7a51d37420cca9e&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 30,
//     name: 'PALABRAS USADAS',
//     imageUrl: 'https://m.media-amazon.com/images/I/71-IEZsXEpL._SY425_.jpg',
//     productUrl: 'https://www.amazon.com/Palabras-Usadas-Ingles-Spanish-English/dp/970775382X?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=d674df66a6dac777d26992d4b140a87f&language=en_US&ref_=as_li_ss_tl'
//   },
//   {
//     id: 31,
//     name: 'GRAMMAR BOOK',
//     imageUrl: 'https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg',
//     productUrl: 'https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl'
//   },
// ];

// export default function ProductFloatingWithNavbar() {
//   const [nodes, setNodes] = useState([]);
//   const [lines, setLines] = useState([]);

//   useEffect(() => {
//     const nodeCount = 50; // Number of neurons in the network
//     const radius = 10; // Radius to spread the neurons randomly

//     // Generate random positions for the neurons (nodes)
//     const nodesArr = [];
//     for (let i = 0; i < nodeCount; i++) {
//       nodesArr.push(
//         new THREE.Vector3(
//           Math.random() * radius * 2 - radius,
//           Math.random() * radius * 2 - radius,
//           Math.random() * radius * 2 - radius
//         )
//       );
//     }
//     setNodes(nodesArr);

//     // Generate connections between the nodes (synapses)
//     const linesArr = [];
//     for (let i = 0; i < nodeCount; i++) {
//       for (let j = i + 1; j < nodeCount; j++) {
//         linesArr.push([nodesArr[i], nodesArr[j]]);
//       }
//     }
//     setLines(linesArr);
//   }, []);

//   return (
//     <div style={{ position: 'relative' }}>
//       {/* Navbar */}
//       <Navbar />
      
//       {/* Neural Network Background */}
//       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '60vh', zIndex: -1 }}>
//         <Canvas style={{ height: '100%', width: '100%', background: 'transparent' }}>
//           <ambientLight intensity={0.1} />
//           <pointLight position={[0, 0, 0]} />
//           <OrbitControls />

//           {/* Render Nodes (Neurons) */}
//           {nodes.map((node, index) => (
//             <mesh key={index} position={node}>
//               <sphereGeometry args={[0.02, 0.02, 0.02]} />
//               <meshStandardMaterial color={0x00ff00} />
//             </mesh>
//           ))}

//           {/* Render Connections (Synapses) */}
//           {lines.map((line, index) => (
//             <Line key={index} start={line[0]} end={line[1]} color={0xffffff} />
//           ))}
//         </Canvas>
//       </div>

//       {/* Floating Product Images */}
//       <div
//         style={{
//           position: 'relative',
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           gap: '65px',
//           marginTop: '50px',
//           zIndex: 1,
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               position: 'relative',
//               width: '150px',
//               height: '150px',
//               textAlign: 'center',
//               animation: 'floating 3s ease-in-out infinite',
//               animationDelay: `${Math.random() * 2}s`,
//             }}
//             onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
//             onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
//           >
//             <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="rounded-lg"
//                 style={{ objectFit: 'contain' }}
//               />
//             </a>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes floating {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);  // Adjust the floating height
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// // Line component to draw connections between nodes
// function Line({ start, end, color }) {
//   const lineRef = React.useRef();

//   useEffect(() => {
//     const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
//     lineRef.current.geometry = geometry;
//   }, [start, end]);

//   return (
//     <line ref={lineRef}>
//       <lineBasicMaterial color={color} />
//     </line>
//   );
// }






































//code 6 LOGO
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';

// export default function ProductFloatingWithNavbar() {
//   return (
//     <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       {/* Background Image */}
//       <Image
//         src="/rhombus.jpg"  // Image stored in public folder
//         alt="Background"
//         layout="fill"  // Cover the whole viewport
//         objectFit="cover"  // Ensure it fills the screen properly
//         objectPosition="center"
//         style={{ transform: 'scaleY(1)' }}  // Squeeze vertically (adjust 0.7 as needed)
//         priority
//       />

//       {/* Navbar */}
//       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
//         <Navbar />
//       </div>

//       {/* Content (optional) */}
//       <h1 style={{ 
//         position: 'absolute', 
//         top: '50%', 
//         left: '50%', 
//         transform: 'translate(-50%, -50%)', 
//         fontSize: '40px', 
//         color: 'white', 
//         textAlign: 'center' 
//       }}>
        
//       </h1>
//     </div>
//   );
// }

//CODE 3
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from '../Navbar';

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   // Load the car model
//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/car_model.glb", (gltf) => {
//     // loader.load("/disco_drone.glb", (gltf) => {
//       const model = gltf.scene;
//       // model.scale.set(0.5, 0.5, 0.5);  // Scale the model to 50% of its original size
//       model.scale.set(0.8,0.8,0.8);
      
//       //NEW CODE
//       model.position.set(0,10,0);

//       setCarModel(model);  // Store the model in state
//     });

//   }, []);

//   // Handle user inputs for controlling the car
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -13;
//     const heightAbove = 15;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     //camera.lookAt(carRef.current.position);
//     camera.lookAt(
//       new THREE.Vector3(
//         carRef.current.position.x,
//         carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
//         carRef.current.position.z
//       )
//     );



//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent />;
// }

// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={true} enablePan={true} />
//           <InfiniteGreenGrid />
//           <Car position={[0, 0.25, 0]} buildings={buildings} />
//           {buildings.map((b, i) => (
//             <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//           ))}
//         </Canvas>
//       </div>
//     </>
//   );
// }

//CODE 4 UP AND DOWN ARROW AND MORE
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from '../Navbar';



// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Ocean() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[1000, 1000]} /> 
//       <meshStandardMaterial color="blue" roughness={0.5} metalness={0.3} />
//     </mesh>
//   );
// }

// //island function
// function Island() {
//   const islandRef = useRef();
//   const [islandModel, setIslandModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/grothustangi_koltur.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(5, 5, 5); // Adjust scale
//       model.position.set(0, 0, 0); // Position it at ground level
//       setIslandModel(model);
//     });
//   }, []);

//   return islandModel ? <primitive object={islandModel} ref={islandRef} /> : null;
// }

// //car function
// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 1
//   const rotationSpeed = 0.03;
//   const [verticalSpeed, setVerticalSpeed] = useState(0.01);
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   // Load the car model works
//   // useEffect(() => {
//   //   const loader = new GLTFLoader();
//   //   loader.load("/car_model1.glb", (gltf) => {
//   //   // loader.load("/disco_drone.glb", (gltf) => {
//   //     const model = gltf.scene;
//   //     // model.scale.set(0.5, 0.5, 0.5);  // Scale the model to 50% of its original size
//   //     model.scale.set(0.8,0.8,0.8);
      
//   //     //NEW CODE
//   //     model.position.set(0,10,0);

//   //     // Rotate the model to face the back
//   //     // model.rotation.y = Math.PI/2;  // 180 degrees rotation

//   //     if (carRef.current) {
//   //       carRef.current.add(model); // Ensure model is added to an existing reference
//   //     }

//   //     setCarModel(model);  // Store the model in state
//   //   });

//   // }, []);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/car_model1.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.8, 0.8, 0.8);
//       model.position.set(0, 10, 0);
//       setCarModel((prev) => {
//         if (prev) prev.traverse((child) => child.dispose?.());
//         return model;
//       });
//     });
  
//     return () => {
//       if (carModel) carModel.traverse((child) => child.dispose?.());
//     };
//   }, []);

//   // Handle user inputs for controlling the car
//   useEffect(() => {

//     if (typeof window === "undefined") return;

//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//         up: event.key === "w" || dir.up,   // Press 'W' to go up
//         down: event.key === "s" || dir.down // Press 'S' to go down
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
//         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     if(!carRef.current) return false;
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -15;
//     const heightAbove = 15;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     //camera.lookAt(carRef.current.position);
//     camera.lookAt(
//       new THREE.Vector3(
//         carRef.current.position.x,
//         carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
//         carRef.current.position.z
//       )
//     );

//     let newPos = carRef.current.position.clone();

//     // Move Up/Down
//     if (direction.up) newPos.y += 0.1;   // W key (go up)
//     if (direction.down) newPos.y -= 0.1; // S key (go down)

//     //add gravity (car slowly falls)
//     newPos.y -= 0.01;

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     // ✨ New: Adjust Y position using Up/Down arrow keys
//     if (direction.up) newPos.y += verticalSpeed;   // Move up
//     if (direction.down) newPos.y -= verticalSpeed; // Move down

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent />;
// }

// // const BoardGameContent = dynamic(() => Promise.resolve(BoardGameContentComponent), { ssr: false });
// // Dynamically wrap the existing function
// const DynamicBoardGameContent = dynamic(() => Promise.resolve(BoardGameContent), { ssr: false });


// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          

//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={true} enablePan={true} />
//           <InfiniteGreenGrid />
//           <Ocean/>
//           <Island /> {/* Add the island to the scene */}
//           <Car position={[0, 0.25, 0]} buildings={buildings} />
//           {buildings.map((b, i) => (
//             <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//           ))}
//         </Canvas>
//       </div>
//     </>
//   );
// }

//CODE 5 WORKS BEAUTIFUL FOR COMPUTERS
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from '../Navbar';
// import { TextureLoader } from "three";


// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Ocean() {
//   // const texture = useLoader(TextureLoader, "/waternormals.jpg"); // Update with your texture path
//   const texture = new TextureLoader().load("/waternormals1.jpg");
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(1,1); // Adjust the tiling as needed

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[1000, 1000, 1000, 1000]} /> 
//       {/* <meshStandardMaterial color="blue" roughness={0.5} metalness={0.3} /> */}
//       <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
//     </mesh>
//   );
// }

// //island function
// function Island() {
//   const islandRef = useRef();
//   const [islandModel, setIslandModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/grothustangi_koltur.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(5, 5, 5); // Adjust scale
//       model.position.set(0, -5, 0); // Position it at ground level
//       // setIslandModel(model);
//       setIslandModel(model);
//     });
//   }, []);

//   return islandModel ? <primitive object={islandModel} ref={islandRef} /> : null;
// }

// //car function
// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 1
//   const rotationSpeed = 0.03;
//   const [verticalSpeed, setVerticalSpeed] = useState(0.5);
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   useEffect(() => {

//     if (typeof window === "undefined") return; // Prevent SSR execution

//     const loader = new GLTFLoader();
//     loader.load("/car_model1.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.8, 0.8, 0.8);
//       model.position.set(0, 10, 0);
//       setCarModel((prev) => {
//         if (prev) prev.traverse((child) => child.dispose?.());
//         return model;
//       });
//     });
  
//     return () => {
//       if (carModel) carModel.traverse((child) => child.dispose?.());
//     };
//   }, []);

//   // Handle user inputs for controlling the car WORKS GREAT
//   useEffect(() => {

//     if (typeof window === "undefined") return;

//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//         up: event.key === "w" || dir.up,   // Press 'W' to go up
//         down: event.key === "s" || dir.down // Press 'S' to go down
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
//         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     if(!carRef.current) return false;
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -15;
//     const heightAbove = 15;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     //camera.lookAt(carRef.current.position);
//     camera.lookAt(
//       new THREE.Vector3(
//         carRef.current.position.x,
//         carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
//         carRef.current.position.z
//       )
//     );

//     let newPos = carRef.current.position.clone();

//     // Move Up/Down
//     if (direction.up) newPos.y += 0.1;   // W key (go up)
//     if (direction.down) newPos.y -= 0.1; // S key (go down)

//     //add gravity (car slowly falls)
//     newPos.y -= 0.01;

//     if (newPos.y < 10) newPos.y = 10;

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     // ✨ New: Adjust Y position using Up/Down arrow keys
//     if (direction.up) newPos.y += verticalSpeed;   // Move up
//     if (direction.down) newPos.y -= verticalSpeed; // Move down

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} visible={false} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 0;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <DynamicBoardGameContent />;
// }

// // const BoardGameContent = dynamic(() => Promise.resolve(BoardGameContentComponent), { ssr: false });
// // Dynamically wrap the existing function
// const DynamicBoardGameContent = dynamic(() => Promise.resolve(BoardGameContent), { ssr: false });


// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          

//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={true} enablePan={true} />
//           <InfiniteGreenGrid />
//           <Ocean/>
//           <Island /> {/* Add the island to the scene */}
//           <Car position={[0, 0.25, 0]} buildings={buildings} />
//           {buildings.map((b, i) => (
//             <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//           ))}
//         </Canvas>
//       </div>
//     </>
//   );
// }

//CODE 6 GREAT FOR COMPUTERS WORKS OK FOR PHONES
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from '../Navbar';
// import { TextureLoader } from "three";


// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Ocean() {
//   // const texture = useLoader(TextureLoader, "/waternormals.jpg"); // Update with your texture path
//   const texture = new TextureLoader().load("/waternormals1.jpg");
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(1,1); // Adjust the tiling as needed

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[1000, 1000, 1000, 1000]} /> 
//       {/* <meshStandardMaterial color="blue" roughness={0.5} metalness={0.3} /> */}
//       <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
//     </mesh>
//   );
// }

// //island function
// function Island() {
//   const islandRef = useRef();
//   const [islandModel, setIslandModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/grothustangi_koltur.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(5, 5, 5); // Adjust scale
//       model.position.set(0, -5, 0); // Position it at ground level
//       // setIslandModel(model);
//       setIslandModel(model);
//     });
//   }, []);

//   return islandModel ? <primitive object={islandModel} ref={islandRef} /> : null;
// }

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 1;
//   const rotationSpeed = 0.03;
//   const [verticalSpeed, setVerticalSpeed] = useState(0.5);
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   useEffect(() => {
//     if (typeof window === "undefined") return; // Prevent SSR execution

//     const loader = new GLTFLoader();
//     loader.load("/car_model1.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.8, 0.8, 0.8);
//       model.position.set(0, 10, 0);
//       setCarModel((prev) => {
//         if (prev) prev.traverse((child) => child.dispose?.());
//         return model;
//       });
//     });
  
//     return () => {
//       if (carModel) carModel.traverse((child) => child.dispose?.());
//     };
//   }, []);

//   // Handle user inputs for controlling the car (keyboard and touch)
//   useEffect(() => {

//     if (typeof window === "undefined") return;

//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//         up: event.key === "w" || dir.up,   // Press 'W' to go up
//         down: event.key === "s" || dir.down // Press 'S' to go down
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
//         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
//       }));
//     };

//     // Touch event handlers for mobile
//     let startTouchX = 0;
//     let startTouchY = 0;
//     let touchMoveX = 0;
//     let touchMoveY = 0;

//     const handleTouchStart = (event) => {
//       if (event.touches.length === 1) {
//         startTouchX = event.touches[0].clientX;
//         startTouchY = event.touches[0].clientY;
//       }
//     };

//     const handleTouchMove = (event) => {
//       if (event.touches.length === 1) {
//         touchMoveX = event.touches[0].clientX;
//         touchMoveY = event.touches[0].clientY;

//         const deltaX = touchMoveX - startTouchX;
//         const deltaY = touchMoveY - startTouchY;

//         setDirection((dir) => ({
//           ...dir,
//           forward: deltaY < -50,  // Move forward if swipe up
//           backward: deltaY > 50,  // Move backward if swipe down
//           left: deltaX < -50,     // Move left if swipe left
//           right: deltaX > 50,     // Move right if swipe right
//           up: deltaY < -50,//new code
//           down: deltaY > 50,//new code
//         }));
//       }
//     };

//     const handleTouchEnd = () => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: false,
//         backward: false,
//         left: false,
//         right: false,
//         up: false,
//         down: false,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, []);

// // //car function WORK GREAT
// // function Car({ position, buildings }) {
// //   const carRef = useRef();
// //   const { camera } = useThree();
// //   const speed = 1
// //   const rotationSpeed = 0.03;
// //   const [verticalSpeed, setVerticalSpeed] = useState(0.5);
// //   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
// //   const [carModel, setCarModel] = useState(null);  // State to store the car model

// //   useEffect(() => {

// //     if (typeof window === "undefined") return; // Prevent SSR execution

// //     const loader = new GLTFLoader();
// //     loader.load("/car_model1.glb", (gltf) => {
// //       const model = gltf.scene;
// //       model.scale.set(0.8, 0.8, 0.8);
// //       model.position.set(0, 10, 0);
// //       setCarModel((prev) => {
// //         if (prev) prev.traverse((child) => child.dispose?.());
// //         return model;
// //       });
// //     });
  
// //     return () => {
// //       if (carModel) carModel.traverse((child) => child.dispose?.());
// //     };
// //   }, []);

// //   // Handle user inputs for controlling the car WORKS GREAT
// //   useEffect(() => {

// //     if (typeof window === "undefined") return;

// //     const handleKeyDown = (event) => {
// //       setDirection((dir) => ({
// //         ...dir,
// //         forward: event.key === "ArrowUp" || dir.forward,
// //         backward: event.key === "ArrowDown" || dir.backward,
// //         left: event.key === "ArrowLeft" || dir.left,
// //         right: event.key === "ArrowRight" || dir.right,
// //         up: event.key === "w" || dir.up,   // Press 'W' to go up
// //         down: event.key === "s" || dir.down // Press 'S' to go down
// //       }));
// //     };

// //     const handleKeyUp = (event) => {
// //       setDirection((dir) => ({
// //         ...dir,
// //         forward: event.key === "ArrowUp" ? false : dir.forward,
// //         backward: event.key === "ArrowDown" ? false : dir.backward,
// //         left: event.key === "ArrowLeft" ? false : dir.left,
// //         right: event.key === "ArrowRight" ? false : dir.right,
// //         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
// //         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
// //       }));
// //     };

// //     window.addEventListener("keydown", handleKeyDown);
// //     window.addEventListener("keyup", handleKeyUp);

// //     return () => {
// //       window.removeEventListener("keydown", handleKeyDown);
// //       window.removeEventListener("keyup", handleKeyUp);
// //     };
// //   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     if(!carRef.current) return false;
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -15;
//     const heightAbove = 15;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     //camera.lookAt(carRef.current.position);
//     camera.lookAt(
//       new THREE.Vector3(
//         carRef.current.position.x,
//         carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
//         carRef.current.position.z
//       )
//     );

//     let newPos = carRef.current.position.clone();

//     // Move Up/Down
//     if (direction.up) newPos.y += 0.1;   // W key (go up)
//     if (direction.down) newPos.y -= 0.1; // S key (go down)

//     //add gravity (car slowly falls)
//     newPos.y -= 0.01;

//     if (newPos.y < 10) newPos.y = 10;

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     // ✨ New: Adjust Y position using Up/Down arrow keys
//     if (direction.up) newPos.y += verticalSpeed;   // Move up
//     if (direction.down) newPos.y -= verticalSpeed; // Move down

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} visible={false} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 0;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <DynamicBoardGameContent />;
// }

// // const BoardGameContent = dynamic(() => Promise.resolve(BoardGameContentComponent), { ssr: false });
// // Dynamically wrap the existing function
// const DynamicBoardGameContent = dynamic(() => Promise.resolve(BoardGameContent), { ssr: false });


// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          

//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={true} enablePan={true} />
//           <InfiniteGreenGrid />
//           <Ocean/>
//           <Island /> {/* Add the island to the scene */}
//           <Car position={[0, 0.25, 0]} buildings={buildings} />
//           {buildings.map((b, i) => (
//             <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//           ))}
//         </Canvas>
//       </div>
//     </>
//   );
// }

//code 7 
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from '../Navbar';
// import { TextureLoader } from "three";


// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Ocean() {
//   // const texture = useLoader(TextureLoader, "/waternormals.jpg"); // Update with your texture path
//   const texture = new TextureLoader().load("/waternormals1.jpg");
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(1,1); // Adjust the tiling as needed

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[10000, 10000, 1000, 1000]} /> 
//       <meshStandardMaterial color="blue" roughness={0.5} metalness={0.3} />
//       {/* <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} /> */}
//     </mesh>
//   );
// }

// //island function
// function Island() {
//   const islandRef = useRef();
//   const [islandModel, setIslandModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/grothustangi_koltur.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(5, 5, 5); // Adjust scale
//       model.position.set(0, -5, 0); // Position it at ground level
//       // setIslandModel(model);
//       setIslandModel(model);
//     });
//   }, []);

//   return islandModel ? <primitive object={islandModel} ref={islandRef} /> : null;
// }

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 1;
//   const rotationSpeed = 0.03;
//   const [verticalSpeed, setVerticalSpeed] = useState(0.5);
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false, up: false, down: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   useEffect(() => {
//     if (typeof window === "undefined") return; // Prevent SSR execution

//     const loader = new GLTFLoader();
//     loader.load("/car_model1.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.8, 0.8, 0.8);
//       model.position.set(0, 10, 0);
//       setCarModel((prev) => {
//         if (prev) prev.traverse((child) => child.dispose?.());
//         return model;
//       });
//     });
  
//     return () => {
//       if (carModel) carModel.traverse((child) => child.dispose?.());
//     };
//   }, []);

//   // Handle user inputs for controlling the car (keyboard and touch)
//   useEffect(() => {

//     if (typeof window === "undefined") return;

//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//         up: event.key === "w" || dir.up,   // Press 'W' to go up
//         down: event.key === "s" || dir.down // Press 'S' to go down
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
//         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
//       }));
//     };

//     // Touch event handlers for mobile
//     let startTouchX = 0;
//     let startTouchY = 0;
//     let touchMoveX = 0;
//     let touchMoveY = 0;

//     const handleTouchStart = (event) => {
//       if (event.touches.length === 1) {
//         // if (isTouchDevice && event.touches.length === 1) {
//         // event.preventDefault();
//         startTouchX = event.touches[0].clientX;
//         startTouchY = event.touches[0].clientY;
//       }d
//     };

//     const handleTouchMove = (event) => {
//       if (event.touches.length === 1) {
//         // if (isTouchDevice && event.touches.length === 1) {
//         // event.preventDefault();
//         touchMoveX = event.touches[0].clientX;
//         touchMoveY = event.touches[0].clientY;

//         const deltaX = touchMoveX - startTouchX;
//         const deltaY = touchMoveY - startTouchY;

//         setDirection((dir) => ({
//           ...dir,
//           forward: deltaY < -50,  // Move forward if swipe up
//           backward: deltaY > 50,  // Move backward if swipe down
//           left: deltaX < -50,     // Move left if swipe left
//           right: deltaX > 50,     // Move right if swipe right
//           up: deltaY < -50,//new code
//           down: deltaY > 50,//new code
          
//         }));
//       }
//     };

//     const handleTouchEnd = () => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: false,
//         backward: false,
//         left: false,
//         right: false,
//         up: false,
//         down: false,
//       }));
//     };

//     // Only prevent default scrolling if it's a touch device
//     // if (isTouchDevice) {
//     //   document.addEventListener("touchmove", (event) => {
//     //     event.preventDefault();
//     //   }, { passive: false });
//     // }

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, []);

// // //car function WORK GREAT
// // function Car({ position, buildings }) {
// //   const carRef = useRef();
// //   const { camera } = useThree();
// //   const speed = 1
// //   const rotationSpeed = 0.03;
// //   const [verticalSpeed, setVerticalSpeed] = useState(0.5);
// //   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
// //   const [carModel, setCarModel] = useState(null);  // State to store the car model

// //   useEffect(() => {

// //     if (typeof window === "undefined") return; // Prevent SSR execution

// //     const loader = new GLTFLoader();
// //     loader.load("/car_model1.glb", (gltf) => {
// //       const model = gltf.scene;
// //       model.scale.set(0.8, 0.8, 0.8);
// //       model.position.set(0, 10, 0);
// //       setCarModel((prev) => {
// //         if (prev) prev.traverse((child) => child.dispose?.());
// //         return model;
// //       });
// //     });
  
// //     return () => {
// //       if (carModel) carModel.traverse((child) => child.dispose?.());
// //     };
// //   }, []);

// //   // Handle user inputs for controlling the car WORKS GREAT
// //   useEffect(() => {

// //     if (typeof window === "undefined") return;

// //     const handleKeyDown = (event) => {
// //       setDirection((dir) => ({
// //         ...dir,
// //         forward: event.key === "ArrowUp" || dir.forward,
// //         backward: event.key === "ArrowDown" || dir.backward,
// //         left: event.key === "ArrowLeft" || dir.left,
// //         right: event.key === "ArrowRight" || dir.right,
// //         up: event.key === "w" || dir.up,   // Press 'W' to go up
// //         down: event.key === "s" || dir.down // Press 'S' to go down
// //       }));
// //     };

// //     const handleKeyUp = (event) => {
// //       setDirection((dir) => ({
// //         ...dir,
// //         forward: event.key === "ArrowUp" ? false : dir.forward,
// //         backward: event.key === "ArrowDown" ? false : dir.backward,
// //         left: event.key === "ArrowLeft" ? false : dir.left,
// //         right: event.key === "ArrowRight" ? false : dir.right,
// //         up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
// //         down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
// //       }));
// //     };

// //     window.addEventListener("keydown", handleKeyDown);
// //     window.addEventListener("keyup", handleKeyUp);

// //     return () => {
// //       window.removeEventListener("keydown", handleKeyDown);
// //       window.removeEventListener("keyup", handleKeyUp);
// //     };
// //   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     if(!carRef.current) return false;
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -15;
//     const heightAbove = 15;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     //camera.lookAt(carRef.current.position);
//     camera.lookAt(
//       new THREE.Vector3(
//         carRef.current.position.x,
//         carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
//         carRef.current.position.z
//       )
//     );

//     let newPos = carRef.current.position.clone();

//     // Move Up/Down
//     if (direction.up) newPos.y += 0.1;   // W key (go up)
//     if (direction.down) newPos.y -= 0.1; // S key (go down)

//     //add gravity (car slowly falls)
//     newPos.y -= 0.01;

//     if (newPos.y < 10) newPos.y = 10;

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     // ✨ New: Adjust Y position using Up/Down arrow keys
//     if (direction.up) newPos.y += verticalSpeed;   // Move up
//     if (direction.down) newPos.y -= verticalSpeed; // Move down

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} visible={false} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 0;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <DynamicBoardGameContent />;
// }

// // const BoardGameContent = dynamic(() => Promise.resolve(BoardGameContentComponent), { ssr: false });
// // Dynamically wrap the existing function
// const DynamicBoardGameContent = dynamic(() => Promise.resolve(BoardGameContent), { ssr: false });


// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          

//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={true} enablePan={true} />
//           <InfiniteGreenGrid />
//           <Ocean/>
//           <Island /> {/* Add the island to the scene */}
//           <Car position={[0, 0.25, 0]} buildings={buildings} />
//           {buildings.map((b, i) => (
//             <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//           ))}
//         </Canvas>
//       </div>
//     </>
//   );
// }

