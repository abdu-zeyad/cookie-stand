'use strict';

let working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','7:00pm'];

function loc(x,y,z) {
  const seatle ={
    minCust:x,
    maxCust:y,
    avgCookPerHr:z,
    randNum:[],
    numOfCookies:[],
    total:0,

    random:function () {
      return Math.random()*(this.maxCust-this.minCust)+this.minCust;
    },

    cookieNum:function () {
      for (let i = 0; i < working_hours.length; i++) {
        this.randNum[i]=this.random();
        this.numOfCookies[i]=Math.floor(this.randNum[i]*this.avgCookPerHr);
        this.total = this.total + this.numOfCookies[i];

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


  let total= document.createElement('li');
  unorderedList.appendChild(total);
  total.textContent='total number is '+ seatle.total;
}




loc(23,65,6.3);
