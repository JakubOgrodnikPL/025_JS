let celsius
let temp
const fahrenheit = (par) => {
    celsius = par
    temp = celsius*1.8+32
    console.log(`${par}stC to ${temp} stF`)
}
fahrenheit(20)