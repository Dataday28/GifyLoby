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
    

    return(
        <div className="main">
            <h1 className="title">GifyLoby</h1>

            <AddCategory onNewCategory={onAddCategory} />

        
            {categories.map(category => (<GifGrid key={category} category={category} />))}


            <Footer />
            

        </div>
    )
}

export default GifExpertApp;