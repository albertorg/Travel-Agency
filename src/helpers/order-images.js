
export const orderImages = (hotel, limit = null) => {
    let ordered = []
    ordered = [...hotel.details.images].sort((a, b) => (
        a.visualOrder - b.visualOrder
    ))

    if (limit) ordered = ordered.slice(0, limit)

    return ordered
}

export const sortImagesNormal = (hotel, limit = null) => {
    let ordered = []
    ordered = [...hotel.images].sort((a, b) => (
        a.visualOrder - b.visualOrder
    ))

    if (limit) ordered = ordered.slice(0, limit)

    return ordered
}