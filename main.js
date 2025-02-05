function nosūtīt(){
    alert("Jūsu jautājums ir nosūtīts");
    startConfetti();
}
document.getElementsById('manksausmes').addEventListener('submit', function(event) {
    event.preventDefault();
    nosūtīt();
})