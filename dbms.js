import fs from 'fs'
import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const databasePath = path.join(__dirname, 'databases')


const getDirs = async ()=>(
    await fs.readdir(databasePath, {withFileTypes:true},(err, files)=>{
        if(err){
            return(console.log("HMMMMMM"))
        }else{
            files.forEach(f=>{
                console.log(f)
            })
        }
    })
)

getDirs()