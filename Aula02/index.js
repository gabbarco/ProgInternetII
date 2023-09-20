const express = require('express');
const app = express()
const axios = require('axios')
const path = require('path')
const port = 3000;
app.use(express.static('static'))
app.use(express.json())
require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname__, '/index.html'))
})

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "Bem vindo ao gabboat 2")
})

bot.command('bitcoin', ctx => {
    let rate
    console.log(ctx.from)
    axios
    .get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl`)
    .then(response => {
        rate = response.data.bitcoin;
        bot.telegram.sendMessage(ctx.chat.id, `O preço do bitcoin em reais é ${rate.brl}`)
    })
})

bot.launch()