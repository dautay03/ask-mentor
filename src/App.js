import { useState } from 'react';
import './App.css';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import PageStaff from './component/page/Staff';
import { DEPARTMENTS, STAFFS } from './data/staffs';
import { Route,Routes } from 'react-router';
import StaffCurrent from './component/page/staffcurrent';
import Department from './component/page/department';
import Money from './component/page/money';
function App (){
     const [staffList]=useState({Staff: STAFFS }) 
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/staff' element={<PageStaff props={staffList.Staff}/>} />
        <Route path='/' element={<PageStaff props={staffList.Staff}/>} />
        <Route path='/staff/:staffID' element={<StaffCurrent staff={staffList.Staff} />}  />
        <Route path='/department' element={<Department department={DEPARTMENTS} />}  />
        <Route path='/money' element={<Money money={staffList.Staff} />}  />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
