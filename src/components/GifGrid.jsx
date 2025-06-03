import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import Cards from './Cards';
import useFetchGifs from '../hooks/useFetchGifs';

function GifGrid({ category }) {

    const {images, isLoading} = useFetchGifs(category);     


    // {isLoading && (<h2>Cargando...</h2>)}

    return (
        <div>
            <h1>{category}</h1>
            <div className='card-grid'>
                {isLoading 
                ?<h1>Cargando</h1>
                :images.map(cate => {
                    return (
                        <Cards
                            key={cate.id}
                            {...cate}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default GifGrid