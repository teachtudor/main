// utils/loadAnimations.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 * Loads a GLB animation clip from a file and returns the first animation.
 * @param {string} url - Path to the GLB file.
 * @returns {Promise<THREE.AnimationClip>} - The first animation clip found in the file.
 */
export async function loadExternalAnimation(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        if (gltf.animations && gltf.animations.length > 0) {
          resolve(gltf.animations[0]);
        } else {
          reject(new Error(`No animations found in ${url}`));
        }
      },
      undefined,
      (error) => reject(error)
    );
  });
}
