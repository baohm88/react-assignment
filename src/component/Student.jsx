import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { getStudentById, deleteStudent } from "../service/student";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StudentCard from "./StudentCard";
import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Student() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedin, isAdmin } = useContext(CurrentUserContext);

  const [student, setStudent] = useState([]);

  useEffect(() => {
    const getStd = async () => {
      const result = await getStudentById(id);
      setStudent(result);
    };
    getStd();
  }, [id]);

  const deleteStd = async (id) => {
    const proceed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );
    if (proceed) {
      await deleteStudent(id);
      alert(`${student.name} has been deleted successfully.`);
      navigate("/students");
    }
  };



  return (
    <>
      <section>
        <Link to={"/students"}>
          <FaArrowLeft />
        </Link>
        {isLoggedin && (
          <>
            <h2 className="center">Student Profile: {student.name}</h2>
            <div className="student-profile">
              <StudentCard student={student} />

              <div className="student-info">
                <h3 className="center">General Info</h3>
                <table>
                  <tr>
                    <td>
                      <strong>Enrolled Year:</strong>
                    </td>
                    <td className="info">2024</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gender:</strong>
                    </td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Age:</strong>
                    </td>
                    <td>{student.age}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address:</strong>
                    </td>
                    <td>{student.address}</td>
                  </tr>
                  <tr></tr>
                </table>

                {isAdmin && (
                  <div>
                    <Link to={"/students/form/" + student.id}>
                      <button>
                        <FaUserEdit /> Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteStd(student.id)}
                      className="danger"
                    >
                      {" "}
                      <FaTrash /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {!isLoggedin && (
          <p className="center">
            You must <Link to="/login">Log In</Link> to view the student info
          </p>
        )}
      </section>
    </>
  );
}
