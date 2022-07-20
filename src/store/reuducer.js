import { DEPARTMENTS, STAFFS } from "../data/staffs";
let localstorage = JSON.parse(localStorage.getItem("staff"));
let initvalue = {
  Staff: localstorage ? localstorage : STAFFS,
  department: DEPARTMENTS,
};

function reducer(state = initvalue, action) {
  console.log({ state, action });
  switch (action.type) {
    case "/staff/addStaff":
      return {
        ...state,
        Staff: [...initvalue.Staff, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
