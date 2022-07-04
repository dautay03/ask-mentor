import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function Department(props) {
  console.log(props);
  const dep = props.department.map((e) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" style={{ paddingTop: "10px" }}>
        <Card>
          <h3>{e.name}</h3>
          <CardBody>
            <CardText>Số lượng nhân viên:{e.numberOfStaff}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className="container row" style={{ margin: "auto" }}>
      {dep}
    </div>
  );
}
export default Department;
