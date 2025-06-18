import React from "react"

export default function Main() {
    const [ingredient, setIngredient] = React.useState([])

const ingredientList = ingredient.map(items=> {

    return(
        <li key={items}>{items}</li>
    )

})


    function Submit(formData) {
        const formdatas = formData.get("ingredient")

        setIngredient(prev => [...prev, formdatas])

    }

    return(
     
        <main>
            <form className="add-ingredient-form"  action={Submit}>

                <input aria-label="Add Ingredient"
                type="text"
                placeholder="e.g Maggi"
                name="ingredient"
                
                />
                <button> Add Ingredient </button>
            </form>

            <ul>
               
    {ingredientList}
            </ul>
        </main>
    )
}