import { connect } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { getStudents } from "../actions";

const StudentsList = ({ getStudents, list, history }) => {
  useEffect(() => {
    getStudents(1, 6);
    // eslint-disable-next-line
  }, []);

  const goToDetails = (sid) => {
    history.push(`/student/${sid}`);
  };

  if (list) {
    if (list.data.length > 0)
      return (
        <div className="text-center">
          <table className="table table-hover table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {list.data.map((student) => {
                return (
                  <tr key={student.id} onClick={() => goToDetails(student.id)}>
                    {/* eslint-disable-next-line */}
                    <td scope="row">{student.id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
  }
  return <p>No Students</p>;
};

const mapStateToProps = (state) => {
  return {
    list: state.students.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
