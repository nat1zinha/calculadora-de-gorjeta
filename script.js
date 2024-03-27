let conta = 0
let pessoas = 0

const contaInput= document.querySelector(".conta input")
contaInput .addEventListener("input",)

function receberValorConta(evento){
    conta = Number(evento.target.value)
}

const pessoaaInput= document.querySelector("pessoas")
pessoasInput.addEventListener("input",receberQuantidadeDePessoas)

function receberQuantidadeDePessoas(evento){
    const paragrafoErro= document.querySelector("pessoas #erro")
    const divErro= document.querySelector(".pessoas .input-box")

    if(evento.target.value ==="0"){
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    }else{
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }

}
const botoesGorjeta= document.querySelector(".gorjeta input [type='button]")
botoesGorjeta.forEach (botao=>{
    botao.addEventListener("click", receberPorcentagem)
})


function receberPorcentagem(evento){
    console.log(evento.target.value)

    
}