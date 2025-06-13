import express from 'express';

const app = express();

// Static middleware
app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.send('It works');
});

app.listen(3000, console.log('Server is listening on http://localhost:3000...'));