

let getRandomAdvice = (advNoContainer, advTextContainer) => {

    fetch('https://api.adviceslip.com/advice')
    .then((response) =>{

        return response.json()
    })
    .then((data) => {

        advNoContainer.textContent = data.slip.id
        advTextContainer.textContent = data.slip.advice
    });
}

document.addEventListener('DOMContentLoaded', (event) => {

    let advContainer = document.querySelector('.advice-text')
    let id = document.querySelector('.adv-no')

    getRandomAdvice(id, advContainer)

    document.querySelector(".next-btn").addEventListener('click', (event) => {

        getRandomAdvice(id, advContainer)
    })
})
