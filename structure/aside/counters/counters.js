let previousTasks = []

const previousCount = document.querySelector('#previousCount')

const todayCount = document.querySelector('#todayCount')

const comingCount = document.querySelector('#comingCount')

const today = new Date()

function countPluser() {
    previousTasks.length
        ? previousCount.innerText = previousTasks.length
        : previousCount.innerText = ''

    tasksArr.length
        ? todayCount.innerText = (Number(tasksArr.length) - Number(previousTasks.length))
        : todayCount.innerText = ''

}