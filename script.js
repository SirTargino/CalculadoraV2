let num1 = 0
let num2 = 0

const resultado = document.getElementById("resultado")

function soma(){
    num1 = Number(document.getElementById("n1").value)
    num2 = Number(document.getElementById("n2").value)

    var res = num1+num2

    return resultado.innerHTML = "Resultado = " + res
}

function subtrai(){
    num1 = Number(document.getElementById("n1").value)
    num2 = Number(document.getElementById("n2").value)

    var res = num1-num2
    
    return resultado.innerHTML = "Resultado = " + res
}

function multiplica(){ 
    num1 = Number(document.getElementById("n1").value)
    num2 = Number(document.getElementById("n2").value)

    var res = num1*num2

    return resultado.innerHTML = "Resultado = " + res
}

function divide(){   
    num1 = Number(document.getElementById("n1").value)
    num2 = Number(document.getElementById("n2").value)

    var res = num1/num2
    
    return resultado.innerHTML = "Resultado = " + res
}