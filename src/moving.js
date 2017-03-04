



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



/*****************************AVERAGE FINE AMOUNTe***********************************************/
// fineamt index 10

  let fineTotal = 0;
  let fineTemp = 0;
  let fineLength = 0;

  movingDC.forEach(function fineAverage(fines) {
      // console.log(fines[10]);
      fineTemp = fines[10];
      fineTotal = fineTotal + Number(fineTemp);
      fineLength++;
  });

  let fineAverage = ((fineTotal / fineLength)).toFixed(2);
  console.log('Fine total: ',fineTotal);
  console.log('Fine average: '  + '$'+fineAverage);



/****************************TOTAL INCOME FOR PHOTO CITATIONS************************************************/
//photo index is 10
  let photoTotal = 0;
  let photoTemp = 0;
  let ticketType = 0;
  let otherTotal = 0;
  let otherTemp = 0;

  movingDC.forEach(function ticketIncome(index) {
      ticketType = index[9];//can change this to index
      if (ticketType === 'Photo'){
        photoTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
        photoTotal = photoTotal + photoTemp;
        }else{
            otherTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
            otherTotal = otherTotal + otherTemp;
          }
        });

  // let fineAverage = ((fineTotal / fineLength)).toFixed(2);
  console.log('Total photo: ',photoTotal);
  console.log('Other paid: ',otherTotal);
  let totalIncome = photoTotal + otherTotal;
  console.log('Total paid: ',totalIncome);






/****************************TESTING************************************************/
// console.log(mostTixObj);
// console.log(typeof(fineTotal));
// console.log(movingDC.length);
//console.log (ticketKeys);
// console.log(ticketTypes);
// console.log('this is the ticket key length', ticketKeys.length);





  // return answersObj
}

movingViolations();
