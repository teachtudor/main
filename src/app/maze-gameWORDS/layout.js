// export const metadata = {
//   title: "MAZE GAME",
//   description: "Check out this interactive TPR game with gravity physics!",
//   openGraph: {
//     title: "MAZE GAME",
//     description: "Check out this 77Km Maze Game",
//     url: "https://www.teachtudor.com/maze-gameWL",
//     images: [
//       {
//         url: "https://www.teachtudor.com/maze-assets/MAZESHOT.jpg",
//         width: 1200,
//         height: 630,
//         alt: "MAZE GAME"
//       }
//     ],
//     type: "website"
//   }
// };

// export default function MazeGameLayout({ children }) {
//   return <>{children}</>;
// }

export const metadata = {
  title: "HORROR MAZE GAME",
  description: "Check out this interactive TPR game with gravity physics!",
  keywords: ["Maze Game", "77km Maze", "TPR Game", "Interactive Game", "Three.js", "Horror Maze Game"],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.teachtudor.com/maze-gameWORDS"
  },
  openGraph: {
    title: "MOZART MIRROR HORROR MAZE GAME",
    description: "Check out this 77Km Maze Game",
    url: "https://www.teachtudor.com/maze-gameWORDS",
    images: [
      {
        url: "https://www.teachtudor.com/maze-assets/HORRORMAZE.jpg",
        width: 1200,
        height: 630,
        alt: "HORROR MAZE GAME"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HORROR MAZE GAME",
    description: "Check out this 77Km Maze Game",
    images: ["https://www.teachtudor.com/maze-assets/HORRORMAZE.jpg"]
  }
};

export default function MazeGameLayout({ children }) {
  return <>{children}</>;
}
