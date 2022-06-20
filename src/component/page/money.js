import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText } from "reactstrap";
import {Breadcrumb,BreadcrumbItem} from "reactstrap";


function Money(props){

const [State,setState]=useState({
    props:props.money
})

function compare(a,b){
    if(a.salaryScale*3000000+a.overTime*200000>b.salaryScale*3000000+b.overTime*200000){return 1}
    else if(a.salaryScale*3000000+a.overTime*200000<b.salaryScale*3000000+b.overTime*200000){return -1}
    return 0}
function compare1(a,b){
    if(a.salaryScale*3000000+a.overTime*200000<b.salaryScale*3000000+b.overTime*200000){return 1}
    else if(a.salaryScale*3000000+a.overTime*200000>b.salaryScale*3000000+b.overTime*200000){return -1}
    return 0}
function compare2(a,b){
    if(a.id>b.id){return 1}
    else if(a.id<b.id){return -1}
    return 0}
function compare3(a,b){
    if(a.id<b.id){return 1}
    else if(a.id>b.id){return -1}
    return 0}


const Listmoney= State.props.map((staff)=>{
    return(
        <div className="col-12 col-md-6 col-lg-4" style={{padding:'5px'}}>
            <Card style={{backgroundColor:'#cccccc'}}>
                <h3>
                    {staff.name}
                </h3>
                <CardBody>
                    <CardText>
                        Mã Nhân viên:{staff.name}
                    </CardText>
                    <CardText>
                        Hệ số  lương:{staff.salaryScale}
                    </CardText>
                    <CardText>
                        Số ngày làm thêm:{staff.overTime}
                    </CardText>
                    <Card>
                        Lương:<i style={{color:'red'}}>{Math.floor(staff.salaryScale*3000000+staff.overTime*200000)}</i>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
})
return(
    <div className="container row" style={{margin:'auto'}}>
        <Breadcrumb className='container'>
                <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="container row" style={{padding:'7px'}}>
            <div className='col-5 col-md-5 col-lg-2' style={{color:'ButtonHighlight'}}>
                <button onClick={()=>setState({props:props.money.sort(compare2)})} >
                    Sắp xếp theo mã nhân viên 
                </button>
            </div>
            <div className='col-5 col-md-5 col-lg-2' style={{color:'ButtonHighlight'}}>
                <button onClick={()=>setState({props:props.money.sort(compare3)})} >
                    Sắp xếp theo mã nhân viên 
                </button>
            </div>
            <div className='col-5 col-md-5 col-lg-2' style={{color:'ButtonHighlight'}}>
                <button onClick={()=>setState({props:props.money.sort(compare1)})} >
                    Sắp xếp lương từ lớn đến nhỏ
                </button>
            </div>
            <div className='col-5 col-md-5 col-lg-2' style={{color:'ButtonHighlight'}}>
                <button onClick={()=>setState({props:props.money.sort(compare)})} >
                    Sắp xếp theo lương từ nhỏ đến lớn
                </button>
            </div>
        </div>
        {Listmoney}
    </div>
)
}

export default Money;