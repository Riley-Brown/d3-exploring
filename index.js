d3.select('#d3-test').style('color', 'red');

d3.selectAll('p').style('background-color', function(_, idx) {
  return idx % 2 === 0 ? 'lightgrey' : 'white';
});

d3.select('h4').on('click', function() {
  console.log('events are working');
});

d3.select('form').on('submit', function() {
  d3.event.preventDefault();

  let input = d3.select('form input').property('value');

  console.log(input);
});
