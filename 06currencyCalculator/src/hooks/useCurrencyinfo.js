import {useEffect,useState} from "react"

//custom hooks
function useCurrencyinfo(currency){

    const [data,setData]=useState({});

    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
    
}

export default useCurrencyinfo;