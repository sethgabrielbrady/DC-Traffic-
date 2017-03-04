

let fileSystem = require('fs');

module.exports = function parseMachine(fileCsv){

  let parsedData = fileSystem.readFileSync(fileCsv);
  let mainArray= [];//array to hold my arrays
  let stringy = parsedData.toString();//converts to a string
  stringy = stringy.trim(); // removes white space from both sides of the new string
  let rows = stringy.split('\n');//splits it at the break

  for (let index = 0; index < rows.length; index++) {
      let stringRow = rows[index].split(',');//converts to a string
      mainArray.push(stringRow);//splits into a string and pushes it into mainArray index i

    };

//**********************************TESTING************************************
// console.log('DATA');testing
// console.log(data);//outputs buffer testing
// console.log(rows.length);//this outputs the length of row
// console.log (stringRow);
// console.log(mainArray[index]);

  mainArray.splice(0, 1); //removes index 0

  return mainArray;
}

 // parseMachine();
