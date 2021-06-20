import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (

    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
    </div>
  );
}

export default App;
