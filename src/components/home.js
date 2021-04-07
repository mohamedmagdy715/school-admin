import Pagination from "../containers/pagination";
import StudentsList from "../containers/studentsList";
import { useEffect } from "react";
import { Navbar } from "./navbar";

export const Home = ({ history }) => {
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      history.push(`/`);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <StudentsList history={history} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};
