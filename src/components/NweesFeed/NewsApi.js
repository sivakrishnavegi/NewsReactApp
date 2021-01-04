import React,{useState,useEffect} from 'react'
import axios from 'axios';

const NewsApi = () => {
     const [responseData, setResponseData] = useState([])

        useEffect(() => {
            axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c4902d82b7a94d80bc4d6819459af2a7')
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
