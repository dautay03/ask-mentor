import { useState } from "react";
import "./App.css";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import PageStaff from "./component/page/Staff";
import { DEPARTMENTS, STAFFS } from "./data/staffs";
import { Route, Routes } from "react-router";
import StaffCurrent from "./component/page/staffcurrent";
import Department from "./component/page/department";
import Money from "./component/page/money";
function App() {
  const localstorage = JSON.parse(localStorage.getItem("staff"));
  const [staffList, setstaffList] = useState({
    Staff: localstorage ? localstorage : STAFFS,
  });
  localStorage.setItem("staff", JSON.stringify(staffList.Staff));
  console.log(staffList);

  const addNewstaff = function (object) {
    console.log(staffList);
    setstaffList({ ...staffList, Staff: [...staffList.Staff, ...[object]] });
    console.log(staffList.Staff.concat([object]));
    console.log(staffList);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route
          path="/staff"
          element={
            <PageStaff addNewstaff={addNewstaff} props={staffList.Staff} />
          }
        /> */}
        <Route
          path="/"
          element={
            <PageStaff addNewstaff={addNewstaff} props={staffList.Staff} />
          }
        />
        <Route path="/staff/:staffID" element={<StaffCurrent />} />
        <Route
          path="/department"
          element={<Department department={DEPARTMENTS} />}
        />
        <Route path="/money" element={<Money money={staffList.Staff} />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
