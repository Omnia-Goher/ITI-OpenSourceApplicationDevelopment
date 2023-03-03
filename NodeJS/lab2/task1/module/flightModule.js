class flightTicketsReservation {
    Flights = [];

    addFlights(userId, flightNum, seatNum, depature_airport, arrival_airport, date) {
        let flight = { userId, flightNum, seatNum, depature_airport, arrival_airport, date };
        this.Flights.push(flight);
    }
    
    updateFlights(user_id, flight_num, update_field, update_value) {
        let Flights = this.Flights.find(flight => flight.userId == user_id && flight.flightNum == flight_num);
        if (Flights) {
            if (update_field != "userId" && update_field !="flightNum") {
                Flights[update_field] = update_value;
                console.log("Updated Sucessfully\n")
                console.log("updated flight : \n")
                for (let key in Flights) {
                    console.log(`${key} : ${Flights[key]}`);
                }

            } else if(update_field == "userId"){
                console.log("\ncan't update this flight!!\nuser Id can't be updated")
            }else if(update_field == "flightNum"){
                console.log("\ncan't update this flight!!\nflight number can't be updated")
            }
        }
        else {
            console.log("No Flights try again!!");
        }
    }
    
    GetFlights(search_id) {
        let Flights = this.Flights.filter(flight => flight.userId == search_id);
        console.log(`\nUser ${search_id} : \n`);
        let i = 1
        for (var item of Flights) {
            console.log(`Flight number : ${i}\n`);
            for (let key in item) {
                console.log(`${key} : ${item[key]}`);
            }
            console.log(`\n-----------------------\n`);
            i++;
        }
    }
}

module.exports = {
    flightTicketsReservation
}