
let persons = [];

syncFromLocale();

const myForm = document.forms.myForm;

class PageOptions {

    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }

}


 const pageOptions = new PageOptions(1, 10);



class Address {
  constructor(viloyati, tumani, uyi) {
    this.viloyati = viloyati;
    this.tumani = tumani;
    this.uyi = uyi;
  }
}

class Person {
id=0;
  constructor(ismi, familiyasi, sharifi, tugilgan_sanasi, tel_nomeri, unvoni, lavozimi, address) {
    this.ismi = ismi;
    this.familiyasi = familiyasi;
    this.sharifi = sharifi;
    this.tugilgan_sanasi = tugilgan_sanasi;
    this.tel_nomeri = tel_nomeri;
    this.unvoni = unvoni;
    this.lavozimi = lavozimi;
    this.address = address;
  }
}

const unvonlar = [
  { id: 1, text: 'leytenant' },
  { id: 2, text: 'katta leytenant' },
  { id: 3, text: 'kapitan' }];

const viloyatlar = [
  { id: 1, text: 'Toshkent' },
  { id: 2, text: 'Qashqadaryo' },
  { id: 3, text: 'Surxondaryo' }];

const tumanlarSurxon = [
  { id: 1, text: 'Termiz' },
  { id: 2, text: 'Angor' },
  { id: 3, text: 'Muzrabot' }];

const tumanlarToshkent = [
  { id: 1, text: 'Chirchiq' },
  { id: 2, text: 'Yangiariq' },
  { id: 3, text: "Bo'stonliq" }];

const unvonId = document.getElementById('unvonId');

const viloyatId = document.getElementById('viloyatId');

const tumanId = document.getElementById('tumanId');


unvonlar.forEach((unvon) => {
  const opt = document.createElement("option");
  opt.value = unvon.id;
  opt.text = unvon.text;
  unvonId.appendChild(opt);
});

viloyatlar.forEach((viloyat) => {
  const opt = document.createElement("option");
  opt.value = viloyat.id;
  opt.text = viloyat.text;
  viloyatId.appendChild(opt);
});

tumanlarSurxon.forEach((tuman) => {
  const opt = document.createElement("option");
  opt.value = tuman.id;
  opt.text = tuman.text;
  tumanId.appendChild(opt);
});

const btnSaqlash = document.getElementById('bntSaqlash');
btnSaqlash.addEventListener('click', (e) => {
save();
loadTable();
});





/* ************************** Functions ************************* */

  //css
const table_body = document.getElementById('mytable');



function loadTable() {
    table_body.innerHTML = '';
    //poganation
    const start = (pageOptions.page - 1) * pageOptions.pageSize;
    const pagedPersons = persons.slice(start, start + pageOptions.pageSize)
    pagedPersons.forEach((e, i) => {
        table_body.innerHTML += addRow(e, i + 1);
    })
}









function addNew() {
  clear();
  openModal();
}


function deleteItem(id) {
  const item = persons.find(a => a.id === id);
  const index = persons.indexOf(item);
  persons.splice(index, 1);
  saveToLocale();
  loadTable();
}


function selectRow(e) {
  console.log(e)
  const tr = document.getElementById('tr_' + e);
  const trs = document.querySelectorAll('.person-row-selected');
  Array.from(trs).forEach((e) => {
      e.classList.remove('person-row-selected');
  })
  tr.classList.add('person-row-selected');
}






function editItem(id) {
    //persons find item
    const item = persons.find(a => a.id === id);
    if (item) {
        console.log(item)
        //form elemntlariga valuelarni set qilish 
        const myForm = document.forms.myForm;
        myForm.elements.ismi.value = id;//identificator
        myForm.elements.familiyasi.value = item.ismi;
        myForm.elements.sharifi.value = item.sharifi;
        myForm.elements.tsana.value = item.tsana;
        myForm.elements.traqam.value = item.traqam;
        myForm.elements.viloyatId.value = item.viloyat;
        myForm.elements.tumanId.value = item.tuman;
        myForm.elements.uyi.value = item.uyi;
        openModal();
    }
}



  function editItem(id) {
    alert(id);
  }
  function addRow(item, index) {
    return ` <tr id='tr_${index}'  onclick="selectRow(${index})">
    <td>${index}</td>
    <td>${item.lastName}</td>
    <td>${item.firstName}</td>
    <td>${item.age}</td>
    <td>${item.dayOfBirth}</td>
    <td>${item.address?.regionName}</td>
    <td>
        <button   data-id=${item.id} class="btn btn-primary edit-item"  onclick="editItem(${item.id})">
            <i class="icon-edit"></i>
        </button>
        <button onclick="deleteItem(${item.id})" class="btn btn-danger">
            <i class="icon-trash"></i>
        </button>
    </td>

</tr>`;
}

   

   

   
function save() {

//edit or add

  const myForm = document.forms.myForm;
  const personId = document.forms
  
 //form values

  const ism = myForm.elements.ism.value;
  const familiya = myForm.elements.familiya.value;
  const sharif = myForm.elements.sharif.value;
  const tsana = myForm.elements.tsana.value;
  const traqam = myForm.elements.traqam.value;
  const viloyat = myForm.elements.viloyatId.value;
  const tuman = myForm.elements.tumanId.value;
  const uy = myForm.elements.uy.value;







    


   
   
    const firstName = myForm.elements.firstName.value;
    const lastName = myForm.elements.lastName.value;
    const regionId = myForm.elements.regionId.value;
    const region = regions.find(a => a.id == regionId);
    const addressLine1 = myForm.elements.addressLine1.value;
    const dayOfBirth = myForm.elements.dayOfBirth.value;

    if (personId && personId > 0) {
        // edit
        const _item = persons.find(a => a.id == personId);
        _item.age = age;
        _item.firstName = firstName;
        _item.lastName = lastName;
        _item.dayOfBirth = dayOfBirth;
        // _item.address?.regionId = region.id;
        // _item.address?.regionName = region.text;
    }
    else {
        //add

        const newItem = new Person(firstName, lastName, age, dayOfBirth, new Address(region, '', addressLine1));
        persons.push(newItem);
    }
    clear();
    saveToLocale();
}

   
   function close() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    myModal.hide();
  }

  function clear() {
    const myForm = document.forms.myForm;
    myForm.reset();
  }


  function openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  }

  function saveToLocale() {
    localStorage.setItem('persons', JSON.stringify(persons));
  }

  function syncFromLocale() {
    const personsString = localStorage.getItem('persons');
    if (personsString) {
      const _persons = JSON.parse(personsString);
      if (Array.isArray(_persons)) {
        persons = [..._persons];
      }
    }
  }

  const edit_item = document.getElementById('mytable');
  edit_item.addEventListener('click', (event) => {
    console.log(event.target);
  })


  loadTable()



  /****** lesson 8 ******/



  
// let persons = [];
// syncFromLocale();
// class PageOptions {

//     constructor(page, pageSize) {
//         this.page = page;
//         this.pageSize = pageSize;
//     }

// }
// const pageOptions = new PageOptions(1, 10);
// class Person {
//     id = 0;
//     constructor(firstName, lastName, age, dayOfBirth, address) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.dayOfBirth = dayOfBirth;
//         this.address = address;
//         this.id = Date.now();
//     }
// }
// class Address {
//     constructor(region, city, addressLine1) {
//         this.regionId = region.id;
//         this.regionName = region.text;
//         this.addressLine1 = addressLine1;
//     }
// }

// // viloyat lar ruyxati API

// const regions = [{ id: 1, text: 'Toshkent' }, { id: 2, text: 'Samarqand' }, { id: 3, text: 'Andijon' }];
// const regionId = document.getElementById('regionId');
// regions.forEach((region) => {
//     const opt = document.createElement('option');
//     opt.value = region.id;
//     opt.text = region.text;
//     regionId.appendChild(opt)
// })
// const btnSave = document.getElementById('btnSave');
// btnSave.addEventListener('click', (e) => {
//     save();
//     console.log(persons)
//     loadTable();
// });
// //css
// const table_body = document.getElementById('mytable');
// function loadTable() {
//     table_body.innerHTML = '';
//     //sahifalash
//     const start = (pageOptions.page - 1) * pageOptions.pageSize;
//     const pagedPersons = persons.slice(start, start + pageOptions.pageSize)
//     pagedPersons.forEach((e, i) => {
//         table_body.innerHTML += addRow(e, i + 1);
//     })
// }

// function editItem(id) {
//     //persons find item
//     const item = persons.find(a => a.id === id);
//     if (item) {
//         console.log(item)
//         //form elemntlariga valuelarni set qilish 
//         const myForm = document.forms.myForm;
//         myForm.elements.personId.value = id;//identificator
//         myForm.elements.age.value = item.age;
//         myForm.elements.firstName.value = item.firstName;
//         myForm.elements.lastName.value = item.lastName;
//         myForm.elements.regionId.value = item.address?.regionId;
//         myForm.elements.addressLine1.value = item.address?.addressLine1;
//         myForm.elements.dayOfBirth.value = item.dayOfBirth;
//         openModal();
//     }

// }
// function addNew() {
//     clear();
//     openModal();
// }
// function deleteItem(id) {
//     const item = persons.find(a => a.id === id);
//     const index = persons.indexOf(item);
//     persons.splice(index, 1);
//     saveToLocale();
//     loadTable();
// }
// function selectRow(e) {
//     console.log(e)
//     const tr = document.getElementById('tr_' + e);
//     const trs = document.querySelectorAll('.person-row-selected');
//     Array.from(trs).forEach((e) => {
//         e.classList.remove('person-row-selected');
//     })
//     tr.classList.add('person-row-selected');

// }
// function addRow(item, index) {
//     return ` <tr id='tr_${index}'  onclick="selectRow(${index})">
//     <td>${index}</td>
//     <td>${item.lastName}</td>
//     <td>${item.firstName}</td>
//     <td>${item.age}</td>
//     <td>${item.dayOfBirth}</td>
//     <td>${item.address?.regionName}</td>
//     <td>
//         <button   data-id=${item.id} class="btn btn-primary edit-item"  onclick="editItem(${item.id})">
//             <i class="icon-edit"></i>
//         </button>
//         <button onclick="deleteItem(${item.id})" class="btn btn-danger">
//             <i class="icon-trash"></i>
//         </button>
//     </td>

// </tr>`;
// }






// function saveAndClose() {
//     //  save();
//     close();
//     //  loadTable();
// }





// function save() {
//     //edit or add

//     const myForm = document.forms.myForm;
//     const personId = myForm.elements.personId.value;

//     //form values
//     const age = myForm.elements.age.value;
//     const firstName = myForm.elements.firstName.value;
//     const lastName = myForm.elements.lastName.value;
//     const regionId = myForm.elements.regionId.value;
//     const region = regions.find(a => a.id == regionId);
//     const addressLine1 = myForm.elements.addressLine1.value;
//     const dayOfBirth = myForm.elements.dayOfBirth.value;

//     if (personId && personId > 0) {
//         // edit
//         const _item = persons.find(a => a.id == personId);
//         _item.age = age;
//         _item.firstName = firstName;
//         _item.lastName = lastName;
//         _item.dayOfBirth = dayOfBirth;
//         // _item.address?.regionId = region.id;
//         // _item.address?.regionName = region.text;
//     }
//     else {
//         //add

//         const newItem = new Person(firstName, lastName, age, dayOfBirth, new Address(region, '', addressLine1));
//         persons.push(newItem);
//     }
//     clear();
//     saveToLocale();
// }



/************** shu yerga kelding ***********/ 


// function close() {
//     // const modal = document.getElementById('exampleModal');
//     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
//     myModal.hide();

// }
// function clear() {
//     const myForm = document.forms.myForm;
//     myForm.reset();

// }
// function openModal() {

//     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
//     myModal.show();
// }
// function saveToLocale() {
//     localStorage.setItem('persons', JSON.stringify(persons));
// }
// function syncFromLocale() {
//     const personsString = localStorage.getItem('persons');
//     if (personsString) {
//         const _persons = JSON.parse(personsString);
//         if (Array.isArray(_persons)) {
//             persons = [..._persons];
//         }
//     }
// }
// loadTable();
// // const items = document.querySelectorAll('.edit-item');
// // Array.from(items).forEach((e) => {
// //     e.onclick = function (t) {
// //         console.log(t.target)
// //     }
// // })

// //
// // function clicktwo(e) {
// //     console.log(e)
// //     e.stopPropagation();
// //     console.log('two clicked!')

// // }
// // function clickone() {
// //     console.log('one clicked!')
// //     document.querySelector('.one').style = 'display:none';
// // }
// // document.querySelector('.two').onclick = clicktwo;
// // document.querySelector('.one').onclick = clickone;
// function addInitData() {
//     for (let index = 1; index < 26; index++) {

//         const newItem = new Person('firstName' + index, 'lastName' + index, 30, '2000-01-01', new Address({ id: 1, text: 'Toshkent' }, '', 'addressLine1 Info'));
//         persons.push(newItem);
//     }
// }
// addInitData()
// loadTable()
// function drawPagination() {
//     const pagination = document.querySelector('.pagination');

//     const next = `
// <li class="page-item" >
//     <a class="page-link" href="javascript:(0);" aria-label="Next" onclick="next()">
//         <span aria-hidden="true">&raquo;</span>
//     </a>
// </li>`;
//     let numbers = ``;
//     const pageCount = Math.ceil((persons.length / pageOptions.pageSize));
//     const prev = `<li class="page-item">
// <a class="page-link" href="javascript:(0);" aria-label="Previous"  onclick="prev()">
//     <span aria-hidden="true">&laquo;</span>
// </a>
// </li>
// `;
//     console.log(pageOptions.page);
//     for (let index = 0; index < pageCount; index++) {
//         const pageNumber = index + 1;
//         numbers += `<li class="page-item ${pageNumber == pageOptions.page ? 'active' : ''}"><a class="page-link" href="javascript:(0);" onclick="onPageChanged(${pageNumber})">${pageNumber}</a></li>`;
//     }
//     pagination.innerHTML = prev + numbers + next;
// }
// drawPagination();
// function onPageChanged(number) {
//     console.log(number)
//     pageOptions.page = number;
//     loadTable();
//     drawPagination();
// }
// function prev() {
//     console.log('prev',persons.length)
//     if (pageOptions.page > 1) {
//         pageOptions.page -= 1;
//         loadTable();
//         drawPagination();
//     }
// }
// function next() {
//     const pageCount = Math.ceil((persons.length / pageOptions.pageSize));
//     console.log('next',persons.length)
//     if (pageOptions.page < pageCount) {
//         pageOptions.page += 1;
//         loadTable();
//         drawPagination();
//     }
// }
