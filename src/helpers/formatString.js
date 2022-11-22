//  Capitalize only the first letter 

export const formatString = (str) => {
    const splitStr = str.split(" ").map(word => {
        if (word === '') return ''         // check if string is empty ej: 'Varadero '
        return word[0] + word.slice(1).toLowerCase()
    })

    return splitStr.join(" ")
}