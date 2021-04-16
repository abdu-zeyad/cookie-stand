'use strict';

// ************************************************ Class07-Object-Constructor  ************************************************

let salesCookies = document.getElementById('salesCookies');
let table = document.createElement('table');
salesCookies.appendChild(table);
table.setAttribute('id','table');

let workHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];
let salmonCookieObjects = [];
function SalmonCookie (cookiesName, minCustomer, maxCustomer, avgCustomer) {
  this.cookiesName = cookiesName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;

  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesPurchased = 0;

  console.log(this);
  salmonCookieObjects.push(this);
}

let seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
let paris = new SalmonCookie('Paris', 20, 38, 2.3);
let lima = new SalmonCookie('Lima', 2, 16, 4.6);


SalmonCookie.prototype.randomNumber = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer)) ;
  }
};

SalmonCookie.prototype.cookiesPurchased = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
    this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
  }
};

SalmonCookie.prototype.render = function () {
  let salesCookies = document.getElementById('salesCookies');
  let div = document.createElement('div');
  salesCookies.appendChild(div);
  let h3 = document.createElement('h3');
  div.appendChild(h3);
  h3.textContent = this.cookiesName;
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 0; i < this.customersPerHour.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
  }
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
  let hr = document.createElement('hr');
  div.appendChild(hr);
};


for(let i = 0 ; i < salmonCookieObjects.length; i++){
  salmonCookieObjects[i].randomNumber();
  salmonCookieObjects[i].cookiesPurchased();
  // salmonCookieObjects[i].render();
}
createTable();


const salesForm =document.getElementById('salesForm');
salesForm.addEventListener('submit', addNewSalmonCookieObjects );

function addNewSalmonCookieObjects( event ) {
  event.preventDefault();

  let cookiesNameField = event.target.cookiesNameField.value ;
  let minCustomerField = event.target.minCustomerField.value ;
  let maxCustomerField = event.target.maxCustomerField.value ;
  let avgCustomerField = event.target.avgCustomerField.value ;

  let newSalmonCookieObjects = new SalmonCookie(cookiesNameField, minCustomerField, maxCustomerField, avgCustomerField);
  newSalmonCookieObjects.randomNumber();
  newSalmonCookieObjects.cookiesPurchased();

  for (let i = 0; i < salmonCookieObjects.length +1; i++) {
    document.getElementById('table').deleteRow(-1);
  }
  createTable();
}


function createTable() {
  table.setAttribute('border','1');
  table.setAttribute('cellpadding','7');
  // table.setAttribute('bgcolor','#2c3034');
  renderTheadTable();
  renderTbodyTable();
  renderTfootTable();
}


function renderTheadTable () {
  let thead = document.createElement('thead');
  table.appendChild(thead);
  thead.setAttribute('bgcolor','#e2e3e5');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let thStart = document.createElement('th');
  tr.appendChild(thStart);
  thStart.setAttribute('bgcolor','#fff3cd');
  thStart.textContent = 'Cookie/Worktime';
  for (let i = 0; i < workHours.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = workHours[i];
  }
  let thEnd = document.createElement('th');
  tr.appendChild(thEnd);
  thEnd.setAttribute('bgcolor','#fff3cd');
  thEnd.textContent = 'Daily Location Total';
}


function renderTbodyTable() {
  let tbody = document.createElement('tbody');
  tbody.setAttribute('bgcolor','#cff4fc');
  table.appendChild(tbody);
  for (let i = 0; i < salmonCookieObjects.length; i++) {

    let trTbody = document.createElement('tr');
    tbody.appendChild(trTbody);

    let tdTbodyForName = document.createElement('td');
    trTbody.appendChild(tdTbodyForName);
    tdTbodyForName.setAttribute('bgcolor','#fff3cd');
    tdTbodyForName.textContent = salmonCookieObjects[i].cookiesName;

    for (let j = 0; j < salmonCookieObjects[i].cookiesPurchasedPerHour.length ; j++) {

      let tdTbody = document.createElement('td');
      trTbody.appendChild(tdTbody);
      tdTbody.textContent = salmonCookieObjects[i].cookiesPurchasedPerHour[j];

    }

    let tdTbodyForTotal = document.createElement('td');
    trTbody.appendChild(tdTbodyForTotal);
    tdTbodyForTotal.setAttribute('bgcolor','#fff3cd');
    tdTbodyForTotal.textContent = salmonCookieObjects[i].totalCookiesPurchased;
  }
}

function renderTfootTable() {

  let totalDailySalesCookies = 0;

  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  tfoot.setAttribute('bgcolor','#e2e3e5');

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let tdTfootForAllTotal = document.createElement('th');
  tr.appendChild(tdTfootForAllTotal);
  tdTfootForAllTotal.textContent = 'Total';
  tdTfootForAllTotal.setAttribute('bgcolor','#f8d7da');

  for (let i = 0; i < workHours.length ; i++) {
    let totalHoursSalesCookies = 0;
    for (let j = 0; j < salmonCookieObjects.length ; j++) {
      totalHoursSalesCookies += salmonCookieObjects[j].cookiesPurchasedPerHour[i] ;
    }
    totalDailySalesCookies += totalHoursSalesCookies ;
    let td = document.createElement('th');
    tr.appendChild(td);
    td.textContent = totalHoursSalesCookies;
  }

  let tdTotalDailySalesCookies = document.createElement('th');
  tr.appendChild(tdTotalDailySalesCookies);
  tdTotalDailySalesCookies.textContent = totalDailySalesCookies ;
  tdTotalDailySalesCookies.setAttribute('bgcolor','#f8d7da');

}