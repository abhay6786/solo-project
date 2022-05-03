let Length = document.getElementById("length-con")
let Volume = document.getElementById("vol-con")
let Mass = document.getElementById("mass-con")

let x
let meterfeet
let feetmeter
let met
let fet

function convert(){
    x = parseFloat(document.getElementById("number-to-convert").value)
    meterfeet = x * 3.28
    met = meterfeet.toFixed(3)
    feetmeter = 3.28 / x
    fet = feetmeter.toPrecision(3)
    
    changeLength()
    changeVolume()
    changeMass()
}

function changeLength() {
     Length.textContent = x + "meters" + "=" + met + "feet" + "|" + x + "feet" + "=" + fet + "meters"

}

function changeVolume() {
    Volume.innerText = x + "liters" + "=" + met + "gallons" + "|" + x + "gallons" + "=" + fet + "liters"
}

function changeMass() {
    Mass.innerText = x + "kilos" + "=" + met + "pounds" + "|" + x + "pounds" + "=" + fet + "kilos"
}