function renderTimerTime(time) {
    const timerContainer = document.querySelector('.timer')

    const minutes = String( ~~(time / 60)).padStart(2, 0)
    const seconds = String((time % 60)).padStart(2, 0)

    timerContainer.textContent = `${minutes}:${seconds}`
}


function setTimerArrowRotate() {
    const timerArrow = document.querySelector('.timer-arrow')
    let deg = 0

    return function () {
        if (deg >= 360) deg = 0

        timerArrow.style.rotate = `${deg}deg`
        deg += 6
    }
}


function initTimer(initialTime) {
    let second = initialTime

    renderTimerTime(second)
    timerArrowRotate()

    return function() {
        const timer = setInterval(() => {
            second -= 1

            timerArrowRotate()
            renderTimerTime(second)

            if (second === 0) clearInterval(timer)
        }, 1000)
    }
}


const timerArrowRotate = setTimerArrowRotate()
const setTimer = initTimer(120)
setTimer()


