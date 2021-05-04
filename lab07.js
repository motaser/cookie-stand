'use strict'

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
let StoreArray =[];

function Store(name, MaxCustomersPerHour, MinCustomersPerHour, averageCustCookies,){
     
    this.name = name,
    this.MaxCustomersPerHour = MaxCustomersPerHour,
    this.MinCustomersPerHour = MinCustomersPerHour,
    this.averageCustCookies = averageCustCookies,
    this.RandomCustPerHour = [],
    this.salesPerHour = [],
    this.totalPerHour = 0,
     
    StoreArray.push(this);


}

Store.prototype.randomCustNum = function(){
    for (let i = 0; i < hours.length; i++) {
        this.RandomCustPerHour.push(Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour));

    }

}

Store.prototype.SalesCookies=function (){
    for (let index = 0; index < hours.length; index++) {
        this.salesPerHour.push(Math.ceil(this.RandomCustPerHour[index] * this.averageCustCookies));
        this. totalPerHour += this.salesPerHour[index];


}
}




    let container = document.getElementById("sales");
            let table = document.createElement('table');
           container.appendChild(table)
           let tableheader = function(){
               let trhead = document.createElement('tr');
               table.appendChild(trhead);
                let thhead = document.createElement('tr');
               table.appendChild(thhead);
               thhead.textContent = ' ';
               for (let time = 0; time < hours.length; time++) {
                   
                   let thhead = document.createElement('tr');
                   table.appendChild(thhead);
                thhead.textContent = hours[time];

                   
               }

               let thead = document.createElement('th');
               trhead.appendChild(thead);
               thead.textContent = 'Daly location total'

           }


Store.prototype.render = function(){


      let trbody = document.createElement('tr');
      table.appendChild(trbody);
      let tdbody = document.createElement('td');
      trbody.appendChild(tdbody);
      tdbody.textContent = this.name;

      for (let s = 0; s < hours.length; s++) {
         let tbody = document.createElement('td');
         trbody.appendChild(tbody);
         tbody.textContent = this.salesPerHour[s];
          
      }
  let tbody = document.createElement('td');
       trbody.appendChild(tbody);
       tbody.textContent = this.totalPerHour;

}

  let seatell = new Store('seatell', 65, 23, 6.3,)
  let tokyo = new Store('tokyo', 24, 3, 1.2,)
  let dubai = new Store('dubai', 38, 11, 3.7,)
  let paris = new Store('paris', 38, 20, 2.3,)
  let lima = new Store('lima', 16, 2, 4.6,)






  seatell .randomCustNum();
  seatell .SalesCookies();
  seatell .render();

  tokyo .randomCustNum();
  tokyo .SalesCookies();
  tokyo .render();

  dubai .randomCustNum();
  dubai .SalesCookies();
  dubai .render();

  paris  .randomCustNum();
  paris  .SalesCookies();
  paris  .render();

  lima .randomCustNum();
  lima .SalesCookies();
  lima .render();
