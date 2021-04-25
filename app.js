
//add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");



for(let i = 0;i < addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click",function () {
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1; 
        /*крайние две строчки можно написать в одну=>
          productsCountEl.textContent = +productsCountEl.textContent +1; */
    })
}


//modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

console.log(modal)
console.log(moreDetailsBtns)
console.log(closeBtn)

/*moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})

/*щоб відкрити модальне вікно, останні чотири рядка можно було прописати і інакше*/

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", openModal)
})
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

/*closeBtn.addEventListener("click", function(){
    modal.classList.add("hide");
    modal.classList.remove("show");
})

/*щоб закрити можно було в будь-якому місці екрана=> замість останнього блочка прописати =>*/

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

/*function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}*/

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll) /*эта строчка позволяет сделать модальное окно при скролле один раз*/
    }
}



window.addEventListener("scroll", showModalByScroll);


//like

//сначала в html коде в одном первом диве "like" дописать "like liked", а css => .like:hover,.liked{

/*let likeButtons = document.querySelectorAll('.like');

likeButtons.forEach((btn) => {
    btn.addEventListener("click",function() {
        if(this.classList.contains("liked")){
            this.classList.remove("liked")
        } else {
            this.classList.add("liked")
        }
    })
})*/

//второй способ - в cssоставляем дописанное, а в html - не дописываем liked. =>
let likeButtons = document.querySelectorAll('.like');

likeButtons.forEach((btn) => {
    btn.addEventListener("click",function(e) { 
        this.classList.toggle("liked")
    })
})

//change product count

let decrementBtns = document.querySelectorAll(".decrement-button") [0];
let incrementBtns = document.querySelectorAll(".increment-button") [0];
let quantityValue = document.querySelectorAll(".product-quantity input") [0];

let currentCount = +quantityValue.value;

function toggleDecrementState(count) ------------------------------+

if(currentCount <= 1) {
    decrementBtns.disabled = true;
 } else {
    decrementBtns.disabled = fals;
 }

incrementBtns.addEventListener("click", function () {
    let currentCount = +quantityValue.nodeValue;
    let nextCount = currentCount + 1;
    quantityValue.value = nextCount;
    
    if(nextCount <= 1) {
        decrementBtns.disabled = true; 
    } else {
        decrementBtns.disabled = fals; 
    }
})

decrementBtns.addEventListener("click", function () {
    let currentCount = +quantityValue.nodeValue;
    let nextCount = currentCount - 1;
    quantityValue.value = nextCount;

    if(nextCount <= 1) {
        decrementBtns.disabled = true; 
    } else {
        decrementBtns.disabled = fals; 
    }
})