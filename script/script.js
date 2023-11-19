function calcular(){
    var pes = document.querySelector('#peso')
    var alt = document.querySelector('#altura')
    var imc = pes.value / (alt.value ** 2)
    var res = document.querySelector('#res')

    if(pes.value.length == 0 || alt.value.length == 0){
        alert('Preencha os dados e tente novamente!')
    } else if(imc <= 18.5){
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong>Abaixo do normal</strong>')
        res.innerHTML +=('<p class="result">Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>')
    } else if(imc < 24.9){
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong id="pesonormal">Parabéns! Peso Normal</strong>')
        res.innerHTML +=('<p class="result">Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>')
    } else if(imc < 29.9){
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong>Sobrepeso</strong>')
        res.innerHTML +=('<p class="result">Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>')
    } else if(imc < 34.9){
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong>Obesidade grau I</strong>')
        res.innerHTML +=('<p class="result"><strong>Sinal de alerta!</strong> Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>')
    } else if(imc < 39.9){
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong>Obesidade grau II</strong>')
        res.innerHTML +=('<p class="result"><strong>Sinal de alerta!</strong> Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>')
    } else{
        res.innerHTML = (`<p class="result">Seu IMC é de: ${imc.toFixed(2)}</p>`)
        res.innerHTML += ('<strong>Obesidade grau III</strong>')
        res.innerHTML +=('<p class="result"><strong>Sinal de alerta!</strong> Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>')
    }
    
}
