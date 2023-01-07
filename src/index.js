const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/routes/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://openintern:ifslV9eo2Cys5C9q@cluster0.kbetgns.mongodb.net/Openintern?retryWrites=true&w=majority")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


//ifslV9eo2Cys5C9q
//mongodb+srv://openintern:ifslV9eo2Cys5C9q@cluster0.kbetgns.mongodb.net/Openintern?retryWrites=true&w=majority