const express = require('express');
const path = require('path');

const app = express();
console.log(process.env.PORT)
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/',(req, res) => {
    res.send('Hello World!!!!!');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
app.listen(PORT,() => {
    console.log(`app is running on ${PORT}`);
} );