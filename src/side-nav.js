import Project from "./project"
import "../style/side-nav.css"

function SideNav() {

    const nav  = document.createElement("nav")
    nav.className = "side-nav"
    const h2 = document.createElement("h2")
    h2.textContent = "Projects"
    const addProjectButton = document.createElement("button")
    addProjectButton.textContent = "+ Add Project"
    addProjectButton.className = "addProjectButton"

    // Add project code
    const addProjectDiv = document.createElement("div")
    addProjectDiv.className = "addprojectdiv"
    const projectNameInput = document.createElement("input")
    projectNameInput.placeholder = "Project Name"
    const Addbutton = document.createElement("button")
    Addbutton.textContent = "Add"
    const cancelButton = document.createElement("button")
    cancelButton.textContent = "Cancel"

    addProjectButton.addEventListener("click", () => {
        addProjectButton.classList.add("inactive")
        addProjectDiv.classList.add("active")
    })

    Addbutton.addEventListener("click", () => {
        nav.appendChild(Project(projectNameInput.value))
        projectNameInput.value = ""
        addProjectButton.classList.remove("inactive")
        addProjectDiv.classList.remove("active")
    })

    cancelButton.addEventListener("click", () => {
        addProjectButton.classList.remove("inactive")
        addProjectDiv.classList.remove("active")
    })
    
    addProjectDiv.appendChild(projectNameInput)
    addProjectDiv.appendChild(Addbutton)
    addProjectDiv.appendChild(cancelButton)
    nav.appendChild(h2)
    nav.appendChild(addProjectButton)
    nav.appendChild(addProjectDiv)
    nav.appendChild(Project("Demo Project"))

    return nav
}

export default SideNav