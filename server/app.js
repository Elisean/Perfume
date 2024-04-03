require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()



app.use(cors())
app.use(express.json({limit: "25mb" }));
app.use(express.urlencoded({limit: "25mb" }))
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})


function sendMail({userMail, userPassword}){
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host:'smtp.mail.ru',
            secure:"true",
            port:"true",
            service: 'mail',
            auth: {
              user: process.env.MAIL,
              pass: process.env.PASSWORD
            }
        })
        let mailOptions = {
            from: `тест <${userMail}>` ,
            to: userMail,
            subject: `Perfume пароль для авторизации`,
            text: `Ваш пароль для входа в линый кабинет ${userPassword}`
        };

       transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                return reject({message:`An error occurred`});
            }
            return resolve({message:`Email sent successfully`});
       }); 
    });
}


app.get("/", (req, res) =>{
    sendMail(req.query)
        .then((response) => response.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})

app.listen(process.env.PORT, ()=>{
    console.log(`nodemailer is listen at http://localhost:${process.env.PORT}`)
})