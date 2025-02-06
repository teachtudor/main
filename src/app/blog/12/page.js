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
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar';

export default function Kitchen() {
  const [actions, setActions] = useState({
    fridgeOpen: false,
    faucetOn: false,
    stoveOn: false,
    ovenOn: false,
    ovenDoorOpen: false,
    microwaveOn: false,
    microwaveDoorOpen: false,
    toasterOn: false,
    breadInToaster: false,
    blenderOn: false,
    blenderLidOn: false,
    kettleOn: false,
    kettleFilled: false,
    lightsOn: false,
    sitting: false,
  });

  const toggleAction = (action) => {
    setActions(prev => ({
      ...prev,
      [action]: !prev[action],
    }));
  };

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 hide-on-phone">
            <h1 className="text-3xl font-bold mb-6">Kitchen TPR Lab</h1>

            {/* Kitchen Scene */}
            <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">

                {/* Fridge */}
                <motion.img 
                src={actions.fridgeOpen ? '/fridge-open.png' : '/fridge-closed.png'} 
                alt="Fridge"
                className="absolute top-12 left-10 w-40 h-auto kitchen-item"
                animate={{ x: actions.fridgeOpen ? 20 : 0 }}
                onClick={() => toggleAction('fridgeOpen')}
                />

                {/* Faucet */}
                <motion.img 
                    src={actions.faucetOn ? '/faucet-on.png' : '/faucet-off.png'} 
                    alt="Faucet" 
                    className="absolute top-28 left-80 w-20 h-auto kitchen-item"
                    animate={{ rotate: actions.faucetOn ? 45 : 0 }}
                    onClick={() => toggleAction('faucetOn')}
                />

                {/* Lights */}
                <motion.img 
                src={actions.lightsOn ? '/lights-on.png' : '/lights-off.png'} 
                alt="Kitchen Lights"
                className="absolute top-28 left-[calc(96px+350px)] w-40 h-auto kitchen-item"
                animate={{ scale: actions.lightsOn ? 1.1 : 1 }}
                onClick={() => toggleAction('lightsOn')}
                />

                {/* Oven door */}
                <motion.img 
                src={actions.ovenDoorOpen ? '/oven-door-open.png' : '/oven-door-closed.png'} 
                alt="Oven Door"
                className="absolute top-24 left-[calc(96px+570px)] w-40 h-auto kitchen-item"
                animate={{ rotate: actions.ovenDoorOpen ? 20 : 0 }}
                onClick={() => toggleAction('ovenDoorOpen')}
                />

                {/* Microwave ON/OFF */}
                <motion.img 
                src={actions.microwaveOn ? '/microwave-on.png' : '/microwave-off.png'} 
                alt="Microwave"
                className="absolute top-[calc(310px)] right-600 w-40 h-auto ml-40 kitchen-item"
                animate={{ scale: actions.microwaveOn ? 1.1 : 1 }}
                onClick={() => toggleAction('microwaveOn')}
                />
                
                {/* Microwave door OPEN/CLOSED */}
                <motion.img 
                src={actions.microwaveDoorOpen ? '/microwave-door-open.png' : '/microwave-door-closed.png'} 
                alt="Microwave Door"
                className="absolute top-[calc(350px)] right-14 w-40 h-auto kitchen-item"
                animate={{ rotate: actions.microwaveDoorOpen ? 20 : 0 }}
                onClick={() => toggleAction('microwaveDoorOpen')}
                />

                {/* Blender Lid ON/OFF
                <motion.img 
                src={actions.blenderLidOn ? '/blender-lid-on.png' : '/blender-lid-off.png'} 
                alt="Blender Lid"
                className="absolute bottom-[calc(35px)] left-80 w-40 h-auto kitchen-item"
                animate={{ rotate: actions.blenderLidOn ? 10 : 0 }}
                onClick={() => toggleAction('blenderLidOn')}
                /> */}
            
                {/* Character */}
                <motion.img
                src="/character.png"
                alt="Character"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-auto kitchen-item"
                animate={{ y: actions.sitting ? 30 : 0 }}
                /> 


                {/* Stove */}
                <motion.img
                    src={actions.stoveOn ? '/turnonstove.png' : '/turnoffstove.png'}
                    alt="Stove"
                    className="absolute bottom-[calc(380px)] right-10 w-24 h-auto cursor-pointer kitchen-item"
                    onClick={() => toggleAction('stoveOn')}
                />
            </div>
    

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto mr-[calc(10px)] ml-[calc(20px)] mb-[calc(30px)] justify-content: center">
                <button onClick={() => toggleAction('fridgeOpen')} className="p-2 bg-blue-500 text-white rounded-lg">{actions.fridgeOpen ? 'Close Fridge' : 'Open Fridge'}</button>
                <button onClick={() => toggleAction('faucetOn')} className="p-2 bg-green-500 text-white rounded-lg">{actions.faucetOn ? 'Turn Off Faucet' : 'Turn On Faucet'}</button>
                <button onClick={() => toggleAction('stoveOn')} className="p-2 bg-red-500 text-white rounded-lg">{actions.stoveOn ? 'Turn Off Stove' : 'Turn On Stove'}</button>
                <button onClick={() => toggleAction('ovenDoorOpen')} className="p-2 bg-gray-600 text-white rounded-lg">{actions.ovenDoorOpen ? 'Close Oven Door' : 'Open Oven Door'}</button>
                <button onClick={() => toggleAction('microwaveOn')} className="p-2 bg-yellow-500 text-white rounded-lg">{actions.microwaveOn ? 'Turn Off Microwave' : 'Turn On Microwave'}</button>
                <button onClick={() => toggleAction('microwaveDoorOpen')} className="p-2 bg-yellow-700 text-white rounded-lg">{actions.microwaveDoorOpen ? 'Close Microwave Door' : 'Open Microwave Door'}</button>
                <button onClick={() => toggleAction('lightsOn')} className="p-2 bg-purple-600 text-white rounded-lg">{actions.lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}</button>
            </div>
        </div>
        <style jsx>{`
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 1.5rem;
        }

        button {
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem;
            font-weight: bold;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        button:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .absolute {
            position: absolute;
        }

        .top-12 { top: 12px; }
        .top-28 { top: 28px; }
        .left-10 { left: 10px; }
        .left-80 { left: 80px; }
        .left-[calc(96px+350px)] { left: calc(96px + 350px); }
        .left-[calc(96px+550px)] { left: calc(96px + 550px); }
        .right-[calc(880px)] { right: calc(880px); }
        .bottom-[calc(35px)] { bottom: 35px; }
        .bottom-0 { bottom: 0; }
        .w-40 { width: 10rem; }
        .w-20 { width: 5rem; }
        .w-24 { width: 6rem; }
        .w-full { width: 100%; }
        .h-auto { height: auto; }
        .cursor-pointer { cursor: pointer; }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .grid {
            grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
            }

            .top-12 {
            top: 10px;
            }

            .top-28 {
            top: 20px;
            }

            .left-80 {
            left: 40px;
            }

            .left-[calc(96px+350px)] {
            left: 40px;
            }

            .w-40 {
            width: 8rem;
            }

            .w-24 {
            width: 5rem;
            }

            button {
            font-size: 1rem; /* Slightly smaller buttons */
            padding: 0.5rem 1rem; /* Adjust button padding */
            }
        }

        @media (max-width: 768px) {
            .grid {
            grid-template-columns: 1fr; /* Mobile: 1 column */
            }

            .top-12 {
            top: 8px;
            }

            .top-28 {
            top: 15px;
            }

            .left-80 {
            left: 20px;
            }

            .left-[calc(96px+350px)] {
            left: 20px;
            }

            .w-40 {
            width: 6rem;
            }

            .w-24 {
            width: 4rem;
            }

            button {
            font-size: 0.875rem; /* Smaller buttons */
            padding: 0.5rem 0.75rem; /* Adjust button padding */
            }
        }
         /* Phone (480px and below) */
        @media (max-width: 480px) {
            .hide-on-phone {
                display: none;
            }
        }
    `}</style>
        
    </div>
  );
}






