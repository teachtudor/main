import Character from './Character';

export default function SceneWrapper({ keys, followEnabled }) {
  // console.log("✅ SceneWrapper rendering"); // <-- add this
  return <Character keys={keys} followEnabled={followEnabled} />;
}

