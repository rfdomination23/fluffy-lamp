"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD55AY_NzbD8T3LpI8P5gkscP7ObEbHN60",
    authDomain: "fluffy-lamp-635ee.firebaseapp.com",
    projectId: "fluffy-lamp-635ee",
    storageBucket: "fluffy-lamp-635ee.appspot.com",
    messagingSenderId: "232285055049",
    appId: "1:232285055049:web:d8956855f7f57d31e4b798"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
var message = 'Degenerates';
var heading = document.createElement('h1');
heading.textContent = message;
var bet = /** @class */ (function () {
    function bet(id, amount, note, win) {
        this.id = id;
        this.amount = amount;
        this.note = note;
        this.win = win;
    }
    return bet;
}());
var bet1 = new bet(123, 20, "Test", 20);
console.log(bet1);
document.body.appendChild(heading);
