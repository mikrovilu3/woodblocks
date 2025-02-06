function nosūtīt(){
   
    alert("Jūsu jautājums ir nosūtīts");

    startConfetti();

}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('manksausmes').addEventListener('submit', function(event) {
      event.preventDefault();
      nosūtīt();
    });
    console.log('added event listener');
  });