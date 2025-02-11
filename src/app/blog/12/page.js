// // blog/kitchen/page.js
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     washingHands: false,
//     towelHung: false,
//     faucetOn: false,
//     tableWiped: false,
//     milkSpilled: false,
//     doorOpen: false,
//     stoveOn: false,
//     cooking: false,
//     sitting: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//       {/* Kitchen Scene */}
//       <div className="relative w-full max-w-4xl h-96 bg-yellow-50 border rounded-lg shadow-md">
//         {/* Fridge */}
//         <motion.div 
//           className="absolute top-8 left-4 w-48 h-48 p-0 transparent rounded-lg"
//           animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//         >
//           <img 
//             src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//             alt="Fridge" 
//             className="w-full h-full object-contain rounded-lg" 
//           />
//           <p className="text-center text-white">Fridge</p>
//         </motion.div>

//         {/* Faucet */}
//         <motion.div
//           className="absolute top-24 left-80 w-12 h-12 bg-gray-400 rounded-full"
//           animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//         >
//           <p className="text-xs text-white text-center">Faucet</p>
//         </motion.div>

//         {/* Milk Spill */}
//         {actions.milkSpilled && (
//           <motion.div 
//             className="absolute bottom-12 left-32 w-24 h-8 bg-white rounded-full opacity-80"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//           />
//         )}

//         {/* Stove */}
//         <motion.div
//           className={`absolute bottom-8 right-20 w-24 h-24 ${actions.stoveOn ? 'bg-red-500' : 'bg-gray-500'} rounded-lg`}
//         >
//           <p className="text-center text-white">Stove</p>
//         </motion.div>

//         {/* Character */}
//         <motion.img
//           src="/character.png"
//           alt="Character"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-32"
//           animate={{ y: actions.sitting ? 20 : 0 }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//         <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//         <button onClick={() => toggleAction('washingHands')} className="p-2 bg-green-500 text-white rounded-lg">{actions.washingHands ? 'Stop Washing Hands' : 'Wash Hands'}</button>
//         <button onClick={() => toggleAction('towelHung')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.towelHung ? 'Remove Towel' : 'Hang Towel'}</button>

//         <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-gray-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//         <button onClick={() => toggleAction('tableWiped')} className="p-2 bg-purple-500 text-white rounded-lg">{actions.tableWiped ? 'Dirty Table' : 'Wipe Table'}</button>
//         <button onClick={() => toggleAction('milkSpilled')} className="p-2 bg-pink-500 text-white rounded-lg">{actions.milkSpilled ? 'Clean Milk' : 'Spill Milk'}</button>

//         <button onClick={() => toggleAction('doorOpen')} className="p-2 bg-orange-500 text-white rounded-lg">{actions.doorOpen ? 'Close Door' : 'Open Door'}</button>
//         <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//         <button onClick={() => toggleAction('cooking')} className="p-2 bg-teal-500 text-white rounded-lg">{actions.cooking ? 'Stop Cooking' : 'Cook'}</button>

//         <button onClick={() => toggleAction('sitting')} className="p-2 bg-indigo-500 text-white rounded-lg">{actions.sitting ? 'Stand Up' : 'Sit Down'}</button>
//       </div>
//     </div>
//   );
// }

//CODE 2
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     washingHands: false,
//     towelHung: false,
//     faucetOn: false,
//     tableWiped: false,
//     milkSpilled: false,
//     doorOpen: false,
//     stoveOn: false,
//     cooking: false,
//     sitting: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//       {/* Kitchen Scene */}
//       <div className="relative w-full max-w-4xl h-96 bg-yellow-50 border rounded-lg shadow-md">
//         {/* Fridge */}
//         <motion.div 
//           className="absolute top-8 left-4 w-48 h-48 p-0 transparent rounded-lg"
//           animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//           onClick={() => toggleAction('fridgeOpen')} // Toggle fridge on image click
//         >
//           <img 
//             src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//             alt="Fridge" 
//             className="w-full h-full object-contain rounded-lg" 
//           />
//           <p className="text-center text-white">Fridge</p>
//         </motion.div>

//         {/* Faucet */}
//         <motion.div
//           className="absolute top-39 left-80 w-15 h-13 rounded-full"
//           animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//           onClick={() => toggleAction('faucetOn')} // Toggle faucet on image click
//         >
//           <img 
//             src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
//             alt="Faucet" 
//             className="w-full h-full object-contain rounded-full" 
//           />
//           <p className="text-xs text-white text-center">Faucet</p>
//         </motion.div>

//         {/* Milk Spill */}
//         {actions.milkSpilled && (
//           <motion.div 
//             className="absolute bottom-12 left-32 w-24 h-8 bg-white rounded-full opacity-80"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//           />
//         )}

//         {/* Stove */}
//         <motion.div
//           className={`absolute bottom-8 right-20 w-24 h-24 ${actions.stoveOn ? 'bg-red-500' : 'bg-gray-500'} rounded-lg`}
//         >
//           <p className="text-center text-white">Stove</p>
//         </motion.div>

//         {/* Character */}
//         <motion.img
//           src="/character.png"
//           alt="Character"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-32"
//           animate={{ y: actions.sitting ? 20 : 0 }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//         <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//         <button onClick={() => toggleAction('washingHands')} className="p-2 bg-green-500 text-white rounded-lg">{actions.washingHands ? 'Stop Washing Hands' : 'Wash Hands'}</button>
//         <button onClick={() => toggleAction('towelHung')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.towelHung ? 'Remove Towel' : 'Hang Towel'}</button>

//         <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-gray-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//         <button onClick={() => toggleAction('tableWiped')} className="p-2 bg-purple-500 text-white rounded-lg">{actions.tableWiped ? 'Dirty Table' : 'Wipe Table'}</button>
//         <button onClick={() => toggleAction('milkSpilled')} className="p-2 bg-pink-500 text-white rounded-lg">{actions.milkSpilled ? 'Clean Milk' : 'Spill Milk'}</button>

//         <button onClick={() => toggleAction('doorOpen')} className="p-2 bg-orange-500 text-white rounded-lg">{actions.doorOpen ? 'Close Door' : 'Open Door'}</button>
//         <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//         <button onClick={() => toggleAction('cooking')} className="p-2 bg-teal-500 text-white rounded-lg">{actions.cooking ? 'Stop Cooking' : 'Cook'}</button>

//         <button onClick={() => toggleAction('sitting')} className="p-2 bg-indigo-500 text-white rounded-lg">{actions.sitting ? 'Stand Up' : 'Sit Down'}</button>
//       </div>
//     </div>
//   );
// }


// //CODE 2
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     washingHands: false,
//     towelHung: false,
//     faucetOn: false,
//     tableWiped: false,
//     milkSpilled: false,
//     doorOpen: false,
//     stoveOn: false,
//     cooking: false,
//     sitting: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//       {/* Kitchen Scene */}
//       <div className="relative w-full max-w-4xl h-96 bg-yellow-50 border rounded-lg shadow-md">
//         {/* Fridge */}
//         <motion.div 
//           className="absolute top-8 left-4 w-48 h-48 p-0 transparent rounded-lg"
//           animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//           onClick={() => toggleAction('fridgeOpen')} // Toggle fridge on image click
//         >
//           <img 
//             src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//             alt="Fridge" 
//             className="w-full h-full object-contain rounded-lg" 
//           />
//           <p className="text-center text-white">Fridge</p>
//         </motion.div>

//         {/* Faucet */}
//         <motion.div
//           className="absolute top-39 left-80 w-15 h-13 rounded-full"
//           animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//           onClick={() => toggleAction('faucetOn')} // Toggle faucet on image click
//         >
//           <img 
//             src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
//             alt="Faucet" 
//             className="w-full h-full object-contain rounded-full" 
//           />
//           <p className="text-xs text-white text-center">Faucet</p>
//         </motion.div>

//         {/* Milk Spill */}
//         {actions.milkSpilled && (
//           <motion.div 
//             className="absolute bottom-12 left-32 w-24 h-8 bg-white rounded-full opacity-80"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//           />
//         )}

//         {/* Stove */}
//         <motion.div
//           className={`absolute bottom-8 right-20 w-24 h-24 ${actions.stoveOn ? 'bg-red-500' : 'bg-gray-500'} rounded-lg`}
//         >
//           <p className="text-center text-white">Stove</p>
//         </motion.div>

//         {/* Character */}
//         <motion.img
//           src="/character.png"
//           alt="Character"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-32"
//           animate={{ y: actions.sitting ? 20 : 0 }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//         <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//         <button onClick={() => toggleAction('washingHands')} className="p-2 bg-green-500 text-white rounded-lg">{actions.washingHands ? 'Stop Washing Hands' : 'Wash Hands'}</button>
//         <button onClick={() => toggleAction('towelHung')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.towelHung ? 'Remove Towel' : 'Hang Towel'}</button>

//         <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-gray-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//         <button onClick={() => toggleAction('tableWiped')} className="p-2 bg-purple-500 text-white rounded-lg">{actions.tableWiped ? 'Dirty Table' : 'Wipe Table'}</button>
//         <button onClick={() => toggleAction('milkSpilled')} className="p-2 bg-pink-500 text-white rounded-lg">{actions.milkSpilled ? 'Clean Milk' : 'Spill Milk'}</button>

//         <button onClick={() => toggleAction('doorOpen')} className="p-2 bg-orange-500 text-white rounded-lg">{actions.doorOpen ? 'Close Door' : 'Open Door'}</button>
//         <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//         <button onClick={() => toggleAction('cooking')} className="p-2 bg-teal-500 text-white rounded-lg">{actions.cooking ? 'Stop Cooking' : 'Cook'}</button>

//         <button onClick={() => toggleAction('sitting')} className="p-2 bg-indigo-500 text-white rounded-lg">{actions.sitting ? 'Stand Up' : 'Sit Down'}</button>
//       </div>
//     </div>
//   );
// }

//CODE 4
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     washingHands: false,
//     towelHung: false,
//     faucetOn: false,
//     tableWiped: false,
//     milkSpilled: false,
//     doorOpen: false,
//     stoveOn: false,
//     cooking: false,
//     sitting: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
//       <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//       {/* Kitchen Scene */}
//       <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">

//         {/* Fridge */}
//         <motion.img 
//           src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//           alt="Fridge"
//           className="absolute top-10 left-8 w-40 h-auto"
//           animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//           onClick={() => toggleAction('fridgeOpen')}
//         />

//         {/* Faucet */}
//         <motion.img 
//             src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
//             alt="Faucet" 
//             className="absolute top-32 left-96 w-20 h-auto"  // Increased size from w-12 to w-20
//             animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//             onClick={() => toggleAction('faucetOn')}
//         />

//         {/* Stove */}
//             <motion.img
//             src={actions.stoveOn ? '/turnonstove.png' : '/turnoffstove.png'}
//             alt="Stove"
//             className="absolute bottom-12 right-24 w-24 h-auto cursor-pointer"
//             onClick={() => toggleAction('stoveOn')}
//         />



        

//         {/* Character */}
//         <motion.img
//           src="/character.png"
//           alt="Character"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-auto"
//           animate={{ y: actions.sitting ? 30 : 0 }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//         <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//         <button onClick={() => toggleAction('washingHands')} className="p-2 bg-green-500 text-white rounded-lg">{actions.washingHands ? 'Stop Washing Hands' : 'Wash Hands'}</button>
//         <button onClick={() => toggleAction('towelHung')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.towelHung ? 'Remove Towel' : 'Hang Towel'}</button>

//         <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-gray-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//         <button onClick={() => toggleAction('tableWiped')} className="p-2 bg-purple-500 text-white rounded-lg">{actions.tableWiped ? 'Dirty Table' : 'Wipe Table'}</button>
//         <button onClick={() => toggleAction('milkSpilled')} className="p-2 bg-pink-500 text-white rounded-lg">{actions.milkSpilled ? 'Clean Milk' : 'Spill Milk'}</button>

//         <button onClick={() => toggleAction('doorOpen')} className="p-2 bg-orange-500 text-white rounded-lg">{actions.doorOpen ? 'Close Door' : 'Open Door'}</button>
//         <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//         <button onClick={() => toggleAction('cooking')} className="p-2 bg-teal-500 text-white rounded-lg">{actions.cooking ? 'Stop Cooking' : 'Cook'}</button>

//         <button onClick={() => toggleAction('sitting')} className="p-2 bg-indigo-500 text-white rounded-lg">{actions.sitting ? 'Stand Up' : 'Sit Down'}</button>
//       </div>
//     </div>
//   );
// }

//CODE 5
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     washingHands: false,
//     towelHung: false,
//     faucetOn: false,
//     tableWiped: false,
//     milkSpilled: false,
//     doorOpen: false,
//     stoveOn: false,
//     cooking: false,
//     sitting: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
//       <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//       {/* Kitchen Scene */}
//       <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">

//         {/* Fridge */}
//         <motion.img 
//           src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//           alt="Fridge"
//           className="absolute top-10 left-8 w-40 h-auto"
//           animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//           onClick={() => toggleAction('fridgeOpen')}
//         />

//         {/* Faucet */}
//         <motion.img 
//             src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
//             alt="Faucet" 
//             className="absolute top-32 left-96 w-20 h-auto"
//             animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//             onClick={() => toggleAction('faucetOn')}
//         />

//         {/* Stove */}
//         <motion.img
//             src={actions.stoveOn ? '/turnonstove.png' : '/turnoffstove.png'}
//             alt="Stove"
//             className="absolute bottom-12 right-24 w-24 h-auto cursor-pointer"
//             onClick={() => toggleAction('stoveOn')}
//         />

//         {/* Oven */}
//         <motion.img 
//           src={actions.ovenOn ? '/oven-on.png' : '/oven-off.png'} 
//           alt="Oven"
//           className="absolute top-10 left-48 w-40 h-auto"
//           animate={{ scale: actions.ovenOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('ovenOn')}
//         />
//         <motion.img 
//           src={actions.ovenDoorOpen ? '/oven-door-open.png' : '/oven-door-closed.png'} 
//           alt="Oven Door"
//           className="absolute top-40 left-48 w-40 h-auto"
//           animate={{ rotate: actions.ovenDoorOpen ? 20 : 0 }}
//           onClick={() => toggleAction('ovenDoorOpen')}
//         />

//         {/* Microwave */}
//         <motion.img 
//           src={actions.microwaveOn ? '/microwave-on.png' : '/microwave-off.png'} 
//           alt="Microwave"
//           className="absolute top-10 right-8 w-40 h-auto"
//           animate={{ scale: actions.microwaveOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('microwaveOn')}
//         />
//         <motion.img 
//           src={actions.microwaveDoorOpen ? '/microwave-door-open.png' : '/microwave-door-closed.png'} 
//           alt="Microwave Door"
//           className="absolute top-40 right-8 w-40 h-auto"
//           animate={{ rotate: actions.microwaveDoorOpen ? 20 : 0 }}
//           onClick={() => toggleAction('microwaveDoorOpen')}
//         />

//         {/* Toaster */}
//         <motion.img 
//           src={actions.toasterOn ? '/toaster-on.png' : '/toaster-off.png'} 
//           alt="Toaster"
//           className="absolute bottom-16 left-24 w-40 h-auto"
//           animate={{ scale: actions.toasterOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('toasterOn')}
//         />
//         <motion.img 
//           src={actions.breadInToaster ? '/bread-in-toaster.png' : '/no-bread-in-toaster.png'} 
//           alt="Bread in Toaster"
//           className="absolute bottom-32 left-24 w-30 h-auto"
//           animate={{ y: actions.breadInToaster ? -10 : 0 }}
//           onClick={() => toggleAction('breadInToaster')}
//         />

//         {/* Blender */}
//         <motion.img 
//           src={actions.blenderOn ? '/blender-on.png' : '/blender-off.png'} 
//           alt="Blender"
//           className="absolute bottom-10 left-72 w-40 h-auto"
//           animate={{ scale: actions.blenderOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('blenderOn')}
//         />
//         <motion.img 
//           src={actions.blenderLidOn ? '/blender-lid-on.png' : '/blender-lid-off.png'} 
//           alt="Blender Lid"
//           className="absolute bottom-40 left-72 w-40 h-auto"
//           animate={{ rotate: actions.blenderLidOn ? 10 : 0 }}
//           onClick={() => toggleAction('blenderLidOn')}
//         />

//         {/* Kettle */}
//         <motion.img 
//           src={actions.kettleOn ? '/kettle-on.png' : '/kettle-off.png'} 
//           alt="Kettle"
//           className="absolute bottom-16 right-16 w-40 h-auto"
//           animate={{ scale: actions.kettleOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('kettleOn')}
//         />
//         <motion.img 
//           src={actions.kettleFilled ? '/kettle-filled.png' : '/kettle-empty.png'} 
//           alt="Kettle Water Level"
//           className="absolute bottom-32 right-16 w-40 h-auto"
//           animate={{ scale: actions.kettleFilled ? 1.1 : 1 }}
//           onClick={() => toggleAction('kettleFilled')}
//         />

//         {/* Lights */}
//         <motion.img 
//           src={actions.lightsOn ? '/lights-on.png' : '/lights-off.png'} 
//           alt="Kitchen Lights"
//           className="absolute top-10 left-120 w-40 h-auto"
//           animate={{ scale: actions.lightsOn ? 1.1 : 1 }}
//           onClick={() => toggleAction('lightsOn')}
//         />

//         {/* Character */}
//         <motion.img
//           src="/character.png"
//           alt="Character"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-auto"
//           animate={{ y: actions.sitting ? 30 : 0 }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//         <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//         <button onClick={() => toggleAction('washingHands')} className="p-2 bg-green-500 text-white rounded-lg">{actions.washingHands ? 'Stop Washing Hands' : 'Wash Hands'}</button>
//         <button onClick={() => toggleAction('towelHung')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.towelHung ? 'Remove Towel' : 'Hang Towel'}</button>

//         <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-gray-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//         <button onClick={() => toggleAction('tableWiped')} className="p-2 bg-purple-500 text-white rounded-lg">{actions.tableWiped ? 'Dirty Table' : 'Wipe Table'}</button>
//         <button onClick={() => toggleAction('milkSpilled')} className="p-2 bg-pink-500 text-white rounded-lg">{actions.milkSpilled ? 'Clean Milk' : 'Spill Milk'}</button>

//         <button onClick={() => toggleAction('doorOpen')} className="p-2 bg-orange-500 text-white rounded-lg">{actions.doorOpen ? 'Close Door' : 'Open Door'}</button>
//         <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//         <button onClick={() => toggleAction('cooking')} className="p-2 bg-teal-500 text-white rounded-lg">{actions.cooking ? 'Stop Cooking' : 'Cook'}</button>

//         <button onClick={() => toggleAction('sitting')} className="p-2 bg-indigo-500 text-white rounded-lg">{actions.sitting ? 'Stand Up' : 'Sit Down'}</button>

//         {/* New Actions */}
//         <button onClick={() => toggleAction('ovenOn')} className="p-2 bg-gray-800 text-white rounded-lg">{actions.ovenOn ? 'Turn Off Oven' : 'Turn On Oven'}</button>
//         <button onClick={() => toggleAction('ovenDoorOpen')} className="p-2 bg-gray-600 text-white rounded-lg">{actions.ovenDoorOpen ? 'Close Oven Door' : 'Open Oven Door'}</button>

//         <button onClick={() => toggleAction('microwaveOn')} className="p-2 bg-yellow-600 text-white rounded-lg">{actions.microwaveOn ? 'Turn Off Microwave' : 'Turn On Microwave'}</button>
//         <button onClick={() => toggleAction('microwaveDoorOpen')} className="p-2 bg-yellow-400 text-white rounded-lg">{actions.microwaveDoorOpen ? 'Close Microwave Door' : 'Open Microwave Door'}</button>

//         <button onClick={() => toggleAction('toasterOn')} className="p-2 bg-blue-700 text-white rounded-lg">{actions.toasterOn ? 'Turn Off Toaster' : 'Turn On Toaster'}</button>
//         <button onClick={() => toggleAction('breadInToaster')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.breadInToaster ? 'Remove Bread' : 'Insert Bread'}</button>

//         <button onClick={() => toggleAction('blenderOn')} className="p-2 bg-green-700 text-white rounded-lg">{actions.blenderOn ? 'Turn Off Blender' : 'Turn On Blender'}</button>
//         <button onClick={() => toggleAction('blenderLidOn')} className="p-2 bg-green-500 text-white rounded-lg">{actions.blenderLidOn ? 'Remove Lid' : 'Put Lid On'}</button>

//         <button onClick={() => toggleAction('kettleOn')} className="p-2 bg-red-700 text-white rounded-lg">{actions.kettleOn ? 'Turn Off Kettle' : 'Turn On Kettle'}</button>
//         <button onClick={() => toggleAction('kettleFilled')} className="p-2 bg-red-500 text-white rounded-lg">{actions.kettleFilled ? 'Empty Kettle' : 'Fill Kettle'}</button>

//         <button onClick={() => toggleAction('lightsOn')} className="p-2 bg-purple-700 text-white rounded-lg">{actions.lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}</button>
//       </div>
//     </div>
//   );
// }

//CODE 6
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     faucetOn: false,
//     stoveOn: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//     sitting: false,
//   });

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   return (
//     <div>
//         <Navbar />
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 hide-on-phone">
//             <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

//             {/* Kitchen Scene */}
//             <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">

//                 {/* Fridge */}
//                 <motion.img 
//                 src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
//                 alt="Fridge"
//                 className="absolute top-12 left-10 w-40 h-auto kitchen-item"
//                 animate={{ x: actions.fridgeOpen ? 20 : 0 }}
//                 onClick={() => toggleAction('fridgeOpen')}
//                 />

//                 {/* Faucet */}
//                 <motion.img 
//                     src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
//                     alt="Faucet" 
//                     className="absolute top-28 left-80 w-20 h-auto kitchen-item"
//                     animate={{ rotate: actions.faucetOn ? 45 : 0 }}
//                     onClick={() => toggleAction('faucetOn')}
//                 />

//                 {/* Lights */}
//                 <motion.img 
//                 src={actions.lightsOn ? '/lights-on.png' : '/lights-off.png'} 
//                 alt="Kitchen Lights"
//                 className="absolute top-28 left-[calc(96px+350px)] w-40 h-auto kitchen-item"
//                 animate={{ scale: actions.lightsOn ? 1.1 : 1 }}
//                 onClick={() => toggleAction('lightsOn')}
//                 />

//                 {/* Oven door */}
//                 <motion.img 
//                 src={actions.ovenDoorOpen ? '/oven-door-open.png' : '/oven-door-closed.png'} 
//                 alt="Oven Door"
//                 className="absolute top-24 left-[calc(96px+570px)] w-40 h-auto kitchen-item"
//                 animate={{ rotate: actions.ovenDoorOpen ? 20 : 0 }}
//                 onClick={() => toggleAction('ovenDoorOpen')}
//                 />

//                 {/* Microwave ON/OFF */}
//                 <motion.img 
//                 src={actions.microwaveOn ? '/microwave-on.png' : '/microwave-off.png'} 
//                 alt="Microwave"
//                 className="absolute top-[calc(310px)] right-600 w-40 h-auto ml-40 kitchen-item"
//                 animate={{ scale: actions.microwaveOn ? 1.1 : 1 }}
//                 onClick={() => toggleAction('microwaveOn')}
//                 />
                
//                 {/* Microwave door OPEN/CLOSED */}
//                 <motion.img 
//                 src={actions.microwaveDoorOpen ? '/microwave-door-open.png' : '/microwave-door-closed.png'} 
//                 alt="Microwave Door"
//                 className="absolute top-[calc(350px)] right-14 w-40 h-auto kitchen-item"
//                 animate={{ rotate: actions.microwaveDoorOpen ? 20 : 0 }}
//                 onClick={() => toggleAction('microwaveDoorOpen')}
//                 />

//                 {/* Blender Lid ON/OFF
//                 <motion.img 
//                 src={actions.blenderLidOn ? '/blender-lid-on.png' : '/blender-lid-off.png'} 
//                 alt="Blender Lid"
//                 className="absolute bottom-[calc(35px)] left-80 w-40 h-auto kitchen-item"
//                 animate={{ rotate: actions.blenderLidOn ? 10 : 0 }}
//                 onClick={() => toggleAction('blenderLidOn')}
//                 /> */}
            
//                 {/* Character */}
//                 <motion.img
//                 src="/character.png"
//                 alt="Character"
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-auto kitchen-item"
//                 animate={{ y: actions.sitting ? 30 : 0 }}
//                 /> 


//                 {/* Stove */}
//                 <motion.img
//                     src={actions.stoveOn ? '/turnonstove.png' : '/turnoffstove.png'}
//                     alt="Stove"
//                     className="absolute bottom-[calc(380px)] right-10 w-24 h-auto cursor-pointer kitchen-item"
//                     onClick={() => toggleAction('stoveOn')}
//                 />
//             </div>
    

//             {/* Action Buttons */}
//             <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto mr-[calc(10px)] ml-[calc(20px)] mb-[calc(30px)] justify-content: center">
//                 <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
//                 <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-green-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
//                 <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
//                 <button onClick={() => toggleAction('ovenDoorOpen')} className="p-2 bg-gray-600 text-white rounded-lg">{actions.ovenDoorOpen ? 'Close Oven Door' : 'Open Oven Door'}</button>
//                 <button onClick={() => toggleAction('microwaveOn')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.microwaveOn ? 'Turn Off Microwave' : 'Turn On Microwave'}</button>
//                 <button onClick={() => toggleAction('microwaveDoorOpen')} className="p-2 bg-yellow-700 text-white rounded-lg">{actions.microwaveDoorOpen ? 'Close Microwave Door' : 'Open Microwave Door'}</button>
//                 <button onClick={() => toggleAction('lightsOn')} className="p-2 bg-purple-600 text-white rounded-lg">{actions.lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}</button>
//             </div>
//         </div>
//         <style jsx>{`
//         .grid {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 1rem;
//             margin-top: 1.5rem;
//         }

//         button {
//             padding: 0.75rem 1.5rem;
//             font-size: 1.125rem;
//             font-weight: bold;
//             color: white;
//             border: none;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//             transform: scale(1.1);
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//             opacity: 0.5;
//             cursor: not-allowed;
//         }

//         .absolute {
//             position: absolute;
//         }

//         .top-12 { top: 12px; }
//         .top-28 { top: 28px; }
//         .left-10 { left: 10px; }
//         .left-80 { left: 80px; }
//         .left-[calc(96px+350px)] { left: calc(96px + 350px); }
//         .left-[calc(96px+550px)] { left: calc(96px + 550px); }
//         .right-[calc(880px)] { right: calc(880px); }
//         .bottom-[calc(35px)] { bottom: 35px; }
//         .bottom-0 { bottom: 0; }
//         .w-40 { width: 10rem; }
//         .w-20 { width: 5rem; }
//         .w-24 { width: 6rem; }
//         .w-full { width: 100%; }
//         .h-auto { height: auto; }
//         .cursor-pointer { cursor: pointer; }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//             .grid {
//             grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
//             }

//             .top-12 {
//             top: 10px;
//             }

//             .top-28 {
//             top: 20px;
//             }

//             .left-80 {
//             left: 40px;
//             }

//             .left-[calc(96px+350px)] {
//             left: 40px;
//             }

//             .w-40 {
//             width: 8rem;
//             }

//             .w-24 {
//             width: 5rem;
//             }

//             button {
//             font-size: 1rem; /* Slightly smaller buttons */
//             padding: 0.5rem 1rem; /* Adjust button padding */
//             }
//         }

//         @media (max-width: 768px) {
//             .grid {
//             grid-template-columns: 1fr; /* Mobile: 1 column */
//             }

//             .top-12 {
//             top: 8px;
//             }

//             .top-28 {
//             top: 15px;
//             }

//             .left-80 {
//             left: 20px;
//             }

//             .left-[calc(96px+350px)] {
//             left: 20px;
//             }

//             .w-40 {
//             width: 6rem;
//             }

//             .w-24 {
//             width: 4rem;
//             }

//             button {
//             font-size: 0.875rem; /* Smaller buttons */
//             padding: 0.5rem 0.75rem; /* Adjust button padding */
//             }
//         }
//          /* Phone (480px and below) */
//         @media (max-width: 480px) {
//             .hide-on-phone {
//                 display: none;
//             }
//         }
//     `}</style>
        
//     </div>
//   );
// }


//CODE 7 PICTIONARY 1
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [actions, setActions] = useState({
//     // Same state for actions...
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [zoomedImage, setZoomedImage] = useState(null);
//   const imagesPerPage = 6;

//   const toggleAction = (item, type) => {
//     // Same toggle action code...
//   };

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools',
//   ];

//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   const items = {
//     // Same items object...
//   };

//   const filteredItems = searchQuery
//     ? items[category].filter((item) =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : items[category] || [];

//   const currentItems = filteredItems.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(filteredItems.length / imagesPerPage);

//   // Listen for keyboard events
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [totalPages]);

//   const handleImageClick = (itemName) => {
//     setZoomedImage(itemName);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex flex-col space-y-4 p-6">
//           {/* Alphabet Section */}
//           <div className="flex space-x-4">
//             {alphabet.map((letter) => (
//               <button
//                 key={letter}
//                 className={`p-2 bg-blue-500 text-white rounded-lg ${category.startsWith(letter) ? 'bg-blue-700' : ''}`}
//                 onClick={() => {
//                   setCategory(letter);
//                   setCurrentPage(0);
//                 }}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 mt-4 border rounded-lg"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center w-[800px] h-[600px] bg-white p-6 border rounded-lg shadow-md">
//           {/* Whiteboard Section */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full h-[500px] justify-items-center place-items-center">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutOn`];
//               return (
//                 <motion.img
//                   key={index}
//                   src={`/${keyBase}-${actionState ? 'on' : 'off'}.png`}
//                   alt={item.name}
//                   className={`w-[150px] h-[150px] object-contain`}
//                   onClick={() => handleImageClick(item.name)}
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               );
//             })}
//           </div>

//           {/* Slide Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutOn`];
//               let actionLabel = actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`;
//               return (
//                 <button
//                   key={index}
//                   className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 >
//                   {actionLabel}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 8 PICTIONARY 2
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [actions, setActions] = useState({
//     // Same state for actions...
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [zoomedImage, setZoomedImage] = useState(null);
//   const imagesPerPage = 6;

//   const toggleAction = (item, type) => {
//     // Same toggle action code...
//   };

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools',
//   ];

//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   const items = {
//     // Same items object...
//   };

//   // Ensure that items[category] is an array before filtering
//   const filteredItems = searchQuery
//     ? Array.isArray(items[category]) 
//       ? items[category].filter((item) =>
//           item.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       : []  // Fallback to an empty array if items[category] is not an array
//     : Array.isArray(items[category])
//     ? items[category]
//     : []; // Fallback to an empty array if items[category] is not an array

//   const currentItems = filteredItems.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(filteredItems.length / imagesPerPage);

//   // Listen for keyboard events
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [totalPages]);

//   const handleImageClick = (itemName) => {
//     setZoomedImage(itemName);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex flex-col items-center space-y-6 p-6">
//           {/* Alphabet Section */}
//           <div className="flex space-x-4 mb-6">
//             {alphabet.map((letter) => (
//               <button
//                 key={letter}
//                 className={`p-2 bg-blue-500 text-white rounded-lg ${category.startsWith(letter) ? 'bg-blue-700' : ''}`}
//                 onClick={() => {
//                   setCategory(letter);
//                   setCurrentPage(0);
//                 }}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Search Bar */}
//           {/* <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 mt-4 border rounded-lg"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           /> */}
//            {/* Search Bar */}
//           <div className="flex w-full max-w-xs">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="p-2 border rounded-lg w-full"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* <div className="flex flex-col items-center justify-center  w-[800px] h-[600px] bg-white p-6 border rounded-lg shadow-md"> */}
//         {/* <div className="flex flex-col items-center justify-center w-full max-w-full h-[600px] bg-white p-6 border rounded-lg shadow-md mt-6"> */}
//         <div className="flex flex-col items-center justify-center w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md mt-6">

//           {/* Whiteboard Section */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full h-[500px] justify-items-center place-items-center px-16">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutOn`];
//               return (
//                 <motion.img
//                   key={index}
//                   // src={`/${keyBase}-${actionState ? 'on' : 'off'}.png`}
//                   src={`/${keyBase}.png`}  // Only using keyBase for the file name
//                   alt={item.name}
//                   className={`w-[150px] h-[150px] object-contain`}
//                   // onClick={() => handleImageClick(item.name)}
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               );
//             })}
//           </div>

//           {/* Slide Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>

//           {/* Action Buttons */}
//           {/* <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutOn`];
//               let actionLabel = actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`;
//               return (
//                 <button
//                   key={index}
//                   className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 >
//                   {actionLabel}
//                 </button>
//               );
//             })}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 3 PICTIONARY 3
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const imagesPerPage = 10;

//   // Alphabet for filtering
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   // Sample list of image names. Replace this with your actual data or dynamically load from a source.
//   const allImages = [
//     'apple_0', 'apple_1', 'ball_0', 'barber_0', 'barber_1', 'cat_0', 'car_1', 'dog_0', 
//     'door_1', 'elephant_0', 'fan_0', 'fish_1', 'giraffe_0', 'hat_0', 'icecream_0',
//     // Add more image names here...
//   ];

//   // Filter images by search query or selected alphabet letter
//   const filteredImages = allImages.filter(image => {
//     if (searchQuery) {
//       return image.toLowerCase().includes(searchQuery.toLowerCase());
//     }
//     return true;
//   });

//   // Paginate the filtered images
//   const currentImages = filteredImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
//       }
//     };
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [totalPages]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

//         {/* Alphabet Buttons */}
//         <div className="flex flex-wrap justify-center space-x-2 mb-6">
//           {alphabet.map((letter) => (
//             <button
//               key={letter}
//               className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//               onClick={() => {
//                 setSearchQuery(letter.toLowerCase());  // Filter by letter
//                 setCurrentPage(0);
//               }}
//             >
//               {letter}
//             </button>
//           ))}
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-xs mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 border rounded-lg w-full"
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(0);
//             }}
//           />
//         </div>

//         {/* Whiteboard */}
//         <div className="w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md">
//           <div className="grid grid-cols-5 gap-4 w-full h-full justify-items-center">
//             {currentImages.map((image, index) => (
//               <motion.img
//                 key={index}
//                 src={`/${image}.png`}  // Assuming your images are in /public directory
//                 alt={image}
//                 className="w-[150px] h-[150px] object-contain"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.3 }}
//               />
//             ))}
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 4 PICTIONARY 4 IT WORKS GREAT FOR FILES 
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLetter, setSelectedLetter] = useState('');
//   const imagesPerPage = 10;

//   // Alphabet for filtering
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   // Sample list of image names. Replace this with your actual data.
//   const allImages = [
//     'apple_0', 'apple_1', 'ball_0', 'barber_0', 'barber_1', 'cat_0', 'car_1', 
//     'dog_0', 'door_1', 'elephant_0', 'fan_0', 'fish_1', 'giraffe_0', 
//     'hat_0', 'icecream_0', 'ink_1', 'jacket_0', 'kite_0', 'lamp_1',
//     // Add more images...
//   ];

//   // Filtering logic
//   const filteredImages = allImages.filter(image => {
//     const baseName = image.split('_')[0];  // Extract base name without number

//     if (searchQuery) {
//       // Search by base name, ignoring case
//       return baseName.toLowerCase().includes(searchQuery.toLowerCase());
//     }

//     if (selectedLetter) {
//       // Show images starting with the selected letter
//       return baseName.charAt(0).toLowerCase() === selectedLetter.toLowerCase();
//     }

//     return true;  // Show all images if no search or letter selected
//   });

//   // Paginate the filtered images
//   const currentImages = filteredImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
//       }
//     };
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [totalPages]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

//         {/* Alphabet Buttons */}
//         <div className="flex flex-wrap justify-center space-x-2 mb-6">
//           {alphabet.map((letter) => (
//             <button
//               key={letter}
//               className={`p-2 rounded-lg ${
//                 selectedLetter === letter
//                   ? 'bg-blue-700 text-white'
//                   : 'bg-blue-500 text-white hover:bg-blue-700'
//               }`}
//               onClick={() => {
//                 setSelectedLetter(letter);
//                 setSearchQuery('');  // Clear search when selecting a letter
//                 setCurrentPage(0);
//               }}
//             >
//               {letter}
//             </button>
//           ))}
//           {/* Reset Button */}
//           <button
//             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 ml-4"
//             onClick={() => {
//               setSelectedLetter('');
//               setSearchQuery('');
//               setCurrentPage(0);
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-xs mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 border rounded-lg w-full"
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setSelectedLetter('');  // Clear letter filter when typing search
//               setCurrentPage(0);
//             }}
//           />
//         </div>

//         {/* Whiteboard */}
//         {/* <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md"> */}
//         <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md flex items-center justify-center">
//         {/* <div className="w-full max-w-[1800px] h-auto bg-white p-6 border rounded-lg shadow-md"> */}
 
//           {/* <div className="grid grid-cols-5 gap-4 w-full h-full justify-items-center"> */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-full justify-items-center content-center">
//             {currentImages.length > 0 ? (
//               currentImages.map((image, index) => (
//                 <motion.img
//                   key={index}
//                   src={`/${image}.png`}  // Assuming images are in /public directory
//                   alt={image}
//                   // className="w-[150px] h-[150px] object-contain"
//                   className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto object-contain"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               ))
//             ) : (
//               <p className="text-center col-span-5 text-gray-500">No images found.</p>
//             )}
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE REFERENCE
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLetter, setSelectedLetter] = useState('');
//   const imagesPerPage = 10;

//   // Alphabet for filtering
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   // Define a flat list of image names (all stored in a single folder)
//   const allImages = [
//     'apple_0', 'apple_1', 'ball_0', 'barber_0', 'cat_0', 'car_1', 
//     'dog_0', 'door_1', 'elephant_0', 'fan_0', 'fish_1', 'giraffe_0', 
//     'hat_0', 'icecream_0', 'ink_1', 'jacket_0', 'kite_0', 'lamp_1',
//     // Add more images as needed
//   ];

//   // Function to generate the Google Drive image URL (all images are in the same folder)
//   const generateImageUrl = (imageName) => {
//     const baseUrl = 'https://drive.google.com/uc?id=';
//     const fileId = imageName; // Use the image name as the file ID (after uploading to Google Drive)
//     return `${baseUrl}${fileId}`;
//   };

//   // Add Google Drive URL to each image
//   const imagesWithUrls = allImages.map((image) => ({
//     name: image,
//     url: generateImageUrl(image)
//   }));

//   // Filtering logic
//   const filteredImages = imagesWithUrls.filter(image => {
//     const baseName = image.name.split('_')[0];  // Extract base name without number

//     if (searchQuery) {
//       // Search by base name, ignoring case
//       return baseName.toLowerCase().includes(searchQuery.toLowerCase());
//     }

//     if (selectedLetter) {
//       // Show images starting with the selected letter
//       return baseName.charAt(0).toLowerCase() === selectedLetter.toLowerCase();
//     }

//     return true;  // Show all images if no search or letter selected
//   });

//   // Paginate the filtered images
//   const currentImages = filteredImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
//       }
//     };
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [totalPages]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

//         {/* Alphabet Buttons */}
//         <div className="flex flex-wrap justify-center space-x-2 mb-6">
//           {alphabet.map((letter) => (
//             <button
//               key={letter}
//               className={`p-2 rounded-lg ${
//                 selectedLetter === letter
//                   ? 'bg-blue-700 text-white'
//                   : 'bg-blue-500 text-white hover:bg-blue-700'
//               }`}
//               onClick={() => {
//                 setSelectedLetter(letter);
//                 setSearchQuery('');  // Clear search when selecting a letter
//                 setCurrentPage(0);
//               }}
//             >
//               {letter}
//             </button>
//           ))}
//           {/* Reset Button */}
//           <button
//             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 ml-4"
//             onClick={() => {
//               setSelectedLetter('');
//               setSearchQuery('');
//               setCurrentPage(0);
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-xs mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 border rounded-lg w-full"
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setSelectedLetter('');  // Clear letter filter when typing search
//               setCurrentPage(0);
//             }}
//           />
//         </div>

//         {/* Whiteboard */}
//         <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md flex items-center justify-center">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-full justify-items-center content-center">
//             {currentImages.length > 0 ? (
//               currentImages.map((image, index) => (
//                 <motion.img
//                   key={index}
//                   src={image.url}  // Use the Google Drive URL
//                   alt={image.name}
//                   className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto object-contain"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               ))
//             ) : (
//               <p className="text-center col-span-5 text-gray-500">No images found.</p>
//             )}
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE FOR UNSPLASH 
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import Navbar from '../../Navbar';

// export default function Pictionary() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLetter, setSelectedLetter] = useState('');
//   const [images, setImages] = useState([]);
//   const imagesPerPage = 10;

//   // Alphabet for filtering
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   // Unsplash API Configuration
//   const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';  // Replace with your key
//   const fetchImages = async (query) => {
//     try {
//       const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//         params: { query, per_page: 50 },
//         headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` }
//       });
//       const fetchedImages = response.data.results.map(img => ({
//         name: img.alt_description || 'image',
//         url: img.urls.small
//       }));
//       setImages(fetchedImages);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   // Fetch images when search query changes
//   useEffect(() => {
//     if (searchQuery) {
//       fetchImages(searchQuery);
//     } else if (selectedLetter) {
//       fetchImages(selectedLetter);  // Fetch images starting with selected letter
//     }
//   }, [searchQuery, selectedLetter]);

//   // Paginate the images
//   const currentImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
//       }
//     };
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [totalPages]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

//         {/* Alphabet Buttons */}
//         <div className="flex flex-wrap justify-center space-x-2 mb-6">
//           {alphabet.map((letter) => (
//             <button
//               key={letter}
//               className={`p-2 rounded-lg ${
//                 selectedLetter === letter
//                   ? 'bg-blue-700 text-white'
//                   : 'bg-blue-500 text-white hover:bg-blue-700'
//               }`}
//               onClick={() => {
//                 setSelectedLetter(letter);
//                 setSearchQuery('');
//                 setCurrentPage(0);
//               }}
//             >
//               {letter}
//             </button>
//           ))}
//           <button
//             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 ml-4"
//             onClick={() => {
//               setSelectedLetter('');
//               setSearchQuery('');
//               setImages([]);
//               setCurrentPage(0);
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-xs mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 border rounded-lg w-full"
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setSelectedLetter('');
//               setCurrentPage(0);
//             }}
//           />
//         </div>

//         {/* Whiteboard */}
//         <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md flex items-center justify-center">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-full justify-items-center content-center">
//             {currentImages.length > 0 ? (
//               currentImages.map((image, index) => (
//                 <motion.img
//                   key={index}
//                   src={image.url}
//                   alt={image.name}
//                   className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto object-contain"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               ))
//             ) : (
//               <p className="text-center col-span-5 text-gray-500">No images found.</p>
//             )}
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// Pexels API (Optional):
// If you prefer Pexels, replace the axios.get call with:

// const response = await axios.get(`https://api.pexels.com/v1/search`, {
//   params: { query, per_page: 50 },
//   headers: { Authorization: `YOUR_PEXELS_API_KEY` }
// });


//CODE PEXELS WORKS ALMOST ENTIRELY
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../../Navbar';

export default function Pictionary() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [images, setImages] = useState([]);
  const imagesPerPage = 10;

  // Alphabet for filtering
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Pexels API Configuration
  const PEXELS_API_KEY = 'UX8UiSfJmY75XqZ5axEgXv6W1UvAD7shpRSJloku68PAZUpLn5K3BXMX';  // Replace with your Pexels API key

  // const fetchImages = async (query) => {
  //   try {
  //     const response = await axios.get('https://api.pexels.com/v1/search', {
  //       params: { query, per_page: 50 },
  //       headers: { Authorization: PEXELS_API_KEY }
  //     });

  //     // Pexels API returns images in response.data.photos
  //     const fetchedImages = response.data.photos.map(img => ({
  //       name: img.alt || 'image',
  //       url: img.src.medium  // Use medium size for faster loading
  //     }));

  //     setImages(fetchedImages);
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //   }
  // };
  // const fetchImages = async (query) => {
  //   try {
  //     const response = await axios.get('https://api.pexels.com/v1/search', {
  //       params: { query: `${query} objects`, per_page: 50 },  // Append 'objects' to broaden search
  //       headers: { Authorization: PEXELS_API_KEY }
  //     });
  
  //     const fetchedImages = response.data.photos.map(img => ({
  //       name: img.alt || 'image',
  //       url: img.src.medium
  //     }));
  
  //     if (fetchedImages.length === 0) {
  //       // Fallback search if no images are found
  //       const fallbackResponse = await axios.get('https://api.pexels.com/v1/search', {
  //         params: { query: 'random objects', per_page: 50 },
  //         headers: { Authorization: PEXELS_API_KEY }
  //       });
  
  //       const fallbackImages = fallbackResponse.data.photos.map(img => ({
  //         name: img.alt || 'image',
  //         url: img.src.medium
  //       }));
  
  //       setImages(fallbackImages);
  //     } else {
  //       setImages(fetchedImages);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //   }
  // };

  // const fetchImages = async (query) => {
  //   try {
  //     // Fetch images from Pexels (without a specific search term, we are getting random images)
  //     const response = await axios.get('https://api.pexels.com/v1/search', {
  //       params: { query: 'objects', per_page: 50 },
  //       headers: { Authorization: PEXELS_API_KEY }
  //     });
  
  //     // Filter images whose file name or description (alt text) begins with the selected letter
  //     const filteredImages = response.data.photos.filter(img => {
  //       const fileName = img.src.original.split('/').pop(); // Extract the file name from the URL
  //       return fileName.toUpperCase().startsWith(query.toUpperCase()); // Match the first letter
  //     }).map(img => ({
  //       name: img.alt || 'image',
  //       url: img.src.medium
  //     }));
  
  //     if (filteredImages.length === 0) {
  //       // Fallback: if no images found, use random images
  //       const fallbackResponse = await axios.get('https://api.pexels.com/v1/search', {
  //         params: { query: 'random objects', per_page: 50 },
  //         headers: { Authorization: PEXELS_API_KEY }
  //       });
  
  //       const fallbackImages = fallbackResponse.data.photos.map(img => ({
  //         name: img.alt || 'image',
  //         url: img.src.medium
  //       }));
  
  //       setImages(fallbackImages);
  //     } else {
  //       setImages(filteredImages);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //   }
  // };

  const fetchImages = async (query) => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query, per_page: 80 }, // Use exact search term
        headers: { Authorization: PEXELS_API_KEY }
      });

      const fetchedImages = response.data.photos.map(img => ({
        name: img.alt || 'image',
        url: img.src.medium
      }));

      if (fetchedImages.length === 0) {
        // Fallback: if no images found, use random objects
        const fallbackResponse = await axios.get('https://api.pexels.com/v1/search', {
          params: { query: 'objects', per_page: 50 },
          headers: { Authorization: PEXELS_API_KEY }
        });

        const fallbackImages = fallbackResponse.data.photos.map(img => ({
          name: img.alt || 'image',
          url: img.src.medium
        }));

        setImages(fallbackImages);
      } else {
        setImages(fetchedImages);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  
  
  

  // Fetch images when search query or selected letter changes
  useEffect(() => {
    if (searchQuery) {
      fetchImages(searchQuery);
    } else if (selectedLetter) {
      fetchImages(selectedLetter);
    }
  }, [searchQuery, selectedLetter]);

  // Paginate the images
  const currentImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (event.key === 'ArrowRight') {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalPages]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        
        {/* Alphabet Buttons */}
        <div className="flex flex-wrap justify-center space-x-2 mb-6">
          {alphabet.map((letter) => (
            <button
              // key={letter}
              // className={`p-2 rounded-lg ${
              //   selectedLetter === letter
              //     ? 'bg-blue-700 text-white'
              //     : 'bg-blue-500 text-white hover:bg-blue-700'
              // }`}
              onClick={() => {
                setSelectedLetter(letter);
                setSearchQuery('');
                setCurrentPage(0);
              }}
            >
              {/* {letter} */}
            </button>
          ))}
          {/* <button
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 ml-4 items-center"
            onClick={() => {
              setSelectedLetter('');
              setSearchQuery('');
              setImages([]);
              setCurrentPage(0);
            }}
          >
            Reset
          </button> */}
          {/* <button
            className="p-2 bg-transparent text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => {
              setSelectedLetter('');
              setSearchQuery('');
              setImages([]);
              setCurrentPage(0);
            }}
          >
            Reset
          </button> */}

        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-xs mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg w-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedLetter('');
              setCurrentPage(0);
            }}
          />
        </div>

        {/* Whiteboard */}
        {/* <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md flex items-center justify-center"> */}
        <div className="w-full max-w-[1800px] h-[600px] bg-white p-6 border rounded-lg shadow-md relative flex items-center justify-center">
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-full justify-items-center content-center"> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-full justify-items-center content-center min-h-full">
            {currentImages.length > 0 ? (
              currentImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.url}
                  alt={image.name}
                  // className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto object-contain"
                  // className="w-full h-auto object-contain max-w-[150px] max-h-[150px]" // Ensures image is contained within max size and scales well
                  className="w-full h-full object-contain max-w-[150px] max-h-[150px] sm:max-w-[120px] sm:max-h-[120px] md:max-w-[120px] md:max-h-[160px]"
                  
                  
                  whileHover={{ scale: 4 }}
                  transition={{ duration: 0.3 }}
                />
              ))
            ) : (
              <p className="text-center col-span-5 text-gray-500">No images found.</p>
            )}
          </div>

          {/* Pagination Dots */}
          <div 
          // className="flex justify-center mt-4 space-x-2">
          // className="flex space-x-2 sm:static sm:mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:transform-none sm:left-auto">
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentPage(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

