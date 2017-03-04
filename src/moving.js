



// MOVING.js
// should export a single function which accepts a year and month name
//    (not a filename) as its arguments. The function must return an object with
//    the answers to the data analysis questions below.


let output = require('./parse.js');


//I need get get the function to accept a file name
function movingViolations(/*year, monthName*/){

/*****************************VARIABLES******************************************************/
  let movingDC = output('./traffic-data/simple_data/moving_jan_2016.csv');




/*****************************STORES VIOLATION TYPES INSIDE AN OBJECT***********************************************/

  let ticketTypes = {};

  movingDC.forEach(function moving(ticket) {
    // console.log([ticket[17]]);
  if (ticketTypes[ticket[17]] >= 1){
          ticketTypes[ticket[17]] = ticketTypes[ticket[17]] + 1;
        }else {
            ticketTypes[ticket[17]] = 1;
            }

          });

  let ticketKeys = Object.keys(ticketTypes);//outputs the number of properties in an objects
  /*****************************Counts Most VIolations of a Type***********************************************/
  let tempNumCont=0;
  let tempNameCont = '';
  let mostTixObj= {
        ViolationType: '',
        count: 0
      };

  for (i=0; i<(ticketKeys.length); i++){
    // console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//
      if (ticketTypes[ticketKeys[i]] >= tempNumCont){
        // console.log(tempNameCont + ':' +  tempNumCont);
        tempNumCont = ticketTypes[ticketKeys[i]];//property
        tempNameCont = ticketKeys[i];//key
      }

      mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
  }
// console.log(mostTixObj);


/*****************************AVERAGE FINE AMOUNTe***********************************************/
// What is the average fine amount? index 10
//I simply need to add all the values of index 10 together then divide by the length
// of the object, or rather array. Having the first and last indexes will be problematic
// i need to isolate index 10 and put all of that into an array or a VARIABLES


  let fineTotal = 0;
  let fineTemp = 0;
  let fineLength = 0;
  movingDC.forEach(function fineAverage(fines) {
      console.log(fines[10]);
      fineTemp = fines[10];
      fineTotal = fineTotal + Number(fineTemp);
      // console.log(fineTotal);
      // console.log(fines.length);//why is it giving me 20
      fineLength++;
      console.log(fineLength);
  });

  let fineAverage = ((fineTotal / fineLength)).toFixed(2);
  console.log(fineTotal);
  console.log(fineAverage);



/****************************TESTING************************************************/
// console.log(typeof(fineTotal));

// console.log(movingDC.length);
//console.log (ticketKeys);
// console.log(ticketTypes);
// console.log('this is the ticket key length', ticketKeys.length);





  // return answersObj
}

movingViolations();






//       What is the average fine amount?
//       What was the total income from photo citations (tickettype = "Photo")?
//       What was the total income from all moving violations?
