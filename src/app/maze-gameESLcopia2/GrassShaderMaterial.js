//works but plain
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const GrassShaderMaterial = shaderMaterial(
  {
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
  uniform float uTime;
  varying vec2 vUv;

  // Fake noise for texture variation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float grassPattern(vec2 uv) {
    vec2 grid = floor(uv * 50.0);
    float rnd = hash(grid);
    float sway = sin(uTime + grid.y * 0.1 + grid.x * 0.3) * 0.05;
    return smoothstep(0.48, 0.5, abs(fract(uv.x * 50.0 + sway) - 0.5));
  }

  void main() {
    vec2 uv = vUv * 20.0;

    float blade = grassPattern(uv);
    vec3 grassColor = mix(vec3(0.3, 0.8, 0.2), vec3(0.1, 0.6, 0.1), blade);

    gl_FragColor = vec4(grassColor, 1.0);
  }
  `
);

extend({ GrassShaderMaterial });

