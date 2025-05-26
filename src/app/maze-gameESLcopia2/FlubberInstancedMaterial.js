//blue glow stolen
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//         uMouse: { value: new THREE.Vector2(0, 0) }, // optional if needed later
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         #define PI 3.1415926

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         float pat(vec2 uv,float p,float q,float s,float glow) {
//           float z = cos(q * PI * uv.x) * cos(p * PI * uv.y) + cos(q * PI * uv.y) * cos(p * PI * uv.x);
//           z += sin(uTime * 4.0 + uv.x + uv.y * s) * 0.035; // wobble
//           float dist = abs(z) * (1.0 / glow);
//           return dist;
//         }

//         void main() {
//           vec2 uv = (vUv - 0.5);
//           float d = pat(uv, 5.0, 2.0, 35.0, 0.35);
//           vec3 col = vec3(0.25, 0.45, 1.25) * 0.5 / d;
//           gl_FragColor = vec4(col, 1.0);
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

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//code 2 static
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;
//         uniform float uTime;
//         varying vec2 vUv;

//         float gold_noise(in vec2 xy, in float seed) {
//           return fract(tan(distance(xy * (seed + 1.618034), vec2(12.9898,78.233))) * 43758.5453);
//         }

//         void main() {
//           float seed = fract(uTime);
//           vec4 color = vec4(
//             gold_noise(vUv * 100.0, seed + 0.1),  // R
//             gold_noise(vUv * 100.0, seed + 0.2),  // G
//             gold_noise(vUv * 100.0, seed + 0.3),  // B
//             gold_noise(vUv * 100.0, seed + 0.4)   // A
//           );

//           gl_FragColor = color;
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

// extend({ FlubberInstancedMaterial });


//code 3 neon green balls
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//           vec2 uv = vUv - 0.5;
//           float dist = length(uv);

//           // Jelly wobble
//           float wobble = sin((dist * 15.0 - uTime * 4.0) * 2.0) * 0.15;

//           // Pulse
//           float pulse = sin(uTime * 3.0 + dist * 30.0) * 0.1;

//           // Glow falloff from center
//           float glow = 1.0 / (0.2 + dist * dist * 8.0);

//           vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//           vec3 color = baseColor * (glow + wobble + pulse);

//           gl_FragColor = vec4(color, 1.0);
//         }
//       `
//     });
//   }

//   get uTime() {
//     return this.uniforms.uTime.value;
//   }

//   set uTime(v) {
//     this.uniforms.uTime.value = v;
//   }

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });


//code 4 variation of previous
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//         vec2 uv = vUv - 0.5;

//         // Wavy water displacement (layered sine waves)
//         float wave = sin((uv.x + uTime * 0.3) * 20.0) * 0.03 +
//                     cos((uv.y + uTime * 0.5) * 30.0) * 0.02 +
//                     sin((uv.x + uv.y + uTime * 0.2) * 40.0) * 0.01;

//         // Fresnel-like highlight shimmer
//         float fresnel = dot(normalize(vec3(uv, 1.0)), vec3(0.0, 0.0, 1.0));
//         float shimmer = pow(1.0 - fresnel, 3.0);

//         // Distance-based glow
//         float dist = length(uv);
//         float glow = 1.0 / (0.35 + dist * dist * 6.0);

//         // Combine into neon green water with shimmer + wobble
//         vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//         vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;

//         gl_FragColor = vec4(color * glow, 1.0);
//       }
//       `,
//     });
//   }

//   get uTime() {
//     return this.uniforms.uTime.value;
//   }

//   set uTime(v) {
//     this.uniforms.uTime.value = v;
//   }

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//code interim more realistic movement
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//         vec2 uv = vUv - 0.5;

//         // Wavy water displacement (layered sine waves)
//         float wave = sin((uv.x + uTime * 0.3) * 20.0) * 0.03 +
//                     cos((uv.y + uTime * 0.5) * 30.0) * 0.02 +
//                     sin((uv.x + uv.y + uTime * 0.2) * 40.0) * 0.01;

//         // Fresnel-like highlight shimmer
//         float fresnel = dot(normalize(vec3(uv, 1.0)), vec3(0.0, 0.0, 1.0));
//         float shimmer = pow(1.0 - fresnel, 3.0);

//         // Distance-based glow
//         float dist = length(uv);
//         float glow = 1.0 / (0.35 + dist * dist * 6.0);

//         // Combine into neon green water with shimmer + wobble
//         vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//         vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;

//         gl_FragColor = vec4(color * glow, 1.0);

//         // Inside fragmentShader
//         float caustic = sin((uv.x + uTime * 2.5) * 40.0) * 
//                         cos((uv.y + uTime * 2.5) * 40.0);
//         caustic = smoothstep(0.0, 1.0, caustic) * 0.3;
//         color += vec3(0.2, 0.8, 0.4) * caustic;

//       }
//       `,
//     });
//   }

//   get uTime() {
//     return this.uniforms.uTime.value;
//   }

//   set uTime(v) {
//     this.uniforms.uTime.value = v;
//   }

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//code interim 2
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//         vec2 uv = vUv - 0.5;

//         // Optional distortion ripple (screen-space wobble)
//         vec2 rippleUV = uv + 0.015 * vec2(
//           sin((uv.y + uTime) * 10.0),
//           cos((uv.x + uTime) * 10.0)
//         );

//         // Wavy water displacement (layered sine waves)
//         float wave = sin((uv.x + uTime * 0.3) * 20.0) * 0.03 +
//                     cos((uv.y + uTime * 0.5) * 30.0) * 0.02 +
//                     sin((uv.x + uv.y + uTime * 0.2) * 40.0) * 0.01;

//         // Fresnel-like highlight shimmer
//         float fresnel = dot(normalize(vec3(uv, 1.0)), vec3(0.0, 0.0, 1.0));
//         float shimmer = pow(1.0 - fresnel, 3.0);

//         // Distance-based glow
//         float dist = length(uv);
//         float glow = 1.0 / (0.35 + dist * dist * 6.0);

//         // Combine into neon green water with shimmer + wobble
//         vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//         vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;

//         gl_FragColor = vec4(color * glow, 1.0);

//         // Inside fragmentShader
//         float caustic = sin((uv.x + uTime * 2.5) * 40.0) * 
//                         cos((uv.y + uTime * 2.5) * 40.0);
//         caustic = smoothstep(0.0, 1.0, caustic) * 0.3;
//         color += vec3(0.2, 0.8, 0.4) * caustic;

//       }
//       `,
//     });
//   }

//   get uTime() {
//     return this.uniforms.uTime.value;
//   }

//   set uTime(v) {
//     this.uniforms.uTime.value = v;
//   }

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//code interim 3
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//           vec2 uv = vUv - 0.5;

//           // ✅ (1) Ripple distortion (applied to uv)
//           vec2 rippleUV = uv + 0.015 * vec2(
//             sin((uv.y + uTime) * 10.0),
//             cos((uv.x + uTime) * 10.0)
//           );

//           // ✅ (2) Wavy water displacement
//           float wave = sin((rippleUV.x + uTime * 0.3) * 20.0) * 0.03 +
//                        cos((rippleUV.y + uTime * 0.5) * 30.0) * 0.02 +
//                        sin((rippleUV.x + rippleUV.y + uTime * 0.2) * 40.0) * 0.01;

//           // ✅ (3) Fresnel shimmer highlight
//           float fresnel = dot(normalize(vec3(rippleUV, 1.0)), vec3(0.0, 0.0, 1.0));
//           float shimmer = pow(1.0 - fresnel, 3.0);

//           // ✅ (4) Caustics glow pattern
//           float caustic = sin((rippleUV.x + uTime * 2.5) * 40.0) * 
//                           cos((rippleUV.y + uTime * 2.5) * 40.0);
//           caustic = smoothstep(0.0, 1.0, caustic) * 0.3;

//           // ✅ (5) Distance-based glow
//           float dist = length(rippleUV);
//           float glow = 1.0 / (0.35 + dist * dist * 6.0);

//           // 🎨 Final color blend
//           vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//           vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;
//           color += vec3(0.2, 0.8, 0.4) * caustic;

//           gl_FragColor = vec4(color * glow, 1.0);
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

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//interim 4 works great fallback
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// class FlubberInstancedMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(1, 1) },
//       },
//       vertexShader: `
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
//         }
//       `,
//       fragmentShader: `
//         precision mediump float;

//         uniform float uTime;
//         uniform vec2 uResolution;
//         varying vec2 vUv;

//         void main() {
//           vec2 uv = vUv - 0.5;

//           // ✅ (1) Ripple distortion (applied to uv)
//           vec2 rippleUV = uv + 0.015 * vec2(
//             sin((uv.y + uTime) * 10.0),
//             cos((uv.x + uTime) * 10.0)
//           );

//           // ✅ (2) Wavy water displacement
//           float wave = sin((rippleUV.x + uTime * 0.3) * 20.0) * 0.03 +
//                        cos((rippleUV.y + uTime * 0.5) * 30.0) * 0.02 +
//                        sin((rippleUV.x + rippleUV.y + uTime * 0.2) * 40.0) * 0.01;

//           // ✅ (3) Fresnel shimmer highlight
//           float fresnel = dot(normalize(vec3(rippleUV, 1.0)), vec3(0.0, 0.0, 1.0));
//           float shimmer = pow(1.0 - fresnel, 3.0);

//           // ✅ (5) Distance-based glow
//           float dist = length(rippleUV);
//           float glow = 1.0 / (0.35 + dist * dist * 6.0);

//           // 🎨 Final color blend
//           // vec3 baseColor = vec3(0.1, 1.0, 0.3); // neon green
//           vec3 baseColor = vec3(0.8, 0.6, 0.1); // dark yellow

//           vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;

//           gl_FragColor = vec4(color * glow, 1.0);
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

//   get uResolution() {
//     return this.uniforms.uResolution.value;
//   }

//   set uResolution(v) {
//     this.uniforms.uResolution.value.copy(v);
//   }
// }

// extend({ FlubberInstancedMaterial });

//code 5  works great
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

class FlubberInstancedMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uCenter: { value: new THREE.Vector2(15.0, 15.0) }, // <- maze center
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        precision mediump float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uCenter;

        varying vec2 vUv;
        varying vec3 vWorldPosition;

        void main() {
          // --- World quadrant logic
          vec3 baseColor;

          float cx = uCenter.x;
          float cz = uCenter.y;

          if (vWorldPosition.x < cx && vWorldPosition.z > cz) {
            baseColor = vec3(1.0, 0.0, 0.0); // 🟡 bottom-right
            
          } else if (vWorldPosition.x >= cx && vWorldPosition.z > cz) {
            baseColor = vec3(0.0, 0.6, 0.2); // 🟢 bottom-left
          } else if (vWorldPosition.x < cx && vWorldPosition.z <= cz) {
            
            baseColor = vec3(1.0, 0.8, 0.0);   // 🔴 top-left
          } else {
            
          baseColor = vec3(0.0, 0.5, 1.0); // 🔵 top-right
          }

          // --- Visual Pattern (same as original)
          vec2 uv = vUv - 0.5;

          // Ripple distortion
          vec2 rippleUV = uv + 0.015 * vec2(
            sin((uv.y + uTime) * 10.0),
            cos((uv.x + uTime) * 10.0)
          );

          // Wavy water displacement
          float wave = sin((rippleUV.x + uTime * 0.3) * 20.0) * 0.03 +
                       cos((rippleUV.y + uTime * 0.5) * 30.0) * 0.02 +
                       sin((rippleUV.x + rippleUV.y + uTime * 0.2) * 40.0) * 0.01;

          // Fresnel shimmer highlight
          float fresnel = dot(normalize(vec3(rippleUV, 1.0)), vec3(0.0, 0.0, 1.0));
          float shimmer = pow(1.0 - fresnel, 3.0);

          // Distance-based glow
          float dist = length(rippleUV);
          float glow = 1.0 / (0.35 + dist * dist * 6.0);

          vec3 color = baseColor + shimmer * 0.4 + wave * 2.0;

          gl_FragColor = vec4(color * glow, 1.0);
        }
      `
    });
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }
  set uTime(v) {
    this.uniforms.uTime.value = v;
  }

  get uResolution() {
    return this.uniforms.uResolution.value;
  }
  set uResolution(v) {
    this.uniforms.uResolution.value.copy(v);
  }

  get uCenter() {
    return this.uniforms.uCenter.value;
  }
  set uCenter(v) {
    this.uniforms.uCenter.value.copy(v);
  }
}

extend({ FlubberInstancedMaterial });
