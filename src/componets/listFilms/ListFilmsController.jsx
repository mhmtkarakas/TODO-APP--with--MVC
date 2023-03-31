import React, {useState, useEffect} from 'react'
import ListFilmView from './ListFilmView'
import axios from 'axios'


const ListFilmsController = () => {
    const [films, setFilms] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:3004/films')
        .then(res=>setFilms(res.data))
    },[])

    if(films===null) return null
       return <ListFilmView films={films} />

}

export default ListFilmsController