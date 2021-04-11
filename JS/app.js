'use strict' ;
let working_hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','7:00pm'];

const Seattle = {
  min_hourly_customers:23,
  max_hourly_customers:65,
  average_cookies_per_customer:6.3,
  hours:0,
  gethour:function(){
    this.hours = randomValue(min_hourly_customers,max_hourly_customers);
  }
};
console.log(gethour);


creatinghours:function(){


  let unorderlist = document.createElement('ul');
  article.appendChild(unorderlist);
  let li = null;
  for(let i = 0 ; i < this.working_hours.length ; i++){
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = this.likes[i];
  }