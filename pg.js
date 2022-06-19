let card_quantity = Number(prompt("Qual o número de cartas que você quer jogar? (Digite um número de 4 a 14"))

while (card_quantity > 14 || card_quantity < 4 || card_quantity % 2 !== 0){
    card_quantity = Number(prompt("Valor inválido. Por favor, digite um número de cartas de 4 a 14."))
}