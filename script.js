// Character counter
const messageBox = document.getElementById("message");
const counter = document.getElementById("count");

messageBox.addEventListener("input", () => {
    counter.textContent = 100 - messageBox.value.length;
});

// Fake loader timeout (you can remove if using real loading)
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
};

// Razorpay placeholder
async function payNow() {
    let amount = document.getElementById("amount").value;
    let name = document.getElementById("name").value || "Anonymous";
    let message = document.getElementById("message").value;

    if (amount < 1) {
        alert("Enter a valid amount!");
        return;
    }

    // 1️⃣ Create order on backend  
    let res = await fetch("https://your-backend-url/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount })
    });

    let order = await res.json();

    // 2️⃣ Open Razorpay popup
    let options = {
        "key": "YOUR_RAZORPAY_KEY_ID",
        "amount": order.amount,
        "currency": "INR",
        "name": name,
        "description": message,
        "order_id": order.id,

        "handler": function(response) {
            alert("Payment Successful!");
            console.log(response);
        },

        "theme": {
            "color": "#00eaff"
        }
    };

    let rzp = new Razorpay(options);
    rzp.open();
}

