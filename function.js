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
    let element = array[i];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            element = array[i]
        }
    }
    alert(element)
}

function operation() {
    const value = document.getElementById("display").value
    if (!value) {
        document.getElementById("display").value = `ERROR`
        return 
    }
    const valueSplited = value.split("")
    let cont = 0

    for (let i = 0; i < valueSplited.length; i++) {
        cont += 1
    }

    if (cont > 2) {
        maiorNumero(valueSplited)
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