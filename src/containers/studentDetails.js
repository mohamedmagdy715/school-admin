import { getStudentById, clearStudentDetails } from "../actions/index";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Navbar } from "../components/navbar";

const StudentDetails = ({
  getStudentById,
  clearStudentDetails,
  details,
  match,
  history,
}) => {
  const id = match.params.id;
  useEffect(() => {
    getStudentById(id);
    if (!localStorage.getItem("adminToken")) {
      history.push(`/`);
    }

    return () => {
      clearStudentDetails();
    };
    // eslint-disable-next-line
  }, []);

  const renderStudentDetails = (details) => {
    if (details && details.id) {
      return (
        <div className="d-flex justify-content-center">
          <div className="card w-md-25">
            <img className="card-img-top" src={details.avatar} alt="img" />
            <div className="card-body">
              <h5 className="card-title">
                {details.first_name} {details.last_name}
              </h5>
              <p className="card-text">Email: {details.email}</p>
            </div>
          </div>
        </div>
      );
    }
    return <p className="alert alert-secondary">Student Not Found</p>;
  };
  return (
    <div>
      <Navbar />
      <div className="alert ">{renderStudentDetails(details)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.students.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudentById, clearStudentDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
