// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <div>
        <h2>Your Burger</h2>
        <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {stack.map((ingredient, index) => (
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
              <button onClick={() => removeFromBurger(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;