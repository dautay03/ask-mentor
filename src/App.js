import "./App.css";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import PageStaff from "./component/page/Staff";
import { DEPARTMENTS } from "./data/staffs";
import { Route, Routes } from "react-router";
import StaffCurrent from "./component/page/staffcurrent";
import Department from "./component/page/department";
import Money from "./component/page/money";
function App() {
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
        <Route path="/" element={<PageStaff />} />
        <Route path="/staff/:staffID" element={<StaffCurrent />} />
        <Route
          path="/department"
          element={<Department department={DEPARTMENTS} />}
        />
        <Route path="/money" element={<Money />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
