
let working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','7:00pm'];




let arrOfobjects=[];

function Shop (location,minCust,maxCust,avgCookPerHr) {
  this.location=location,
  this.minCust=minCust,
  this.maxCust=maxCust,
  this.avgCookPerHr=avgCookPerHr,
  this.randNum = [],
  this.numOfCookies=[],

  arrOfobjects.push(this);

}
Shop.prototype.randomCustomer=function(){
  for (let i=0;i<14;i++){
    this.randNum.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};
Shop.prototype.cookiesHr=function(){
  for (let i=0;i<14;i++){
    this.numOfCookies.push(Math.ceil(this.avgCookPerHr*this.randNum[i]));
  }
};

Shop.prototype.calc=function(){
  this.randomCustomer();
  this.cookiesHr();

};




Shop.prototype.render=function(){
  let tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  let tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent=this.branchName;
  for(let i=0;i<this.working_hours;i++){
    tableData=document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent=this.cookisPerHour[i];
  }
  tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent=this.totalCookies;
};

let seattle = new Shop('Seattle',23,65,6.3,1);
let tokyo = new Shop('Tokyo',3,24,1.2,1);
let dubai = new Shop('Dubai',11,38,3.7,1);
let paris = new Shop('Paris',20,38,2.3,1);
let lima = new Shop('Lima',23,65,6.3,1);


let container = document.getElementById('container');
let heading = document.createElement('h2');
container.appendChild(heading);
heading.textContent='Sales Statistics :';
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
tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent='Daily Location Total';

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
finalRow();
console.log(arrOfobjects);



function finalRow(){
  let lastRow=document.createElement('tr');
  table.appendChild(lastRow);
  let tableData=document.createElement('td');
  lastRow.appendChild(tableData);
  tableData.textContent='Totals/hrs';
  let cookiesForAll=0;
  for(let i=0;i<working_hours.length;i++){
    let totalAtOneHour=0;

    tableData=document.createElement('td');
    lastRow.appendChild(tableData);
    tableData.textContent=totalAtOneHour;
    cookiesForAll=cookiesForAll+totalAtOneHour;
  }
  let lastData=document.createElement('td');
  lastRow.appendChild(lastData);
  lastData.textContent=cookiesForAll;
}
