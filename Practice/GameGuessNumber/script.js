let secretNumber = Math.trunc(Math.random() * 20) + 1;
let messageText =  document.querySelector('.message')
let textScore = document.querySelector('.score')
let score = 20
let highScore = 0
let numberStyle = document.querySelector('.number')

let body = document.querySelector('body')


let highestScore = document.querySelector('.highscore')


document.querySelector('.check').addEventListener(
    'click', 
    () => {
        const guess = +document.querySelector('.guess').value
        console.log(guess)

        if (!guess) messageText.textContent = '🚫 No Number!'
        
        if (guess === secretNumber) {
            messageText.textContent = 'Congratulations! You guessed the number 🎉'
            document.querySelector('.number').textContent = secretNumber;
            body.style.backgroundColor = '#60b347'
            numberStyle.style.width = "30rem"

            if (score > highScore) {
                highScore = score
                highestScore.textContent = highScore
            }
           
            
        } else {
           if (score > 0) {
               guess < secretNumber ? messageText.textContent = "Too low" : messageText.textContent = "Too high"
               score--
               textScore.textContent = score
           } else {
               messageText.textContent = "You've lost the game 😢 "
           }
        }
        
    })



let againButton = document.querySelector('.again')

againButton.addEventListener('click', () => {
    score = 20
    textScore.textContent = score
    numberStyle.textContent = "?"
    messageText.textContent = "Start guessing..."
    body.style.backgroundColor = "#222"
    numberStyle.style.width = "15rem"
    document.querySelector('.guess').value = ''
})

