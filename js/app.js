const askGuestName = () => 
{
    const name = prompt('Adınız Nedir ?');
    document.querySelector("#myName").textContent = name;
}


const showTime = () => 
{
    const date = new Date();    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let y = date.getFullYear();


    document.querySelector('#myClock').textContent = `${h}:${m}:${s} ${y}`;
}



askGuestName();

setInterval(showTime,1000);
