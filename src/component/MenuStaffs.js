import { Component } from "react";
import {Card,CardBody, CardTitle,CardText} from 'reactstrap'
import dateFormat from 'dateformat'

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={
            seclecstaffs:null
        }

    }
seclecStaffs(staff){
    this.setState({seclecstaffs:staff})
}

renderstaff(staff){
    console.log(staff)
if(staff!=null){
    return(
        <div className=" col-12 col-md-5 col-lg-3 m-2">
            <Card>
                
                <CardBody>
                    <h6>
                        <CardText>
                            {`Họ và tên:${staff.name}`}
                    
                        </CardText>
                    </h6>
                <CardText>
                    {`Ngày sinh: ${dateFormat(staff.doB, "dd/mm/yyyy")}`}
                </CardText>
                <CardText>
                    {`Ngày vào công ty: ${dateFormat(staff.starDate,"dd/mm/yyyy")}`}
                </CardText>
                <CardText>
                    {`Phòng ban: ${staff.department.name}`}
                </CardText>
                <CardText>
                    {`Số ngày nghỉ còn lại: ${staff.annualLeave}`}
                </CardText>
                <CardText>
                    {`Số ngày đã làm thêm: ${staff.overTime}`}
                </CardText>
                </CardBody>
            </Card>
        </div>
    )
}else{return <div>bấm vào tên nhân viên để xem thông tin</div>}
}


render(){
    console.log(this.props.data)
const Menu = this.props.data.map((staff)=>
    {return(
        <div className="col-12 col-md-5 col-lg-3 m-1">
            <Card key={staff.id} onClick={()=>this.seclecStaffs(staff)}>
                <CardTitle>
                {staff.name}
                </CardTitle>
            </Card>
        </div>
    )})

    return(
        <div className="container">
            <div className="row bottom">
                {Menu}
            </div>
            <div className="row">
            {this.renderstaff(this.state.seclecstaffs)}
            </div>
        </div>
    )
}



}


export default StaffList;