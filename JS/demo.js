
let working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','7:00pm'];
let locationss =['seatle','tokyo','Dubai','Paris','Lima'];
let min =[23,3,11,20,2];
let max =[65,24,38,38,16];
let avg =[6.3,1.2,3.7,2.3,4.6];



let arrOfobjects=[];

function Shop (location,minCust,maxCust,avgCookPerHr) {
  this.location=location,
  this.minCust=minCust,
  this.maxCust=maxCust,
  this.avgCookPerHr=avgCookPerHr,
  this.randNum = [],
  this.numOfCookies=[],

  this.random = function() {
    return Math.random()*(this.maxCust-this.minCust)+this.minCust;},


  this.cookieNum = function() {
    for (let i = 0; i < working_hours.length; i++) {
      this.randNum[i]=this.random();
      this.numOfCookies[i]=Math.floor(this.randNum[i]*this.avgCookPerHr);
    }
  };
  arrOfobjects.push(this);

}



let seatle = new Shop(locationss[0],min[0],max[0],avg[0]);


console.log(seatle);
