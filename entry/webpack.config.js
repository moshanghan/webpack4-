const path =require('path')
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",//单入口简写

  // entry: "./src/index.js",//单入口简写
  // entry: {
    // main1: "./src/index.js",
    // MutiEntryIndex1:"./src/MutiEntryIndex1.js",
    // MutiEntryIndex2:"./src/MutiEntryIndex2.js",
  // }
  // entry: ["./src/MutiEntryIndex1.js","./src/MutiEntryIndex2.js"]//多入口简写
};