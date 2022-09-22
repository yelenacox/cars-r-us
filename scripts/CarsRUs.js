import { Interiors } from "./interiors.js"
import { Paints } from "./paints.js"
import { Wheels } from "./wheels.js"
import { Technologies } from "./technologies.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars-'R-Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
            ${Technologies()}
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        <article class="customOrders">
        ${Orders()}
    </article>
        `
}

