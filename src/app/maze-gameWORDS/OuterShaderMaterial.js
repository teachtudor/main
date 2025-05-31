//code 1 works
// import { shaderMaterial } from '@react-three/drei';
// import { extend } from '@react-three/fiber';

// const OuterShaderMaterial = shaderMaterial(
//   { uTime: 0 },
//   `
//   varying vec3 vWorldPos;

//   void main() {
//     vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   `
//   uniform float uTime;
//   varying vec3 vWorldPos;

//   // Simple 2D hash for noise
//   float hash(vec2 p) {
//     return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
//   }

//   float noise(vec2 p) {
//     vec2 i = floor(p);
//     vec2 f = fract(p);
//     vec2 u = f*f*(3.0 - 2.0*f);
//     return mix(
//       mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
//       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
//       u.y
//     );
//   }

//   float fbm(vec2 p) {
//     float total = 0.0;
//     float amplitude = 0.5;
//     for(int i = 0; i < 5; i++) {
//       total += noise(p) * amplitude;
//       p = p * 2.0 + vec2(1.7, -1.3);
//       amplitude *= 0.5;
//     }
//     return total;
//   }

//   void main() {
//     vec3 dir = normalize(vWorldPos);
    
//     // Map spherical coords to 2D for noise
//     float lat = asin(dir.y);
//     float lon = atan(dir.z, dir.x);

//     vec2 uv = vec2(lon / 3.1416, lat / 1.5708);  // normalize [-1,1]
//     uv += vec2(uTime * 0.01, uTime * 0.005);     // slow drift

//     float geography = fbm(uv * 4.0);  // adjust scale for detail

//     // Threshold for land vs ocean
//     float land = step(0.5, geography);

//     // Color: green for land, blue for ocean
//     vec3 landColor = vec3(0.2, 0.6, 0.2);
//     vec3 oceanColor = vec3(0.0, 0.2, 0.5);
//     vec3 color = mix(oceanColor, landColor, land);

//     // Transparency: ocean = more transparent, land = more opaque
//     float alpha = mix(0.2, 0.8, land);  

//     gl_FragColor = vec4(color, alpha);
//   }
//   `
// );

// extend({ OuterShaderMaterial });

// export default OuterShaderMaterial;

//code 2
// import { shaderMaterial } from '@react-three/drei';
// import { extend } from '@react-three/fiber';

// const OuterShaderMaterial = shaderMaterial(
//   { uTime: 0 },
//   `
//   varying vec3 vWorldPos;
//   varying vec3 vNormal;

//   void main() {
//     vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
//     vNormal = normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   `
//   uniform float uTime;
//   varying vec3 vWorldPos;
//   varying vec3 vNormal;

//   float hash(vec2 p) {
//     return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
//   }

//   float noise(vec2 p) {
//     vec2 i = floor(p);
//     vec2 f = fract(p);
//     vec2 u = f*f*(3.0 - 2.0*f);
//     return mix(
//       mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
//       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
//       u.y
//     );
//   }

//   float fbm(vec2 p) {
//     float total = 0.0;
//     float amplitude = 0.5;
//     for(int i = 0; i < 5; i++) {
//       total += noise(p) * amplitude;
//       p = p * 2.0 + vec2(1.7, -1.3);
//       amplitude *= 0.5;
//     }
//     return total;
//   }

//   void main() {
//     vec3 dir = normalize(vWorldPos);
    
//     // Spherical to UV
//     float lat = asin(dir.y);
//     float lon = atan(dir.z, dir.x);
//     vec2 uv = vec2(lon / 3.1416, lat / 1.5708);
//     uv += vec2(uTime * 0.01, uTime * 0.005);

//     float geography = fbm(uv * 4.0);
//     float land = step(0.5, geography);

//     vec3 landColor = vec3(0.2, 0.6, 0.2);
//     vec3 oceanColor = vec3(0.0, 0.2, 0.5);
//     vec3 baseColor = mix(oceanColor, landColor, land);

//     // ----------------------------
//     // Lighting: sun direction
//     vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
//     float diffuse = max(dot(vNormal, lightDir), 0.0);

//     // Height-based color modulation
//     baseColor += 0.1 * land * diffuse;

//     // Rim light: glows at edges
//     float rim = 1.0 - max(dot(vNormal, normalize(-vWorldPos)), 0.0);
//     rim = pow(rim, 2.0);

//     baseColor += vec3(0.1, 0.2, 0.3) * rim;

//     // Transparency: ocean more transparent
//     float alpha = mix(0.2, 0.8, land);

//     gl_FragColor = vec4(baseColor * diffuse + rim * 0.2, alpha);
//   }
//   `
// );

// extend({ OuterShaderMaterial });

// export default OuterShaderMaterial;


//code 3
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const OuterShaderMaterial = shaderMaterial(
  { uTime: 0 },
  `
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float uTime;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

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

  float fbm(vec2 p) {
    float total = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 5; i++) {
      total += noise(p) * amplitude;
      p = p * 2.0 + vec2(1.7, -1.3);
      amplitude *= 0.5;
    }
    return total;
  }

 void main() {
  vec3 dir = normalize(vWorldPos);

  // Spherical mapping to UV
  float lat = asin(dir.y);
  float lon = atan(dir.z, dir.x);
  vec2 uv = vec2(lon / 3.1416, lat / 1.5708);
  uv += vec2(uTime * 0.01, uTime * 0.005);

  float geography = fbm(uv * 4.0);
  float land = step(0.5, geography);

  // Set land and ocean colors
  vec3 landColor = vec3(0.2, 0.6, 0.2);
  vec3 oceanColor = vec3(0.3, 0.6, 1.0); // brighter light blue ocean
  vec3 baseColor = mix(oceanColor, landColor, land);

  // Lighting
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
  float diffuse = max(dot(vNormal, lightDir), 0.0);
  baseColor *= diffuse;

  // Optional rim light
  float rim = 1.0 - max(dot(vNormal, normalize(-vWorldPos)), 0.0);
  rim = pow(rim, 2.0);
  baseColor += vec3(0.1, 0.2, 0.3) * rim * 0.5;

  // Make everything fully opaque
  gl_FragColor = vec4(baseColor, 1.0);
}




  `
);

extend({ OuterShaderMaterial });

export default OuterShaderMaterial;
