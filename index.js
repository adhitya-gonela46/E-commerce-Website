const product=[{
    id:0,
    image:"creatine.jpg",
    title:'Muscle Blaze Creatine Monohydrate 250gm',
    price:34,
    mrp:54,
    Delivery:"1-3 Feb"
    
    
},
{
    id:1,
    image:"delllaptop.jpg",
    title:"Dell Inspiron 3511 11th Gen.",
    
    price:55,
    mrp:65,
    Delivery:"1-3 Feb"
},
{
    id:2,
    image:"fashion.jpg",
    title:"Fashionable Spring Wear",
    
    price:66,
    mrp:68,
    Delivery:"5-9 Feb"
},
{
    id:3,
    image:"fitnessequip.jpg",
    title:"Fitness equipment, 20kg set.",
    
    price:55,
    mrp:59,
    Delivery:"1-3 Feb"
},
{
    id:4,
    image:"iphone15.jpg",
    title:"Iphone 15 512gb comet White.",
    
    price:22,
    mrp:34,
    Delivery:"17-26 Feb"
},
{
    id:5,
    image:"menprinted.jpg",
    title:"Classic Men printed shirt.",
    
    price:65,
    mrp:90,
    Delivery:"11-15 Feb"
},
{
    id:6,
    image:"pattusarees.jpg",
    title:"Kancheepuram Pattu sarees.",
    
    price:23,
    mrp:34,
    Delivery:"14-15 Feb"
},
{
    id:7,
    image:"seriousmass.jpg",
    title:"Serious Mass Gainer 3kg (Chocolate).",
    
    price:45,
    mrp:49,
    Delivery:"1-3 Feb"
},
{
    id:8,
    image:"shoes.jpg",
    title:"Ultra Burst Printing Shoes",
    
    price:35,
    mrp:42,
    Delivery:"1-7 Feb"
}

];
const categories=[...new Set(product.map((item)=>{
    {return item}
}))]
let i=0;
document.getElementById("root").innerHTML=categories.map((item)=>{
    var {image ,title,price,mrp,Delivery}=item;
    return(
        `<div class="box">
                <div class="img-box">
                    <img class='images' src="${image}">
                </div>
            <div class='bottom'>
            <p>${title}</p>
            
            <h2 style="color:black;">$ ${price}.00 |  <span style="font-size:13px;">MRP:</span><i class="fa-solid fa-dollar-sign" style="color:black;"></i><strike>${mrp}</strike></h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
}).join("")

var cart=[];

function addtocart(a)
{
    cart.push({...categories[a]});
    displaycard();
}

function delElement(a)
{
    cart.splice(a,1);
    displaycard();
}

function displaycard(a)
{
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0)
    {
        document.getElementById("cartitem").innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById("cartitem").innerHTML=cart.map((items)=>{
            var {image,title,price,Delivery}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(`<div class="cart-item">
                    <div class="row-img">
                        <img class="rowing" src=${image}>
                    </div>
                    <p style="font-size:12px">${title}</p>
                    <p style="font-size:10px;">${Delivery}</p>
                    <h2 style="font-size:15px;">$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            
            );

        }).join("");
    }
}