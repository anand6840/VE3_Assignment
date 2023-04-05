import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Home1 } from '../Home/Home1';
// import { Home2 } from '../Home/Home2';
// import  {Module2}  from '../Pages/Module2';
// import  {Module1}  from '../Pages/Module1';
// import  {Module3}  from '../Pages/Module3';
// import  {Module4}  from '../Pages/Module4';
// import  {Module5}  from '../Pages/Module5';


const AllRoutes = () => {
  return (
    <Routes>
         <Route path='/' element= {<Home1/>}/>
         <Route path='options' element= {<Home2/>}/>
         <Route path='module1' element= {<Module1/>}/>
         <Route path='module2' element= {<Module2/>}/>
         <Route path='module3' element= {<Module3/>}/>
         <Route path='module4' element= {<Module4/>}/>
         <Route path='module5' element= {<Module5/>}/>
         
    </Routes>
  )
}

export default AllRoutes;
