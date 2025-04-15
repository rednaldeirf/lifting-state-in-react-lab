// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              style={{
                backgroundColor: ingredient.color,
                padding: '0.5rem',
                margin: '0.3rem 0',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {ingredient.name}
              <button onClick={() => addToBurger(ingredient)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;
  