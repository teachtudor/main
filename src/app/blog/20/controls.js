// //CODE 2

// export function setupControls(keys) {
//   window.addEventListener("keydown", (event) => {
//       if (event.code === "ArrowUp" || event.code === "KeyW") keys.forward = true;
//       if (event.code === "ArrowLeft" || event.code === "KeyA") keys.left = true;
//       if (event.code === "ArrowRight" || event.code === "KeyD") keys.right = true;
//   });

//   window.addEventListener("keyup", (event) => {
//       if (event.code === "ArrowUp" || event.code === "KeyW") keys.forward = false;
//       if (event.code === "ArrowLeft" || event.code === "KeyA") keys.left = false;
//       if (event.code === "ArrowRight" || event.code === "KeyD") keys.right = false;
//   });
// }


// // Example update to car velocity when key is pressed
// export const updateCarMovement = (car, carState, keys) => {

//   // Ensure carState and keys are not undefined
//   if (!car || !carState || !keys) return;
//   // Move forward or backward (Z axis)
//   if (keys.forward) {
//     carState.velocity.z = Math.min(carState.velocity.z + 0.1, carState.maxSpeed);  // Move forward
//   } else if (keys.backward) {
//     carState.velocity.z = Math.max(carState.velocity.z - 0.1, -carState.maxSpeed);  // Move backward
//   } else {
//     carState.velocity.z = 0;  // Stop moving when no key is pressed
//   }

//     // Apply friction (gradual slowing down)
//   if (!keys.forward && !keys.backward) {
//     carState.velocity.z *= carState.friction;
//   }

//   // Rotate car (Y axis) for left or right turns
//   if (keys.left) {
//     car.rotation.y += carState.turnSpeed;  // Turn left
//   } else if (keys.right) {
//     car.rotation.y -= carState.turnSpeed;  // Turn right
//   }

//   // Update car's position based on velocity
//   car.position.add(carState.velocity);
// };

//code 2
// import { useEffect, useState } from 'react';

// export function Controls() {
//   const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'ArrowUp') setMovement((prev) => ({ ...prev, forward: true }));
//       if (event.key === 'ArrowDown') setMovement((prev) => ({ ...prev, backward: true }));
//       if (event.key === 'ArrowLeft') setMovement((prev) => ({ ...prev, left: true }));
//       if (event.key === 'ArrowRight') setMovement((prev) => ({ ...prev, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === 'ArrowUp') setMovement((prev) => ({ ...prev, forward: false }));
//       if (event.key === 'ArrowDown') setMovement((prev) => ({ ...prev, backward: false }));
//       if (event.key === 'ArrowLeft') setMovement((prev) => ({ ...prev, left: false }));
//       if (event.key === 'ArrowRight') setMovement((prev) => ({ ...prev, right: false }));
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <group position={[-5, 0, 0]}>
//       {/* You can use this movement state to control the car's actions */}
//     </group>
//   );
// }
