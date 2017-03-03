
let fileSystem = require('fs');

module.exports = function parseMachine(fileCsv){
  let parsedData = fileSystem.readFileSync(fileCsv);
  let mainArray= [];//array to hold my arrays
    // console.log("DATA");testing
    // console.log(data);//outputs buffer testing
  let stringy = parsedData.toString();//converts to a string
  let rows = stringy.split('\n');//splits it at the break
    // console.log(rows.length);//this outputs the length of rows


for (let index = 0; index < rows.length; index++) {
  let stringRow = rows[index].split(',');//converts to a string
  // console.log (stringRow);
  mainArray.push(stringRow);//splits into a string and pushes it into mainArray index i
  // console.log(mainArray[index]);
};


// console.log(mainArray[0]);
  return mainArray;
}
 // parseMachine();









// I need to seperate each line from the file into a new array...
// ...do I make seperate arrays or an array of strings. I should start by making each row into
// a seperate array. Each index of the array will hold the dif type of data. I can can then
// compare the indexs to an array with the same indexes that just hold the titles.
// So what do I do first? First I need to store each row into  a seperate array. Or possibly
// break down each row as if they were simply a string, and store thAT INTO AN ARRAY.
// I need to store each row as a string into an array. From there, I can "slice" each row, and
// store that as an array. Each of those arrays will get stored into a single array.
//
// 1)store each row, including the title row- as a string element inside an arraty.
// 2)once stored, I can pull each index and its string value. Using slice, I'll store
//     that into a new array.
// 3)using a nested for loop, Ill store that array into another array.
//
//
//
//
//
//
//
//
// // 1)store each row, including the title row- as a string element inside an arraty.
// to do that, I need to be able to pull out one single row.
// each 1 is basically a string inside and arraw already. So now I just need to pull it out temporatily
// , slice it up, put it back into an array and seperate elements, and store that array inside
// another array.
//
//row test
// console.log(rows[1]);//this successfully pulls the index of rows and displays just that row
//now let's try extracting the title row ans placing it into a a new array
//******************************************************************************************
//OLD STUFF
//
//  // console.log("OUTPUT");//STIL OUTPUTS BUFFER / THEREFORE NOT NEEDED TO CONVERT
  // let output = data; //points ot data
  // console.log(output);




  // let title = rows[0];//title is now pointing to row zero. Not really needed
  // console.log (title);
  // console.log(rows[0].length);//this will output the number of characters in title
  // let titleArFromString = title.split(','); //turns index 0 of rows, which title points to, into an array
  // let titleAr2 = rows[1].split(',');
  // console.log('this is titleArFromString');
  // console.log(titleArFromString);//outputs all the elements in the new array
  // console.log(titleArFromString.length);//correctlu outputs 20 indexes


  //NEXT
  //NEXT
  //NEXT
  //one array for each line, ie-just basically row[0] converted into titleArFromString
  //and each entry (each data value in each index) being an array of the values for that line.???
  //---does this mean each seperate value set such as OBJECTD and turning all that data into a
  //---seperate array?
  //
  // First Ill start with a yet anoher new array and use push on index 0;
  //

  // console.log('This is titleAr2');
  // console.log(titleAr2);//points and output to row 1 in
  // mainArray.push(titleArFromString);//pushes to index 0 of main array
  // mainArray.push(titleAr2); //pushes to index 1 of main array
  // console.log('this is main array');
  // console.log(mainArray);//works
