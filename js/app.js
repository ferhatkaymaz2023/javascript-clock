const askGuestName = () => 
{
    const name = prompt('Adınız Nedir ?');
    document.querySelector("#myName").textContent = name;
}


askGuestName();

