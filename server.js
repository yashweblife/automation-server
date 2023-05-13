import express from 'express';
import fs from "fs";
import path from 'path';
const app = express();

const port = 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname)
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.sendFile('index.html');
})
app.post('/handle_login', (req, res) => {
    const data = req.body
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'))
    const test = users.find((val) => val.username == data.username)
    if (test) {
        if (test.password == data.password) {
            res.send(true)
        } else {
            res.send(false)
        }
    } else {
        res.send(false);
    }
})
app.post('/handle_signup', (req, res) => {
    const data = req.body;
    const file = JSON.parse(fs.readFileSync('users.json','utf8'));
    file.push(data);
    fs.writeFileSync('users.json', JSON.stringify(file))
    res.send(true);
})
app.post('/handle_logout', (req, res) => { })

app.get('/todo-lists', (req, res) => { })
app.post('/todo-list-add-list', (req, res) => { })
app.post('/todo-list-remove-list', (req, res) => { })
app.post('/todo-list-update-list', (req, res) => { })
app.post('/todo-add-item', (req, res) => { })
app.post('/todo-remove-item', (req, res) => { })
app.post('/todo-update-item', (req, res) => { })

app.get('/image_classifier', (req, res) => { })

app.get('/devices', (req, res) => { })

app.get('/compose', (req, res) => { })

app.listen(port, () => {
    console.log("Hosting on ", port)
})