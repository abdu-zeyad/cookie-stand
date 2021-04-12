'use strict';

const working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let branchs = [];
function Shop (branchName,minCust,maxCust,avgCookiesPercust){
  this.branchName=branchName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesPercust=avgCookiesPercust;
  this.custNumHourly=[];
  this.cookisPerHour=[];
  branchs.push(this);

}
Shop.prototype.randomCust=function(){
  for (let i=0;i<14;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};
Shop.prototype.cookiesHourly=function(){
  for (let i=0;i<14;i++){
    this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]));
  }
};
Shop.prototype.calc=function(){
  this.randomCust();
  this.cookiesHourly();
};
Shop.prototype.render=function(){
  let tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  let tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent=this.branchName;
  for(let i=0;i<this.cookisPerHour.length;i++){
    tableData=document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent=this.cookisPerHour[i];
  }
};

let seattle = new Shop('Seattle',23,65,6.3);
let tokyo = new Shop('Tokyo',3,24,1.2);
let dubai = new Shop('Dubai',11,38,3.7);
let paris = new Shop('Paris',20,38,2.3);
let lima = new Shop('Lima',23,65,6.3);


let container = document.getElementById('container');

let table =document.createElement('table');
container.appendChild(table);
let tableRow=document.createElement('tr');
table.appendChild(tableRow);
let tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent='      ';
for(let i=0;i<working_hours.length;i++){
  tableHeader=document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent=working_hours[i];
}


seattle.calc();
tokyo.calc();
dubai.calc();
paris.calc();
lima.calc();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(branchs);
