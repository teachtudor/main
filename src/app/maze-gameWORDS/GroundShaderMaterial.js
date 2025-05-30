// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class GroundShaderMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0.0 },
//       },
//       vertexShader: `
//         varying vec2 vUv;
//         void main() {
//           vUv = uv * 250.0; // Match your tiling
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;
//         uniform float uTime;
//         varying vec2 vUv;

//         void main() {
//           // Tiling grass-like pattern
//           vec2 uv = vUv;
//           float stripes = step(0.5, mod(floor(uv.x + uTime * 0.5), 2.0));
//           float grid = step(0.5, mod(floor(uv.y + uTime * 0.25), 2.0));
//           float pattern = mix(1.0, 0.7, stripes * grid);

//           vec3 base = vec3(0.75, 0.95, 0.75); // light green grass
//           vec3 color = base * pattern;

//           gl_FragColor = vec4(color, 1.0);
//         }
//       `,
//     });
//   }

//   get uTime() {
//     return this.uniforms.uTime.value;
//   }
//   set uTime(v) {
//     this.uniforms.uTime.value = v;
//   }
// }

// extend({ GroundShaderMaterial });

//code 2
// GroundUniverseMaterial.js
// GroundShaderMaterial.js

import * as THREE from 'three';
import { extend } from '@react-three/fiber';

class GroundShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          uv = uv * 2.0 - 1.0;
          uv.x *= iResolution.x / iResolution.y;

          float reflection = smoothstep(0.0, 0.1, abs(uv.y));
          vec3 sky = mix(vec3(0.2, 0.5, 0.9), vec3(1.0), pow(1.0 - abs(uv.y), 2.0));
          vec3 color = mix(vec3(0.0), sky, reflection);

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
  }

  set iTime(value) {
    this.uniforms.iTime.value = value;
  }

  set iResolution(value) {
    this.uniforms.iResolution.value.copy(value);
  }
}

// Register with R3F
extend({ GroundShaderMaterial });
export { GroundShaderMaterial };
