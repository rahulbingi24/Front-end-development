document.querySelector('#font-style1').addEventListener('click',()=>{
    document.querySelector('input').style.fontFamily = "codystar";
});

document.querySelector('#font-style2').addEventListener('click',()=>{
    document.querySelector('input').style.fontFamily = "bungee spice";
});

document.querySelector('#font-style3').addEventListener('click',()=>{
    document.querySelector('input').style.fontFamily = "wallpoet";
});

document.querySelector('#font-style4').addEventListener('click',()=>{
    document.querySelector('input').style.fontFamily = "Righteous";
});

document.querySelector('#font-style5').addEventListener('click',()=>{
    document.querySelector('input').style.fontFamily = "pacifico";
});


document.addEventListener("keydown",()=> {
    document.querySelector('input').focus();
})