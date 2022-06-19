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
        <div class="front-face face"  onclick="guess(this)">
             <img src="Imagens/front 1.png" alt="">
        </div>
        <div class="back-face face">
            <img src="Imagens/${versos_utilizados[index]}.gif" alt="">
        </div>  
    </div>
    `
}

let pool = []
let plays = 0;

function turn(elemento){
    elemento.classList.toggle('select-front');
    elemento.parentNode.querySelector('.back-face').classList.toggle('select-back');
}

function guess(elemento){
    turn(elemento);
    pool.push(elemento);
    setTimeout(is_equal, 1000);
    plays++;
    check_end();
}

function is_equal(){
    if (pool.length === 2){
        if(pool[0].parentNode.innerHTML == pool[1].parentNode.innerHTML){
            pool.length = 0;
        }
        else{
            turn_pool(pool);
            pool.length = 0;
        }
    }
}

function turn_pool(list){
    list[0].classList.toggle('select-front');
    list[0].parentNode.querySelector('.back-face').classList.toggle('select-back');
    list[1].classList.toggle('select-front');
    list[1].parentNode.querySelector('.back-face').classList.toggle('select-back');
}

function check_end(){
    let cards_up = document.querySelectorAll('.select-front').length;

    if (cards_up === card_quantity){
        setTimeout(end_game_message, 300);
    }

}

function end_game_message(){
    alert(`Você ganhou em ${plays} jogadas!`);
}