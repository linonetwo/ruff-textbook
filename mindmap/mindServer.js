var fs = require('fs');

var express = require('express');
var app = express();

var parse = require('enhanced-markmap/parse.markdown');
var transform = require('enhanced-markmap/transform.headings');

var text = fs.readFileSync('./README.md', 'utf-8');

var headings = parse(text);
var root = transform(headings);

console.log(root);


const html = `
<!DOCTYPE html>
<meta charset="utf-8">
<link rel="stylesheet" href="../view.mindmap.css">
<style>

html {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

svg#mindmap {
  width: 100%;
  height: 100%;
}

</style>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/node_modules/d3/d3.js"></script>
<script src="/node_modules/enhanced-markmap/view.mindmap.js"></script>
<script src="/static/example.view.js"></script>
<script>
  markmap('svg#mindmap', ${
    JSON.stringify(root)
  });
</script>
<svg id="mindmap"></svg>
`;

app.use('/static', express.static('mindmap'));
app.use('/node_modules', express.static('node_modules'));

app.use('/', (req, res) => res.send(html))

const PORT = 3000;
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', 'localhost', PORT);
});