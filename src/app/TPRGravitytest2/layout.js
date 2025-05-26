export const metadata = {
  title: "TPR with Gravity",
  description: "Check out this interactive TPR game with gravity physics!",
  openGraph: {
    title: "TPR with Gravity",
    description: "Check out this interactive TPR game with gravity physics!",
    url: "https://www.teachtudor.com/TPRGravitytest2",
    images: [
      {
        url: "https://www.teachtudor.com/maze-assets/GRAVITYGAME.jpg",
        width: 1200,
        height: 630,
        alt: "TPR with Gravity"
      }
    ],
    type: "website"
  }
};

export default function MazeGameLayout({ children }) {
  return <>{children}</>;
}

