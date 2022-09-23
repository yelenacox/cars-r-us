import { getOrders, getPaints, getWheels, getInteriors, getTechnologies } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const wheels = getWheels()
    const interiors = getInteriors()
    const technologies = getTechnologies()

    const chosenPaint = paints.find(
        paint => {
            return paint.id === order.paintId
        }
    )

    const chosenWheels = wheels.find(
        wheel => {
            return wheel.id === order.wheelId
        }
    )

    const chosenInterior = interiors.find(
        interior => {
            return interior.id === order.interiorId
        }
    )

    const chosenTech = technologies.find(
        technology => {
            return technology.id === order.technologyId
        }
    )

    const totalCost = chosenPaint.price + chosenWheels.price + chosenInterior.price + chosenTech.price 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })


    return `<li class="order">
        ${chosenPaint.color} car with ${chosenWheels.type} wheels, ${chosenInterior.fabric} interior, and the ${chosenTech.package} for a total cost of ${costString}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}