let Length = document.getElementById("length-con")
let Volume = document.getElementById("vol-con")
let Mass = document.getElementById("mass-con")

let x
let meterfeet
let feetmeter
let met
let fet

function convert() {
    x = parseFloat(document.getElementById("number-to-convert").value)
    meterfeet = x * 3.28
    met = meterfeet.toFixed(3)
    feetmeter = 3.28 / x
    fet = feetmeter.toFixed(3) 

    


function changeLength() {
     Length.textContent = x + " meters " + " = " + met + " feet " + " | " + x + " feet " + " = " + fet + " meters"

}
    changeLength()


    littergallon = x * 0.264172
    lit = littergallon.toFixed(3)
    gallonlitter = 0.264172 / x
    gal = gallonlitter.toFixed(3) 

function changeVolume() {
    Volume.textContent = x + " liters " + " = " + lit + " gallons " + " | " + x + " gallons " + " = " + gal + " liters"

}
changeVolume()

    kilopound = x * 2.205
    kil = kilopound.toFixed(3)
    poundkilo = 2.205 / x
    pou = poundkilo.toFixed(3) 

function changeMass() {
    Mass.innerText = x + " kilos " + " = " + kil + " pounds " + " | " + x + " pounds " + " = " + pou + " kilos"

}
changeMass()

}
