'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

// const {
//     PORT,
//     HOST,
//     HOST_URL,
// } = process.env;

// assert(PORT, 'PORT is required');
// assert(HOST, 'HOST is required');

// API_KEY="AIzaSyCFkvTx55DvTZP01VjmlbkhQPUEb86XJTA"
// AUTH_DOMAIN= "realtime-flutter-1b867.firebaseapp.com"
// DATABASE_URL= "https://realtime-flutter-1b867-default-rtdb.firebaseio.com"
// PROJECT_ID= "realtime-flutter-1b867"
// STORAGE_BUCKET=  "realtime-flutter-1b867.appspot.com"
// MESSAGING_SENDER_ID= "794380958759"
// APP_ID= "1:794380958759:web:1111de432305e1ae9ae202"

module.exports = {
    port: 8080,
    host: "localhost",
    url: "http://localhost:8080",
    firebaseConfig: {
        apiKey: "AIzaSyDO92qWJUY0DN1_4pVU3Ws6bVRD3ovMiQY",
        authDomain: "esp32-realtime-813e1.firebaseapp.com",
        databaseURL: "https://esp32-realtime-813e1-default-rtdb.firebaseio.com",
        projectId: "esp32-realtime-813e1",
        storageBucket: "esp32-realtime-813e1.appspot.com",
        messagingSenderId: "376650722360",
        appId: "1:376650722360:web:8ce81f4e3e5b10fa6fcacd",
        measurementId: "G-GQ4BBCX41F"

    }
}