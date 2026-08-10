document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 49.99 }
    ]

    let cart = []
    let totalPrice = 0

    let productList = document.getElementById("product-list")
    let cartItemDisplay = document.getElementById("cart-items")
    let emptyCartMsg = document.getElementById("empty-cart")
    let cartTotalMsg = document.getElementById("cart-total")
    let priceDisplay = document.getElementById("total-price")
    let checkoutBtn = document.getElementById("checkout-btn")
    let cartItemRemoveBtn = document.getElementById("cart-remove-btn")


    let carts = JSON.parse(localStorage.getItem("carts")) || []
    renderCart()
    console.log(carts);
    
    products.forEach(product => {
        let productDiv = document.createElement("div")
        productDiv.classList.add("product")
        productDiv.innerHTML = `
       <span>${ product.name } - $${ product.price }</span>
       <button id="${ product.id }">Add To Cart</button>
       `
        productList.appendChild(productDiv)

    })

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {

            let productId = parseInt(e.target.getAttribute("id"));
            let product = products.find(p => p.id === productId)
            addToCart(product)
        }
    })

    function addToCart(product) {
        carts.push(product)
        saveCart()
        renderCart()
    }
    function removeFromCart(indexToRemove){
        carts.splice(indexToRemove, 1)
        saveCart()
        totalPrice = 0
        renderCart()
    }
    
    function renderCart() {
        cartItemDisplay.innerHTML = ""

        if (carts.length > 0) {
            emptyCartMsg.classList.add("hidden")
            cartTotalMsg.classList.remove("hidden")
            cartItemDisplay.classList.remove("hidden")

            carts.forEach((item, index) => {
                totalPrice += item.price
                let cartItem = document.createElement("div")
                cartItem.style.display= "flex"
                cartItem.style.justifyContent = "space-between"

                cartItem.innerHTML = `
                <span>${ item.name } - $${ item.price.toFixed(2) }</span>
                <button id="cart-remove-btn">remove</button>`
                cartItemDisplay.appendChild(cartItem)

                priceDisplay.textContent = `$${ totalPrice.toFixed(2) }`

                cartItem.addEventListener("click",(e)=>{
                    if(e.target.tagName === "BUTTON"){
                        removeFromCart(index)
                        
                    }
                })
            })
        } else {
            emptyCartMsg.classList.remove("hidden")
            cartTotalMsg.classList.add("hidden")


        }
    }
   
    checkoutBtn.addEventListener("click", () => {carts.length = 0
        alert("checkOut Successful!")
        renderCart()
    })

    function saveCart(){
        localStorage.setItem("carts", JSON.stringify(carts))
    }

})