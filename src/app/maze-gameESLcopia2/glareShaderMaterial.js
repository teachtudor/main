import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

const GlareShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0x00ffff),
    uTime: 0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      float dist = distance(vUv, vec2(0.5));
      float intensity = smoothstep(0.5, 0.0, dist);
      intensity += sin(uTime + dist * 20.0) * 0.1;
      gl_FragColor = vec4(uColor * intensity, intensity);
    }
  `
);

export { GlareShaderMaterial };
