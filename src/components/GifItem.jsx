
const GifItem = ({ title, url, id }) => {


    return (
        <div className="card">
            <img className="card-img" src={url} alt={title} />
            <p className="card-title">{title}</p>
        </div>
    )
}

export default GifItem;
