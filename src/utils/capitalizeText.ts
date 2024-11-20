export const capitalizeText = (text:string)=>{
    const splitted = text.split(" ")
    const capitalizedArray = splitted.map(element => element[0].toLocaleUpperCase() + element.substring(1))
    return capitalizedArray.join(' ')
}