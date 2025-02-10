function addPeople(){
    const nameElement = document.querySelector('#Name');
    const emailElement = document.querySelector('#Email');
    const phoneElement = document.querySelector('#Phone');
    const genderElement = document.querySelector('#Gender');
    const professionElement = document.querySelector('#Profession');
    
    const people = {
        Name: nameElement.value,
        Email: emailElement.value,
        Phone: +phoneElement.value,
        Gender: genderElement.value,
        Profession: professionElement.value,
    }
    
    if(people.Name == '' || people.Email == '' || people.Phone == '' || isNaN(people.Phone)){
        alert('All inputs needs to be filled or Phone is not a number');
        return;
    } else {
        nameElement.value = '';
        emailElement.value = '';
        phoneElement.value = '';
        genderElement.value = 'Male';
        professionElement.value = 'Plummer';

        peopleData.push(people);
    }

    localStorage.setItem('person', JSON.stringify(peopleData));
    htmlGenerator();
    init();
}