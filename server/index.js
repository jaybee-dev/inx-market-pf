const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3306;
app.use(cors());
app.use(express.json())

// Route to get all dinos
app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM dino", (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
    });
});

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM dino WHERE d_id = ?", id, 
    (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
    });
});

// Route for creating the post
app.post('/api/create', (req,res)=> {
    const name = req.body.name;
    const category = req.body.category;
    const text = req.body.text;
    db.query("INSERT INTO dino (d_name, d_category, d_price, d_neuted_price, d_name_stat1, d_name_stat2, d_name_stat3, d_name_stat4) VALUES (?,?,?,?,?,?,?,?,?)",[name,category,text], (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)
    });
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM dino WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
