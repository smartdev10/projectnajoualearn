import { combineReducers } from "redux";
import { students } from "./students";
import { formations } from "./formations";
import { departements } from "./departements";
import { formateurs } from "./formateurs";
import { annonces } from "./annonces";
import { loading } from "./isloading";
import { modules } from "./modules";
import { messages } from "./messages";
import { courses } from "./courses"

const rootReducer = combineReducers({
  students,
  formations,
  departements,
  formateurs,
  annonces,
  modules,
  messages,
  loading,
  courses,
});

export default rootReducer;
