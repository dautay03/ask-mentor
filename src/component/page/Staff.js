import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardImg,
  FormFeedback,
  Button,
  FormGroup,
  Form,
  Col,
  Label,
  Input,
} from "reactstrap";
function PageStaff(props) {
  let [State, setstate] = useState({
    Staff: props,
  });
  console.log(props);
  console.log(State.Staff);
  if (props !== State.Staff) {
    setstate({ Staff: props });
  }

  let [modalNewStaff, setmodal] = useState({
    modal: false,
  });
  let validate = {
    id: State.Staff.props.length,
    name: "",
    doB: "",
    startDate: "",
    salaryScale: 0,
    department: "Sale",
    annualLeave: 0,
    overTime: 0,
    image: "/assets/images/alberto.png",
  };
  let [staffform, setstaffform] = useState(validate);

  let [staffformError, setstaffformError] = useState({});

  let [search, setsearch] = useState({ name: "" });
  let [search2, setsearch2] = useState({ name: "" });

  const searchstaff = function () {
    setsearch({ ...search, name: search2.name });
  };
  const searchChange = function (e) {
    const value = e.target.value;
    setsearch2({ ...search2, name: value });
  };
  const changeInput = function (e) {
    const { name, value } = e.target;
    setstaffform({ ...staffform, [name]: value });
    if (e.target.name === "name") {
      setstaffformError({
        ...staffformError,
        name: checkinputchangename(e.target).name,
      });
    } else if (e.target.name === "doB") {
      setstaffformError({
        ...staffformError,
        doB: checkinputchangedoB(e.target).doB,
      });
    } else if (e.target.name === "startDate") {
      setstaffformError({
        ...staffformError,
        startDate: checkinputchangestartDate(e.target).startDate,
      });
    }
    console.log(staffform, staffformError);
  };

  const submitform = function (e) {
    setstaffformError(
      check(staffform.name, staffform.startDate, staffform.doB)
    );
    if (
      staffformError.name === "" &&
      staffformError.doB === "" &&
      staffformError.startDate === ""
    ) {
      console.log(staffform);

      props.addNewstaff(staffform);
      console.log(staffform);
      setstaffform(validate);
      modal();
    }
    e.preventDefault();
  };
  const checkinputchangename = function (name) {
    const error = { name: "" };
    if (name.value.length <= 4 && name.value.length > 0) {
      error.name = "tên phải nhiều hơn 4 ký tự ";
    } else if (name.value.length >= 30) {
      error.name = "tên phải ít hơn 30 kí tự";
    } else if (name.value.length === 0) {
      error.name = "Yêu cầu nhập";
    }
    return error;
  };
  const checkinputchangestartDate = function (name) {
    const error = { startDate: "" };
    if (name.value === "") {
      error.startDate = "yêu cầu nhập";
    }
    return error;
  };
  const checkinputchangedoB = function (name) {
    const error = { doB: "" };
    if (name.value === "") {
      error.doB = "yêu cầu nhập";
    }
    return error;
  };
  const check = function (name, startDate, doB) {
    const error = { name: "", doB: "", startDate: "" };
    if (name === "") {
      error.name = "Yêu cầu nhập";
    }

    if (startDate === "") {
      error.startDate = "yêu cầu nhập";
    }
    if (doB === "") {
      error.doB = "yêu cầu nhập";
    }
    return error;
  };

  const modal = () => setmodal({ modal: !modalNewStaff.modal });

  const printStaff = State.Staff.props
    .filter((e) => {
      if (search.name.length !== 0) {
        return (
          e.name.includes(search.name.toUpperCase()) ||
          e.name.includes(search.name.toLowerCase())
        );
      } else {
        return true;
      }
    })
    .map((staff) => {
      return (
        <div
          key={staff.id}
          className="col-6 col-md-4 col-lg-2"
          style={{ padding: "5px" }}
        >
          <nav>
            <Link to={`/staff/${staff.id}`} style={{ textDecoration: "none" }}>
              <Card key={staff.id}>
                <CardImg src={staff.image} alt={`${staff.name}`} />
                <CardTitle
                  style={{
                    textAlign: "center",

                    color: "InfoText",
                  }}
                >
                  {staff.name}
                </CardTitle>
              </Card>
            </Link>
          </nav>
        </div>
      );
    });
  return (
    <div className="container row" style={{ margin: "auto" }}>
      <div className="container row">
        <div
          className="col-lg-3 col-9 col-md-3 m-1"
          style={{
            padding: "0px",
            fontWeight: "700",
          }}
        >
          <h3 style={{ marginTop: "8px", marginBottom: "0px" }}>Nhân Viên</h3>
        </div>

        <div className="col-2 col-md-3 col-lg-4 m-1" style={{ padding: "0px" }}>
          <Button className="col-12 col-md-4 col-lg-2" onClick={() => modal()}>
            +
          </Button>
        </div>
        <Modal className="col-11 col-md-8 col-lg-4" show={modalNewStaff.modal}>
          <ModalHeader>
            <ModalTitle>Thêm nhân viên</ModalTitle>{" "}
            <i
              className="bi bi-x"
              style={{ right: "0px" }}
              onClick={() => modal()}
            ></i>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={submitform}>
              <FormGroup row>
                <Label className="mb-2 col-12 " md={4}>
                  Tên
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="tên"
                    value={staffform.name}
                    onChange={changeInput}
                  />
                  <FormFeedback style={{ display: "block" }}>
                    {staffformError.name}
                  </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12" md={4}>
                  Ngày sinh
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    type="datetime-local"
                    name="doB"
                    placeholder="Ngày sinh"
                    value={staffform.doB}
                    onChange={changeInput}
                  />
                  <FormFeedback style={{ display: "block" }}>
                    {staffformError.doB}
                  </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12 " md={4}>
                  Ngày vào công ty
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    type="datetime-local"
                    name="startDate"
                    placeholder="Ngày vào công ty"
                    value={staffform.startDate}
                    onChange={changeInput}
                  />
                  <FormFeedback style={{ display: "block" }}>
                    {staffformError.startDate}
                  </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12 col-md-4 col-lg-4">
                  Phòng ban
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <select
                    style={{ width: "100%" }}
                    type="select"
                    name="department"
                    value={staffform.department}
                    onChange={changeInput}
                  >
                    <option value="Sale">Sale</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                  </select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12 col-md-4 col-lg-4">
                  Hệ số lương
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    type="number"
                    name="salaryScale"
                    placeholder="0"
                    value={staffform.salaryScale}
                    onChange={changeInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12 col-md-4 col-lg-4">
                  Số ngày nghỉ còn lại
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    type="number"
                    name="annualLeave"
                    placeholder="0"
                    value={staffform.annualLeave}
                    onChange={changeInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="mb-2 col-12 col-md-4 col-lg-4">
                  Số ngày đã đi làm thêm
                </Label>
                <Col className="mb-2 col-12 " md={8}>
                  <Input
                    className="mb-2 col-12 col-md-8 col-lg-8"
                    type="number"
                    name="overTime"
                    placeholder="0"
                    value={staffform.overTime}
                    onChange={changeInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col className="col-9" md={9}></Col>
                <Col className="col-2" md={2}>
                  <Button md type="submit" className="right btn btn-primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <div
          className="col-12 col-md-5 col-lg-4 row"
          style={{ padding: "0px", margin: "auto" }}
        >
          <div className="col-9" style={{ padding: "0px" }}>
            <input
              className="col-11 m-1"
              style={{ border: "1px solid black" }}
              type="search"
              name="name"
              placeholder="tìm kiếm"
              value={search2.name}
              onChange={searchChange}
            ></input>
          </div>
          <div className="col-3 col-md" style={{ padding: "3px 6px" }}>
            <button
              className="col-10"
              onClick={searchstaff}
              style={{ marginLeft: "3px" }}
            >
              tìm
            </button>
          </div>
        </div>
      </div>
      <div className="container row">{printStaff}</div>
    </div>
  );
}
export default PageStaff;
