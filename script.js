let todoList = []

function handleDelete(index) {
    console.log(index);
    todoList.splice(index,1)
    list.innerHTML = ""
    todoList.map((elem,i) => {
        
        list.innerHTML += `<div class="list_item" id=${i}><li>${elem}</li><button id="delete" onclick=${`handleDelete(${i})`} >delete</button></div>`
   })
}

function handleSubmit() {
    let inputValue = document.getElementById('input').value
    let list = document.getElementById('list')
    console.log(inputValue);
    todoList.push(inputValue)
    list.innerHTML = ""
    todoList.map((elem,i) => {
        
        list.innerHTML += `<div class="list_item" id=${i}><li>${elem}</li><button id="delete" onclick=${`handleDelete(${i})`} >delete</button></div>`
   })
   document.getElementById('input').value=""
}
document.getElementById('button').addEventListener('click', handleSubmit)

