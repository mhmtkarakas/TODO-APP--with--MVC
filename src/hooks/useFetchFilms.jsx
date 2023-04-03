import { useState,useEffect } from "react"

import axios from "axios"

const useFetchFilms =()=>{
   const [films,setFilms] = useState([]);
   const [pending, setPending] = useState(true);
   const [error, setError] = useState(false);
   const [success, setSuccess] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(()=>{
     axios.get('http://localhost:3004/films')
     .then((res)=>{
      setTimeout(() => {
         setPending(false)
         setSuccess(true)
         setFilms(res.data)
      },5000);

     })
     .catch((err)=>{
        setPending(false);
        setError(true);
        setErrorMessage('verileri cekerken hata olustu');
     })

   },[])

   return {films,pending,error,success,errorMessage};
}


export default useFetchFilms