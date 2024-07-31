import "../style/project.css"

function Project(name){

    const section = document.createElement("section")
    section.className = "projects"
    const h2 = document.createElement("h3")
    h2.textContent = name

    section.addEventListener("click", () => {
        console.log("mee");
    })

    section.appendChild(h2)
    return section
}

export default Project