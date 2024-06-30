
let divImg = document.querySelector("#sliders");
let imgs = document.getElementsByClassName("carousel-img");
let progressingBars = document.getElementsByClassName("bar");
let imageContainerWidth = 106;
let delay = 6000;
let cosmeticsImg = document.getElementsByClassName("cosmetic");
let buttons = document.getElementsByClassName("choose-option");

let cont = 0;

function changeImage(){
    // console.log(progressingBars)
    // console.log(progressingBars[cont])
    // for(let i = 0; i < progressingBars.length; i++){
        
    //    progressingBars[i].setAttribute("class", "")
   
    // // }
    // console.log(progressingBars)
    for(let i = 0; i < imgs.length; i++){
        if(cont >= 3){
            cont  = 0;
        }
    }
    // console.log("antes de mover div cont: "+cont)
    divImg.style.transform = `translateX(${-cont * imageContainerWidth}rem)`
    // progressingBars[1].classList += "bar-opacity"
    // progressingBars[cont].classList.add("bar");
    // progressingBars[cont].setAttribute("class", "bar")
    
    // progressingBars[cont].className = "bar"

    // for(progressBar in progressingBars){
    //     progressBar.classList[cont].replace("bar-opacity", "bar");
    // }
    // console.log(cont)
    cont++;
    // console.log("despues ejecutandose la suma cont: "+cont);
    setTimeout(changeImage, 6000);
}

changeImage();
 
// Cart

const btnCart = document.querySelector(".container-icon");
const containerCartProducts = document.querySelector(".container-cart-products");
btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-products");

})

const cartInfo = document.querySelector(".info-cart-product");
const rowProduct = document.querySelector(".row-product");

const productList = document.querySelector(".perfumes");

let allProducts = [];

productList.addEventListener("click", e =>{
    if(e.target.classList.contains("add-cart")){
        const product =  e.target.parentElement;

        const infoProducts = {
            quantity: 1,
            title: product.querySelector("h3").textContent,
            price: product.querySelector("p").textContent
        }

        allProducts = [...allProducts, infoProducts];
        showHTML();
    }
    
})

const showHTML = () =>{
    allProducts.forEach(product => {
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>

        </div>
            <img class="close" src="Img/close.png">
        `;
        rowProduct.append(containerProduct);
    });
};










// for(cosImg of cosmeticsImg){
//     cosImg.onmouseover = function(event) {
//         zoomImage(event)}

//     cosImg.onmouseleave = function(event){
//         notZoom(event)
//     }

// }

// for(button of buttons) {
//     button.onmouseover = function(event) {
//         buttonFocus(event);
//     }
//     button.onmouseleave = function(event) {
//         buttonLeave(event);
//     }
// }

// function zoomImage(e){
//     const zoom = ["Img/moonlight-perfume-zoom.jpg", "Img/swan-perfume-zoom.jpg", "Img/chocolate-perfume-zoom.jpg", "Img/unicorn-perfume-zoom.jpg"];

//     for(let i = 0; i < zoom.length; i++){
//         if(e.target.classList.contains(clases[i])){
//             let img = document.querySelector("."+clases[i]);
//             let divParent = e.target.parentElement;
//             console.log(img.nextSibling.innerHTML)
//             divParent.style.overflow = "hidden";
//             img.setAttribute("src", zoom[i]);
//             img.style.transform = `scale(${1.2})`;
//             img.style.width = "21rem";
//             buttons[i].style.display = "block";
            


//         }
        
//     }


// }
// const clases = ["mermaid", "swan", "chocolate", "unicorn"];
// const staticImg = ["Img/moonlight-perfume-cover.jpg", "Img/swan-perfume-cover.jpg", "Img/chocolate-perfume-cover.jpg", "Img/unicorn-perfume-cover.jpg"]

// function notZoom(e){
//     console.log(e.target.classList)
    
//     for(let i = 0; i < staticImg.length; i++){
//         if(e.target.classList.contains(clases[i])){
//             let img = document.querySelector("."+clases[i]);
//             img.setAttribute("src", staticImg[i])
//             img.style.width = "23rem";
//             img.style.transform = `scale(${1})`;
//             buttons[i].style.display = "none";

       
            
            

//         }

//     }


// }
// const buttonClass = ["element1", "element2", "element3", "element4"];
// function buttonFocus(e){
    
//     for(let i = 0; i < buttons.length; i++){
//         if(e.target.classList.contains(buttonClass[i]))
//         buttons[i].style.display = "block";
//     }
// }

// function buttonLeave(e){
//     for(let i = 0; i < buttons.length; i++){
//         if(e.target.classList.contains(buttonClass[i]))
//         buttons[i].style.display = "none";
//     }
// }
