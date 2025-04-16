const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; // millisecond

    
    // calculate days, hours, mins ,ses from timeDifference
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate),1000)
}

const targetDate = new Date("June 01 2025 07:00")
countDown(targetDate)