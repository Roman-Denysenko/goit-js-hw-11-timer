
class CountdownTimer{

    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            timerContainerRef : document.querySelector(`${this.selector}`),
            daysContent: document.querySelector(`[data-value="days"]`),
            hoursContent: document.querySelector(`[data-value="hours"]`),
            minutesContent: document.querySelector(`[data-value="mins"]`),
            secondsContent: document.querySelector(`[data-value="secs"]`),
              };
    };
     
    makeTimer() {
        
       const startTime = this.targetDate.getTime();
    setInterval(() => {
       const currentTime = Date.now();
       const time = startTime - currentTime;
       const timer = this.getTimerComponents(time);
       this.updateContent(timer);
    
    
    }, 1000);
   }
    

     getTimerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return ({days, hours, mins, secs})

    }

     updateContent({ days, hours, mins, secs }) {
        this.refs.daysContent.textContent = `${days}`;
        this.refs.hoursContent.textContent = `${hours}`;
        this.refs.minutesContent.textContent = `${mins}`;
        this.refs.secondsContent.textContent = `${secs}`;
    }
};



const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2020'),
});

newTimer.makeTimer();



