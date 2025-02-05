function nosūtīt(){
   
    setTimeout(function(){alert("Jūsu jautājums ir nosūtīts");},100);
    startConfetti();
    setTimeout(stopConfetti(),30000);
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('manksausmes').addEventListener('submit', function(event) {
      event.preventDefault();
      nosūtīt();
    });
    console.log('added event listener');
  });