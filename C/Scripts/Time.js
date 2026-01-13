const date = new Date();

function currentTime(){
    let hour = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    return `${hour}:${min}`
}

document.getElementById('widget-time').innerText = (currentTime());