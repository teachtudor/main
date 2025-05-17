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
import * as THREE from 'three';

export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref) {
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


  // const playOnce = (action) => {
  //   if (!action || currentAction.current === action) return;
  //   currentAction.current?.fadeOut(0.2);
  //   action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
  //   currentAction.current = action;

  //   action.clampWhenFinished = true;
  //   action.onFinished = () => {
  //     if (idle) {
  //       currentAction.current = idle;
  //       idle.reset().fadeIn(0.3).play();
  //     }
  //   };
  // };

  // const playOnce = (action, yOffset = 0) => {
  //   if (!action || currentAction.current === action) return;
  //   currentAction.current?.fadeOut(0.2);
  
  //   if (ref?.current) {
  //     console.log('Before animation:', ref.current.position.y);
  //   }
  
  //   action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
  //   currentAction.current = action;
  
  //   action.clampWhenFinished = true;
  //   action.onFinished = () => {
  //     if (ref?.current) {
  //       console.log('After animation:', ref.current.position.y);
  //     }
  
  //     if (idle) {
  //       currentAction.current = idle;
  //       idle.reset().fadeIn(0.3).play();
  //     }
  //   };
  // };

  let originalY = null; // Top of module scope (outside function) or use useRef if in a component

  const playOnce = (action, yOffset = 0, keyHeld = false) => {
    if (!action || currentAction.current === action) return;
    currentAction.current?.fadeOut(0.2);

    // Apply temporary Y offset if a key is held
    if (keyHeld && ref?.current && originalY === null) {
      originalY = ref.current.position.y;
      ref.current.position.y += yOffset;
    }

    action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
    currentAction.current = action;

    action.clampWhenFinished = true;
    action.onFinished = () => {
      // Reset Y offset when animation is done
      if (keyHeld && ref?.current && originalY !== null) {
        ref.current.position.y = originalY;
        originalY = null;
      }

      if (idle) {
        currentAction.current = idle;
        idle.reset().fadeIn(0.3).play();
      }
    };
  };
  
  
  if (keys['j']) return playOnce(jump);
  if (keys['g']) return playOnce(getUp);
  if (keys['s']) return playOnce(sit);
  if (keys['c']) return playOnce(cry, 0.1, keys['c']); //add y lift
  if (keys['l']) return playOnce(laugh, 0.1, keys['l']); // add y lift
  

  const isRunning = keys['r'] || keys['b'];
  const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
  const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
  const noInput = !isRunning && !isWalking && !isTurning;

  if (isTurning && !isRunning && !isWalking) {
    const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
    if (turn && currentAction.current !== turn) {
      currentAction.current?.fadeOut(0.2);
      turn.reset().fadeIn(0.2).play();
      currentAction.current = turn;
    }
    return;
  }

  if (noInput) {
    if (idle && currentAction.current !== idle) {
      currentAction.current?.fadeOut(0.3);
      idle.enabled = true;
      idle.setLoop(THREE.LoopRepeat, Infinity);
      idle.fadeIn(0.3).play();
      currentAction.current = idle;
    }
    return;
  }

  const newAction = isRunning ? run : walk;
  const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

  if (newAction && currentAction.current !== newAction) {
    currentAction.current?.fadeOut(0.3);
    newAction.enabled = true;
    newAction.setLoop(THREE.LoopRepeat, Infinity);
    newAction.fadeIn(0.3).play();
    currentAction.current = newAction;
  }

  if (currentAction.current && currentAction.current.timeScale !== direction) {
    currentAction.current.timeScale = direction;
  }
}
