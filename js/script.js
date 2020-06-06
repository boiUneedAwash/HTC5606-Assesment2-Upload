//Left Divider Animation start
function leftDividerAnimation() {
    targetPic = document.getElementById("leftDivPic");
    x = 0;
    setInterval(function () {
        targetPic.style.left = x + "px";
        x = x - 1;
        if (x >= 800){
            x = 0;
        }
    }, 100);
}
//Left Divider Animation end

//add product to cart
function addProductToCart(buttonID) {
    cart = document.getElementById("rightDiv");
    switch (buttonID) {
        case "addCollar":
            qty = document.getElementById("collarQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Collar: "+qty+" Price: <strong class='price'>" +(24.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addFlea":
            qty = document.getElementById("fleaQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Flea Flea: "+qty+" Price: <strong class='price'>"+(7.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addKennel":
            qty = document.getElementById("kennelQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Kennel: "+qty+" Price: <strong class='price'>"+(199.99*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
    }
}

//Popup Invoice

function invoice() {

    modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    cross = document.getElementsByClassName("close")[0];
    console.log(cross);


    cross.onclick = function() {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Take everything from shopping cart
    cart = document.getElementById("rightDiv");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i<items.length){
        text += "<p>"+items[i].innerHTML+"</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i<prices.length){
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    text += "<p>Total: $"+total+"</p>";
    invoicePlace.innerHTML = text;
}