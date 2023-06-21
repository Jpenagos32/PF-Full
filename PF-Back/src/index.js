const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server raised in port: ${PORT}`);
});

