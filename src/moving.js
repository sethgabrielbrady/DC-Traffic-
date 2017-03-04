

let output = require('./parse.js');

function movingViolations(/*year, monthName*/){

  let movingDC = output('./traffic-data/simple_data/moving_jan_2016.csv');
  let resultsObj= {
        ViolationType: '',
        count: 0
        };

/*****************************STORES VIOLATION TYPES INSIDE AN OBJECT***********************************************/

  let violationTypes = {};

  movingDC.forEach(function moving(ticket) {
      if (violationTypes[ticket[18]] >= 1){
          violationTypes[ticket[18]] = violationTypes[ticket[18]] + 1;
          }else {
              violationTypes[ticket[18]] = 1;
              }
      });

  let ticketKeys = Object.keys(violationTypes);//outputs the number of properties in an objects
  
/*****************************Counts Most VIolations of a Type***********************************************/

  let tempNumCont=0;
  let tempNameCont = '';

  let mostViolationTypes = 0;

  for (i=0; i<(ticketKeys.length); i++){
    // console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//
      if (violationTypes[ticketKeys[i]] >= tempNumCont){
        // console.log(tempNameCont + ':' +  tempNumCont);
        tempNumCont = violationTypes[ticketKeys[i]];//property
        tempNameCont = ticketKeys[i];//key
          }

      mostViolationTypes = tempNameCont;
      // mostViolationTypes = tempCodeCont;
      resultsObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      resultsObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
      }

/*****************************AVERAGE FINE AMOUNTe***********************************************/

  let fineTotal = 0;
  let fineTemp = 0;
  let fineLength = 0;

  movingDC.forEach(function fineAverage(fines) {
      // console.log(fines[10]);
      fineTemp = fines[10];
      fineTotal = fineTotal + Number(fineTemp);
      fineLength++;
  });

  let fineAverage = (fineTotal / fineLength);

/****************************TOTAL INCOME CITATIONS*********************************************/

  let photoTotal = 0;
  let photoTemp = 0;
  let ticketType = 0;
  let otherTotal = 0;
  let otherTemp = 0;
  let totalIncome =0;

  movingDC.forEach(function ticketIncome(index) {
      ticketType = index[9];
      if (ticketType === 'Photo'){
        photoTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
        photoTotal = photoTotal + photoTemp;
        }else{
            otherTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
            otherTotal = otherTotal + otherTemp;
            }
      totalIncome = photoTotal + otherTotal;
        });

/****************************TESTING************************************************/
// console.log(mostTixObj);
// console.log(typeof(fineTotal));
// console.log(movingDC.length);
//console.log (ticketKeys);
// console.log(ticketTypes);
// console.log('this is the ticket key length', ticketKeys.length);

//need to store all this in an object
console.log('Most violations: ', mostViolationTypes);
console.log('Fine total: ' + '$'+fineTotal.toFixed(2));
console.log('Fine average: ' + '$'+fineAverage.toFixed(2));
console.log('Total photo: ' + '$'+photoTotal.toFixed(2));
console.log('Other paid: ' + '$'+otherTotal.toFixed(2));
console.log('Total paid: ' + '$'+totalIncome.toFixed(2));

// console.log(resultsObj);
// return resultsObj
}

movingViolations();
