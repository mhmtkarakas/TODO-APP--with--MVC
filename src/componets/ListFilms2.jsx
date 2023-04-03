import React from 'react'
import useFetchFilms from '../hooks/useFetchFilms'

const ListFilms2 = () => {
    const {films,pending,success,error,errorMessage} = useFetchFilms
  return (
    <div>ListFilms2
     { pending===true && (<p>Films fetching</p>)}
    {success=== true && films.length > 0 && (
        <>
        {
             films.map(film =>(
                <div key={film.id}>
                    <h1>{film.name}</h1>
                    <p>{film.rate}</p>
                    <hr />
                </div>
            ))
        }
        </>
    )}
    {success === true && films.length === 0 && (<p>Kayitli bir film yok</p>)}
    {error === true && (<p style={{color:'red'}}>{errorMessage}</p>)}
    </div>
  )
}

export default ListFilms2