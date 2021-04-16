'use strict';

let container = document.getElementById('container');
let table =document.createElement('table');
container.appendChild(table);


const hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let branchs = [];
console.log(branchs);
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


Shop.prototype.randomCust_f=function(){
  for (let i=0;i<hours.length;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};


Shop.prototype.cookiesHourly_f=function(){
  for (let i=0;i<hours.length;i++){
    this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]));
    this.totalCookies=this.totalCookies+this.cookisPerHour[i];

  }

};


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
headerRow();




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


Shop.prototype.calc=function(){
  this.randomCust_f();
  this.cookiesHourly_f();
  this.render_f();}


let seattle = new Shop('Seattle',23,65,6.3);
let tokyo = new Shop('Tokyo',3,24,1.2);
let dubai = new Shop('Dubai',11,38,3.7);
let paris = new Shop('Paris',20,38,2.3);
let lima = new Shop('Lima',23,65,6.3);
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



const form = document.getElementById('newbranchform');
form.addEventListener('submit', addlocation);
function addlocation(event){
  event.preventDefault ();

  let nlocation = event.target.location.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  let newlocation = new Shop (nlocation,min,max,avg);
  newlocation.calc();
  var rowCount = table.rows.length;
  table.deleteRow(rowCount -2);
  final();

}
















// this function is just for help and collecting and excecuting other functions.

// function createTable() {
  
  // renderTheadTable();
  // renderTbodyTable();
  // renderTfootTable();
// }
// function renderTheadTable () {
//   let thead = document.createElement('thead');
//   table.appendChild(thead);
//   let tr = document.createElement('tr');
//   thead.appendChild(tr);
//   let thStart = document.createElement('th');
//   tr.appendChild(thStart);
//   thStart.textContent = 'Cookie/Worktime';
//   for (let i = 0; i < hours.length; i++) {
//     let th = document.createElement('th');
//     tr.appendChild(th);
//     th.textContent = hours[i];
//   let thEnd = document.createElement('th');
//   tr.appendChild(thEnd);
//   thEnd.textContent = 'Daily Location Total';
// }


// function renderTbodyTable() {
//   let tbody = document.createElement('tbody');
//   table.appendChild(tbody);
//   for (let i = 0; i < branchs.length; i++) {

//     let trTbody = document.createElement('tr');
//     tbody.appendChild(trTbody);

//     let tdTbodyForName = document.createElement('td');
//     trTbody.appendChild(tdTbodyForName);
//     tdTbodyForName.textContent = branchs[i].location;

//     for (let j = 0; j < branchs[i].cookisPerHour.length ; j++) {

//       let tdTbody = document.createElement('td');
//       trTbody.appendChild(tdTbody);
//       tdTbody.textContent = branchs[i].cookisPerHour[j];

//     }

//     let tdTbodyForTotal = document.createElement('td');
//     trTbody.appendChild(tdTbodyForTotal);
//     tdTbodyForTotal.textContent = branchs[i].totalCookies;
//   }
// }

// function renderTfootTable() {

//   let totalDailySalesCookies = 0;

//   let tfoot = document.createElement('tfoot');
//   table.appendChild(tfoot);

//   let tr = document.createElement('tr');
//   tfoot.appendChild(tr);

//   let tdTfootForAllTotal = document.createElement('th');
//   tr.appendChild(tdTfootForAllTotal);
//   tdTfootForAllTotal.textContent = 'Total';

//   for (let i = 0; i < hours.length ; i++) {
//     let totalHoursSalesCookies = 0;
//     for (let j = 0; j < branchs.length ; j++) {
//       totalHoursSalesCookies += branchs[j].cookisPerHour[i] ;
//     }
//     totalDailySalesCookies += totalHoursSalesCookies ;
//     let td = document.createElement('th');
//     tr.appendChild(td);
//     td.textContent = totalHoursSalesCookies;
//   }

//   let tdTotalDailySalesCookies = document.createElement('th');
//   tr.appendChild(tdTotalDailySalesCookies);
//   tdTotalDailySalesCookies.textContent = totalDailySalesCookies ;

// }