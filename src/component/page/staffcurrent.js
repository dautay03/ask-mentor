import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Media, CardText } from "reactstrap";
import dateFormat from "dateformat";
function StaffCurrent() {
  const id = Number(useParams().staffID);
  const staffs = JSON.parse(localStorage.getItem("staff"));
  const state = { staff: staffs.find((x) => x.id === id) };
  return (
    <div key={state.staff.id} style={{ marginBottom: "15px" }}>
      <Breadcrumb className="container">
        <BreadcrumbItem>
          <Link to="/">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{state.staff.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <Media
            className="col-12 col-md-4 col-lg-3"
            src={state.staff.image}
            alt={state.staff.name}
          />
          <Media className="col-12 col-md-8 col-lg-9">
            <h4>
              <CardText>{`Họ và tên:${state.staff.name}`}</CardText>
            </h4>
            <CardText>
              {`Ngày sinh: ${dateFormat(state.staff.doB, "dd/mm/yyyy")}`}
            </CardText>
            <CardText>
              {`Ngày vào công ty: ${dateFormat(
                state.staff.starDate,
                "dd/mm/yyyy"
              )}`}
            </CardText>
            <CardText>{`Phòng ban: ${
              state.staff.department.name
                ? state.staff.department.name
                : state.staff.department
            }`}</CardText>
            <CardText>
              {`Số ngày nghỉ còn lại: ${state.staff.annualLeave}`}
            </CardText>
            <CardText>
              {`Số ngày đã làm thêm: ${state.staff.overTime}`}
            </CardText>
          </Media>
        </div>
      </div>
    </div>
  );
}

export default StaffCurrent;
