'use strict';

let container = document.getElementById('container');

let table =document.createElement('table');
container.appendChild(table);





const hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let branchs = [];
function Shop (branchName,minCust,maxCust,avgCookiesPercust){
  this.branchName=branchName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesPercust=avgCookiesPercust;
  this.custNumHourly=[];
  this.cookisPerHour=[];
  this.totalCookies=0
  branchs.push(this);

}
Shop.prototype.randomCust=function(){
  for (let i=0;i<hours.length;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};
Shop.prototype.cookiesHourly=function(){
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
for (let i = 0; index <= hours.length; i++) {
  th = document.createElement('th')
  firstRow.appendChild('th')
th.textContent=hours[i]
}
let dailyhours = document.createElement('th')
firstRow.appendChild(dailyhours)
dailyhours.textContent=('daily hour')

}
cookiesStand.prototype.render=function(){

  let rawData = document.createElement('th')
  table.appendChild(rawData)
  let LocaName = document.createElement('th')
  rawData.appendChild(LocaName)
  LocaName.textContent=this.Location
  let td = null;
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td')
    rawData.appendChild(td)
    td.textContent=this.cookisPerHour[i]
  }
}

headerRow()
seattle.randomCust()
seattle.cookisPerHour()
seattle.render()

Shop.prototype.calc=function(){
  this.randomCust();
  this.cookiesHourly();

};

let seattle = new Shop('Seattle',23,65,6.3);
// let tokyo = new Shop('Tokyo',3,24,1.2);
// let dubai = new Shop('Dubai',11,38,3.7);
// let paris = new Shop('Paris',20,38,2.3);
// let lima = new Shop('Lima',23,65,6.3);


// Shop.prototype.render=function(){
//   let tableRow=document.createElement('tr');
//   table.appendChild(tableRow);
//   let tableData=document.createElement('td');
//   tableRow.appendChild(tableData);
//   tableData.textContent=this.branchName;
//   for(let i=0;i<this.cookisPerHour.length;i++){
//     tableData=document.createElement('td');
//     tableRow.appendChild(tableData);
//     tableData.textContent=this.cookisPerHour[i];
//   }
//   tableData=document.createElement('td');
//   tableRow.appendChild(tableData);
//   tableData.textContent=this.totalCookies;
// };














// seattle.calc();
// tokyo.calc();
// dubai.calc();
// paris.calc();
// lima.calc();
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// final();

// console.log(branchs);


// function final(){
//   let last=document.createElement('tr');
//   table.appendChild(last);
//   let tableData=document.createElement('td');
//   last.appendChild(tableData);
//   tableData.textContent='Totals';
//   let cookiesForAll=0;
//   for(let i=0;i<hoursOfOpen.length;i++){
//     let totalAtOneHour=0;
//     for(let j=0;j<branchs.length;j++){
//       totalAtOneHour=totalAtOneHour+branchs[j].cookisPerHour[i];
//     }
//     tableData=document.createElement('td');
//     last.appendChild(tableData);
//     tableData.textContent=totalAtOneHour;
//     cookiesForAll=cookiesForAll+totalAtOneHour;
//   }
//   let lastData=document.createElement('td');
//   last.appendChild(lastData);
//   lastData.textContent=cookiesForAll;
// }