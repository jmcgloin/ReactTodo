var express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.use((req,res,next) => {
	req.headers['x-forwarded-proto'] === 'https' ?
		res.redirect('http://' + req.hostname + req.url): next();
});

app.use(express.static('public'));
app.listen(PORT, () => console.log(`Express server up on port ${PORT}`));