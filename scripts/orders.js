import { getOrders, getPaints, getWheels, getInteriors, getTechnologies } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const wheels = getWheels()
    const interiors = getInteriors()
    const technologies = getTechnologies()

const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
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