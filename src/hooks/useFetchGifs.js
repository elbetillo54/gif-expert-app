import React, {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [categoria, setCategoria] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setCategoria(newImages);

        setTimeout(() => {
            setisLoading(false);
        }, 2000);

        
    }

    //Sirve para disparar un efecto secundarios
    useEffect(() => {
        getImages();

    }, [category])


    return {
        images: categoria,
        isLoading: isLoading
    }
}

export default useFetchGifs;
