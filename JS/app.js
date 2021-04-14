'use strict';

<<<<<<< HEAD
let container = document.getElementById('container');

let table =document.createElement('table');
container.appendChild(table);

=======
let hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let locationsa =['seatle','tokyo','Dubai','Paris','Lima'];
let min =[23,3,11,20,2];
let max =[65,24,38,38,16];
let avg =[6.3,1.2,3.7,2.3,4.6];


function loc(x,y,z,b) {
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
      for (let i = 0; i < hours.length; i++) {
        this.randNum[i]=this.random();
        this.numOfCookies[i]=Math.floor(this.randNum[i]*this.avgCookPerHr);
        this.total = this.total + this.numOfCookies[i];

      }
    }
>>>>>>> main

function headerRow(){
  let firstRow=document.createElement('tr');
  table.appendChild(firstRow);

  let emptyCell = document.createElement('th');
  firstRow.appendChild(emptyCell);

  let th = null;
  for (let i = 0; i <= hours.length; i++) {
    th = document.createElement('th');
    firstRow.appendChild(th);
    th.textContent=hours[i];
  }
  let dailyhours = document.createElement('th');
  firstRow.appendChild(dailyhours);
  dailyhours.textContent=('daily hour');

}

const hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let branchs = [];
function Shop (location,minCust,maxCust,avgCookiesPercust){
  this.Location=location;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesPercust=avgCookiesPercust;
  this.custNumHourly=[];
  this.cookisPerHour=[];
  this.totalCookies=0;
  branchs.push(this);

}
// get random number of customer and push it to the first array.
Shop.prototype.randomCust_f=function(){
  for (let i=0;i<hours.length;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};
//  this the number of the cookies per hour( the customer * avg ) and the total number per a day.
// push into array cookies per hour and in value total cookies
Shop.prototype.cookiesHourly_f=function(){
  for (let i=0;i<hours.length;i++){
    this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]));
    this.totalCookies=this.totalCookies+this.cookisPerHour[i];

<<<<<<< HEAD
  }
=======
  for (let i = 0; i < hours.length; i++) {
    let list=document.createElement('li');
    unorderedList.appendChild(list);
    list.textContent=hours[i]+'   : '+seatle.numOfCookies[i];
>>>>>>> main

};
// this function is used to display the table headers on html which is locations (th), and cells which is td.(creat a colum)
Shop.prototype.render_f=function(){

  let rawData = document.createElement('tr');
  table.appendChild(rawData);
  let LocaName = document.createElement('th');
  rawData.appendChild(LocaName);
  LocaName.textContent=this.Location;
  let td = null;
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    rawData.appendChild(td);
    td.textContent=this.cookisPerHour[i];
  }
  let cell = document.createElement('td');
  rawData.appendChild(cell);
  cell.textContent = this.totalCookies;
};
// this function is just for help and collecting and excecuting other functions.
Shop.prototype.calc=function(){
  this.randomCust_f();
  this.cookiesHourly_f();
  this.render_f();

};
// this function is used to creat the first row which is the hours.


let seattle = new Shop('Seattle',23,65,6.3);
let tokyo = new Shop('Tokyo',3,24,1.2);
let dubai = new Shop('Dubai',11,38,3.7);
let paris = new Shop('Paris',20,38,2.3);
let lima = new Shop('Lima',23,65,6.3);

headerRow();


seattle.calc();
tokyo.calc();
dubai.calc();
paris.calc();
lima.calc();




function final(){
  let last=document.createElement('tr');
  table.appendChild(last);
  let tableData=document.createElement('th');
  last.appendChild(tableData);
  tableData.textContent='Totals';
  let cookiesForAll=0;
  for(let i=0;i<hours.length;i++){
    let totalAtOneHour=0;
    for(let j=0;j<branchs.length;j++){
      totalAtOneHour=totalAtOneHour+branchs[j].cookisPerHour[i];
    }
    tableData=document.createElement('td');
    last.appendChild(tableData);
    tableData.textContent=totalAtOneHour;
    cookiesForAll=cookiesForAll+totalAtOneHour;
  }
  let lastData=document.createElement('td');
  last.appendChild(lastData);
  lastData.textContent=cookiesForAll;
}
final();



const form = document.getElementById('newbranch');

form.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
  event.preventDefault ();
  console.log('event of ',event);

  let location = event.target.namefield.value;
  let min = event.target.good.value;
  let max = event.target.good.value;
  let avg = event.target.good.value;

  let newlocation = new Shop (location,min,max,avg);
  newlocation.calc;
}
// String.split; // to change from string to array
// breed =parseFloat(breed);
