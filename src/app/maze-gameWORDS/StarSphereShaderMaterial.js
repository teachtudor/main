import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const StarSphereShaderMaterial = shaderMaterial(
  { uTime: 0 },
  `
    varying vec3 vWorldPos;

    void main() {
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    varying vec3 vWorldPos;

    float hash(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453);
    }

    void main() {
      vec3 dir = normalize(vWorldPos);
      float star = hash(dir + uTime * 0.01);
      float starThreshold = 0.997;
      float isStar = step(starThreshold, star);

      vec3 starColor = vec3(1.0) * isStar;

      // Optional twinkle
      starColor *= 0.8 + 0.2 * sin(uTime * 10.0 + dot(dir.xy, vec2(12.0, 78.0)));

      vec3 spaceColor = vec3(0.0, 0.0, 0.05);
      vec3 color = spaceColor + starColor;

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ StarSphereShaderMaterial });

export default StarSphereShaderMaterial;
