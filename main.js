
// // Obektlar

// // Students
// console.log('Students object');

// const students = Object.create({},
//    {
//        firstName: {
//            value: 'Nurislom',
//            writable: true,
//            configurable: true,
//            enumerable: true
//        },

//        lastName: {
//            value: 'Xurramov'
//        },

//        age: {
//            value: 25
//        },

//        birtYear: {
//            get() {
//                return new Date().getFullYear() - this.age;
//            }
//        },

//        kunsi: {get(){
//          valuse : 4
//        }},

//        fakulteti : {
//          get(){
//             value : 'matematika'
//          }
//        },


//        phoneNumber : {
//          get() {
//             value: '+998 94 648 83 34'
//          }
//        }

//    });








// // Employees
// console.log('Employees object')


// const employees = Object.create({},
   
//    { configurable: true,
//       writable: true,
//       enumerable: true,
 
//        firstName: {
//            value: 'Nurislom',
//        },

//        lastName: {
//            value: 'Xurramov'
//        },

//        age: {
//            value: 25
//        },

//        birtYear: {
//            get() {
//                return new Date().getFullYear() - this.age;
//            }
//        },

//        job: {
//          get(){
//             value: 'injener'
//          }
//        },

//        staji: {
//          get() {
//             value: 3
//          }
//        },

//        phoneNumber : {
//          get() {
//             value: '+998 94 648 83 34'
//          }
//        }



//    });






// console.log('cars object')



// // Cars
// const cars = Object.create({},
//    {
//        marka: {
//            value: 'BMW',
//            writable: true,
//            configurable: true,
//            enumerable: true
//        },

//        model: {
//            value: 'X6'
//        },

//        madeYear: {
//            value: 2022,         
//        },

//        color: {
//          get(){
//             value: 'BLACK'
//        }
//       },

//        maxspeed: {
//            get() {
//                value: 250
//            }
//        },

//        horsepower : {
//          get (){
// value: 600
//          }
//        }

//    });





// //console.log('JS')

// // Obektlar
// // const person1 = Object.create({
// //     fullName: function () {
// //         return `${this.firstName} ${this.lastName}`
// //     }
// // },
// //     {
// //         firstName: {
// //             value: 'Sobir',
// //             writable: true,
// //             configurable: true,
// //             enumerable: true
// //         },
// //         lastName: {
// //             value: 'Axmedov',
// //             enumerable: true
// //         },
// //         age: {
// //             value: 25,
// //             enumerable: true
// //         },
// //         birtYear: {
// //             get() {
// //                 return new Date().getFullYear() - this.age;
// //             }
// //         }

// //     });
// // console.log(person1.fullName());
// // for (const key in person1) {
// //     console.log(key)
// //     if (Object.hasOwnProperty.call(person1, key)) {
// //         const element = person1[key];
// //         console.log(element)
// //     }
// // }


// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }





// const p2 = new Person('Axmedov', 'Ravshan', 30);
// // console.log(p2)

// class Doctor extends Person {
//     constructor(firstName, lastName, age, spes, addess) {
//         super(firstName, lastName, age);
//         this.mutaxassisligi = spes;
//         this.addess = addess;
//     }
// }
// const d1 = new Doctor('Axmedov', 'Ravshan', 30, 'ВОП', { city: 'Toshkent' });
// let d2 = {};
// let d3 = d1;
// Object.assign(d2, d1)
// console.log(d1)
// d2.age = 31
// d2.addess.city = 'samarqand'
// d1.age = 33;
// console.log(d2)
// console.log(d3)
// //JSON
// const d2_string = JSON.stringify(d2);
// const d2_json = JSON.parse(d2_string);
// d2_json.addess.city = 'andijon'
// console.log(d2_string)
// console.log(d2_json)
// Massivlar

// const persons = new Array();

// persons[0]='Olim'
// console.log(persons[0])
// persons[3]='Olim'
// console.log(persons);
// const persons_2 = ['Olim', 'Ravshan', 'Maxmud', 'Tolib'];


// //push
// persons_2.push(new Person('Mamurov', 'Sherali', 26))//massivning oxiridan qushadi
// persons_2.unshift(new Person('Juraqulov', 'Jamshid', 26))//massivning boshidan element qushadi
// // persons_2.pop()
// // persons_2.pop()
// const element = persons_2.at(-1);//oxirgi elementini olish
// const element_last = persons_2[persons_2.length - 1]//oxirgi elementini olish
// console.log(element)
// console.log(persons_2)
// for (const element of persons_2) {
//     console.log(element)
// }
// //rest
// const countries_euro = ['Angliya', 'Italiya'];
// const countries_osiyo = ['Uzbekiston', 'Kazakistan'];
// const all_countries = [...countries_euro, ...countries_osiyo]
// console.log(all_countries)
// //object
// const p1 = { firtsName: 'sas' }
// const p2 = { ...p1, lastName: 'gggg' }
// console.log(p2)


// /********  Misol ************/
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }



//   const car1 = new Car('USA', 'BMD', 2022)
  
// //   console.log(car1)

// const car2 = new  Car('UK', 'Mers', 2020)
// //   console.log(car2.make)


//   function Employees(firstName, surName, Car){
//     this.firstName = firstName
//     this.surName = surName
//     this.Car = Car
//   }


// const emp1 = new Employees('Nurislom', 'Xurramov', car1)
// console.log(emp1)






class Person {
    constructor(firstName, lastName, age, phoneNumber, timeOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber;
        this.timeOfBirth = timeOfBirth;
    }
}

const person = new Person('Nurislom', 'Xurramov', 25, '+998 94 648 83 34', '24.06.1995')

class Employees extends Person{
constructor(person, position)
{
    super(person)
    this.position = position
}
}

const emp1 = new Employees(person, 'Engener')
console.log(emp1)



