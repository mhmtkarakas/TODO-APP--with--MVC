import React from 'react'

const ListFilmView = ({films}) => {
console.log({films});
  return (
    <div>
        {
        films.map(film =>(
            <div key={film.id}>
                <h1>{film.name}</h1>
                <p>{film.rate}</p>
                <hr />
            </div>
        ))
     }
    </div>
  )
}

export default ListFilmView