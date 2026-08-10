document.addEventListener("DOMContentLoaded", ()=>{
    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 2", price: 19.99},
        {id: 3, name: "Product 3", price: 49.99}
    ]

    let cart = []

    let productList = document.getElementById("product-list")
    let cartItem =  document.getElementById("cart-items")
    let emptyCartMsg = document.getElementById("empty-cart")
    let cartTotalMsg = document.getElementById("cart-total")
    let priceDisplay = document.getElementById("total-price")
    let checkoutBtn = document.getElementById("checkout-btn")

    products.forEach(product =>{
       let productDiv = document.createElement("div")
       productDiv.classList.add("product")
       productDiv.innerHTML = `
       <span>${product.name} - $${product.price}</span>
       <button id="${product.id}">Add To Cart</button>
       `
       productList.appendChild(productDiv)

    })

    productList.addEventListener("click", (e)=>{
        if(e.target.tagName !== "BUTTON") return
        
       let productId = parseInt(e.target.getAttribute("id"));
       let product =  products.find(p => p.id === productId)
       addToCart(product)
    })

    function addToCart(product){

    }
})