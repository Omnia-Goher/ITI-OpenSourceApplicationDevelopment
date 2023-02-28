// Constructor Function

// function Person(name, money) {
//     this.fullName = name;
//     this.money = money;
//     this.sleep_mode = null;
//     this.health_rate = null;
// }
// Person.prototype.Sleep = function (hours) {
//     this.sleep_mode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
// }
// Person.prototype.Eat = function (meals) {
//     switch (meals) {
//         case 1:
//             {
//                 this.health_rate = `50 Health Rate`;
//                 break;
//             }
//         case 2:
//             {
//                 this.health_rate = `75 Health Rate`;
//                 break;
//             }
//         case 3:
//             {
//                 this.health_rate = `100 Health Rate`;
//                 break;
//             }
//     }
// }
// Person.prototype.Buy = function (items) {
//     this.money -= (10 * items);
// }

// const person1 = new Person("omnia goher", 2000);




// Classes 

// class Person {
//     constructor(name, money) {
//         this.fullName = name;
//         this.money = money;
//         this.sleep_mode = null;
//         this.health_rate = null;
//     }
//     Sleep(hours) {
//         this.sleep_mode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//     }
//     Eat(meals) {
//         switch (meals) {
//             case 1:
//                 {
//                     this.health_rate = `50 Health Rate`;
//                     break;
//                 }
//             case 2:
//                 {
//                     this.health_rate = `75 Health Rate`;
//                     break;
//                 }
//             case 3:
//                 {
//                     this.health_rate = `100 Health Rate`;
//                     break;
//                 }
//         }
//     }
//     Buy(items) {
//         this.money -= (10 * items);
//     }
// }

// const person1 = new Person("omnia goher", 2000);




//  Objects Linking to Other Objects

// const Person = {
//     init(name, money) {
//         this.fullName = name;
//         this.money = money;
//         this.sleep_mode = null;
//         this.health_rate = null;
//     },
//     Sleep(hours) {
//         this.sleep_mode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//     },
//     Eat(meals) {
//         switch (meals) {
//             case 1:
//                 {
//                     this.health_rate = `50 Health Rate`;
//                     break;
//                 }
//             case 2:
//                 {
//                     this.health_rate = `75 Health Rate`;
//                     break;
//                 }
//             case 3:
//                 {
//                     this.health_rate = `100 Health Rate`;
//                     break;
//                 }
//         }
//     },
//     Buy(items) {
//         this.money -= (10 * items);
//     }
// }

// const person1 = Object.create(Person);
// person1.init("omnia goher", 2000);



// Factory Function 

// function Person(fullName, money) {
//     return {
//         fullName,
//         money,
//         sleep_mode: null,
//         health_rate: null,
//         Sleep(hours) {
//             this.sleep_mode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//         },
//         Eat(meals) {
//             switch (meals) {
//                 case 1:
//                     {
//                         this.health_rate = `50 Health Rate`;
//                         break;
//                     }
//                 case 2:
//                     {
//                         this.health_rate = `75 Health Rate`;
//                         break;
//                     }
//                 case 3:
//                     {
//                         this.health_rate = `100 Health Rate`;
//                         break;
//                     }
//             }
//         },
//         Buy(items) {
//             this.money -= (10 * items);
//         }
//     }
// }

// const person1 = Person("omnia goherr", 2000);



// console.log(person1);
// person1.Sleep(8);
// person1.Eat(3);
// person1.Buy(9);
// console.log(person1);
