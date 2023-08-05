import React from 'react'
import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import Apiservice from '../service/Apiservice'
import GetCurrencyRate from '../components/GetCurrencyRate'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import GetSingleAssetDetails from '../components/GetSingleAssetDetails'


const CurrencyDetails = () => {
    const [coinDetails, setCoinDetails] = useState([])   
    

    const getSingleName = sessionStorage.getItem("getcoinname")
    useEffect(() => {
        const getSingleName = sessionStorage.getItem("getcoinname").toLocaleLowerCase()
        try{
            Apiservice.getCrptoMarket(getSingleName).then((result) => {
                console.log(result.data.data)
                setCoinDetails(result.data.data)
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])

    const exchangeBody = (rowData) => {
        const shoot = () => {
            sessionStorage.setItem("getexcname", rowData.exchangeId)
        }
        return <span><Link to={"/crptoexchange"} onClick={shoot}>{rowData.exchangeId}</Link></span>
    }
    
        return(
        <div className='card mx-4 mb-3'>
            <div className='bg-img shadow-2'>
                <Link to={"/"}><i className="pi pi-home text-2xl mt-2"></i> </Link>
                <h2 className='mt-1'>Cryptocurrency Market Data for <span className='capitalize'>{getSingleName}</span></h2>
            </div>
            <GetCurrencyRate />
            <DataTable value={coinDetails} header="Cryptocurrency Markets" footer="source: CoinCap API 2.0" className="shadow-4 mb-3"  showGridlines paginator removableSort rows={5} rowsPerPageOptions={[5,10,20,50]} responsiveLayout='scroll'>
                <Column body={exchangeBody} header="Exchange Id" sortable />
                <Column field="quoteId" header="Quote Id"  sortable/>
                <Column field="baseSymbol" header="Symbol" sortable/>
                <Column field="priceUsd" header="Price in $" />    
            </DataTable>
            <GetSingleAssetDetails />
            <Footer />
        </div>    
    )
}

export default CurrencyDetails