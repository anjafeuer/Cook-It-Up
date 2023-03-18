import Home from './Home/Home.js';
import About from './About/About.js';
import Recipe from './Recipe/Recipe.js';
import './App.css';

export default function App (){
  const pathname = window.location.pathname;

  let content;
  if (pathname === '/about') {
    content = <About />;
  } else if (pathname === '/recipe') {
    content = <Recipe />;
  } else {
    content = <Home />;
  }
  return (
    <div>
      <header className="App-header">
        <h2 className="App-h2">Cook It Up!</h2>
        <nav>
          <ul className="App-ul">
            <li className="App-li"><a className="App-active" href="/">Home</a></li>
            <li className="App-li"><a href="/about">About</a></li>
            <li className="App-li"><a href="/recipe">Recipe</a></li>
          </ul>
          
        </nav>
      </header>
      <main>
        {content}
      </main>
    </div>
  )
}