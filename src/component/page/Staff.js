import { useState } from "react"
import {Card,CardTitle,CardImg} from 'reactstrap'
import { Link } from "react-router-dom"

function PageStaff(props){
let [State]=useState({
    Staff:props,
})

const printStaff=State.Staff.props.map((staff)=>{
    return(
        <div className="col-6 col-md-4 col-lg-2" style={{padding:'5px'}}>
            <nav><Link to={`/staff/${staff.id}`} >
                <Card key={staff.id} >
                    <CardImg src={staff.image} alt={`${staff.name}`}/>
                    <CardTitle style={{textAlign: 'center'}}>
                    {staff.name}
                    </CardTitle>
                </Card>
            </Link>
            </nav> 
        </div>
    )
})

return(
    <div className="container row" style={{margin:'auto'}}>
        <h4 style={{marginTop:'7px',borderBottom:'1px solid black'}}>Nhân Viên</h4>
        {printStaff}
    </div>
)

}
export default PageStaff