// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted) {
//   const { walk, run, idle, turnLeft, turnRight } = animations;
//   if (!mixerRef.current || !walk || !run || !idle || !turnLeft || !turnRight) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const noInput = !isRunning && !isWalking && !isTurning;

//   if (isTurning && !isRunning && !isWalking) {
//     const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (currentAction.current !== turn) {
//       currentAction.current?.fadeOut(0.2);
//       turn.reset().fadeIn(0.2).play();
//       currentAction.current = turn;
//     }
//     return;
//   }

//   if (noInput) {
//     if (currentAction.current !== idle) {
//       currentAction.current?.fadeOut(0.3);
//       idle.enabled = true;
//       idle.setLoop(THREE.LoopRepeat, Infinity);
//       idle.fadeIn(0.3).play();
//       currentAction.current = idle;
//     }
//     return;
//   }

//   const newAction = isRunning ? run : walk;
//   const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//   if (currentAction.current !== newAction) {
//     currentAction.current?.fadeOut(0.3);
//     newAction.enabled = true;
//     newAction.setLoop(THREE.LoopRepeat, Infinity);
//     newAction.fadeIn(0.3).play();
//     currentAction.current = newAction;
//   }

//   if (currentAction.current && currentAction.current.timeScale !== direction) {
//     currentAction.current.timeScale = direction;
//   }

//   animationStarted.current = true;
// }


//code 2
// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted) {
//   if (!mixerRef.current || !animationStarted.current || !animations) return;

//   // const {
//   //   walk, run, idle, turnLeft, turnRight,
//   //   jump, getUp, sit, cry, laugh
//   // } = animations;

//   // Fallbacks for safety
//   const {
//     walk = null,
//     run = null,
//     idle = null,
//     turnLeft = null,
//     turnRight = null,
//     jump = null,
//     getUp = null,
//     sit = null,
//     cry = null,
//     laugh = null
//   } = animations;

//   const playOnce = (action) => {
//     if (!action || currentAction.current === action) return;
//     currentAction.current?.fadeOut(0.2);
//     action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
//     currentAction.current = action;

//     action.clampWhenFinished = true;
//     action.onFinished = () => {
//       currentAction.current = idle;
//       idle.reset().fadeIn(0.3).play();
//     };
//   };

//   if (keys['j']) return playOnce(jump);
//   if (keys['g']) return playOnce(getUp);
//   if (keys['s']) return playOnce(sit);
//   if (keys['c']) return playOnce(cry);
//   if (keys['l']) return playOnce(laugh);

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const noInput = !isRunning && !isWalking && !isTurning;

//   if (isTurning && !isRunning && !isWalking) {
//     const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (currentAction.current !== turn) {
//       currentAction.current?.fadeOut(0.2);
//       turn.reset().fadeIn(0.2).play();
//       currentAction.current = turn;
//     }
//     return;
//   }

//   if (noInput) {
//     if (currentAction.current !== idle) {
//       currentAction.current?.fadeOut(0.3);
//       idle.enabled = true;
//       idle.setLoop(THREE.LoopRepeat, Infinity);
//       idle.fadeIn(0.3).play();
//       currentAction.current = idle;
//     }
//     return;
//   }

//   const newAction = isRunning ? run : walk;
//   const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//   if (currentAction.current !== newAction) {
//     currentAction.current?.fadeOut(0.3);
//     newAction.enabled = true;
//     newAction.setLoop(THREE.LoopRepeat, Infinity);
//     newAction.fadeIn(0.3).play();
//     currentAction.current = newAction;
//   }

//   if (currentAction.current && currentAction.current.timeScale !== direction) {
//     currentAction.current.timeScale = direction;
//   }
// }


//code 3
// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref) {
//   if (!mixerRef.current || !animationStarted.current || !animations) return;

//   const {
//     walk = null,
//     run = null,
//     idle = null,
//     turnLeft = null,
//     turnRight = null,
//     jump = null,
//     getUp = null,
//     sit = null,
//     cry = null,
//     laugh = null
//   } = animations;


//   // const playOnce = (action) => {
//   //   if (!action || currentAction.current === action) return;
//   //   currentAction.current?.fadeOut(0.2);
//   //   action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
//   //   currentAction.current = action;

//   //   action.clampWhenFinished = true;
//   //   action.onFinished = () => {
//   //     if (idle) {
//   //       currentAction.current = idle;
//   //       idle.reset().fadeIn(0.3).play();
//   //     }
//   //   };
//   // };

//   // const playOnce = (action, yOffset = 0) => {
//   //   if (!action || currentAction.current === action) return;
//   //   currentAction.current?.fadeOut(0.2);
  
//   //   if (ref?.current) {
//   //     console.log('Before animation:', ref.current.position.y);
//   //   }
  
//   //   action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
//   //   currentAction.current = action;
  
//   //   action.clampWhenFinished = true;
//   //   action.onFinished = () => {
//   //     if (ref?.current) {
//   //       console.log('After animation:', ref.current.position.y);
//   //     }
  
//   //     if (idle) {
//   //       currentAction.current = idle;
//   //       idle.reset().fadeIn(0.3).play();
//   //     }
//   //   };
//   // };

//   let originalY = null; // Top of module scope (outside function) or use useRef if in a component

//   const playOnce = (action, yOffset = 0, keyHeld = false) => {
//     if (!action || currentAction.current === action) return;
//     currentAction.current?.fadeOut(0.2);

//     // Apply temporary Y offset if a key is held
//     if (keyHeld && ref?.current && originalY === null) {
//       originalY = ref.current.position.y;
//       ref.current.position.y += yOffset;
//     }

//     action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
//     currentAction.current = action;

//     action.clampWhenFinished = true;
//     action.onFinished = () => {
//       // Reset Y offset when animation is done
//       if (keyHeld && ref?.current && originalY !== null) {
//         ref.current.position.y = originalY;
//         originalY = null;
//       }

//       if (idle) {
//         currentAction.current = idle;
//         idle.reset().fadeIn(0.3).play();
//       }
//     };
//   };
  
  
//   if (keys['j']) return playOnce(jump);
//   if (keys['g']) return playOnce(getUp);
//   if (keys['s']) return playOnce(sit);
//   if (keys['c']) return playOnce(cry, 0.1, keys['c']); //add y lift
//   if (keys['l']) return playOnce(laugh, 0.1, keys['l']); // add y lift
  

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const noInput = !isRunning && !isWalking && !isTurning;

//   if (isTurning && !isRunning && !isWalking) {
//     const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (turn && currentAction.current !== turn) {
//       currentAction.current?.fadeOut(0.2);
//       turn.reset().fadeIn(0.2).play();
//       currentAction.current = turn;
//     }
//     return;
//   }

//   if (noInput) {
//     if (idle && currentAction.current !== idle) {
//       currentAction.current?.fadeOut(0.3);
//       idle.enabled = true;
//       idle.setLoop(THREE.LoopRepeat, Infinity);
//       idle.fadeIn(0.3).play();
//       currentAction.current = idle;
//     }
//     return;
//   }

//   const newAction = isRunning ? run : walk;
//   const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//   if (newAction && currentAction.current !== newAction) {
//     currentAction.current?.fadeOut(0.3);
//     newAction.enabled = true;
//     newAction.setLoop(THREE.LoopRepeat, Infinity);
//     newAction.fadeIn(0.3).play();
//     currentAction.current = newAction;
//   }

//   if (currentAction.current && currentAction.current.timeScale !== direction) {
//     currentAction.current.timeScale = direction;
//   }
// }


//code 4

// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref) {
//   if (!mixerRef.current || !animationStarted.current || !animations) return;

//   const {
//     walk = null,
//     run = null,
//     idle = null,
//     turnLeft = null,
//     turnRight = null,
//     jump = null,
//     getUp = null,
//     sit = null,
//     cry = null,
//     laugh = null
//   } = animations;

//   const fadeDuration = 0.2; // Adjust for smoother/faster transitions
//   let originalY = null; // Keep this outside the playOnce function

//   const playOnce = (action, yOffset = 0, keyHeld = false) => {
//     if (!action || currentAction.current === action) return;

//     // Fade out the current action
//     if (currentAction.current) {
//       currentAction.current.fadeOut(fadeDuration);
//     }

//     // Apply temporary Y offset if a key is held
//     if (keyHeld && ref?.current && originalY === null) {
//       originalY = ref.current.position.y;
//       ref.current.position.y += yOffset;
//     }

//     // Play the new action
//     action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(fadeDuration).play();
//     currentAction.current = action;
//     action.clampWhenFinished = true;

//     action.onFinished = () => {
//       // Reset Y offset when animation is done
//       if (keyHeld && ref?.current && originalY !== null) {
//         ref.current.position.y = originalY;
//         originalY = null;
//       }

//       // Return to idle if no other keys are pressed
//       if (idle && !Object.values(keys).some(Boolean)) {
//         currentAction.current = idle;
//         idle.reset().fadeIn(fadeDuration).play();
//       } else if (idle) {
//         // If other keys are pressed, but the 'once' action finished,
//         // and the current action is still the finished 'once' action,
//         // smoothly transition to idle.
//         if (currentAction.current === action) {
//           currentAction.current.fadeOut(fadeDuration);
//           idle.reset().fadeIn(fadeDuration).play();
//           currentAction.current = idle;
//         }
//       }
//     };
//   };

//   // Handle 'play once' animations
//   if (keys['j']) return playOnce(jump);
//   if (keys['g']) return playOnce(getUp);
//   if (keys['s']) return playOnce(sit);
//   if (keys['c']) return playOnce(cry, 0.1, keys['c']);
//   if (keys['l']) return playOnce(laugh, 0.1, keys['l']);

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const isMoving = isWalking || isRunning;
//   const noMovement = !isMoving && !isTurning;

//   // Handle turning animations (prioritize over walk/run if only turning)
//   if (isTurning && !isMoving) {
//     const turnAction = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (turnAction && currentAction.current !== turnAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       turnAction.reset().fadeIn(fadeDuration).play();
//       currentAction.current = turnAction;
//     }
//     return;
//   }

//   // Handle movement animations (walk/run)
//   if (isMoving) {
//     const newAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1; // For potential backward animation

//     if (newAction && currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       newAction.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//       currentAction.current = newAction;
//     }

//     // Set animation speed based on direction (forward/backward)
//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//     return; // Important: Don't go to idle if moving
//   }

//   // Handle idle animation when no movement or 'play once' actions are active
//   if (noMovement && !Object.values(keys).some(Boolean) && idle && currentAction.current !== idle) {
//     currentAction.current?.fadeOut(fadeDuration);
//     idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//     currentAction.current = idle;
//   }
// }

//code 5 this works with code 8 character.js except occasional t freeze
import * as THREE from 'three';

export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef) {
  if (!mixerRef.current || !animationStarted.current || !animations) return;

  const {
    walk = null,
    run = null,
    idle = null,
    turnLeft = null,
    turnRight = null,
    jump = null,
    getUp = null,
    sit = null,
    cry = null,
    laugh = null
  } = animations;

  const fadeDuration = 0.2;
  let originalY = null;

  const playOnce = (action, yOffset = 0, keyHeld = false) => {
    if (!action || currentAction.current === action) return;

    if (currentAction.current) {
      currentAction.current.fadeOut(fadeDuration);
    }

    // ✅ SAFE offset on modelRef only (not ref)
    if (keyHeld && modelRef?.current && originalY === null) {
      originalY = modelRef.current.position.y;
      modelRef.current.position.y += yOffset;
    }

    action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(fadeDuration).play();
    currentAction.current = action;
    action.clampWhenFinished = true;

    action.onFinished = () => {
      if (keyHeld && modelRef?.current && originalY !== null) {
        modelRef.current.position.y = originalY;
        originalY = null;
      }

      if (idle && !Object.values(keys).some(Boolean)) {
        currentAction.current = idle;
        idle.reset().fadeIn(fadeDuration).play();
      } else if (idle && currentAction.current === action) {
        currentAction.current.fadeOut(fadeDuration);
        idle.reset().fadeIn(fadeDuration).play();
        currentAction.current = idle;
      }
    };
  };

  if (keys['j']) return playOnce(jump);
  if (keys['g']) return playOnce(getUp);
  if (keys['s']) return playOnce(sit);
  if (keys['c']) return playOnce(cry, 0.1, keys['c']);
  if (keys['l']) return playOnce(laugh, 0.1, keys['l']);

  const isRunning = keys['r'] || keys['b'];
  const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
  const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
  const isMoving = isWalking || isRunning;
  const noMovement = !isMoving && !isTurning;

  if (isTurning && !isMoving) {
    const turnAction = keys['ArrowLeft'] ? turnLeft : turnRight;
    if (turnAction && currentAction.current !== turnAction) {
      currentAction.current?.fadeOut(fadeDuration);
      turnAction.reset().fadeIn(fadeDuration).play();
      currentAction.current = turnAction;
    }
    return;
  }

  if (isMoving) {
    const newAction = isRunning ? run : walk;
    const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

    if (newAction && currentAction.current !== newAction) {
      currentAction.current?.fadeOut(fadeDuration);
      newAction.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
      currentAction.current = newAction;
    }

    if (currentAction.current && currentAction.current.timeScale !== direction) {
      currentAction.current.timeScale = direction;
    }
    return;
  }

  if (noMovement && !Object.values(keys).some(Boolean) && idle && currentAction.current !== idle) {
    currentAction.current?.fadeOut(fadeDuration);
    idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
    currentAction.current = idle;
  }
}


