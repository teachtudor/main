// // app/page.js
// 'use client';
// import Navbar from '../Navbar';

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f8fb', padding: '20px', marginTop: '60px' }}>
//         <div style={{ textAlign: 'center', maxWidth: '800px' }}>
//           <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
//             🚧 **SITE UNDER CONSTRUCTION** 🚧
//           </h1>
//           <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
//             We're hard at work making things even better for you! In the meantime, explore our fully operational **'TOOLS'** tab, where you can find the best educational tools and resources—perfect for enhancing your teaching experience. 💡📚
//           </p>

//           <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
//             Don't Miss Out on These Must-Have Teacher Tools!
//           </h2>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
//             {/* Example Affiliate Products */}
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
//               <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.

//               This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
//               <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
//               <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
//               <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
//               <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes!
//               Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
//               <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
//                 Shop Now
//               </a>
//             </div>
//             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <img src="https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
//               <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
//               <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes!
//               Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
//               <a href="https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=78a7950cc3e09bf3f40ca777f570020d&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
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


//CODE 2 WITH OVERLAP FIX
// app/page.js
// app/page.js
'use client';
import Navbar from '../Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', backgroundColor: '#f4f8fb', padding: '20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1200px', paddingTop: '120px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
            🚧 **SITE UNDER CONSTRUCTION** 🚧
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
            We're hard at work making things even better for you! In the meantime, explore our fully operational **'TOOLS'** tab, where you can find the best educational tools and resources—perfect for enhancing your teaching experience. 💡📚
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
            Don't Miss Out on These Must-Have Teacher Tools!
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {/* Example Affiliate Products */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h1 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Teach English Abroad & Online with TEFL Certification | International TEFL Academy</h1>
              <p style={{ color: '#777' }}>🌍 Teach English Abroad & Online with International TEFL Academy!<br />

                📚 Get TEFL Certified & Start Your Teaching Journey Today!<br />
                Looking to teach English abroad or online? With International TEFL Academy (ITA), you can earn an accredited TEFL certification and land teaching jobs worldwide!/n

                ✅ Globally recognized TEFL certification <br />
                ✅ Job placement assistance & lifetime support <br />
                ✅ Teach in 80+ countries or online from anywhere <br />
                ✅ Flexible online & in-person courses <br />

                🚀 Your adventure starts now! Get TEFL certified and make a difference.🔗 Enroll Today</p>
              <a href="https://www.internationalteflacademy.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                ENROLL NOW!
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h1 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>BEST SELLER LIST!!!</h1>
              <p style={{ color: '#777' }}>BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!BEST SELLER LIST!!!</p>
              <a href="https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/81n9Y6AGy6L._SX445_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>The Very Hungry Caterpillar (Rise and Shine)</h3>
              <p style={{ color: '#777' }}>THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds! Have you shared it with a child or grandchild in your life?
              Carle's classic tale of a voracious caterpillar who eats his way through the days of the week and then changes into a eautiful butterfly has been reissued in a sumptuous twenty-fifth anniversary edition with a shiny, silver-coated cover and wonderfully thick, durably pages.
              —The Horn Book
              "The very hungry caterpillar literally eats his way through the pages of the book—and right into your child's heart..."
              —Mother's Manual
              </p>
              <a href="https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399208534?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=e8db03c7d8f36fa6b0c3a859b187191c&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/81GJ84ejdBL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Ventures Level 1 Value Pack</h3>
              <p style={{ color: '#777' }}>Get two essential student components at a discount when you purchase Ventures 3rd Edition Level 1 Value Pack. The Student's Book has lessons aligned to teach students the skills needed to meet CCR standards, with culture notes, speaking, reading, and writing tips to support exercises. The Workbook helps reinforce lessons in the Student's Book with an answer key for self-study. Both books have QR codes to access audio for self-study, and in the Student's Book, there are QR codes to watch grammar videos.</p>
              <a href="https://www.amazon.com/Ventures-Level-1-Value-Pack/dp/1108646018?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=f45bcf4cbe35b1fdc7a51d37420cca9e&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71-IEZsXEpL._SY425_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>4000 Palabras Mas Usadas En Ingles (Spanish and English Edition)</h3>
              <p style={{ color: '#777' }}>4000 most used words in English</p>
              <a href="https://www.amazon.com/Palabras-Usadas-Ingles-Spanish-English/dp/970775382X?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=d674df66a6dac777d26992d4b140a87f&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61N-El7zZQL._SY385_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Focus on Grammar 4 with MyEnglishLab (5th Edition)</h3>
              <p style={{ color: '#777' }}>Building on the success of previous editions, Focus on Grammar, Fifth Edition continues to leverage its successful four-step approach that lets learners move from comprehension to communication within a clear and consistent structure. Centered on thematic instruction, Focus on Grammar combines comprehensive grammar coverage with abundant practice, critical thinking skills, and ongoing assessment, helping students communicate confidently, accurately, and fluently in everyday situations.</p>
              <a href="https://www.amazon.com/Focus-Grammar-4-MyEnglishLab-5th/dp/0134119991?psc=1&linkCode=ll1&tag=teachtudor-20&linkId=838f8553453d33155e6e950d00757692&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            {/* <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/710GXz4lZUL._SY385_.jpg" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>ESL Vocabulary Workbook: Newcomer Students | Daily Activities, Community, School (Newcomer ESL Workbooks)</h3>
              <p style={{ color: '#777' }}>Introduce students who are new to learning English (ESL newcomers) to English vocabulary words. This book uses pictures drawn with older students in mind.
              This workbook will help students improve their English vocabulary and gain practice listening to, matching, completing, and writing sentences.</p>
              <a href="https://www.amazon.com/ESL-Vocabulary-Workbook-Activities-Community/dp/B0CVHNB58Y?crid=1D4PW86S6ZU8L&dib=eyJ2IjoiMSJ9.86xs5S0pvGVrGWf5rDt-uzvsPbEUCC8yLGd2t_Q8qzcD6ZGRQN5VmNa9jNJf7ETvn8Ib1YiRkwnilJdNPn8PwZkA1MKb2j8DHFEKbcZtEHOlbkyBWY2WJGJG8n__B5sotqyf00vN9DWqOOyB26eS1xAzqSaTcZnv5OqGw2X-v8y3MC9_Bts3ZuXsucxGEwGMEHjdDbF40c_GK3Am7h9ZHfvO4OiiUhENoNpSex9gnDArTVAiunaKfDiH8_3je15HmwpyACouTlnLlXiAv3CcdETQtY6JXsnUrgA0boePsJM.OPeYGDgne40Mpfc56WCPXqiEm-6Gbhs0IE0zihdSvNM&dib_tag=se&keywords=ESL+BOOKS&qid=1738154717&sprefix=esl+book%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=a60531288f3ef3f6faa060fb8f0024df&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/61bt2Wd5fNL._SY385_.jpg" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>Action English Pictures: Photocopiable Activities for Total Physical Response</h3>
              <p style={{ color: '#777' }}>Action English Pictures includes hundreds of photocopiable, lively illustrations based on Total Physical Response approach.</p>
              <a href="https://www.amazon.com/Action-English-Pictures-Activities-Physical/dp/1882483715?crid=3K1XWCNVYTK9T&dib=eyJ2IjoiMSJ9.7d3EONfqg0Z0BP9pGmyEJdPnSJ1T2zVJcy9A0hLjHYDF77ptUVUv_PXsLjV_7INZdvCwYUxy6Shgl_5HP6IVB1lBHps0PlF-Za--p9HGVRi-7jQ_aglZvorIWwDu6shRzYX7ViAw7FOC2LvTQFBVCqA3YiakV5JEvWb1PuuXuhLQmzItr00c-ZJi-TOd9I4eizHbqD49h1LUEnBRudPwdZiPYJMKoiHmZDkH2vesHpk.BKkX8tLQMnP9dIObswzzHGeVLxO70DQK_E8C8FyKeDM&dib_tag=se&keywords=NORIKO+TAKAHASHI&qid=1738154991&sprefix=noriko+takahashi%2Caps%2C296&sr=8-1&linkCode=ll1&tag=teachtudor-20&linkId=2e43e9c732cf245b7df28ac1162f90cc&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/617lwhZdKdL._SY466_.jpg" alt="Product 3" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>39 No-Prep/Low-Prep ESL Speaking Activities: For Teenagers and Adults (Teaching ESL Conversation and Speaking)</h3>
              <p style={{ color: '#777' }}>Get fresh, new ideas for ESL speaking and conversation classes! Whether you're a first-time teacher, an experienced but overwhelmed instructor, or someone without a textbook, you need more low-prep activities for your English conversation and speaking classes.</p>
              <a href="https://www.amazon.com/No-Prep-Low-Prep-ESL-Speaking-Activities/dp/1514244640?content-id=amzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3%3Aamzn1.sym.c5787da2-212d-48eb-a894-9ea5a87adeb3&crid=1D4PW86S6ZU8L&cv_ct_cx=ESL+BOOKS&keywords=ESL+BOOKS&pd_rd_i=1514244640&pd_rd_r=daef8409-4653-4269-97a0-210f82dc9132&pd_rd_w=IJyqB&pd_rd_wg=gKhsc&pf_rd_p=c5787da2-212d-48eb-a894-9ea5a87adeb3&pf_rd_r=H07DEWMKA0NXPDTMFNTQ&qid=1738154717&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=esl+book%2Caps%2C246&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=teachtudor-20&linkId=ed9661427dc1cf3bde457866a7bf2bbe&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="https://m.media-amazon.com/images/I/71hUpQnRU3L._SY679_.jpg" alt="Product 4" style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px', fontSize: '1.2rem', color: '#003366' }}>More ESL Teacher Tools: Fun and Creative Resources for Teaching English</h3>
              <p style={{ color: '#777' }}>Creative ESL resources to inspire and motivate your students to learn! Full of fun activities and engaging lesson plans for any level.</p>
              <a href="https://www.amazon.com/ESL-Teacher-Tools-Creative-Resources/dp/1974309355?content-id=amzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b%3Aamzn1.sym.45dff368-46d0-4f6c-8d02-062aa9a6b08b&crid=1D4PW86S6ZU8L&dib_tag=se&keywords=teaching+tools+for+esl&qid=1738154717&sprefix=esl+tools%2Caps%2C246&sr=8-5&linkCode=ll1&tag=teachtudor-20&linkId=b147e0ed5f8a9c7d548601d513f90056&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6600', fontSize: '1rem', textDecoration: 'underline' }}>
                Shop Now
              </a>
            </div> */}
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444', marginTop: '30px' }}>
            Stay tuned for more updates and exciting content as we continue to improve your teaching experience! 💫
          </p>
        </div>
      </div>
    </div>
  );
}
