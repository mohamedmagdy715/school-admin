// students actions
const baseURL = "https://reqres.in/api/users";

export const getStudents = async (pageNumber, studentsPerPage) => {
  let payload;
  try {
    let response = await fetch(
      `${baseURL}?page=${pageNumber}&per_page=${studentsPerPage}`
    );
    payload = await response.json();
    // payload = payload.data;
  } catch (err) {
    console.log(err);
  }
  return {
    type: "STUDENTS_LIST",
    payload,
  };
};

export const getStudentById = async (id) => {
  let payload;
  try {
    let response = await fetch(`${baseURL}/${id}`);
    payload = await response.json();
    payload = payload.data;
  } catch (err) {
    console.log(err);
  }
  return {
    type: "STUDENT_DETAILS",
    payload,
  };
};

export const clearStudentDetails = () => {
  return {
    type: "CLEAR_STUDENT_DETAILS",
    payload: null,
  };
};
