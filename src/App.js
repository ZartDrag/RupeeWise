
import  './Mycomponentcss/style.css';

import Landing from './Mycomponent/Landing';
import { Routes,Route } from 'react-router-dom';

import Login from './Mycomponent/Login';
import Dashboard from './Mycomponent/Dashboard';
function App() {
  return (
    <>
    
    <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    
   
   
 
    </>
  );
}

export default App;
