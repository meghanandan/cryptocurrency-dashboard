import React from "react";
import { useState, useEffect } from 'react'
import Apiservice from "../service/Apiservice";

const GetCurrencyRate = () => {

    const [coinData, setCoinData] = useState([])   
    const [show, setShow] = useState(true)      
    

    const getSingleName = sessionStorage.getItem("getcoinname")
    useEffect(() => {
        const getSingleName = sessionStorage.getItem("getcoinname").toLocaleLowerCase()
        try{
            Apiservice.getCrptoRate(getSingleName).then((result) => {
                console.log(result.data)                      
                if(result.data.data != undefined){              
                    setCoinData(result.data.data)                      
                }else{
                    setShow(false)
                }
            })
        }catch(error){
            console.log("error", error)
        }        
    }, [])

    return(
        <React.Fragment>
           {
               show ? 
            <div className="grid mb-2">
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-blue-500">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="text-900 font-medium text-xl text-white uppercase">{getSingleName}</div>
                                <span className="block text-400 text-white font-medium text-sm">Coin Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-green-500">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="text-900 font-medium text-white text-xl uppercase">{coinData.symbol}</div>
                                <span className="block text-400 text-white font-medium text-sm">Coin Symbol</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-cyan-500">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="text-900 font-medium text-white text-xl uppercase">{coinData.type}</div>
                                <span className="block text-400 text-white font-medium text-sm">Coin Type</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-indigo-500">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="text-900 font-medium text-white text-xl uppercase">$ {coinData.rateUsd}</div>
                                <span className="block text-400 text-white font-medium text-sm">Coin Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            : '' }       
        </React.Fragment>
    )
}

export default GetCurrencyRate