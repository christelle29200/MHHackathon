const express = require('express')
const app = express()
const port = process.env.PORT || 443

app.use('/assets', express.static(path.join(__dirname, 'semantic')))
var firstVue = require('./views/firstPage.js');

app.get('/', (req, res) => {
  firstVue.getHtml(req.query.alert, function(page) {
			res.end(page);
		});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
