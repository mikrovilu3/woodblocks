function nosūtīt(){
    const lild =document.getElementById("lieldienas")
    setTimeout(function(){alert("Jūsu jautājums ir nosūtīts");},100);
    startConfetti();
    var vert = document.getElementById('vertejums');
    if(vert.value=1){
        lild.style.backgroundColor = red;
        
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('manksausmes').addEventListener('submit', function(event) {
      event.preventDefault();
      nosūtīt();
    });
    console.log('added event listener');
  });