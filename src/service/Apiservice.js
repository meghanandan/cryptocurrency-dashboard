import axios from 'axios'

const getCrptoAssets = () => {
    return axios.get("https://api.coincap.io/v2/assets")
}

const getAllCrptoMarkets = () => {
    return axios.get("https://api.coincap.io/v2/markets")
}

const getCrptoMarket = (getSingleName) => {
    return axios.get("https://api.coincap.io/v2/assets/"+ getSingleName +"/markets")
}

const getCrptoCoinAsset = (getSingleName) => {
    return axios.get("https://api.coincap.io/v2/assets/"+ getSingleName)
}

const getCrptoRate = (getSingleName) => {
    return axios.get("https://api.coincap.io/v2/rates/"+ getSingleName)
}

const getCrptoExchange = (getExchanger) => {
    return axios.get("https://api.coincap.io/v2/exchanges/"+ getExchanger)
}


const Apiservice = {
    getCrptoAssets,
    getAllCrptoMarkets,
    getCrptoCoinAsset,
    getCrptoMarket,
    getCrptoRate,
    getCrptoExchange
}

export default Apiservice