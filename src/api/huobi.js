import http from "@/http/http.js"

export const getPrice = (type) => {
    return http({
        url: `https://api.huobi.pro/market/detail/merged?symbol=${type}usdt`
    })
}

export const getKline = (type, min) => {
    return http({
        url: ""
    })
}