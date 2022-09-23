import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            wheels.find((wheel) => { return wheel.id === parseInt(event.target.value) })
            setWheel(parseInt(event.target.value))


        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
    <select id="wheels" class="dropdown">
    <option value="0">Select Wheels</option>
    ${wheels.map(wheel => {
        return `
        <option value=${wheel.id}>${wheel.type}</option>`
    }).join("")}</select>`
}
