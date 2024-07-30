import MainNavigation from "../layout/MainNavigation";
import Contact from "./Contact";
import FormStudent from "./FormStudent";
import Home from "./Home";
import ListStudent from "./ListStudent";
import Login from "./Login";
import Logout from "./Logout";
import Student from "./Student";

const routes = [
  { path: "/", component: Home, layout: MainNavigation },
  { path: "/contact", component: Contact, layout: MainNavigation },
  { path: "/login", component: Login, layout: MainNavigation },
  { path: "/logout", component: Logout, layout: MainNavigation },
  { path: "/students", component: ListStudent, layout: MainNavigation },
  { path: "/students/:id", component: Student, layout: MainNavigation },
  { path: "/students/form/:id?", component: FormStudent, layout: MainNavigation },
];

export { routes };
