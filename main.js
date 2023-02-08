
// Obektlar

// Students
console.log('Students object');

const students = Object.create({},
   {
       firstName: {
           value: 'Nurislom',
           writable: true,
           configurable: true,
           enumerable: true
       },

       lastName: {
           value: 'Xurramov'
       },

       age: {
           value: 25
       },

       birtYear: {
           get() {
               return new Date().getFullYear() - this.age;
           }
       },

       kunsi: {get(){
         valuse : 4
       }},

       fakulteti : {
         get(){
            value : 'matematika'
         }
       },


       phoneNumber : {
         get() {
            value: '+998 94 648 83 34'
         }
       }

   });








// Employees
console.log('Employees object')


const employees = Object.create({},
   
   { configurable: true,
      writable: true,
      enumerable: true,
 
       firstName: {
           value: 'Nurislom',
       },

       lastName: {
           value: 'Xurramov'
       },

       age: {
           value: 25
       },

       birtYear: {
           get() {
               return new Date().getFullYear() - this.age;
           }
       },

       job: {
         get(){
            value: 'injener'
         }
       },

       staji: {
         get() {
            value: 3
         }
       },

       phoneNumber : {
         get() {
            value: '+998 94 648 83 34'
         }
       }



   });






console.log('cars object')



// Cars
const cars = Object.create({},
   {
       marka: {
           value: 'BMW',
           writable: true,
           configurable: true,
           enumerable: true
       },

       model: {
           value: 'X6'
       },

       madeYear: {
           value: 2022,         
       },

       color: {
         get(){
            value: 'BLACK'
       }
      },

       maxspeed: {
           get() {
               value: 250
           }
       },

       horsepower : {
         get (){
value: 600
         }
       }

   });








