import express from 'express';
import path from 'path';
const app = express();
const port = 3001;
const __dirname = path.dirname(new URL(import.meta.url).pathname)
app.use(express.static(path.join(__dirname,'dist')))

app.get('/',(req, res)=>{
    res.sendFile('index.html');
})

app.listen(port,()=>{
    console.log("Hosting on ", port)
})