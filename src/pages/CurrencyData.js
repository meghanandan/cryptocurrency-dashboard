import React from 'react'
import CryptoAssets from '../components/CryptoAssets'
import CryptoMarkets from '../components/CryptoMarkets'
import Footer from '../components/Footer'


const CurrencyData = () => {

    return(
        <div className='card mx-4 mb-3'>
            <div className='bg-img shadow-4'>
                <h2>Cryptocurrency Data</h2>
            </div>
            <CryptoAssets />
            <CryptoMarkets />
            <Footer />
        </div>    
    )
}

export default CurrencyData