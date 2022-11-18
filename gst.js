const priceInput=document.querySelector(".price")
const quantityInput=document.querySelector(".quantity")
const button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    button.style.background="black"
    button.style.color="white"
    console.log(typeof(priceInput.value));
    console.log((priceInput.value*quantityInput.value*18/100)+(priceInput.value*quantityInput.value));
    let a=(priceInput.value*quantityInput.value*18/100)+(priceInput.value*quantityInput.value)
    setTimeout(()=>{
        button.style.background="white"
    button.style.color="black"
    },1000)
    let p=document.querySelector("p")
    p.innerHTML=parseInt(a)
    
})