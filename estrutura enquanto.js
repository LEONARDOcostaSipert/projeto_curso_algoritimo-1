/*
    nome: caractere
    idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("digite a quantidade de vezes que vai ser indentificada a idade")
leia(limite)
contador := 0
enquanto contador < limite faca
    escreva("digite o nome da pessoa: ")
    leia(nome)
    escreva("digite a idade do ", nome, ": ")
    leia(idade)
    se idade > 18 entao
        escreval(nome, " voce é maior de idade!")
    senao
        escreval(nome, " voce é menor de idade!")
    fimse
    contador := contador + 1
fimenquanto*/


function acaoBotao(){
    var nome, idade, limite, contador
    limite = prompt("digite a quantidade de vezes que vai ser indentificada a idade: ")
    contador = 0
    while(contador < limite){
    nome = prompt("digite o nome da pessoa: ")
    idade = prompt("digite a idade do ", nome, ": ")
    if ( idade > 18 ) 
        document.getElementById("paragrafo").innerText = + " voce e maior de idade!"
    else
        document.getElementById("paragrafo").innerText = + " voce e menor de idade!"
    contador++ 
    }
}