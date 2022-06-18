import { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { STAFFS } from './data/staffs';
import StaffList from './component/MenuStaffs';
import {cot} from './component/cot'
import Main from './component/main';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Staff: STAFFS 
    };
  }
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
          <div className='container'  >
            <NavbarBrand className='col-4 col-lg-4 col-md-4' >số cột</NavbarBrand>
            <NavbarBrand className='col-3 ' onClick={()=>cot('col-5 col-md-5 col-lg-5 m-1')} >2</NavbarBrand>
            <NavbarBrand className='col-3 ' onClick={()=>cot('col-3 col-md-3 col-lg-3 m-1')} >3</NavbarBrand>
            <NavbarBrand className='col-3 ' onClick={()=>cot('col-2 col-md-2 col-lg-2 m-1')} >5</NavbarBrand>
            <NavbarText onClick={()=>cot('col-12 col-md-5 col-lg-3 m-1')}>click reponsive</NavbarText>
          </div>
        </Navbar>
        <StaffList data={this.state.Staff}/>  
        <Main data={this.state.Staff} />
    </div>
  );
}}
export default App;
