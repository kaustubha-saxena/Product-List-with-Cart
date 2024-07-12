let total_qty = 0;
let cart = document.querySelector(".cart");
let add_to_cart = document.querySelectorAll(".add-to-cart");
let price = [6.50, 7.00, 8.0, 5.5, 4.0, 5.0, 4.5, 5.5, 5.5];
var qty = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i=0;


function update_total_qty() {
    total_qty=0;
    for(let j =0;j<9;j++)
    {
        total_qty=total_qty+qty[j]
    }
    cart.children[0].innerText = `Your Cart(${total_qty})`;
}

function plus_qty(i){
    qty[i]=qty[i]+1;

}
function minus_qty(i){
    qty[i]=qty[i]-1;

}


add_to_cart.forEach(element => {
 
    element.addEventListener("click", () => {
        element.style.visibility="hidden";
        let div= document.createElement("div");
        div.classList.add("change-qty");
        let btn1= document.createElement("button");
        btn1.classList.add("qty-sign","qty-minus");
        div.append(btn1);
        let p= document.createElement("p");
        qty[i]=1
        p.innerText=""+qty[i];
        div.append(p);
        let btn2= document.createElement("button");
        btn2.classList.add("qty-sign","qty-plus");
        div.append(btn2);

        element.parentElement.children[0].insertAdjacentElement("afterend", div)
        for(let j=0;j<9;j++)
        {
            if(element.parentElement.children[j]===element)
            {
                console.log(j);
                break;
            }
        }
        


    })
    i++;
});

// function add(i){
//     add_to_cart.forEach(element => {
//     element.children[0].hidden = true;
//     element.children[1].hidden = true;
//     element.style.background = "hsl(14, 86%, 42%)";
//     let div = document.createElement("div");
//     let img1 = document.createElement("img");
//     img1.src="/assets/images/icon-decrement-quantity.svg"
//     element.append(div)
//     div.append(img1)
// });
// }