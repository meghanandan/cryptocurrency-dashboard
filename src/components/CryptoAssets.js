import React from 'react'
import { useState, useEffect } from 'react'
import Apiservice from '../service/Apiservice'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Link } from 'react-router-dom'

const CryptoAssets = () => {
    const [posts, setPosts] = useState([])   
    

    useEffect(() => {
        
        try{
            Apiservice.getCrptoAssets().then((result) => {
                console.log(result.data.data)
                setPosts(result.data.data)
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])

    

    const getName = (rowData) => {
        const shoot = () => {
            sessionStorage.setItem("getcoinname", rowData.id)
        }
        return <span><Link to={"/crptodetails"} onClick={shoot} >{rowData.name}</Link></span>
    }
  
    const expLink = (rowData) => {
        return <span><a href={rowData.explorer} target="_blank" rel="noopener noreferrer">Website</a></span>
    }
    

    return(
        <React.Fragment>
            <DataTable value={posts} header="Cryptocurrency Assets" footer="source: CoinCap API 2.0" className="shadow-4" removableSort showGridlines paginator rows={5} rowsPerPageOptions={[5,10,20,50]} responsiveLayout='scroll' >
                <Column field="rank" header="Rank" sortable />
                <Column field="symbol" header="Symbol" sortable />
                <Column body={getName} header="Name" />
                <Column field="priceUsd" header="Price in $" sortable />
                <Column body={expLink} header="Explorer" />
            </DataTable>
        </React.Fragment>
    )
}

export default CryptoAssets