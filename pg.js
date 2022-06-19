let card_quantity = Number(prompt("Qual o número de cartas que você quer jogar? (Digite um número de 4 a 14 e que seja par"))

while (card_quantity > 14 || card_quantity < 4 || card_quantity % 2 !== 0){
    card_quantity = Number(prompt("Valor inválido. Por favor, digite um número de cartas de 4 a 14 e que seja par."))
}

let versos = ["bobrossparrot","bobrossparrot","explodyparrot","explodyparrot","fiestaparrot","fiestaparrot","metalparrot","metalparrot","revertitparrot","revertitparrot","tripletsparrot","tripletsparrot","unicornparrot","unicornparrot"]

let versos_utilizados = versos.slice(0,card_quantity)

function comparador() { 
	return Math.random() - 0.5; 
}

versos_utilizados.sort(comparador)

const board = document.querySelector('.game-area');

for(let index = 0; index < card_quantity; index++){
    board.innerHTML += 
    ` 
    <div class="card">
        <div class="front-face face">
             <img src="front 1.png" alt="">
        </div>
        <div class="back-face face">
            <img src="Imagens/${versos_utilizados[index]}.gif" alt="">
        </div>  
    </div>
    `
}
