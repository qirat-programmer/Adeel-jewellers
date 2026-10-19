let cartCount = 0;
let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(productName + " added to cart!");
}

function orderOnWhatsApp() {
    if (cartItems.length === 0) {
        alert("Please add a product to your cart first!");
        return;
    }

    const shopNumber = "923161216541";

    let message = "Assalam o Alaikum! I want to place an order from Adeel Jewellers.\n\n";
    message += "My selected products:\n";

    cartItems.forEach((item, index) => {
        message += (index + 1) + ". " + item + "\n";
    });

    message += "\nPlease confirm availability and total price.";

    const url = "https://wa.me/" + shopNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}