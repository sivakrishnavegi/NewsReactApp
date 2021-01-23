import React,{useState,useEffect} from 'react'
import axios from 'axios';
require("dotenv").config()
const NewsApi = () => {
     const [responseData, setResponseData] = useState([])
 console.log(process.env.API_KEY)
        useEffect(() => {
            axios.get(process.env.REACT_APP_API_URL)
            .then(res => {
                console.log(res)
                setResponseData(
                    res.data.articles
                    
               
                )
            })
            .catch(err => {
                console.error(err); 
            })
            
        }, [])

    return (
        <div>
        
        {responseData.map(p=>(
            <li>
                {p.title} hi
            </li>
        ))}
   
             
        </div>
    )
}

export default NewsApi
