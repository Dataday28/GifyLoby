import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Footer from "./components/Footer";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    const handleUp = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    

    return(
        <div className="main">
            <h1 className="title">GifyLoby</h1>

            <AddCategory onNewCategory={onAddCategory} />

        
            {categories.map(category => (<GifGrid key={category} category={category} />))}

            <button className="btn_up" onClick={handleUp}>
                    <svg className="svgIcon" viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
            </button>


            <Footer />
            

        </div>
    )
}

export default GifExpertApp;