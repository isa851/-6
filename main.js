const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const gg = document.getElementById('gg');

// let history = new Date(0);
// let dilnoza = new Date(2024, 7, 12);


const formatNum = (num) =>{
    if(num < 10){
        return `0${num}`
    } else{
        return num
    }
}


let interval;
interval = setInterval(()=>{
    let now = new Date();
    let nafisa = new Date(2024, 10, 8);
    let defference = nafisa.getTime() - now.getTime();
    day.textContent = formatNum(Math.floor(defference / 1000 / 60 / 60 / 24 ));
    hour.textContent = formatNum(Math.floor((defference / 1000 / 60 / 60 ) % 24 ));
    minute.textContent = formatNum(Math.floor((defference / 1000 / 60 ) % 60 ));
    second.textContent = formatNum(Math.floor((defference / 1000 ) % 60 ));
    gg.style.display = 'none'
    if(nafisa <= now){
        clearInterval(interval)
        day.textContent = '0'
        hour.textContent = '0'
        second.textContent = '0'
        minute.textContent = '0'
        gg.style.display = 'block'
    }
}, 1000);