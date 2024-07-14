let total_qty = 0;
let Order = 5;
let cart = document.querySelector(".cart");
let add_to_cart = document.querySelectorAll(".add-to-cart");
const price = [6.50, 7.00, 8.00, 5.50, 4.00, 5.00, 4.5, 5.5, 5.5];
var qty = [0.0, 0.0, 0, 0, 0, 0, 0, 0, 0];
var total= [0, 0, 0, 0, 0, 0, 0, 0, 0];
let names = ["Waffle with Berries","Vanilla Bean Crème Brulee", "Macaron Mix of Five","Classic Tiramisu", "Pistachio Baklava", "Lemon Meringue Pie","Red Velvet Cake","Salted Caramel Brownie","Vanilla Panna Cotta"]
let i = 0; 

function update_total_qty(i) {
    total_qty = 0;
   Order=0;
    for (let j = 0; j < qty.length; j++) {
        total_qty = total_qty + qty[j]
        total[j]= qty[j]*price[j];
        Order+=total[j]
    }
    cart.children[0].innerText = `Your Cart(${total_qty})`;
update_cart(i);
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
  document.querySelector(".empty-cart-message").classList.add("hidden");
  document.querySelector(".carbon").classList.remove("hidden")
  document.querySelector(".Confirm-Order").classList.remove("hidden")
  let order_total=document.querySelector(".total")
  order_total.classList.remove("hidden")
  order_total.children[1].innerText="$"+Order;
      
  let div = document.querySelectorAll(".block")
  let create=true;
  div.forEach(element => {
        if(element.children[0].innerText==names[i]){
            element.children[1].innerText=qty[i]+"x";
            element.children[3].innerText="$"+total[i];

            create=false;
       }        
    })
    if(create==true)
        {
            create_item_row(names[i], qty[i], price[i]);
            console.log("created");
        }  
}

}
function create_item_row(name,qty, price , i){
console.log(qty);

    let div= document.createElement("div");
    div.classList.add("items", "flex", "align-item")
    let div2 = document.createElement("div");
    div2.classList.add("block");
    let p = document.createElement("p")
    p.innerText=name;
    let spam1= document.createElement("spam");
    let spam2= document.createElement("spam");
    let spam3= document.createElement("spam");
    spam1.classList.add("quantity");
    spam1.innerText=qty+"x"
    spam2.classList.add("price-per-item");
    spam2.innerText="@$" +price;
    spam3.classList.add("total-price");
    spam3.innerText="$"+(qty*price);

    div.insertAdjacentElement("beforeend", div2)
    div2.insertAdjacentElement("beforeend",p)
    div2.insertAdjacentElement("beforeend",spam1)
    div2.insertAdjacentElement("beforeend",spam2)
    div2.insertAdjacentElement("beforeend",spam3)

    let button= document.createElement("button")
    button.classList.add("cross")
    let img= document.createElement("img")
    img.src="/assets/images/icon-remove-item.svg";
    button.append(img)
    
    div2.insertAdjacentElement("afterend", button)
    let line = document.createElement("div");
    line.classList.add("line");
    div.insertAdjacentElement("afterend",line)
    let main_div = document.querySelector(".cart-box")
    main_div.insertAdjacentElement("beforeend", div)
       }

    function remove_item(name){
qty[i]=0;
console.log("deleted");
let block = document.querySelectorAll(".block")
block.forEach(element => {
    if(element.children[0].innerText==name){
        element.remove();
    }
});


    }
