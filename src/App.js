import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cuurentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in-up' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
