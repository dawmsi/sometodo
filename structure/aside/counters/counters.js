const previousCount = document.querySelector('#previousCount')

/* const todayCount = document.querySelector('#todayCount') */

const comingCount = document.querySelector('#comingCount')

const today = new Date()

function countPluser() {
    previousArr.length
        ? previousCount.innerText = previousArr.length
        : previousCount.innerText = ''

        upcomingArray.length
        ? comingCount.innerText = upcomingArray.length
        : comingCount.innerText = ''

}