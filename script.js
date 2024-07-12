let total_qty = 0;
let cart = document.querySelector(".cart");
let add_to_cart = document.querySelectorAll(".add-to-cart");
let price = [6.50, 7.00, 8.0, 5.5, 4.0, 5.0, 4.5, 5.5, 5.5];
var qty = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let names = ["Waffle with Berries","Vanilla Bean Crème Brulee", "Macaron Mix of Five","Classic Tiramisu", "Pistachio Baklava", "Lemon Meringue Pie","Red Velvet Cake","Salted Caramel Brownie","Vanilla Panna Cotta"]
let i = 0;

function update_total_qty(i) {
    total_qty = 0;
    for (let j = 0; j < 9; j++) {
        total_qty = total_qty + qty[j]

    }
    cart.children[0].innerText = `Your Cart(${total_qty})`;
update_cart(i)
}

function plus_qty(i) {
    qty[i] = qty[i] + 1;   
}
function minus_qty(element,i) {
    qty[i] = qty[i] - 1;  
    if(qty[i]==0)
        {
            console.log(element);
            element.classList.remove("hidden")
            element.parentElement.children[1].classList.add("hidden")
        }  
    }
function update_qty(p,i){
        p.innerText=qty[i];
        update_total_qty(i);
    }
    
add_to_cart.forEach(element => {
        element.addEventListener("click", () => {
         console.log(element.parentElement.parentElement);
         var j = 0;
            for (j = 0; j < 9; j++) {
                if (element.parentElement.parentElement.children[j] === element.parentElement) {
                    console.log(j);
                    break;
                }
            }
         element.classList.add("hidden")
           let div =element.parentElement.children[2];
            div.classList.remove("hidden")
            let btn1=element.parentElement.querySelector(".qty-minus");
            let btn2=element.parentElement.querySelector(".qty-plus");
            let p = element.parentElement.querySelector(".product-qty");
            plus_qty(j);
            update_qty(p,j)
            btn2.addEventListener("click", () => {
                plus_qty(j);
                update_qty(p,j)
            })
            btn1.addEventListener("click", () => {
                minus_qty(element, j);
                update_qty(p,j)
            })
            element.parentElement.children[0].insertAdjacentElement("afterend", div)
         })
        i++;
    });

function update_cart(i){
if(total_qty!=0){
  document.querySelector(".empty").classList.add("hidden")
  document.querySelector(".empty-cart-message").classList.add("hidden")   
}
let div= document.createElement("div");
div.classList.add("items", "flex", "align-item")

let spam1= document.createElement("spam");
let spam2= document.createElement("spam");
let spam3= document.createElement("spam");
spam1.classList.add("quantity");
spam1.innerText=qty[i]+"x"
spam2.classList.add("price-per-item");
spam2.innerText="$" +price[i];
spam3.classList.add("total-price");
spam3.innerText=qty[i]*price[i];

}
