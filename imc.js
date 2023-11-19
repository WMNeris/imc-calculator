var altura = 1.60
var peso = 150
var imc = peso / (altura ** 2)
var imc = imc.toFixed(2)
if (imc < 16){ //Magreza grave
    console.log(`Seu IMC é de ${imc};`)
    console.log(`*ATENÇÃO* Magreza grave.`)
} else if(imc <= 16.9){ //Magreza moderada
    console.log(`Seu IMC é de ${imc};`)
    console.log(`Magreza moderada.`)
}else if(imc <= 18.5){ //Magreza leve
    console.log(`Seu IMC é de ${imc};`)
    console.log(`Magreza leve.`)
}else if (imc <= 24.9){ //Peso ideal
    console.log(`Seu IMC é de ${imc};`)
    console.log(`Parabéns! Peso ideal.`)
}else if (imc <= 29.9){ //Sobrepeso
    console.log(`Seu IMC é de ${imc};`)
    console.log(`Você está com sobrepeso!!!`)
} else if (imc <= 34.9){ //Obesidade grau I 
    console.log(`*ATENÇÃO* Seu IMC é de ${imc};`)
    console.log(`Obesidade grau I.`)
} else if (imc <= 39.9){ //Obesidade grau II severa
    console.log(`*ATENÇÃO* Seu IMC é de ${imc};`)
    console.log(`Obesidade grau II ou Obesidade severa.`)
} else { //Obesidade grau III mórbida
    console.log(`*ATENÇÃO* Seu IMC é de ${imc};`)
    console.log(`Obesidade grau III ou Obesidade mórbida.`)
}