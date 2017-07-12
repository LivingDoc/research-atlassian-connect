// var d3 = require("d3");
// var _ = require("underscore");
// require("./cloud");

// module.exports.cloud = function(words, opts) {
//     opts = _.extend({
//       w: 1000,
//       h: 600,
//       maxAngle: 45
//   }, opts);

//   var w = opts.w;
//   var h = opts.h;
//   var maxAngle = opts.maxAngle;

//   var fill = d3.scale.category20();

//   var max = 0;
//   _.each(words, function(word) {
//     if (word.count > max) {
//       max = word.count;
//     }
//   });
//   max = Math.log(max);

//   words = words.map(function(d) {
//     return {text: d.word, size: (Math.log(d.count) / max) * 100};
//   });

//   // word cloud generation code based on the excellent tutorial at http://www.jasondavies.com/wordcloud/#http%3A%2F%2Fsearch.twitter.com%2Fsearch.json%3Frpp%3D100%26q%3D%7Bword%7D=cloud

//   var div = d3.select("body").append("div").attr("id","vis");

//   function draw(words) {
//     div.append("svg")
//       .attr("width", w)
//       .attr("height", h)
//       .attr("xmlns", "http://www.w3.org/2000/svg")
//       .attr("version", "1.1")
//     .append("g")
//       .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
//     .selectAll("text")
//       .data(words)
//     .enter().append("text")
//       .style("font-size", function(d) { return d.size + "px"; })
//       .style("font-family", "Impact")
//       .style("fill", function(d, i) { return fill(i); })
//       .attr("text-anchor", "middle")
//       .attr("transform", function(d) {
//         return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//       })
//       .text(function(d) { return d.text; });
//   }

//   d3.layout.cloud().size([w, h])
//     .timeInterval(Infinity) // synchronous
//     .words(words)    
//     .rotate(function(d) { return (Math.random() - Math.random()) * maxAngle; })
//     .font("Impact")
//     .fontSize(function(d) { return d.size; })
//     .on("end", draw)
//     .start();

//   return div.html();
// }