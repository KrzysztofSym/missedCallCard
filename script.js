const container = document.querySelector('.container');
const send = document.querySelector('.btn:first-child');
const call = document.querySelector('.btn:last-child');
const inf = document.querySelectorAll('.inf');
const message = document.querySelectorAll('.call');

document.querySelector("header i").addEventListener('click', function () {
    container.style.scale = "0";
    setTimeout(() => {
        container.style.scale = "1";
    }, "3000");
});

send.addEventListener('click', ()=> {
    inf.forEach((element) => {
        element.classList.toggle('active')
    })
})

call.addEventListener('click', ()=> {
    message.forEach((element) => {
        element.classList.toggle('active');
    })
})