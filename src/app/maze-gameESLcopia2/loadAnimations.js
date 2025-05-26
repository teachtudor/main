// utils/loadAnimations.js
import { AnimationClip } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export async function loadExternalAnimation(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        const clip = gltf.animations[0];
        resolve(clip);
      },
      undefined,
      (error) => reject(error)
    );
  });
}
