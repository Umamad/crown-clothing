import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';

function App() {
  return (

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in-up' component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
