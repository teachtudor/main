// import { shaderMaterial } from '@react-three/drei';
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// const SkyShaderMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uCameraY: 0,
//   },
//   `
//   varying vec3 vWorldPos;

//   void main() {
//     vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   `
//   uniform float uTime;
//   uniform float uCameraY;
//   varying vec3 vWorldPos;

//   void main() {
//     float height = normalize(vWorldPos).y;
    
//     // Sky gradient (sunset style)
//     vec3 topColor = vec3(0.2, 0.3, 0.6);
//     vec3 bottomColor = vec3(0.9, 0.6, 0.2);
//     vec3 color = mix(bottomColor, topColor, height * 0.5 + 0.5);

//     // Fade out when camera is above Y = 10
//     float fade = 1.0 - smoothstep(10.0, 25.0, uCameraY);
//     color *= fade;

//     gl_FragColor = vec4(color, 1.0);
//   }
// `);

// extend({ SkyShaderMaterial });


//code 2 works but stars are square
// import { shaderMaterial } from '@react-three/drei';
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// const SkyShaderMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uCameraY: 0,
//   },
//   // Vertex Shader
//   `
//   varying vec3 vWorldPos;

//   void main() {
//     vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   // Fragment Shader
//   `
//   uniform float uTime;
//   uniform float uCameraY;
//   varying vec3 vWorldPos;

//   // Random function for star placement
//   float rand(vec2 co) {
//     return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
//   }

//   void main() {
//     float height = normalize(vWorldPos).y;

//     // Sky gradient
//     vec3 topColor = vec3(0.1, 0.1, 0.25);     // Night blue
//     vec3 bottomColor = vec3(0.8, 0.5, 0.1);   // Sunset orange
//     vec3 color = mix(bottomColor, topColor, height * 0.5 + 0.5);

//     // Starfield
//     float starFade = smoothstep(0.2, 1.0, height); // stars visible higher in sky
//     vec2 starUV = vWorldPos.xz * 0.05 + uTime * 0.01;
//     float star = step(0.997, rand(floor(starUV))); // rare bright stars
//     color += vec3(1.0) * star * starFade;

//     // Fade sky entirely when camera is above
//     float fade = 1.0 - smoothstep(10.0, 25.0, uCameraY);
//     color *= fade;

//     gl_FragColor = vec4(color, 1.0);
//   }
//   `
// );

// extend({ SkyShaderMaterial });

//code 3 clouds are shit
// import { shaderMaterial } from '@react-three/drei';
// import * as THREE from 'three';
// import { extend } from '@react-three/fiber';

// const SkyShaderMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uCameraY: 0,
//   },
//   // Vertex Shader
//   `
//   varying vec3 vWorldPos;

//   void main() {
//     vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   // Fragment Shader
//   `
//   uniform float uTime;
//   uniform float uCameraY;
//   varying vec3 vWorldPos;

//   // Noise-like pseudo cloud pattern
//   float hash(vec2 p) {
//     return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
//   }

//   float cloudNoise(vec2 p) {
//     vec2 i = floor(p);
//     vec2 f = fract(p);
//     vec2 u = f*f*(3.0-2.0*f);
//     return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
//                mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
//   }

//   void main() {
//     float height = normalize(vWorldPos).y;

//     // Bright cartoon blue sky
//     vec3 baseColor = vec3(0.5, 0.8, 1.0); // light blue

//     // Move clouds horizontally over time
//     vec2 cloudUV = vWorldPos.xz * 0.04 + vec2(uTime * 0.02, uTime * 0.005);
//     float cloud = smoothstep(0.55, 0.6, cloudNoise(cloudUV)); // soft threshold

//     // Mix white clouds with sky color
//     vec3 cloudColor = mix(baseColor, vec3(1.0), cloud);

//     // Fade if camera is too high (optional)
//     float fade = 1.0 - smoothstep(10.0, 25.0, uCameraY);
//     cloudColor *= fade;

//     gl_FragColor = vec4(cloudColor, 1.0);
//   }
//   `
// );

// extend({ SkyShaderMaterial });

//code 4
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const SkyShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uCameraY: 0,
  },
  // Vertex Shader
  `
  varying vec3 vWorldPos;

  void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
uniform float uCameraY;
varying vec3 vWorldPos;

// 2D hash
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// 2D noise
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f*f*(3.0 - 2.0*f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// Fractal Brownian Motion
float fbm(vec2 p) {
  float total = 0.0;
  float amplitude = 0.5;

  total += noise(p) * amplitude;
  p *= 2.0;
  amplitude *= 0.5;

  total += noise(p) * amplitude;
  p *= 2.0;
  amplitude *= 0.5;

  total += noise(p) * amplitude;
  p *= 2.0;
  amplitude *= 0.5;

  total += noise(p) * amplitude;
  p *= 2.0;
  amplitude *= 0.5;

  total += noise(p) * amplitude;

  return total;
}


void main() {
  float height = normalize(vWorldPos).y;

  // Sky gradient
  vec3 skyColor = mix(
    vec3(0.6, 0.85, 1.0),  // horizon blue
    vec3(0.25, 0.6, 1.0),  // zenith blue
    height * 0.5 + 0.5
  );

  // Animated cloud coordinates
  vec2 uv = vWorldPos.xz * 0.02 + vec2(uTime * 0.01, uTime * 0.005);
  float clouds = fbm(uv);

  // Cloud shape control
  clouds = smoothstep(0.4, 0.7, clouds); // adjust threshold for puffiness
  clouds *= smoothstep(0.0, 0.3, height); // mask out low horizon
  clouds *= smoothstep(0.1, 1.0, height); // fade at top

  vec3 color = mix(skyColor, vec3(1.0), clouds);

  // Fade sky when camera is above (optional)
  float fade = 1.0 - smoothstep(10.0, 25.0, uCameraY);
  color *= fade;

  gl_FragColor = vec4(color, 1.0);
}

  `
);

extend({ SkyShaderMaterial });

