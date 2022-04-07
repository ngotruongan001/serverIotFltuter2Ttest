'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const firebase = require('./db');

const FCM = require('fcm-node')
var serverKey = require('./privateKey.json')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
var fcm = new FCM(serverKey);

var databaseDB = firebase.database();
// databaseDB.ref("notification/status").set("yes");

const sendMessage = (token, title, body) => {
    var message = { 
        to: token,
        // collapse_key: '...',
    
        notification: {
            title: title,
            body: body
        },
    
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    }
    
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!")
        } else {

            console.log("Successfully sent with response: ", response)
            const add_notification = new Notification({ 
                token: req.body.token,
                title: req.body.title,
                content:  req.body.body
            })
        
        }
    })
}

setInterval(() => {
    databaseDB.ref('ESP32_Device/notification/status').once('value')
        .then(function (snapshot) {
            if (snapshot.val() == "yes") {
                databaseDB.ref('fcm-token/token').once('value')
                .then(function (snapshot_in){
                    const token = snapshot_in.val();
                    console.log(token);
                    sendMessage(token, 'Warning', "Có cái đầu vào nhà bạn")
                    databaseDB.ref("ESP32_Device/notification/status").set("no");
                })
            } else {
                console.log("no")
            }
        })
}, 1000);

app.get('/',(req, res) => {
    databaseDB.ref("ESP32_Device/notification/status").set("yes");
    res.send("SP")
    console.log("Yes")
})


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
