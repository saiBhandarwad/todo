let todoList = fetchTodosFromLocal()
fetchTodos()
console.log({ todoList });
let edit = false
let changed = false
let editIndex;

document.getElementById('button').addEventListener('click', handleSubmit)
document.getElementById('input').addEventListener('change', handleChange)

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
        } else {
            document.getElementById('input').value = ""
        }

    } else {
        let inputValue = document.getElementById('input').value

        todoList.push(inputValue)
        fetchTodos()
    }

}

function fetchTodos() {

    localStorage.setItem("todoLocalArr", todoList)
    let list = document.getElementById('list')
    list.innerHTML = ""
    if (todoList.length === 0) {
        list.innerHTML = `<div class="list_item">your todo list will appear here
        </div>`
    }

    todoList.map((elem, i, arr) => {
        if (elem.length === 0) {
            todoList.splice(i, 1)
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

/*************************************************************** */

document.getElementById('dark').addEventListener('click', () => handleMode("dark"))
document.getElementById('light').addEventListener('click', () => handleMode("light"))
document.getElementById('mobileDark').addEventListener('click', () => handleMode("mobileDark"))
document.getElementById('mobileLight').addEventListener('click', () => handleMode("mobileLight"))

function handleMode(id) {
    if (id === 'dark') {
        document.getElementById("dark").classList.add("active")
        document.getElementById("light").classList.remove("active")

        document.getElementById('main').classList.add("dark_mode")
        document.getElementById('main').classList.remove("light_mode")
    }
    if (id === 'light') {
        document.getElementById("light").classList.add("active")
        document.getElementById("dark").classList.remove("active")

        document.getElementById('main').classList.add("light_mode")
        document.getElementById('main').classList.remove("dark_mode")
    }
    if (id === 'mobileDark') {
        document.getElementById("mobileDark").classList.add("active")
        document.getElementById("mobileLight").classList.remove("active")

        document.getElementById('main').classList.add("dark_mode")
        document.getElementById('main').classList.remove("light_mode")
    }
    if (id === 'mobileLight') {
        document.getElementById("mobileLight").classList.add("active")
        document.getElementById("mobileDark").classList.remove("active")

        document.getElementById('main').classList.add("light_mode")
        document.getElementById('main').classList.remove("dark_mode")
    }

}

/**************************************************************** */
function handleNavigation(id) {
    const login = document.getElementById('loginContainer')
    const signup = document.getElementById('signupContainer')
    const todo = document.getElementById('todoContainer')
    const pageNotFound = document.getElementById('pageContainer')


    if (id === 'loginContainer') {
        todo.classList.add('hide')
        signup.classList.add('hide')
        pageNotFound.classList.add('hide')
        login.classList.remove('hide')
    }
    if (id === 'signupContainer') {
        todo.classList.add('hide')
        login.classList.add('hide')
        pageNotFound.classList.add('hide')
        signup.classList.remove('hide')
    }
    if (id === 'todoContainer') {
        login.classList.add('hide')
        signup.classList.add('hide')
        pageNotFound.classList.add('hide')
        todo.classList.remove('hide')
    }
    if (id === 'pageContainer') {
        login.classList.add('hide')
        signup.classList.add('hide')
        todo.classList.add('hide')
        pageNotFound.classList.remove('hide')
    }
}

let MenuBar = true
function handleMobileMenu() {
    const mobileMenuItmes = document.getElementById('mobileMenuItmes')
    const mobileMenu = document.getElementById('mobileMenu')

    if (MenuBar) {
        mobileMenu.classList.remove("fa-bars")
        mobileMenu.classList.add("fa-x")
        mobileMenuItmes.classList.add('show_menu')
        mobileMenuItmes.classList.remove('hide_menu')

        MenuBar=false
    }else{
        mobileMenu.classList.add("fa-bars")
        mobileMenu.classList.remove("fa-x")
        mobileMenuItmes.classList.add('hide_menu')
        mobileMenuItmes.classList.remove('show_menu')


        MenuBar=true
    }



}


document.getElementById('login').addEventListener('click', () => handleNavigation('loginContainer'))
document.getElementById('signup').addEventListener('click', () => handleNavigation('signupContainer'))

document.getElementById('todo').addEventListener('click', () => handleNavigation('todoContainer'))
document.getElementById('pageNotFound').addEventListener('click', () => handleNavigation('pageContainer'))
document.getElementById('backToHome').addEventListener('click', () => handleNavigation('todoContainer'))

/* MOBILE MENU HANDLERS */

document.getElementById('mobileLogin').addEventListener('click', () => handleNavigation('loginContainer'))
document.getElementById('mobileSignup').addEventListener('click', () => handleNavigation('signupContainer'))

document.getElementById('mobileTodo').addEventListener('click', () => handleNavigation('todoContainer'))
document.getElementById('mobilePageNotFound').addEventListener('click', () => handleNavigation('pageContainer'))
document.getElementById('backToHome').addEventListener('click', () => handleNavigation('todoContainer'))
document.getElementById('mobileMenu').addEventListener('click', handleMobileMenu)