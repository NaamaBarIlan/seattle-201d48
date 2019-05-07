'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var pikePlace = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    // even though the calculations are on the customers each hour, we're useing the hours array, b/c it's always going to be the same length. 
    for(var i = 0; i < hours.length; i++){
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render(){
    this.calcCookiesEachHour();		
    // We need to access the element in the DOM where we will put things
    var pikeUL = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++){

      // for each list item we need to:
      // --create an element
      var liEl = document.createElement('li');
      // -- give it content
      // 6am: 16 cookies
      // liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
		
      // -- append it to the DOM
      pikeUL.appendChild(liEl);
    }
    // for each list item we need to:
    // --create an element
    liEl = document.createElement('li');

    // -- give it content
    // liEl.textContent = 'Total: ' + this.totalCookiesForTheDay + ' cookies';
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    // -- append it to the DOM
    pikeUL.appendChild(liEl);
  }
};

// Helper Function

function calcRandomCustomers(min, max){
  //following line from MDN docs on Match.random 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
