import React from 'react';

import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

// function Myroutes(){
    
//     return (
//         <Router>
        
//          <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/:category/search/:keyword' element={<Catalog/>}/> 
//             <Route path='/:category/:id' element={<Detail/>}/> 
//             <Route path= '/:category' element ={<Catalog/>}/> 
//          </Routes>
        
//       </Router> 
//     );
// }

// export default Myroutes;
function Myroutes(){
    
    return (
        <Router>
        
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:category/search/:keyword' element={Catalog}/> 
            <Route path='/:category/:id' element={Detail}/> 
            <Route path= '/:category' element ={Catalog}/> 
         </Routes>
        
      </Router> 
    );
}

export default Myroutes;
