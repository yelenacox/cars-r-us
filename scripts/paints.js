import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "paints"){
            paints.find(paint => {return paint.id === parseInt(event.target.value)})
            setPaint(parseInt(event.target.value))
        }
    }
)



export const Paints = () => {
    return `<h2>Paints</h2>
    <select id="paints" class="dropdown">
    <option value="0">Select Paint Color</option>
    ${paints.map(
        (paint) => {
            return `
            <option value=${paint.id}>${paint.color}</option> 
            `
        }
    ).join("")
        }
    </select>
    `
}