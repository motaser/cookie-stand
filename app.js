'use strict';

let hours = ["6am",
"7am",
"8am",
"9am",
"10am",
"11am",
"12pm",
"1pm",
"2pm",
"3pm",
"4pm",
"5pm",
"6pm",
"7pm",
"8pm"]

let seattle = {

    name: 'seattle',
  
    MaxCustomersPerHour: 65,
    MinCustomersPerHour: 23,
    averageCustCookies: 6.3,
    RandomCustPerHour:[],
    salesPerHour:[],
    totalPerHour: 0,
    randomCustNum: function () {

        for (let i = 0; i < hours.length; i++) {
            this.RandomCustPerHour.push(Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour));

        }
        },   
        
        SalesCookies:function (){
            for (let index = 0; index < hours.length; index++) {
                this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
                this. totalPerHour += this.salesPerHour[index];
            }



    },

    rendar: function ()  {
            let container = document.getElementById("sales");
            let h1El = document.createElement('h1');
            container.appendChild(h1El);
            h1El.textContent= this.name;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            for (let i = 0; i < hours.length; i++) {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
            }
            let totalLi = document.createElement('li');
            ulEl.appendChild(totalLi);
            totalLi.textContent = `Total: ${this.totalPerHour} cookies`

        
         


        
    }


}

seattle.randomCustNum();
seattle.SalesCookies();
seattle.rendar();
         





let Tokyo = {

    name: 'Tokyo',
  
    MaxCustomersPerHour: 24,
    MinCustomersPerHour: 3,
    averageCustCookies: 1.2,
    RandomCustPerHour:[],
    salesPerHour:[],
    totalPerHour: 0,
    randomCustNum: function () {

        for (let i = 0; i < hours.length; i++) {
            this.RandomCustPerHour.push(Math.floor(Math.random() * (this. MaxCustomersPerHour - this. MinCustomersPerHour + 1) + this. MinCustomersPerHour));

        }
        },   
        
        SalesCookies:function (){
            for (let index = 0; index < hours.length; index++) {
                this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
                this. totalPerHour += this.salesPerHour[index];
            }



    },

    rendar: function ()  {
            let container = document.getElementById("sales");
            let h1El = document.createElement('h1');
            container.appendChild(h1El);
            h1El.textContent= this.name;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            for (let i = 0; i < hours.length; i++) {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
            }
            let totalLi = document.createElement('li');
            ulEl.appendChild(totalLi);
            totalLi.textContent = `Total: ${this.totalPerHour} cookies`

        
         


        
    }


}

Tokyo.randomCustNum();
Tokyo.SalesCookies();
Tokyo.rendar();





let Dubai = {

    name: 'Dubai',
  
    MaxCustomersPerHour: 38,
    MinCustomersPerHour: 11,
    averageCustCookies: 3.7,
    RandomCustPerHour:[],
    salesPerHour:[],
    totalPerHour: 0,
    randomCustNum: function () {

        for (let i = 0; i < hours.length; i++) {
            this.RandomCustPerHour.push(Math.floor(Math.random() * (this. MaxCustomersPerHour - this. MinCustomersPerHour + 1) + this. MinCustomersPerHour));

        }
        },   
        
        SalesCookies:function (){
            for (let index = 0; index < hours.length; index++) {
                this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
                this. totalPerHour += this.salesPerHour[index];
            }



    },

    rendar: function ()  {
            let container = document.getElementById("sales");
            let h1El = document.createElement('h1');
            container.appendChild(h1El);
            h1El.textContent= this.name;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            for (let i = 0; i < hours.length; i++) {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
            }
            let totalLi = document.createElement('li');
            ulEl.appendChild(totalLi);
            totalLi.textContent = `Total: ${this.totalPerHour} cookies`

        
         


        
    }


}

Dubai.randomCustNum();
Dubai.SalesCookies();
Dubai.rendar();






let Paris	 = {

    name: 'Paris',
  
    MaxCustomersPerHour: 38,
    MinCustomersPerHour: 20,
    averageCustCookies: 2.3,
    RandomCustPerHour:[],
    salesPerHour:[],
    totalPerHour: 0,
    randomCustNum: function () {

        for (let i = 0; i < hours.length; i++) {
            this.RandomCustPerHour.push(Math.floor(Math.random() * (this. MaxCustomersPerHour - this. MinCustomersPerHour + 1) + this. MinCustomersPerHour));

        }
        },   
        
        SalesCookies:function (){
            for (let index = 0; index < hours.length; index++) {
                this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
                this. totalPerHour += this.salesPerHour[index];
            }



    },

    rendar: function ()  {
            let container = document.getElementById("sales");
            let h1El = document.createElement('h1');
            container.appendChild(h1El);
            h1El.textContent= this.name;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            for (let i = 0; i < hours.length; i++) {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
            }
            let totalLi = document.createElement('li');
            ulEl.appendChild(totalLi);
            totalLi.textContent = `Total: ${this.totalPerHour} cookies`

        
         


        
    }


}

Paris	.randomCustNum();
Paris	.SalesCookies();
Paris	.rendar();


let Lima	 = {

    name: 'Lima',
  
    MaxCustomersPerHour: 16,
    MinCustomersPerHour: 2,
    averageCustCookies: 4.6,
    RandomCustPerHour:[],
    salesPerHour:[],
    totalPerHour: 0,
    randomCustNum: function () {

        for (let i = 0; i < hours.length; i++) {
            this.RandomCustPerHour.push(Math.floor(Math.random() * (this. MaxCustomersPerHour - this. MinCustomersPerHour + 1) + this. MinCustomersPerHour));

        }
        },   
        
        SalesCookies:function (){
            for (let index = 0; index < hours.length; index++) {
                this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
                this. totalPerHour += this.salesPerHour[index];
            }



    },

    rendar: function ()  {
            let container = document.getElementById("sales");
            let h1El = document.createElement('h1');
            container.appendChild(h1El);
            h1El.textContent= this.name;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            for (let i = 0; i < hours.length; i++) {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
            }
            let totalLi = document.createElement('li');
            ulEl.appendChild(totalLi);
            totalLi.textContent = `Total: ${this.totalPerHour} cookies`

        
         


        
    }


}

Lima	.randomCustNum();
Lima	.SalesCookies();
Lima	.rendar();
         





