function nosūtīt(){
    alert("Jūsu jautājums ir nosūtīts");
    startConfetti();
    document.getElementById('manksausmes')
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('manksausmes').addEventListener('submit', function(event) {
      event.preventDefault();
      nosūtīt();
    });
    console.log('added event listener')
  });