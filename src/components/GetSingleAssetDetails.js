import React, { useEffect, useState } from "react";
import { Panel } from 'primereact/panel';
import { Chart } from 'primereact/chart';
import Apiservice from "../service/Apiservice";

const GetSingleAssetDetails = () => {

    const [chart, setChart] = useState([])
    const [supply, setSupply] = useState("")
    const [maxSupply, setMaxSupply] = useState("")

    const getSingleName = sessionStorage.getItem("getcoinname")
    useEffect(() => {
        const getSingleName = sessionStorage.getItem("getcoinname").toLocaleLowerCase()
        
        try{
            Apiservice.getCrptoCoinAsset(getSingleName).then((result) => {
                console.log(result.data.data)
                setChart(result.data.data)
                setSupply(result.data.data.supply)
                setMaxSupply(result.data.data.maxSupply)
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])

    const getsupply = parseInt(supply)
    console.log("supply: " +getsupply)
    const getmaxsupply = parseInt(maxSupply)
    const chartData = {        
        labels: ['Supply', 'Max Supply'],
        datasets: [
            {
                data: [getsupply, getmaxsupply],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ]
            }]
    };

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    const header =() =>{
        return <div className="capitalize">{getSingleName} - Market Supply &amp; Max Supply</div>
    }

    return(
        <React.Fragment>
            <Panel header={header} className="bg-white shadow-4">
                <div className="card flex justify-content-center  py-6">
                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '20%' }} />
                </div>
            </Panel>
        </React.Fragment>
    )

}

export default GetSingleAssetDetails