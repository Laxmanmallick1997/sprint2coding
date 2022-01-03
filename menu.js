document.getElementById("body")
let url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
async function getDishes(){
    let res=await fetch(url);

    let data=await res.json();
    let dish=data.meals
     console.log(dish)
     getdish(dish)
}
getDishes()

function getdish(arr){
    arr.forEach(function(item){
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=item.strMealThumb

        let button=document.createElement("button")
        button.innerText="add to cart";
        button.addEventListener("click",cart)

        let name=document.createElement("h3");
        name.innerText=item.strMeal;

        let price=document.createElement("h4")
        price.innerText=Math.floor(Math.random()*500+100)


        div.append(image,name,price,button)
        body.append(div)

    })
    function cart(){
        alert("dish add into cart")
        setTimeout(function(){
            window.location.href="checkout.html"
            alert("proceed your payment")
        },3000)
    }
    
}