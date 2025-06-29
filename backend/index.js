import express from 'express';

const app = express();

app.use(express.json());

app.use('/test', (req, res) => {
    res.send('Welcome to the Pintrest-like application backend!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});