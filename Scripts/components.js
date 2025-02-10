function deleteIcon(index) {
    return `<span class="icon-red" title="Pasalinti produkta" onClick="deleteBtn(${index})">
            <i class="bi bi-trash"></i>
            </span>`
}

function editIcon(index){
    return `<span class="icon-blue" title="Redaguoti produkta" onClick="editBtn(${index})">
            <i class="bi bi-pen"></i>
            </span>`
}

function memberCount(x) {
    return x.length
}

