const body = document.querySelector("body")

import SideNav from "./side-nav"
import Header from "./header"
import Todo from "./todo"
// import Contents from './contents'
import "../style/global.css"

function TodoComponent(){
    const div = document.createElement("div")
    div.className = "container"

    div.appendChild(Header())
    div.appendChild(SideNav())
    div.appendChild(Todo())
    return div
}

body.appendChild(TodoComponent())