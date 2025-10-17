import express from 'express';
const App = express();
const PORT = 3000;
import path from 'path';


// main file path
App.use(express.static(path.resolve("./src")));


App.get('/about', (req, res) => {
    res.send('Hello World');
});

App.get('/', (req, res) => {
    res.sendFile("/src/index.html");
});



App.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});