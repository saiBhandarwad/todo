let todoList = fetchTodosFromLocal()
fetchTodos()
console.log({ todoList });
let edit = false
let changed = false
let editIndex;

function handleDelete(index) {
    todoList.splice(index, 1)
    fetchTodos()
}
function handleChange() {
    changed = true
}
function handleEdit(i) {
    edit = true
    editIndex = i
    document.getElementById('input').focus()
    document.getElementById('input').value = todoList[i]

}

function handleSubmit() {
    if (edit === true) {
        if (changed === true) {
            todoList.splice(editIndex, 1, document.getElementById('input').value)
            fetchTodos()
            edit = false
            changed = false
            return;
        }else{
            document.getElementById('input').value = ""
        }

    } else {
        let inputValue = document.getElementById('input').value
        
        todoList.push(inputValue)
        fetchTodos()
    }

}
document.getElementById('button').addEventListener('click', handleSubmit)
document.getElementById('input').addEventListener('change', handleChange)

function fetchTodos() {

    localStorage.setItem("todoLocalArr", todoList)
    let list = document.getElementById('list')
    list.innerHTML = ""
    if(todoList.length===0){
        list.innerHTML = `<div class="list_item">your todo list will appear here
        </div>`
    }
   
        todoList.map((elem, i,arr) => {
            if(elem.length===0){
                todoList.splice(i,1)
                return
            }
            list.innerHTML += `<div class="list_item">${elem} 
            <div>
                <i class="fa-solid fa-trash m-2" id="delete" onclick=${`handleDelete(${i})`}></i>
                <i class="fa-solid fa-pen-to-square m-2" id="edit" onclick=${`handleEdit(${i})`}></i>
            </div>
        </div>`

        })
        document.getElementById('input').value = ""
}
function fetchTodosFromLocal() {
    if (localStorage.getItem("todoLocalArr") === null) {
        return []
    } else {
        let todoLocalArr = localStorage.getItem("todoLocalArr").split(',')
        console.log({ todoLocalArr });
        return todoLocalArr
    }

}