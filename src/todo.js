import "../style/todo.css"

function Todo(){

    // Create contents
    const section = document.createElement("section")
    section.className = "contents"
    const h1 = document.createElement("h1")
    h1.textContent = "Inbox"
    const addTaskButton = document.createElement("button")
    addTaskButton.textContent = "+ Add task"

    // Creating todo
    const todomodal = document.createElement("div")
    todomodal.className = "todo-popup"
    const todoContents = document.createElement("div")
    todoContents.className = "todo-contents"
    const cancelPopUp = document.createElement("button")
    cancelPopUp.textContent = "X"
    cancelPopUp.className = "cancelPopup"
    const todoHeader = document.createElement("h1")
    todoHeader.textContent = "Add a Todo"
    const todoInputsContainer = document.createElement("form")
    todoInputsContainer.className = "todoInputsContainer"
    const todoTitleInput = document.createElement("input")
    todoTitleInput.placeholder = "Todo Title"
    const todoDescriptionInput = document.createElement("input")
    todoDescriptionInput.placeholder = "Todo Description"
    const todoDateInput= document.createElement("input")
    todoDateInput.type = "datetime-local"
    // Create my Select Inputs and it's 3 options: Low, Medium, High
    const selectTodoPriority = document.createElement("select")
    selectTodoPriority.className = "selectPriority"
    selectTodoPriority.name= "Priority"
    const todoPriorit1 = document.createElement("option")
    todoPriorit1.text = "Normal";
    todoPriorit1.value = "normal";
    const todoPriorit2 = document.createElement("option")
    todoPriorit2.text = "Important";
    todoPriorit2.value = "important";
    const todoPriorit3 = document.createElement("option")
    todoPriorit3.text = "Very Important";
    todoPriorit3.value = "very important";
    // Creating the addtodo Button to submit the Todo form. 
    const addTodoBtn = document.createElement("button")
    addTodoBtn.textContent = "Add Todo"
    addTodoBtn.className = "addTodoBtn"

    const allTodos = document.createElement("div")
    allTodos.className = "todo-wrapper"

    addTodoBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const todo = document.createElement("div")
        todo.className = "todo"
        const todoTitle = document.createElement("h3")
        todoTitle.textContent = todoTitleInput.value
        const todoDescription = document.createElement("p")
        todoDescription.textContent = todoDescriptionInput.value
        const todoPriority = document.createElement("p")
        todoPriority.textContent = `Priority: ${selectTodoPriority.value}`
        todoPriority.className = "todoPriority"
        const todoDate = document.createElement("p")
        todoDate.textContent = `Date: ${todoDateInput.value}`
        todoDate.className = "todoDate"
        const todoButtons = document.createElement("div")
        const todoEditBtn = document.createElement("button")
        todoEditBtn.textContent = "🖋️"
        todoEditBtn.className = "todoEditBtn"
        const todoDeleteBtn = document.createElement("button")
        todoDeleteBtn.textContent = "🗑️"
        todoDeleteBtn.className = "todoDeleteBtn"

        todo.appendChild(todoTitle)
        todo.appendChild(todoDescription)
        todo.appendChild(todoPriority)
        todo.appendChild(todoDate)
        todoButtons.appendChild(todoEditBtn)
        todoButtons.appendChild(todoDeleteBtn)
        todo.appendChild(todoButtons)

        allTodos.appendChild(todo)

        // todoTitleInput.value = ""
        // todoDescriptionInput.value = ""
        // todoDateInput.value = ""
        todomodal.classList.remove("active")

    })

    addTaskButton.addEventListener("click", () => {
        todomodal.classList.add("active")
    })

    cancelPopUp.addEventListener("click", () => {
        todomodal.classList.remove("active")
    })

    todoContents.appendChild(todoHeader)
    todoInputsContainer.appendChild(todoTitleInput)
    todoInputsContainer.appendChild(todoDescriptionInput)
    todoInputsContainer.appendChild(todoDateInput)
    selectTodoPriority.appendChild(todoPriorit1)
    selectTodoPriority.appendChild(todoPriorit2)
    selectTodoPriority.appendChild(todoPriorit3)
    todoInputsContainer.appendChild(selectTodoPriority)
    todoInputsContainer.appendChild(addTodoBtn)
    todoContents.appendChild(cancelPopUp)
    todoContents.appendChild(todoInputsContainer)
    todomodal.appendChild(todoContents)
    section.appendChild(h1)
    section.appendChild(addTaskButton)
    section.appendChild(todomodal)
    section.appendChild(allTodos)
    return section
}

export default Todo