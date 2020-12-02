const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const Register = require('./Controllers/Register');
const SignIn = require('./Controllers/SignIn');
const Profile = require('./Controllers/Profile');
const Transactions = require('./Controllers/Transactions');
const TransactionPage = require('./Controllers/TransactionPage');
const CompleteTransaction = require('./Controllers/CompleteTransaction');
const New = require('./Controllers/New');
const Items = require('./Controllers/Items');

const db = knex({
    client: 'pg',
    connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'bigbob',
    database: 'CrownStore'
    }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.get('/', (res) => {res.send(db.Users)})
app.post('/Register', (req,res)=> {Register.Register(req,res,db,bcrypt)})

app.post('/SignIn', SignIn.SignIn(bcrypt, db))
app.get('/Profile/:UserID', (req,res)=> {Profile.GetProfile(req,res,db)})
app.get('/TransactionPage/:TransactionID', (req,res) => {TransactionPage.GetTransactionPage(req,res,db)})
app.get('/Transactions', (req,res)=> {Transactions.Transactions(req,res,db)})
app.post('/CompleteTransaction', (req,res)=> {CompleteTransaction.CompleteTransaction(req,res,db)})
app.post('/New', (req,res)=> {New.New(req,res,db)})
app.get('/Items', (req,res)=> {Items.Items(req,res,db)})



app.listen(3000, ()=> {
    console.log('Backend is running on 3000')
})