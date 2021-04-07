import { getStudents } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useRef } from "react";

const Pagination = ({ getStudents, list }) => {
  const [studentsPerPage, setstudentsPerPage] = useState(6);
  const myNumber = useRef();
  const pages = [];

  if (list) {
    for (let page = 1; page <= list.total_pages; page++) {
      pages.push(
        <li className="page-item" key={page} id={page}>
          <button
            className="page-link "
            onClick={(event) => {
              getStudents(page, studentsPerPage);
            }}
          >
            {page}
          </button>
        </li>
      );
    }
  }

  return (
    <div>
      <nav>
        <ul className="pagination mx-5">{pages}</ul>
      </nav>
      <div className="form-group">
        <label for="stdsPerPage">Number of students per page</label>
        <input
          ref={myNumber}
          type="number"
          className="form-control w-25"
          id="stdsPerPage"
          onChange={() => {
            setstudentsPerPage(myNumber.current.value);
            getStudents(1, myNumber.current.value);
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.students.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
