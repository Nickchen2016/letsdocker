const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AddNum = require('./schema.js').AddNum;

const app = express();
const PORT = 5000;
const DB_URI = 'mongodb://mongo:27017/addNum';

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}) 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.get('/addnum', (req,res)=>{
    AddNum.find()
        .then(num => res.status(200).send(num))
        .catch(err => res.status(400).send(err));
})

app.post('/addnum', (req,res)=>{
    const body = req.body;
    const addNum = new AddNum({
      num: body.num,
    });
    addNum.save(addNum)
      .then((savedNum) => res.status(201).send(savedNum))
      .catch((err) => res.status(400).send(err));
})

app.patch('/addnum/:id', (req,res)=>{
    const id = req.params.id;
    AddNum.findOneAndUpdate({ _id: id }, { num: Number(req.body.num)+1 })
      .then((data) => {res.status(200).send(data)})
      .catch((err) => res.status(400).send(err));
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, ()=>{
    console.log(`app is listening on port: ${PORT}`)
})