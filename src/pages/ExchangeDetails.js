import React from 'react'
import { useState, useEffect } from 'react'


import Apiservice from '../service/Apiservice'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const ExchangeDetails = () => {
    const [excDetails, setExcDetails] = useState([])   
    

    const getExchanger = sessionStorage.getItem("getexcname")
    useEffect(() => {
        const getExchanger = sessionStorage.getItem("getexcname").toLocaleLowerCase()
        try{
            Apiservice.getCrptoExchange(getExchanger).then((result) => {
                console.log(result.data.data)
                setExcDetails(result.data.data)
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])


    
        return(
        <div className='card mx-4 mb-3'>
            <div className='bg-img shadow-2'>
                <Link to={"/"}><i className="pi pi-home text-2xl "></i> </Link>
                <h2 className='my-1'>Cryptocurrency Exchange Data for <span className='capitalize'>{getExchanger}</span></h2>
                <Link to={"/crptodetails"}><i className="pi pi-arrow-circle-left text-xl my-2"></i> </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Exchange Id</th>
                        <th>Trading Pairs</th>
                        <th>Socket</th>
                        <th>Explorer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{excDetails.rank}</td>
                        <td>{excDetails.exchangeId}</td>
                        <td>{excDetails.tradingPairs}</td>
                        <td>{excDetails.socket}</td>
                        <td><a href={excDetails.exchangeUrl} target="_blank">{excDetails.exchangeUrl}</a></td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>    
    )
}

export default ExchangeDetails