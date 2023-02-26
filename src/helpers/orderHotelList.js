// Function to sort the list of hotels to check if the selected hotel is available.

export const orderHotelList = ( hotels, code ) => {
  
    const ordered = []

    // Search for the object with the specified CODE
    const firstElement = hotels.find(obj => obj.code === code);

    // If no object with that property and value is found, we return the original array
    if (!firstElement) {
        return hotels;
    }

    // Move the found object to the first index of the array
    hotels.splice(hotels.indexOf(firstElement), 1);
    ordered.push(firstElement);

    // Filter the hotels that are in the same ZONE. 
    const zone = ordered[0].zoneCode
    const objectsWithProp2 = hotels.filter(obj => obj.zoneCode === zone);

    // Filter the remaining hotels
    const otherObjects = hotels.filter(obj => obj.zoneCode !== zone);

    // Concatenate all hotels in correct order
    ordered.push(...objectsWithProp2, ...otherObjects);
    console.log(ordered)

    return ordered;
}
