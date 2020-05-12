import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import { DataProvider } from './context/Context'
import './App.css';
import Nav from './components/Nav'
import News from './components/News';
import SearchNews from './components/SearchNews';
import {FormControl, TextField,} from '@material-ui/core'



function App() {
  
  return (
    <DataProvider>
      <div className='App'>
      <Nav />
      <div classname='container root'>
      <Switch>
          <Route exact path='/' component={News}></Route>
          <Route exact path='/SearchNews' component={SearchNews}></Route>
      </Switch>
       
      </div>
      
      </div>
    </DataProvider>
    
  );
}

export default App;
