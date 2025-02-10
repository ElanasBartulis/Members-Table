function deleteBtn(index) {
    peopleData.splice(index, 1);
    init();
    localStorage.setItem('person', JSON.stringify(peopleData));
}