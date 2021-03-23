const secondHand = document.querySelector(`.second-hand`)
const minuteHand = document.querySelector(`.min-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegree = ((minute/60)*360) + 90;
    minuteHand.style.transform = `translate(25%) rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `translate(66.5%) rotate(${hourDegree}deg)`;
    
}

setInterval(setDate,1000);
