function firstNumber(num) {
    document.getElementById("display").value += `${num}`
}

function cleanDisplay() {
    document.getElementById("displaySoma").value = ''
    document.getElementById("displaysub").value = ''
    document.getElementById("displaymulti").value = ''
    document.getElementById("displayDivi").value = ''
}

function maiorNumero(array) {
    console.log(Math.max.apply(null, array));
}

function operation() {
    const value = document.getElementById("display").value
    const valueSplited = value.split("")
    let cont = 0

    for (let i = 0; i < valueSplited.length; i++) {
        cont += 1
    }

    if (cont > 2) {
        maiorNumero(valueSplited)
        document.getElementById("display").value = ''
        return
    }
    const num1 = parseInt(valueSplited[0])
    const num2 = parseInt(valueSplited[1])
    if (num2 === 0) {
        
    }
    
    document.getElementById("displaySoma").value = `${valueSplited[0]} + ${valueSplited[1]}  =  ${num1 + num2}`
    document.getElementById("displaysub").value = `${valueSplited[0]} - ${valueSplited[1]}  =  ${num1 - num2}`
    document.getElementById("displaymulti").value = `${valueSplited[0]} * ${valueSplited[1]}  =  ${num1 * num2}`
    if (num2 !== 0) {
        document.getElementById("displayDivi").value = `${valueSplited[0]} / ${valueSplited[1]}  =  ${num1 / num2}`   
    }else{
        document.getElementById("displayDivi").value = `Não realiza divisão por 0.` 
    }
    document.getElementById("display").value = ''
}