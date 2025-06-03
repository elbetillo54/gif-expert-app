const getGifs = async(category) => {
        const apiKey = '5GI13GVVEL38vNzEOV6Ay8KvEVquVsPb'
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`

        const resp = await fetch(url);
        const {data} = await resp.json()
        //retornando un objeto 
        const gif = data.map(img => ({
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }));
        
        return gif;
        
    }

    export {
        getGifs
    }