const main_helper = require("../helpers/index");
const axios = require('axios');

require("dotenv").config();

const get_markets = async (req, res) => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
        console.log(res)
    });
};

module.exports = {
    get_markets
};