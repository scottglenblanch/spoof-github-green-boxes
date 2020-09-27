(function() {

  function makeGreen(squareElement) {
    squareElement.setAttribute('fill', 'white');
  }

  function addClickEventToSquare(squareElement) {
    squareElement.addEventListener('mouseover', function(event){
      event.preventDefault();  
      makeGreen(squareElement);
    })  
  }

  const squareList = Array.from(document.querySelectorAll('rect'));

 
  squareList.forEach(addClickEventToSquare)
})();



