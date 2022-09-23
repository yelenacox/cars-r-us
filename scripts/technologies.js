import { getTechnologies, setTechnology } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            techs.find(tech => { return tech.id === parseInt(event.target.value) })
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    return `<h2>Technologies</h2>
    <select id="technologies" class="dropdown">
    <option value="0">Select Technology Package</option>
    ${techs.map((tech) => {
        return `
    <option value=${tech.id}>${tech.package}</option>`
    }).join("")}</select>`
}

