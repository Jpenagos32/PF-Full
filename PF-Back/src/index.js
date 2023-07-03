require('dotenv').config();
const { PORT } = process.env || 3001;
const app = require('./app');
const { mongoose } = require('./db');

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server raised in port: ${PORT || 3001}`);
});
