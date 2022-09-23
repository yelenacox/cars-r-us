import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "interiors"){
            interiors.find(interior => {return interior.id === parseInt(event.target.value)})
            setInterior(parseInt(event.target.value))
        }
    }
)


export const Interiors = () => {
    return `<h2>Interiors</h2>
    <select id="interiors" class="dropdown">
    <option value="0">Select Interior</option>
    ${interiors.map(
        (interior) => {
            return `
                <option value=${interior.id}>${interior.fabric}</option>
                `
        }
    ).join("")
        }
    </select>
    `
}
