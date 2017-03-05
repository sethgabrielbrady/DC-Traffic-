

let output = require('./parse.js');

module.exports = function parkingViolations(month = 'jan', year = '2016'){

  let resultsObj = {};

///****************************************************************************/

  if (typeof(month) !== 'string'){
      console.log('Please enter a valid month');
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

  // let parkingDC = output('./traffic-data/simple_data/parking_feb_2016.csv');//for simple data
  let filePath= './traffic-data/data/parking_'+ month + '_' + year +'.csv';
  let parkingDC = output(filePath);

  /****************************************************************************/

//there is a bug here that is giving diff results depending on the
// index you are searching through despite that they shoudl be the same.
  let violationObj = {};
  let otherName = '';
    parkingDC.forEach(function parking(ticket) {

      if ( violationObj[ticket[10]] >= 1){
             violationObj[ticket[10]] =  violationObj[ticket[10]] + 1;
          }else {
               violationObj[ticket[10]] = 1;
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

  for (i=0; i<=(ticketKeys.length); i++){
      if (violationObj[ticketKeys[i]] >= tempNumCont){
        tempNumCont =  violationObj[ticketKeys[i]];//property
        tempNameCont = ticketKeys[i] ;//key
          }
      mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
    }

  let mostCommonParkingViolation = tempNameCont;
/*****************************************************************************/

// console.log(violationObj);
// console.log(mostTixObj);
let violationTypes = ticketKeys.length;

// console.log(violationTypes);
// console.log(mostCommonParkingViolation);

resultsObj.ViolationTypes = violationTypes;
resultsObj.MostCommonViolation = mostCommonParkingViolation;


  // console.log(resultsObj);
  return resultsObj;
}

// parkingViolations();
