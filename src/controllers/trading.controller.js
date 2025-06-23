import crypto from "crypto"
import axios from "axios"
import TelegramBot from 'node-telegram-bot-api'
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false }); // polling false vì ta chỉ dùng gửi message thủ công

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CHAT_ID = process.env.CHAT_ID;
// const BASE_URL = 'https://fapi.binance.com';
const BASE_URL = 'https://testnet.binancefuture.com';
const DEFAULT_PRICE = 300

function sign(query, secret) {
    return crypto.createHmac('sha256', secret).update(query).digest('hex');
}

// Lấy giá hiện tại của symbol
async function getPrice(symbol) {
    const res = await axios.get(`${BASE_URL}/fapi/v1/ticker/price?symbol=${symbol}`);
    return parseFloat(res.data.price);
}

function convertTradingViewSymbol(tvSymbol) {
  // Loại bỏ mọi phần bắt đầu từ dấu chấm (.)
  return tvSymbol.split('.')[0];
}

export const createTrading = async (req, res) => {
    try {
        const { order_id, symbol: symbolOrigin, order_ratio, price: originPrice } = req.body;
        // if (!order_id || !symbolOrigin || !order_ratio) return res.status(400).send('Missing params');

        const symbol = convertTradingViewSymbol(symbolOrigin);
        const SIDE_MAP = {
            openLong: 'BUY',
            closeLong: 'SELL',
            openShort: 'SELL',
            closeShort: 'BUY'
        };

        const POSITION_SIDE_MAP = {
            openLong: 'LONG',
            closeLong: 'LONG',
            openShort: 'SHORT',
            closeShort: 'SHORT'
        };

        const side = SIDE_MAP[order_id];
        const positionSide = POSITION_SIDE_MAP[order_id];
        if (!side) return res.status(400).send('Invalid order_id');

        const chatContent =
            `symbol: ${symbol}\n` +
            `strategy: ${order_id}\n` +
            `price: ${originPrice}\n` +
            `volumn: ${order_ratio * DEFAULT_PRICE}`

        await bot.sendMessage(CHAT_ID, chatContent);

        // Lấy giá coin hiện tại
        const price = await getPrice(symbol);
        // Số lượng coin (quantity) = (DEFAULT_PRICE * order_ratio) / price
        const amount = DEFAULT_PRICE * order_ratio;
        const quantity = (amount / price).toFixed(3); // làm tròn 3 chữ số thập phân

        // Tạo query cho Binance Futures
        const params = [
            `symbol=${symbol}`,
            `side=${side}`,
            `positionSide=${positionSide}`,
            'type=MARKET',
            `quantity=${quantity}`,
            `timestamp=${Date.now()}`
        ].join('&');

        const signature = sign(params, API_SECRET);
        const url = `${BASE_URL}/fapi/v1/order?${params}&signature=${signature}`;

        const response = await axios.post(url, null, {
            headers: { 'X-MBX-APIKEY': API_KEY }
        });

        res.json({
            success: true,
            data: response.data
        });

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({
            success: false,
            error: error.response ? error.response.data : error.message,
            originError:error
        });
    }
}