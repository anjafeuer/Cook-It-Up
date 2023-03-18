// Style
import './Home.css';

// Pages Import
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActions, CardContent, Typography } from '@mui/material';

export default function Home (){
  return (
    <div className="Home">
      <header className="Home-header">
      
        <h4>Du suchst nach einer Idee? Stichwort eingeben oder inspirieren lassen!</h4>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <p>Hier kommen die Rezept Vorschläge / Overview hin.</p>
    
        {/* <button onClick = {()=> navigate("/recipe")}>Rezept</button> */}
        <Card className="Home-Card">
          <CardContent>
            <Typography>Linsen Daal</Typography>
            <CardMedia  component="img" height="194" image="recipeimages\linsendaal.jpg" alt="Linsen Daal"/>
            <CardActions><Button size="small">Show Recipe</Button>
            </CardActions>
          </CardContent>
        </Card>
      </header>
    </div>
  );
}
;
