const express = require('express')
var path = require('path')
var firstVue = require('./views/firstPage.js');

const app = express()
const port = process.env.PORT || 443

app.use('/assets', express.static(path.join(__dirname, 'semantic')))


app.get('/', (req, res) => {
  firstVue.getHtml(function(page) {
			res.end(page);
		});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
