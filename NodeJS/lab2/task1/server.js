const flightModule = require("./module/flightModule.js")

let flightSystem = flightModule.flightTicketsReservation;

let user = new flightSystem();

let date = new Date();
date = date.toLocaleDateString() + " " + date.toLocaleTimeString()

user.addFlights(1234,1,5,"damanhour","alexandria",date);
user.addFlights(5678,2,10,"matrouh","cairo",date);

user.GetFlights(1234);

user.updateFlights(1234,1,"seatNum",10)
user.updateFlights(1234,1,"flightNum",11) 