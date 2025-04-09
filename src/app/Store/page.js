// // src/app/home.js
// import Navbar from '../Navbar';
// import '../globals.css';

// export default function Activities() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome to Activities</h1>
//       <p>Section is under construction.</p>
//     </div>
//   );
// }

//code 2
// 'use client';

// import React, { useState } from 'react';
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
//   return (
//     <div>
//       <Navbar />
//       <h1 style={{ fontSize: '40px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
//       </h1>

//       {/* Container for floating effect */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           gap: '65px',  // Increased gap to space out the images
//           marginTop: '50px',
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
//               animation: 'floating 3s ease-in-out infinite',  // Floating animation
//               animationDelay: `${Math.random() * 2}s`, // Randomize delay for different effects
//             }}
//             onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'} // Pause animation on hover
//             onMouseLeave={(e) => e.target.style.animationPlayState = 'running'} // Resume animation on mouse leave
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
//        @keyframes floating {
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

//code game
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

//CODE OCEAN GLB
"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Navbar from '../Navbar';
import { TextureLoader } from "three";


// Dynamically import OrbitControls to avoid SSR issues
const OrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

// Dynamically load the Canvas to prevent SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

//WORKS GREAT
function Ocean() {
  // const texture = useLoader(TextureLoader, "/waternormals.jpg"); // Update with your texture path
  const texture = new TextureLoader().load("/terrain.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1,1); // Adjust the tiling as needed

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[10000, 10000, 1000, 1000]} /> 
      <meshStandardMaterial color="blue" roughness={1} metalness={0.9} />
      {/* <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} /> */}
    </mesh>
  );
}

//ocean with moving texture
// function Ocean() {
//   const meshRef = useRef();
//   const texture = useLoader(TextureLoader, "/waternormals1.jpg");

//   // Configure texture wrapping and tiling
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(5, 1); // Adjust tiling for a better scale

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     const plane = meshRef.current.geometry;
//     const position = plane.attributes.position;

//     for (let i = 0; i < position.count; i++) {
//       const x = position.getX(i);
//       const y = position.getY(i);
//       const waveHeight = Math.sin(time * 1.5 + x * 0.05) * Math.cos(time * 1.5 + y * 0.05) * 1.5;
//       position.setZ(i, waveHeight);
//     }

//     position.needsUpdate = true; // Update geometry each frame
//   });

//   return (
//     <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//     {/* <mesh scale={[2, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}> */}

//       <planeGeometry args={[10000, 10000, 1000, 1000]} /> 
//       <meshStandardMaterial 
//         color="blue" 
//         roughness={1} 
//         metalness={0.9} 
//         normalMap={texture} // Add normal map for extra realism
//       />
//     </mesh>
//   );
// }

//OCEAN TEXTURE GLB (white doesn't look real)
// function Ocean() {
//   const texture = useLoader(GLTFLoader, "/water.glb"); // Load the GLB file

//   // Safely accessing texture
//   const map = texture ? texture.material && texture.material.map : null;

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[10000, 10000, 1000, 1000]} />
//       <meshStandardMaterial
//         map={map}
//         roughness={0.5}
//         metalness={0.3}
//       />
//     </mesh>
//   );
// }



//island function
function Island() {
  const islandRef = useRef();
  const [islandModel, setIslandModel] = useState(null);
  
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/grothustangi_koltur.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(5, 5, 5); // Adjust scale
      model.position.set(0, -5, 0); // Position it at ground level
      // setIslandModel(model);
      setIslandModel(model);
    });
  }, []);

  return islandModel ? <primitive object={islandModel} ref={islandRef} /> : null;
}

function Car({ position, buildings }) {
  const carRef = useRef();
  const { camera } = useThree();
  const speed = 1;
  const rotationSpeed = 0.03;
  const [verticalSpeed, setVerticalSpeed] = useState(0.5);
  const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false, up: false, down: false });
  const [carModel, setCarModel] = useState(null);  // State to store the car model

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR execution

    const loader = new GLTFLoader();
    loader.load("/wrightModel.glb", (gltf) => {
    // loader.load("/dragonfly.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.8, 0.8, 0.8);
      model.position.set(0, 10, 0);
      model.rotation.y = Math.PI;
      camera.position.z = -camera.position.z;

      setCarModel((prev) => {
        if (prev) prev.traverse((child) => child.dispose?.());
        return model;
      });
    });
  
    return () => {
      if (carModel) carModel.traverse((child) => child.dispose?.());
    };
  }, []);

  // Handle user inputs for controlling the car (keyboard and touch)
  useEffect(() => {

    if (typeof window === "undefined") return;

    const handleKeyDown = (event) => {
      setDirection((dir) => ({
        ...dir,
        forward: event.key === "ArrowUp" || dir.forward,
        backward: event.key === "ArrowDown" || dir.backward,
        left: event.key === "ArrowLeft" || dir.left,
        right: event.key === "ArrowRight" || dir.right,
        up: event.key === "w" || dir.up,   // Press 'W' to go up
        down: event.key === "s" || dir.down // Press 'S' to go down
      }));
    };

    const handleKeyUp = (event) => {
      setDirection((dir) => ({
        ...dir,
        forward: event.key === "ArrowUp" ? false : dir.forward,
        backward: event.key === "ArrowDown" ? false : dir.backward,
        left: event.key === "ArrowLeft" ? false : dir.left,
        right: event.key === "ArrowRight" ? false : dir.right,
        up: event.key === "w" ? false : dir.up,   // Release 'W' to stop going up
        down: event.key === "s" ? false : dir.down // Release 'S' to stop going down
      }));
    };

    // Touch event handlers for mobile
    let startTouchX = 0;
    let startTouchY = 0;
    let touchMoveX = 0;
    let touchMoveY = 0;

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        // if (isTouchDevice && event.touches.length === 1) {
        // event.preventDefault();
        startTouchX = event.touches[0].clientX;
        startTouchY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        // if (isTouchDevice && event.touches.length === 1) {
        // event.preventDefault();
        touchMoveX = event.touches[0].clientX;
        touchMoveY = event.touches[0].clientY;

        const deltaX = touchMoveX - startTouchX;
        const deltaY = touchMoveY - startTouchY;

        setDirection((dir) => ({
          ...dir,
          forward: deltaY < -50,  // Move forward if swipe up
          backward: deltaY > 50,  // Move backward if swipe down
          left: deltaX < -50,     // Move left if swipe left
          right: deltaX > 50,     // Move right if swipe right
          up: deltaY < -50,//new code
          down: deltaY > 50,//new code
          
        }));
      }
    };

    const handleTouchEnd = () => {
      setDirection((dir) => ({
        ...dir,
        forward: false,
        backward: false,
        left: false,
        right: false,
        up: false,
        down: false,
      }));
    };

 

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);



  // Check for collisions with buildings
  function checkCollision(newPos) {
    if(!carRef.current) return false;
    const carBox = new THREE.Box3().setFromObject(carRef.current);
    carBox.expandByScalar(0.1);

    return buildings.some(({ x, z, width, depth, height }) => {
      const buildingBox = new THREE.Box3(
        new THREE.Vector3(x - width / 2, 0, z - depth / 2),
        new THREE.Vector3(x + width / 2, height, z + depth / 2)
      );

      return carBox.intersectsBox(buildingBox);
    });
  }

  // Update car position and camera movement every frame
  useFrame(() => {
    if (!carRef.current || !carModel) return;  // Wait until the model is loaded

    const zoomOutFactor = 30;
    const followDistance = -15;
    const heightAbove = 15;
    const lerpFactor = 0.01;

    const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
    const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

    camera.position.lerp(
      new THREE.Vector3(
        carRef.current.position.x + offsetX,
        carRef.current.position.y + heightAbove,
        carRef.current.position.z + offsetZ
      ),
      lerpFactor
    );

    //camera.lookAt(carRef.current.position);
    camera.lookAt(
      new THREE.Vector3(
        carRef.current.position.x,
        carRef.current.position.y+1,  // Keep camera looking slightly above the car for better visibility
        carRef.current.position.z
      )
    );

    let newPos = carRef.current.position.clone();

    // Move Up/Down
    if (direction.up) newPos.y += 0.1;   // W key (go up)
    if (direction.down) newPos.y -= 0.1; // S key (go down)

    //add gravity (car slowly falls)
    newPos.y -= 0.01;

    if (newPos.y < 10) newPos.y = 10;

    const forwardStep = new THREE.Vector3(
      -Math.sin(carRef.current.rotation.y) * speed,
      0,
      -Math.cos(carRef.current.rotation.y) * speed
    );

    const backwardStep = new THREE.Vector3(
      Math.sin(carRef.current.rotation.y) * speed,
      0,
      Math.cos(carRef.current.rotation.y) * speed
    );

    if (direction.forward) {
      const testPos = newPos.clone().add(forwardStep);
      if (!checkCollision(testPos)) newPos.add(forwardStep);
    }

    if (direction.backward) {
      const testPos = newPos.clone().add(backwardStep);
      if (!checkCollision(testPos)) newPos.add(backwardStep);
    }

    // ✨ New: Adjust Y position using Up/Down arrow keys
    if (direction.up) newPos.y += verticalSpeed;   // Move up
    if (direction.down) newPos.y -= verticalSpeed; // Move down

    if (checkCollision(newPos)) {
      newPos.x += Math.random() * 0.2 - 0.1;
      newPos.z += Math.random() * 0.2 - 0.1;
    }

    carRef.current.position.copy(newPos);

    if (direction.left) carRef.current.rotation.y += rotationSpeed;
    if (direction.right) carRef.current.rotation.y -= rotationSpeed;
  });

  return (
    <group ref={carRef} position={position}>
      {carModel && <primitive object={carModel} />}
    </group>
  );
}

function Building({ position, color, size }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial color={color} metalness={0.3} />
    </mesh>
  );
}

function InfiniteGreenGrid() {
  return <gridHelper args={[1000, 100, "green", "green"]} visible={false} />;
}

const categories = [
  { name: "Technology", color: "lightgrey" },
  { name: "Sustainability", color: "blue" },
  { name: "Future", color: "green" },
  { name: "Space", color: "red" },
  { name: "Geography", color: "brown" },
  { name: "Ecosystem", color: "red" },
];

function generateBuildings() {
  const buildings = [];
  const rowSpacing = 20;
  const colSpacing = 10;
  const numBuildingsPerRow = 0;
  const startX = -35;
  const startZ = -5;

  categories.forEach((category, rowIndex) => {
    for (let i = 0; i < numBuildingsPerRow; i++) {
      buildings.push({
        x: startX + i * colSpacing,
        z: startZ - rowIndex * rowSpacing,
        width: 5,
        depth: 2,
        height: 10,
        color: category.color,
        category: category.name,
      });
    }
  });

  return buildings;
}

export default function BoardGame() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-black" />;

  return <DynamicBoardGameContent />;
}

// const BoardGameContent = dynamic(() => Promise.resolve(BoardGameContentComponent), { ssr: false });
// Dynamically wrap the existing function
const DynamicBoardGameContent = dynamic(() => Promise.resolve(BoardGameContent), { ssr: false });


function BoardGameContent() {
  const buildings = generateBuildings();

  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 10, -15] }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          

          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={true} enablePan={true} />
          <InfiniteGreenGrid />
          <Ocean/>
          <Island /> {/* Add the island to the scene */}
          <Car position={[0, 0.25, 0]} buildings={buildings} />
          {buildings.map((b, i) => (
            <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
          ))}
        </Canvas>
      </div>
    </>
  );
}


//code works but needs some tweaking
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { TextureLoader } from "three";
// import Navbar from "../Navbar";

// // Dynamically load components to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false });
// const OrbitControls = dynamic(() => import("@react-three/drei").then(mod => mod.OrbitControls), { ssr: false });

// // 🌊 Ocean Plane
// function Ocean() {
//   const texture = new TextureLoader().load("/waternormals1.jpg");
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(1, 1);

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[10000, 10000, 1000, 1000]} />
//       <meshStandardMaterial color="blue" roughness={1} metalness={0.9} />
//     </mesh>
//   );
// }

// // 🏝️ Island Model
// function Island() {
//   const islandRef = useRef();
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     new GLTFLoader().load("/grothustangi_koltur.glb", (gltf) => {
//       const island = gltf.scene;
//       island.scale.set(5, 5, 5);
//       island.position.set(0, -5, 0);
//       setModel(island);
//     });
//   }, []);

//   return model ? <primitive object={model} ref={islandRef} /> : null;
// }

// // ✈️ Wright Airplane Model with Controls
// function Airplane({ position }) {
//   const airplaneRef = useRef();
//   const { camera } = useThree();
//   const speed = 1;
//   const rotationSpeed = 0.03;
//   const [model, setModel] = useState(null);
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false, up: false, down: false });

//   useEffect(() => {
//     new GLTFLoader().load("/wrightModel.glb", (gltf) => {
//       const plane = gltf.scene;
//       plane.scale.set(0.8, 0.8, 0.8);
//       plane.position.set(...position);
//       plane.rotation.y = Math.PI;
//       setModel(plane);
//     });
//   }, []);

//   useEffect(() => {
//     const handleKey = (key, value) => {
//       setDirection((dir) => ({ ...dir, [key]: value }));
//     };

//     const onKeyDown = (e) => {
//       const keys = {
//         ArrowUp: "forward",
//         ArrowDown: "backward",
//         ArrowLeft: "left",
//         ArrowRight: "right",
//         w: "up",
//         s: "down"
//       };
//       if (keys[e.key]) handleKey(keys[e.key], true);
//     };

//     const onKeyUp = (e) => {
//       const keys = {
//         ArrowUp: "forward",
//         ArrowDown: "backward",
//         ArrowLeft: "left",
//         ArrowRight: "right",
//         w: "up",
//         s: "down"
//       };
//       if (keys[e.key]) handleKey(keys[e.key], false);
//     };

//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);

//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("keyup", onKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     if (!airplaneRef.current || !model) return;

//     const plane = airplaneRef.current;

//     // Movement
//     const forwardVec = new THREE.Vector3(-Math.sin(plane.rotation.y) * speed, 0, -Math.cos(plane.rotation.y) * speed);
//     const backwardVec = new THREE.Vector3(Math.sin(plane.rotation.y) * speed, 0, Math.cos(plane.rotation.y) * speed);

//     const newPos = plane.position.clone();
//     if (direction.forward) newPos.add(forwardVec);
//     if (direction.backward) newPos.add(backwardVec);
//     if (direction.up) newPos.y += 0.5;
//     if (direction.down) newPos.y -= 0.5;

//     plane.position.copy(newPos);
//     if (direction.left) plane.rotation.y += rotationSpeed;
//     if (direction.right) plane.rotation.y -= rotationSpeed;

//     // Camera follow
//     const camOffset = new THREE.Vector3(
//       -Math.sin(plane.rotation.y) * -15,
//       15,
//       -Math.cos(plane.rotation.y) * -15
//     );
//     camera.position.lerp(plane.position.clone().add(camOffset), 0.05);
//     camera.lookAt(plane.position.clone().add(new THREE.Vector3(0, 1, 0)));
//   });

//   return <group ref={airplaneRef} position={position}>{model && <primitive object={model} />}</group>;
// }

// // 🚀 Main Scene
// export default function FlightScene() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom enablePan />
//           <Ocean />
//           <Island />
//           <Airplane position={[0, 10, 0]} />
//         </Canvas>
//       </div>
//     </>
//   );
// }


//code shaders
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
// import { shaderMaterial, OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Navbar from "../Navbar";


// // Extend custom shader as a material
// const OceanMaterial = shaderMaterial(
//   {
//     iTime: 0,
//     iResolution: new THREE.Vector3(),
//     iMouse: new THREE.Vector2(),
//   },
//   `
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   `
//     precision highp float;
//     uniform float iTime;
//     uniform vec3 iResolution;
//     uniform vec2 iMouse;

//     #define NUM_STEPS 32
//     #define PI 3.141592
//     #define EPSILON 1e-3
//     #define EPSILON_NRM (0.1 / iResolution.x)
//     const int ITER_GEOMETRY = 3;
//     const int ITER_FRAGMENT = 5;
//     const float SEA_HEIGHT = 0.6;
//     const float SEA_CHOPPY = 4.0;
//     const float SEA_SPEED = 0.8;
//     const float SEA_FREQ = 0.16;
//     const vec3 SEA_BASE = vec3(0.0,0.09,0.18);
//     const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6)*0.6;
//     #define SEA_TIME (1.0 + iTime * SEA_SPEED)
//     const mat2 octave_m = mat2(1.6,1.2,-1.2,1.6);

//     float hash(vec2 p){ float h = dot(p,vec2(127.1,311.7)); return fract(sin(h)*43758.5453123); }
//     float noise(vec2 p) {
//         vec2 i = floor(p); vec2 f = fract(p);
//         vec2 u = f*f*(3.0-2.0*f);
//         return -1.0+2.0*mix( mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),
//                             mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x), u.y);
//     }

//     float sea_octave(vec2 uv, float choppy) {
//         uv += noise(uv);
//         vec2 wv = 1.0 - abs(sin(uv));
//         vec2 swv = abs(cos(uv));
//         wv = mix(wv, swv, wv);
//         return pow(1.0 - pow(wv.x * wv.y, 0.65), choppy);
//     }

//     float map(vec3 p) {
//         float freq = SEA_FREQ, amp = SEA_HEIGHT, choppy = SEA_CHOPPY;
//         vec2 uv = p.xz; uv.x *= 0.75;
//         float d, h = 0.0;
//         for (int i = 0; i < ITER_GEOMETRY; i++) {
//             d = sea_octave((uv + SEA_TIME) * freq, choppy);
//             d += sea_octave((uv - SEA_TIME) * freq, choppy);
//             h += d * amp;
//             uv *= octave_m; freq *= 1.9; amp *= 0.22;
//             choppy = mix(choppy, 1.0, 0.2);
//         }
//         return p.y - h;
//     }

//     float map_detailed(vec3 p) {
//         float freq = SEA_FREQ, amp = SEA_HEIGHT, choppy = SEA_CHOPPY;
//         vec2 uv = p.xz; uv.x *= 0.75;
//         float d, h = 0.0;
//         for (int i = 0; i < ITER_FRAGMENT; i++) {
//             d = sea_octave((uv + SEA_TIME) * freq, choppy);
//             d += sea_octave((uv - SEA_TIME) * freq, choppy);
//             h += d * amp;
//             uv *= octave_m; freq *= 1.9; amp *= 0.22;
//             choppy = mix(choppy, 1.0, 0.2);
//         }
//         return p.y - h;
//     }

//     vec3 getNormal(vec3 p, float eps) {
//         vec3 n;
//         n.y = map_detailed(p);
//         n.x = map_detailed(vec3(p.x + eps, p.y, p.z)) - n.y;
//         n.z = map_detailed(vec3(p.x, p.y, p.z + eps)) - n.y;
//         n.y = eps;
//         return normalize(n);
//     }

//     vec3 getSkyColor(vec3 e) {
//         e.y = (max(e.y, 0.0) * 0.8 + 0.2) * 0.8;
//         return vec3(pow(1.0 - e.y, 2.0), 1.0 - e.y, 0.6 + (1.0 - e.y) * 0.4) * 1.1;
//     }

//     float diffuse(vec3 n, vec3 l, float p) {
//         return pow(dot(n, l) * 0.4 + 0.6, p);
//     }

//     float specular(vec3 n, vec3 l, vec3 e, float s) {
//         float nrm = (s + 8.0) / (PI * 8.0);
//         return pow(max(dot(reflect(e, n), l), 0.0), s) * nrm;
//     }

//     vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {
//         float fresnel = clamp(1.0 - dot(n, -eye), 0.0, 1.0);
//         fresnel = min(fresnel * fresnel * fresnel, 0.5);
//         vec3 reflected = getSkyColor(reflect(eye, n));
//         vec3 refracted = SEA_BASE + diffuse(n, l, 80.0) * SEA_WATER_COLOR * 0.12;
//         vec3 color = mix(refracted, reflected, fresnel);
//         float atten = max(1.0 - dot(dist, dist) * 0.001, 0.0);
//         color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;
//         color += specular(n, l, eye, 60.0);
//         return color;
//     }

//     float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {
//         float tm = 0.0;
//         float tx = 1000.0;
//         float hx = map(ori + dir * tx);
//         if (hx > 0.0) { p = ori + dir * tx; return tx; }
//         float hm = map(ori);
//         for (int i = 0; i < NUM_STEPS; i++) {
//             float tmid = mix(tm, tx, hm / (hm - hx));
//             p = ori + dir * tmid;
//             float hmid = map(p);
//             if (hmid < 0.0) { tx = tmid; hx = hmid; }
//             else { tm = tmid; hm = hmid; }
//             if (abs(hmid) < EPSILON) break;
//         }
//         return mix(tm, tx, hm / (hm - hx));
//     }

//     mat3 fromEuler(vec3 ang) {
//         vec2 a1 = vec2(sin(ang.x), cos(ang.x));
//         vec2 a2 = vec2(sin(ang.y), cos(ang.y));
//         vec2 a3 = vec2(sin(ang.z), cos(ang.z));
//         mat3 m;
//         m[0] = vec3(a1.y * a3.y + a1.x * a2.x * a3.x, a1.y * a2.x * a3.x + a3.y * a1.x, -a2.y * a3.x);
//         m[1] = vec3(-a2.y * a1.x, a1.y * a2.y, a2.x);
//         m[2] = vec3(a3.y * a1.x * a2.x + a1.y * a3.x, a1.x * a3.x - a1.y * a3.y * a2.x, a2.y * a3.y);
//         return m;
//     }

//     vec3 getPixel(vec2 fragCoord, float time) {
//         vec2 uv = fragCoord / iResolution.xy;
//         uv = uv * 2.0 - 1.0;
//         uv.x *= iResolution.x / iResolution.y;
//         vec3 ang = vec3(sin(time * 3.0) * 0.1, sin(time) * 0.2 + 0.3, time);
//         vec3 ori = vec3(0.0, 3.5, time * 5.0);
//         vec3 dir = normalize(vec3(uv.xy, -2.0)); dir.z += length(uv) * 0.14;
//         dir = normalize(dir) * fromEuler(ang);
//         vec3 p; heightMapTracing(ori, dir, p);
//         vec3 dist = p - ori;
//         vec3 n = getNormal(p, dot(dist, dist) * EPSILON_NRM);
//         vec3 light = normalize(vec3(0.0, 1.0, 0.8));
//         return mix(getSkyColor(dir), getSeaColor(p, n, light, dir, dist), pow(smoothstep(0.0, -0.02, dir.y), 0.2));
//     }

//     void main() {
//         vec3 color = getPixel(gl_FragCoord.xy, iTime * 0.3 + iMouse.x * 0.01);
//         gl_FragColor = vec4(pow(color, vec3(0.65)), 1.0);
//     }
//   `
// );

// extend({ OceanMaterial });

// function OceanShader() {
//   const ref = useRef();
//   const { size, mouse } = useThree();
//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.iTime = clock.getElapsedTime();
//       ref.current.iMouse = mouse;
//     }
//   });

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.iResolution.set(size.width, size.height, 1);
//     }
//   }, [size]);

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
//       <planeGeometry args={[10000, 10000, 1, 1]} />
//       <oceanMaterial ref={ref} />
//     </mesh>
//   );
// }

// function Island() {
//   const [model, setModel] = useState(null);
//   useEffect(() => {
//     new GLTFLoader().load("/grothustangi_koltur.glb", (gltf) => {
//       const m = gltf.scene;
//       m.scale.set(5, 5, 5);
//       m.position.set(0, -5, 0);
//       setModel(m);
//     });
//   }, []);
//   return model ? <primitive object={model} /> : null;
// }

// function Airplane({ position }) {
//   const { camera } = useThree();
//   const planeRef = useRef();
//   const [model, setModel] = useState(null);
//   const [dir, setDir] = useState({ forward: false, back: false, left: false, right: false, up: false, down: false });

//   useEffect(() => {
//     new GLTFLoader().load("/wrightModel.glb", (gltf) => {
//       const m = gltf.scene;
//       m.scale.set(0.8, 0.8, 0.8);
//       m.position.set(...position);
//       m.rotation.y = Math.PI;
//       setModel(m);
//     });
//   }, []);

//   useEffect(() => {
//     const updateKey = (key, val) => setDir((d) => ({ ...d, [key]: val }));
//     const map = { ArrowUp: "forward", ArrowDown: "back", ArrowLeft: "left", ArrowRight: "right", w: "up", s: "down" };
//     const down = (e) => map[e.key] && updateKey(map[e.key], true);
//     const up = (e) => map[e.key] && updateKey(map[e.key], false);
//     window.addEventListener("keydown", down);
//     window.addEventListener("keyup", up);
//     return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
//   }, []);

//   useFrame(() => {
//     if (!planeRef.current || !model) return;
//     const plane = planeRef.current;
//     const speed = 1;
//     if (dir.forward) plane.position.add(new THREE.Vector3(-Math.sin(plane.rotation.y) * speed, 0, -Math.cos(plane.rotation.y) * speed));
//     if (dir.back) plane.position.add(new THREE.Vector3(Math.sin(plane.rotation.y) * speed, 0, Math.cos(plane.rotation.y) * speed));
//     if (dir.left) plane.rotation.y += 0.03;
//     if (dir.right) plane.rotation.y -= 0.03;
//     if (dir.up) plane.position.y += 0.5;
//     if (dir.down) plane.position.y -= 0.5;

//     const offset = new THREE.Vector3(-Math.sin(plane.rotation.y) * -15, 15, -Math.cos(plane.rotation.y) * -15);
//     camera.position.lerp(plane.position.clone().add(offset), 0.05);
//     camera.lookAt(plane.position.clone().add(new THREE.Vector3(0, 1, 0)));
//   });

//   return <group ref={planeRef}>{model && <primitive object={model} />}</group>;
// }

// export default function FlightScene() {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen">
//         <Canvas camera={{ position: [0, 10, -15] }}>
//           <ambientLight intensity={1.5} />
//           <directionalLight position={[10, 20, 10]} intensity={3} />
//           <pointLight position={[0, 10, 0]} />
//           <OrbitControls enableZoom enablePan />
//           <OceanShader />
//           {/* <Island /> */}
//           <Airplane position={[0, 10, 0]} />
//         </Canvas>
//       </div>
//     </>
//   );
// }

//code shaders 1
