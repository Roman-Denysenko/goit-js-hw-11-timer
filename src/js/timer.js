const refs = {
    timerContainer: document.querySelector (`#timer-1`),
    daysContent: document.querySelector(`[data-value="days"]`),
    hoursContent: document.querySelector(`[data-value="hours"]`),
    minutesContent: document.querySelector(`[data-value="mins"]`),
    secondsContent: document.querySelector(`[data-value="secs"]`)
};


class CountdownTimer{

};
const targetDate = new Date(`Nov 07, 2020`)
const startTime = targetDate.getTime();


setInterval(() => {
    const currentTime = Date.now();
     const time = startTime - currentTime;
    const timer = getTimerComponents(time);
    updateContent(timer);
    
}, 1000)

function getTimerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return ({days, hours, mins, secs})

}

function updateContent({ days, hours, mins, secs }) {
        refs.daysContent.textContent = `${days}`;
        refs.hoursContent.textContent = `${hours}`;
        refs.minutesContent.textContent = `${mins}`;
        refs.secondsContent.textContent = `${secs}`;
}