class DisasterPlanning {
   constructor() {
       this.key = "emergency";
       this.disasters = ["fire", "earthquake", "floods"];
       this.agencies = {
           "fire": "Fire department",
           "earthquake": "Earthquake agency",
           "floods": "Flood department",
           "emergency": "Emergency department"
       };
       this.supplies = {
           "fire": "Extinguishers",
           "earthquake": "First-aid",
           "floods": "Life Jackets",
           "emergency": "Oxygen masks"
       };
   }

   getDisasterInfo(disaster) {
       if (this.disasters.includes(disaster.toLowerCase())) {
           console.log(`The disaster is ${disaster} and agency is ${this.agencies[disaster.toLowerCase()]} and supplies are ${this.supplies[disaster.toLowerCase()]}`);
       } else {
           console.log(`The disaster is ${disaster} and agency is ${this.agencies[this.key]} and supplies are ${this.supplies[this.key]}`);
       }
   }
}

const disasterPlanner = new DisasterPlanning();
disasterPlanner.getDisasterInfo("fire");