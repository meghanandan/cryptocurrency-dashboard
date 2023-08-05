import React from 'react'
import { useState, useEffect } from 'react'
import Apiservice from '../service/Apiservice'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const CryptoMarkets = () => {
    const [allMarkets, setAllMarkets] = useState([])   
    

    useEffect(() => {
        
        try{
            Apiservice.getAllCrptoMarkets().then((result) => {
                console.log(result.data.data)
                setAllMarkets(result.data.data)
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])
    return(
        <React.Fragment>
            <DataTable value={allMarkets} header="Cryptocurrency Markets"  footer="source: CoinCap API 2.0" className="shadow-4 my-4" removableSort showGridlines paginator rows={5} rowsPerPageOptions={[5,10,20,50]} responsiveLayout='scroll' >
                <Column field="rank" header="Rank" sortable />
                <Column field="exchangeId" header="Exchange Id" sortable />
                <Column field="baseSymbol" header="Base Symbol" sortable />
                <Column field="baseId" header="Base Id" sortable />
                <Column field="quoteSymbol" header="Quote Symbol" sortable />
                <Column field="priceUsd" header="Price in $" sortable />
            </DataTable>
        </React.Fragment>
    )
}

export default CryptoMarkets