function cartdata(){
    let cart=document.getElementById("cart").value;
    let cvv=document.getElementById("cvv").value;



    setTimeout(function(){
        if(cart==1212121212 && cvv==123){
            alert(" Your order is accepted ")
        }
        else{
            alert("wrong input")
        }
    })


    setTimeout(function(){
        if(cart==1212121212 && cvv==123){
            alert("Your order is being cooked ")
        }
        else{
            alert("wrong input")
        }
    },8000)


setTimeout(function(){
    if(cart==1212121212 && cvv==123){
        alert("Your order is ready ")
    }
    else{
        alert("wrong input")
    }
},3000)


setTimeout(function(){
    if(cart==1212121212 && cvv==123){
        alert(" Order out for delivery ")
    }
    else{
        alert("wrong input")
    }
},3000)
}