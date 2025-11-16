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
function payNow() {
    let amount = document.getElementById("amount").value;

    if (amount < 1) {
        alert("Enter a valid amount!");
        return;
    }

    alert("Razorpay integration will go here.");
}
