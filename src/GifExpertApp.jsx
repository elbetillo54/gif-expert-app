import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // console.log(``);

    };

    // shift+tab para regresar 
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewValue={event => onAddCategory(event)}
            />

            {categories.map((category) => {
                return (
                    <GifGrid category={category} key={category} />
                )
            })}


        </>
    )
}

export default GifExpertApp;