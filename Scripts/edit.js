let currentIndex;

const dialogElement = document.querySelector('dialog');
const nameEdit = document.querySelector('#Name-edit');
const emailEdit = document.querySelector('#Email-edit');
const phoneEdit = document.querySelector('#Phone-edit');
const genderEdit = document.querySelector('#Gender-edit');
const professionEdit = document.querySelector('#Profession-edit');
const blurElement = document.querySelector('.blur-effect');


function editBtn(index) {
    dialogElement.style.display = 'block';
    blurElement.classList.add('blur')

    currentIndex = index;
    
    nameEdit.value = peopleData[index].Name;
    emailEdit.value = peopleData[index].Email;
    phoneEdit.value = peopleData[index].Phone;
    genderEdit.value = peopleData[index].Gender;
    professionEdit.value = peopleData[index].Profession;

}

function closeEditBox() {
    dialogElement.style.display = 'none';
    blurElement.classList.remove('blur')
}

function save() {
    peopleData[currentIndex] = {
        Name: nameEdit.value,
        Email: emailEdit.value,
        Phone: phoneEdit.value,
        Gender: genderEdit.value,
        Profession: professionEdit.value,
    }

    localStorage.setItem('person', JSON.stringify(peopleData));
    closeEditBox();
    init();
}