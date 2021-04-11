'use strict';

let working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','7:00pm'];

//Seatle

const seatle ={
  minCust:23,
  maxCust:65,
  avgCookPerHr:6.3,
  randNum:[],
  numOfCookies:[],

  random:function () {
    return Math.random()*(this.maxCust-this.minCust)+this.minCust;
  },

  cookieNum:function () {
    for (let i = 0; i < working_hours.length; i++) {
      this.randNum[i]=this.random();
      this.numOfCookies[i]=Math.floor(this.randNum[i]*this.avgCookPerHr);

    }
  }

};
seatle.cookieNum();

let cont=document.getElementById('container');
let header=document.createElement('h1');

cont.appendChild(header);
header.textContent='Seatle';


let unorderedList=document.createElement('ul');
cont.appendChild(unorderedList);


for (let i = 0; i < working_hours.length; i++) {
  let list=document.createElement('li');
  unorderedList.appendChild(list);
  list.textContent=working_hours[i]+'   : '+seatle.numOfCookies[i];

}

