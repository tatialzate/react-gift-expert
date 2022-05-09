import React from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [ categories, setCategories ] = React.useState(['Dogs']);

    return(
        <div>
            <h2>GifExpert</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }></GifGrid>
                    ))
                }
            </ol>
        </div>
        
    )
}

export default GifExpertApp;