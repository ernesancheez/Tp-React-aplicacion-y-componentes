import React from 'react'
import Genre from './Genre';

function GenresInDb() {

  const genres = ['Accion', 'Aventuras', 'Ciencia Ficcion', 'Comedia', 'Documental', 'Fantasía', 'Infantiles', 'Musical']
    return (
        <div class="col-lg-6 mb-4">						
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
              </div>
              <div class="card-body">
                <div class="row">


                  {
                    genres.map((genre,index) => <Genre genre = {genre} key={genre + index}/>)
                  }
                 
        
                </div>
              </div>
            </div>
          </div>
    )
}

export default GenresInDb
