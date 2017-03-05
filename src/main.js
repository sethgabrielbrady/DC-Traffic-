

process.argv[2] == "month";
process.argv[3] == "year";

let movingData = require('./moving.js');
let movingAnalysis = movingData(process.argv[2], process.argv[3]);

let parkingData = require('./parking.js');
let parkingAnalysis = parkingData(process.argv[2], process.argv[3]);

console.log(movingData(process.argv[2], process.argv[3]));
console.log(parkingData(process.argv[2], process.argv[3]));
