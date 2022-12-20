import React,{ useState} from 'react'
import { apiPublic } from '../Services/apiPublic';


export default function useVeiculos (pageLimit) {
    const [veiculos, setVeiculos] = useState([])
    const [auxVeiculos, setAuxVeiculos] = useState([])
    const [veiculosSort, setVeiculosSort] = useState([])
    const [auxVeiculosSort, setAuxVeiculosSort] = useState([])
    const [totalVeiculos, setTotalVeiculos] = useState(Number)

   async function getVeiculos(page){
        const virtualPage = ((page - 1) * pageLimit) <= 0
        ? 0
        : ((page - 1) * pageLimit)

        const response = apiPublic.get(`/veiculos?offset=${virtualPage}&limit=${pageLimit}`)

       // const sortResponse = (await response).data.results.veiculos.sort((a,b)=>{return b.price - a.price})

        const responseVeiculos = (await response).data.results.veiculos

        const sortResponse = responseVeiculos.map(res => {
            return {
                _id: res._id,
                name: res.name,
                price: res.price,
                previousprice: res.previousprice,
                brand: res.brand,
                model: res.model,
                photo: res.photo,
            }
        })
        
        sortResponse.sort((a,b) => a.price - b.price)
        
        setVeiculos([...veiculos, ...responseVeiculos])
        setAuxVeiculos([...veiculos, ...responseVeiculos])
        setVeiculosSort([...veiculosSort, ...sortResponse])
        setAuxVeiculosSort([...veiculosSort, ...sortResponse])
        setTotalVeiculos(Math.ceil((await response).data.results.total / pageLimit))
    }


    return {
        getVeiculos,
        setVeiculos,
        setVeiculosSort,
        veiculos,
        totalVeiculos,
        veiculosSort,
        auxVeiculos,
        auxVeiculosSort
    }
}