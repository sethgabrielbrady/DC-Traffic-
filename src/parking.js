

let output = require('./parse.js');


function parkingViolations(/*year, monthName*/){

  let resultsObj = {};

  let parkingDC = output('./traffic-data/simple_data/parking_feb_2016.csv');
  let violationObj = {};
  let otherNAme = '';
    parkingDC.forEach(function parking(ticket) {

      if ( violationObj[ticket[9]] >= 1){
             violationObj[ticket[9]] =  violationObj[ticket[9]] + 1;
          }else {
               violationObj[ticket[9]] = 1;
              }
            });

  let ticketKeys = Object.keys(violationObj);//outputs the number of properties in an objects

/****************************************************************************/

  let tempNumCont=0;
  let tempNameCont = '';
  let mostTixObj= {
        ViolationType: '',
        count: 0
      };

  for (i=0; i<(ticketKeys.length); i++){
      if ( violationObj[ticketKeys[i]] >= tempNumCont){
        tempNumCont =  violationObj[ticketKeys[i]];//property
        tempNameCont = ticketKeys[i];//key
      }

      mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
  }

  let mostCommonParkingViolation = tempNameCont;
/*****************************************************************************/

//console.log(violationObj);
// console.log(mostTixObj);
let violationTypes = ticketKeys.length;

// console.log(violationTypes);
// console.log(mostCommonParkingViolation);

resultsObj.ViolationTypes = violationTypes;
resultsObj.MostCommonViolation = mostCommonParkingViolation;

console.log(resultsObj);

  return resultsObj;
}

parkingViolations();
