import * as React from 'react';
import './Recipe.css';
import Button from '@mui/material/Button';

function App() {

  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <p>
      <h3>Linsen Daal</h3>
      <h4>Zutaten und Zubereitung:</h4>
      <img src="Cook-It-Up\cook-it-up\src\recipeimages\linsendaal.jpg" alt="Linsen Daal" width="500" height="333"></img> 
      </p>
      <Button classes="MuiButton-root" variant="contained">PDF erstellen</Button>

      <Button classes="MuiButton-root" variant="contained">Einkaufsliste erstellen</Button>
      </header>
    </div>
  );
}
export default App;
