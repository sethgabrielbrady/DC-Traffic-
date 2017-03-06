

let output = require('./parse.js');

module.exports = function movingViolations(month = 'jan', year = '2016'){

  let resultsObj ={};
/****************************************************************************/

  if (typeof(month) !== 'string'){
    console.log('Please enter a valid month');
    return;
  }

  if (year.length !== 4){
    console.log('Please enter a valid four-digit year');
   }

  if ((month.length > 3) && (month !== 'april')){
    month = month.slice(0,3);
  }

  month = month.toLowerCase();
  year = year.toString();


/****************************************************************************/
//let movingDC = output('./traffic-data/simple_data/moving_jan_2016.csv');//for simple data

  let filePath = './traffic-data/data/moving_'+ month + '_' + year +'.csv';
  let movingDC = output(filePath);

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
      // resultsObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      // resultsObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
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
        photoTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);//converts to a number
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

// console.log('Most violations: ', mostViolationTypes);
// console.log('Fine total: ' + '$'+fineTotal.toFixed(2));
// console.log('Fine average: ' + '$'+fineAverage.toFixed(2));
// console.log('Total photo: ' + '$'+photoTotal.toFixed(2));
// console.log('Other paid: ' + '$'+otherTotal.toFixed(2));
// console.log('Total paid: ' + '$'+totalIncome.toFixed(2));

// resultsObj.fineTotals = '$'+fineTotal.toFixed(2);
// resultsObj.otherIncome = '$'+otherTotal.toFixed(2);

resultsObj.mostCommonMovingViolation = mostViolationTypes;
resultsObj.fineAverage = '$'+fineAverage.toFixed(2);
resultsObj.photoIncome = '$'+photoTotal.toFixed(2);
resultsObj.totalIncome = '$'+totalIncome.toFixed(2);
// console.log(resultsObj);

return resultsObj;
}

// movingViolations();
