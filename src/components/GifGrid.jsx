import useGifs from "../hooks/useGifs"
import GifItem from "./GifItem";
import { useEffect } from "react";


const GifGrid = ({ category }) => {
    const { images, isLoading, error, fetchGifs } = useGifs(category);



    const renderEvents = () => {
        if (isLoading) {
            return (
                <div className="loader">
                    <div className="dot dot-1" ></div>
                    <div className="dot dot-2" ></div>
                    <div className="dot dot-3" ></div>
                </div>
            )
        }

        if (error) {
            return <h2>Ha ocurrido un error</h2>
        }

        return (
            <div className="card-grid">
                {images.map((image) => (<GifItem key={image.id} {...image} />))}

            </div>
        )
    }

    useEffect(() => {
        fetchGifs(category);
        console.log("ejecutando")
    }, []);

    

    return (
        <div>
            <h3 className="title-cat">{category}</h3>

            
            {renderEvents()}
            
        </div>
    )
}

export default GifGrid
