const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User")

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tnwns1485:1234@cluster0.smu2n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.post('/register', (req,res) => {
    

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
            return res.status(200).json({
            success: true
        })
    })

})


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요 ~ '))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))