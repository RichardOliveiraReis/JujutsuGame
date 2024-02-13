let randomNumber1 = Math.floor(Math.random() * 6) + 1

let jujutsu1 = 'img/jujutsu' + randomNumber1 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', jujutsu1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let jujutsu2 = 'img/jujutsu' + randomNumber2 + '.png'

document.querySelectorAll('img')[2].setAttribute('src', jujutsu2)

if (jujutsu1 > jujutsu2) {
    document.querySelectorAll('h2')[1].innerHTML = 'Feiticeiro numero 1 foi o vencedor'
} else if (jujutsu1 < jujutsu2) {
    document.querySelectorAll('h2')[1].innerHTML = 'Feiticeiro numero 2 foi o vencedor'
} else if (jujutsu1 == jujutsu2){
    document.querySelectorAll('h2')[1].innerHTML = 'Empate, ambos possuem poder igual'
}