import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors"
import bodyParser from "body-parser";
import {v4 as uuid}  from 'uuid'
// .env file load hota h isse
const app = express();

dotenv.config();
const PORT = 8080;

app.use(cors({ origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",}));
    
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",Router);


connection();

app.listen(PORT, () => {
    console.log("App starting waquar", PORT);
});
 defaultData();

 export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
 paytmParams['CALLBACK_URL'] = 'https://<ngrok-id>.ngrok.io/callback', //paytmParams['CALLBACK_URL'] = 'http://localhost:8080/callback'
paytmParams['EMAIL'] = 'frazahamednawaz@gmail.com'
paytmParams['MOBILE_NO'] = '8102169500'