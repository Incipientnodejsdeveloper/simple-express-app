const express = require('express');
const app = express();


app.get('/working/', (req, res, next)=> {
    res.setHeader('custom-header', 'powered-by-nodejs-developer');
    res.status(200).json({
        message: "Don't worry, I'm also /working/!"
    });
    return;
});

app.get('/working', (req, res, next)=> {
    res.status(200).json({
        message: "Don't worry, I'm /working!"
    });
    return;
});

app.listen(5000, ()=>{
    console.log("Server listen: 5000");
})