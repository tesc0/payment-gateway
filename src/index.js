import chalk from 'chalk';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';

import './db/mongoose.js';
import BankCard from './model/bankcard.js';
import PaymentData from './model/paymentData.js';

import { items, prices, quantities, codes, units, companies } from '../public/assets/js/demoData.js';

const port = process.env.port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, '../public')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'))

app.get('', (req, res) => {
    res.render('hello');
});

app.get('/yay', (req, res) => {

    var chance = Math.random();
    if (chance < 0.7) {
        res.redirect(req.query.successUrl);
    } else {
        res.redirect(req.query.failureUrl);
    }
});

app.get('/payment', (req, res) => {
    res.render('payment-form', req.query);
});

app.post('/payment-processor', (req, res) => {
        
    const payment = new PaymentData({
        data: JSON.stringify(req.body),
        created_at: new Date().toISOString()
    });
    payment.save().then(payment => {
        res.redirect('/processing?failureUrl=' + req.body.failureUrl + '&successUrl=' + req.body.successUrl);  
    }).catch(error => {
        console.log(chalk.red(error));
    });
});

app.get('/demo', (req, res) => {

    let data = {};
    data.itemName = items[Math.floor(Math.random() * items.length)];
    data.price = prices[Math.floor(Math.random() * prices.length)];
    data.quantity = quantities[Math.floor(Math.random() * quantities.length)];
    data.unit = units[Math.floor(Math.random() * units.length)];
    data.sum = data.quantity * data.price;
    data.code = codes[Math.floor(Math.random() * codes.length)];
    data.successUrl = data.IPNUrl = data.cancelUrl = '';
    data.currency = 'HUF';
    data.company = companies[Math.floor(Math.random() * companies.length)];
    res.render('payment-form', data);
});

app.get('/processing', (req, res) => {
    res.render('loading', req.query);
});

app.listen(port, () => {
    console.log(chalk.bgGreen('server is up on port ' + port));
});
