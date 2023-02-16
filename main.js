
const myDiv = document.getElementById('myDiv');

function qiymatOlish() {



}



class Address {
    constructor(viloyati, tumani, mahallasi, uyi) {
        this.viloyati = viloyati;
        this.tumani = tumani;
        this.mahallasi = mahallasi;
        this.uyi = uyi;
    }

}

class Person {
    constructor(ismi, familiyasi, sharifi, tugilgan_sanasi, unvoni, lavozimi, tel_nomeri, address) {
        this.ismi = ismi;
        this.familiyasi = familiyasi;
        this.sharifi = sharifi;
        this.tugilgan_sanasi = tugilgan_sanasi;
        this.unvoni = unvoni;
        this.lavozimi = lavozimi;
        this.tel_nomeri = tel_nomeri;
        this.address = address;
    }
}



let persons = []




const btnIzlash = document.getElementById('btnIzlash');
btnIzlash.addEventListener('click', (e) => {
    const myForm = document.forms.myForm;
    const izlanayotganIsm = myForm.elements.Izlash.value

    console.log(izlanayotganIsm)

    const persons_from_local = localStorage.getItem('persons')
    if (persons_from_local != null) {
        console.log('JSON parse')
        const json = JSON.parse(persons_from_local)
        persons = [...json]
        console.log(persons)
    }
    else {
        console.log('Data not find')
    }

    for (let i = 0; i < persons.length; i++) {
        if (izlanayotganIsm === persons[i].ismi) {
            console.log(persons[i])

        }
    }
})


const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', (e) => {
    const myForm = document.forms.myForm;
    persons.push(new Person(
        myForm.elements.ismi.value,
        myForm.elements.familiyasi.value,
        myForm.elements.sharifi.value,
        myForm.elements.tugilgan_sanasi.value,
        myForm.elements.unvoni.value,
        myForm.elements.lavozimi.value,
        myForm.elements.tel_nomeri.value, new Address(
            myForm.elements.viloyati.value, myForm.elements.tumani.value,
            myForm.elements.mahallasi.value, myForm.elements.uyi.value)))

    localStorage.setItem('persons', JSON.stringify(persons))

    const persons_from_local = localStorage.getItem('persons')
    console.log(persons_from_local)

    if (persons_from_local != null) {
        console.log('JSON parse')
        const json = JSON.parse(persons_from_local)
        persons = [...json]
        console.log(persons)
    }
    else {
        console.log('Data not find')
    }

});


const btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener('click', (e) => {
    const myForm = document.forms.myForm;

    const persons_from_local = localStorage.getItem('persons')
    // console.log(persons_from_local)

    if (persons_from_local != null) {
        console.log('JSON parse')
        const json = JSON.parse(persons_from_local)
        persons = [...json]
        // console.log(persons)
    }
    else {
        console.log('Data not find')
    }

    console.log(persons)

    for (let i = 0; i < persons_from_local.length; i++) {
        if (myForm.elements.Izlash.value === persons_from_local[i].ismi) {
            persons.splice(i, 1);
        }
    }

    console.log(persons)
    // localStorage.setItem('persons', JSON.stringify(persons))
});



const btnEdit = document.getElementById('btnEdit');
btnEdit.addEventListener('click', (e) => {
    const myForm = document.forms.myForm;

    const persons_from_local = localStorage.getItem('persons')
    console.log(persons_from_local)

    if (persons_from_local != null) {
        console.log('JSON parse')
        const json = JSON.parse(persons_from_local)
        persons = [...json]
        console.log(persons)
    }
    else {
        console.log('Data not find')
    }



    const person = new Person(
        myForm.elements.ismi.value,
        myForm.elements.familiyasi.value,
        myForm.elements.sharifi.value,
        myForm.elements.tugilgan_sanasi.value,
        myForm.elements.unvoni.value,
        myForm.elements.lavozimi.value,
        myForm.elements.tel_nomeri.value, new Address(
            myForm.elements.viloyati.value, myForm.elements.tumani.value,
            myForm.elements.mahallasi.value, myForm.elements.uyi.value))


    for (let i = 0; i < persons_from_local.length; i++) {
        if (myForm.elements.ismi.value === persons_from_local[i].ismi) {

            persons_from_local.splice().setItem(person)
            localStorage.setItem('persons', JSON.stringify(persons_from_local))

        }
    }



    const persons_from_local_new = localStorage.getItem('persons')
    console.log(persons_from_local_new)

    if (persons_from_local_new != null) {
        console.log('JSON parse')
        const json_new = JSON.parse(persons_from_local_new)
        persons = [...json_new]
        console.log(persons)
        console.log("ishladi...")
    }
    else {
        console.log('Data not find')
    }

});



const btnShow = document.getElementById('btnShow');
btnShow.addEventListener('click', (e) => {
    const myForm = document.forms.myForm;

    const persons_from_local = localStorage.getItem('persons')
    console.log(persons_from_local)

    if (persons_from_local != null) {
        console.log('JSON parse')
        const json = JSON.parse(persons_from_local)
        persons = [...json]
        console.log(persons)
    }
    else {
        console.log('Data not find')
    }
});