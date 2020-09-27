(function() {
  const squaresWithGreen = Array.from(document.querySelectorAll('rect')).filter(r => ['green', 'purple'].includes(r.getAttribute('fill')));
  const datesList = squaresWithGreen.map(x => x.getAttribute('data-date'))

  console.log(JSON.stringify(datesList));
  
})();


