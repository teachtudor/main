// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: [
//         'www.internationalteflacademy.com',
//         'preply.com',
//         'logos-world.net',
//         'm.media-amazon.com'
//       ],
//     },
//   };
 
// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.internationalteflacademy.com',
        pathname: '/hubfs/logo/logo_200x70.png',
      },
      {
        protocol: 'https',
        hostname: 'preply.com',
        pathname: '/wp-content/uploads/2023/09/Preply_new_slogan_en-820x470.png',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/wp-content/uploads/2020/06/Amazon-Logo.png',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',  // Allow all images from this domain
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;

 