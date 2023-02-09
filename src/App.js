
import  './Mycomponentcss/style.css';

import Landing from './Mycomponent/Landing';
import { Routes,Route } from 'react-router-dom';

import Login from './Mycomponent/Login';
import Dashboard from './Mycomponent/Dashboard';
import NewDash from './Mycomponent/NewDash';
function App() {
  return (
    <>
    
    <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/dashboard' element={<NewDash/>}/>
    </Routes>
    
   
   
 
    </>
  );
}

export default App;
