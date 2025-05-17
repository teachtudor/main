import Character from './Character';

export default function SceneWrapper({ keys, followEnabled }) {
  return <Character keys={keys} followEnabled={followEnabled} />;
}
