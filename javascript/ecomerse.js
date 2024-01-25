
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


let carts=document.querySelectorAll(".add-cart");

let products = [
    {
        name:'Cartoon Astronaut T-shirts',
        price:78.00,
        incart:0
    },
    {
        name:'Cartoon Astronaut T-shirts',
        price:78.00,
        incart:0
    },
    {
        name:'Cartoon Astronaut T-shirts',
        price:78.00,
        incart:0
    },
    {
        name:'Cartoon Astronaut T-shirts',
        price:78.00,
        incart:0
    },
    {
        name:'Cartoon Astronaut T-shirts',
        price:78.00,
        incart:0
    }
]

for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartnumber();
    })
}

function cartnumber() {
    let productnumbers=localStorage.getItem("cartnumber");
    
    productnumbers = parseInt(productnumbers);

if(productnumbers){
    localStorage.setItem('cartnumber',productnumbers+1);
}else{
    localStorage.setItem('cartnumber', 1);
}
}