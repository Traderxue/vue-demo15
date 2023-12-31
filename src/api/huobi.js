import http from "@/http/http.js"

export const getPrice = (type) => {
    return http({
        url: `https://api.huobi.pro/market/detail/merged?symbol=${type}usdt`
    })
}

export const getDetail = (type) =>{
    return http({
        url:`https://api.huobi.pro/market/depth?symbol=${type}usdt&depth=5&type=step0`
    })
} 

export const getKline = (type, min) => {
    return http({
        url: ""
    })
}