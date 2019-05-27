// d3.select('#d3-test').style('color', 'red');

// d3.selectAll('p').style('background-color', function(_, idx) {
//   return idx % 2 === 0 ? 'lightgrey' : 'white';
// });

// d3.select('h4').on('click', function() {
//   console.log('events are working');
// });

// d3.select('form').on('submit', function() {
//   d3.event.preventDefault();

//   let input = d3.select('form input').property('value');

//   console.log(input);
// });

let width = 500;
let height = 500;

let yMax = d3.max(birthData2011, d => d.lifeExpectancy);
let yMin = d3.min(birthData2011, d => d.lifeExpectancy);

let yScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
  .range([height, 0]);

var xScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births / d.population))
  .range([0, width]);

d3.select('svg')
  .attr('width', width)
  .attr('height', height)
  .selectAll('circle')
  .data(birthData2011)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.births / d.population))
  .attr('cy', d => yScale(d.lifeExpectancy))
  .attr('r', 5);
