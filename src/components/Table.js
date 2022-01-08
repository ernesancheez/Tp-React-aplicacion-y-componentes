import React from 'react'
import TableRow from './TableRow'

function Table() {
    let data = [
        {
            title: "Billy Elliot",
            length: 123,
            rating: 5,
            genres: ["Drama", "Comedia"],
            awards: 2
        },
        {
            title: "Alicia en el país de las maravillas",
            length: 142,
            rating: 4.8,
            genres: ["Drama", "Acción", "Comedia"],
            awards: 3
        },
    ]

    return (
        <div className="container">
            <div className="card shadow mb-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Duracion</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Genéro</th>
                            <th scope="col">Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <TableRow key={index + Date.now()}{...item} />)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
