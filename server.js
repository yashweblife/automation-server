import bodyParser from "body-parser";
import express from 'express';
import fs from "fs";
import path from 'path';
const app = express();

const port = 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname)
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.sendFile('index.html');
})
app.get('home',(req, res)=>{
    res.sendFile('home.html')
})
app.post('/handle_login', (req, res) => {
    const data = req.body
    console.log(req.body)
    const users = JSON.parse(fs.readFileSync('./databases/users.json', 'utf8'))
    const test = users.find((val) => val.username == data.username)
    if (test) {
        if (test.password == data.password) {
            res.send({status:true, id:test.id})
        } else {
            res.send({status:false})
        }
    } else {
        res.send({status:false});
    }
})
function generateId(size=10){
    let output = ""
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY"
    for(let i=0;i<size;i++){
        output += a[Math.floor(Math.random()*a.length)];
    }
    return(output);
}
app.post('/handle_signup', (req, res) => {
    const data = req.body;
    const file = JSON.parse(fs.readFileSync('./databases/users.json','utf8'));
    const test = file.find((val)=>val.username == data.username)
    if(test){
        res.send({status:false})
        return
    }
    data.id = generateId();
    file.push(data);
    console.log(data)
    fs.writeFileSync('./databases/users.json', JSON.stringify(file))
    fs.mkdirSync(`./databases/${data.id}`, {recursive:true})
    fs.writeFileSync(`./databases/${data.id}/todos.json`, JSON.stringify([]))
    res.send({status:true, id:data.id});
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