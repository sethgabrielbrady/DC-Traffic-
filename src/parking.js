

let output = require('./parse.js');


function parkingViolations(/*year, monthName*/){

  let parkingDC = output('./traffic-data/simple_data/parking_feb_2016.csv');
  let violationTypes = {};

    parkingDC.forEach(function parking(ticket) {
      // console.log( ticket[9] );
      if (violationTypes[ticket[9]] >= 1){
            violationTypes[ticket[9]] = violationTypes[ticket[9]] + 1;
          }else {
              violationTypes[ticket[9]] = 1;
              }
            });

  let ticketKeys = Object.keys(violationTypes);//outputs the number of properties in an objects

/****************************************************************************/

  let tempNumCont=0;
  let tempNameCont = '';
  let mostTixObj= {
        ViolationType: '',
        count: 0
      };

  for (i=0; i<(ticketKeys.length); i++){
    // console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//
      if (violationTypes[ticketKeys[i]] >= tempNumCont){
        // console.log(tempNameCont + ':' +  tempNumCont);
        tempNumCont = violationTypes[ticketKeys[i]];//property
        tempNameCont = ticketKeys[i];//key
      }

      mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
      mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
  }
/*****************************************************************************/

console.log(violationTypes);
console.log(mostTixObj);


  // return resultsObj
}

parkingViolations();
