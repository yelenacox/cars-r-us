const database = {
    paints: [
        {id: 1, color: "Silver", price: 200},
        {id: 2, color: "Midnight Blue", price: 250},
        {id: 3, color: "Firebrick Red", price: 250},
        {id: 4, color: "Spring Green", price: 180}
       ],
    interiors: [
        {id: 1, fabric: "Beige Fabric", price: 200},
        {id: 2, fabric: "Charcoal Fabric", price: 250},
        {id: 3, fabric: "White Leather", price: 400},
        {id: 4, fabric: "Black Leather", price: 500}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 1000},
        {id: 2, package: "Navigation Package", price: 1500},
        {id: 3, package: "Visibility Package", price: 1500},
        {id: 4, package: "Ultra Package", price: 2800}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 400},
        {id: 2, type: "17-inch Pair Radial Black", price: 450},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 500},
        {id: 4, type: "18-inch Pair Spoke Black", price: 550}
    ],
    customOrders: [
        {id: 1, paintId: 1, interiorId: 1, technologyId: 1, wheelId: 1, timestamp: 1663886902485}
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    return database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    return database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}