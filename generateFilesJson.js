const fs = require("fs");
const path = require("path");

const folders = ["breaking-a-glass", "breaking-a-plate", "brushing-your-teeth", "buying-groceries", "cleaning-the-house", "decorating-a-room", 
    "drinking-milk", "drinking-tea", "driving-a-car", "eating-cereal", "eating-ice-cream", "eating-scrambled-eggs", 
    "falling-down", "feeding-the-cat", "getting-sick", "giving-a-present", "going-home", "making-coffee", "making-toast", 
    "packing-a-suitcase", "preparing-a-smoothie", "reading-a-book", "taking-a-walk", "taking-vitamins", "washing-dishes", "washing-your-hands", 
    "baking-a-cake", "building-a-sandcastle", "calling-a-friend", "helping-a-neighbor", "washing-the-car", "watching-the-soccer-game", 
    "washing-the-car", "going-to-the-dentist", "feeding-the-dog", "cooking-breakfast", "making-a-salad"]; // List your folders

folders.forEach(folder => {
  const folderPath = path.join(__dirname, "public", folder);
  const files = fs.readdirSync(folderPath)
    .filter(file => /\.(jpe?g|png)$/i.test(file))
    .sort((a, b) => {
      const aNum = parseInt(a.split('.')[0]);
      const bNum = parseInt(b.split('.')[0]);
      return aNum - bNum;
    });

  fs.writeFileSync(path.join(folderPath, "files.json"), JSON.stringify(files, null, 2));
  console.log(`Generated files.json for ${folder}`);
});
