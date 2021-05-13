import React from 'react';
//import logo from './logo.svg';
import './App.css';

import MenuSuperior from  './components/menusuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Lideres from './components/Resumo/Lideres';
import Home from './components/Resumo/Home';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <MenuSuperior></MenuSuperior>
      < div className='container-fluid'>

<div className='row'>
<div className='col'>
  <switch>

    < Route path="/Membros"component={Resumo}/>
    <Route path="/Lideres"component={Lideres}/>
    < Route path="/" exact component={Home}/>
  </switch>
</div>

</div>

      </div>
      
    </div>


  );
}

export default App;
