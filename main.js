function added() {
    document.getElementById('addToCartID').innerHTML = "Added!";
    document.getElementById('addID').style.backgroundColor = '#fafcff';
    document.getElementById('addID').style.color = '#0003FD';
    document.getElementById("cartButton").style.color = '#0003FD';
}

function toMonopolyPage() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('playstationOneGames').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'flex';


}

function toPS1Listing() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('playstationOneGames').style.display = 'block';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
}

function addedProduct() {
    document.getElementById("addProduct").innerHTML = "Added!";
    document.getElementById("addProduct").style.backgroundColor = '#fafcff';
    document.getElementById("addProduct").style.color = '#0003FD';
    document.getElementById("cartButton").style.color = '#0003FD'; 
}

function toCart() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('playstationOneGames').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'flex';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
}

function toCheckout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('playstationOneGames').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'flex';
    document.getElementById('confirmation').style.display = 'none';
}

function toConfirmation() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('playstationOneGames').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('confirmation').style.display = 'flex';
}

function toHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('playstationOneGames').style.display = 'none';
    document.getElementById('monopolyPage').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById("cartButton").style.color = '#000000';
}



