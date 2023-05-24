const main_helper = require("../helpers/index");
const axios = require('axios');

require("dotenv").config();

const get_markets = async (req, res) => {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    return res.status(200).json(data);
};

module.exports = {
    get_markets
};