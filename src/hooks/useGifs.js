import { useEffect, useState } from "react";

const useGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    const fetchGifs = async (category) => {

        try {

            const url = `https://api.giphy.com/v1/gifs/search?api_key=u1R9CWdm9NLPdSMarRdqR2a4sLr3uFdo&q=${category}&limit=12`
            const resp = await fetch(url);
            const { data } = await resp.json();

            const gifs = data.map(img => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }))

            setImages(gifs);
            setIsLoading(false);

        } catch(error) {
            setError(error);
        }
        

    }

    useEffect(() => {
        fetchGifs(category);
    }, []);


    return {
        images,
        isLoading,
        error
    }
    
}

export default useGifs;