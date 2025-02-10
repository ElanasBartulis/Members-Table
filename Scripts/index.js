const personJSON = localStorage.getItem('person');
const peopleData = personJSON === null ? [] : JSON.parse(personJSON);

init(peopleData);
