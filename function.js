function firstNumber(num) {
    document.getElementById("display").value += `${num}`
}

function operation() {
    const value = document.getElementById("display").value
    if (!value) {
        document.getElementById("display").value = `ERROR`
        return 
    }
    const valueSplited = value.split("")
    console.log(valueSplited);
    const num1 = parseInt(valueSplited[0])
    const num2 = parseInt(valueSplited[1])
    console.log(typeof(num1));
    console.log(typeof(num2));
    document.getElementById("displaySoma").value += `${valueSplited[0]} + ${valueSplited[1]}  =  ${num1 + num2}`
    document.getElementById("displaysub").value += `${valueSplited[0]} - ${valueSplited[1]}  =  ${num1 - num2}`
    document.getElementById("displaymulti").value += `${valueSplited[0]} + ${valueSplited[1]}  =  ${num1 * num2}`
    document.getElementById("displayDivi").value += `${valueSplited[0]} - ${valueSplited[1]}  =  ${num1 / num2}`

}