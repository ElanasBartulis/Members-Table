function htmlGenerator(person=peopleData) {
    let htmlCode = '';
    person.map((asmuo, index) => {
        htmlCode += `
        <tr>
            <td><img src="./assets/${asmuo.Gender === 'Male' ? 'face-icon.svg' : 'face-icon-female.svg'}" alt="img"></td>
            <td>${asmuo.Name}</td>
            <td>${asmuo.Email}</td>
            <td>${asmuo.Phone}</td>
            <td class="${asmuo.Gender == 'Male' ? 'male-color' : 'female-color'}">${asmuo.Gender}</td>
            <td>${asmuo.Profession}</td>
            <td>${deleteIcon(index)}${editIcon(index)}</i></td>
        </tr>
        `
    })
    return htmlCode;
}

function init(person=peopleData){
    const memberLength = document.querySelector('#user-length');
    memberLength.innerHTML = memberCount(person);
    const personList = document.querySelector('#Person-list');
    personList.innerHTML = htmlGenerator(person);
}