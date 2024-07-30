import { useContext, useEffect, useState } from "react";
import { getAllStudent } from "../service/student";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../App";
import StudentCard from "./StudentCard";
import { FaPlusCircle } from "react-icons/fa";

function ListStudent() {
  const { isAdmin, isLoggedin } = useContext(CurrentUserContext);
  const [students, setStudents] = useState([]);
  const [studentsDb, setStudentsDB] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const result = await getAllStudent();
      setStudents(result);
      setStudentsDB(result);
    };
    getAll();
  }, []);

  function filterStudents(e) {
    let foundStudents = [];

    const enteredName = e.target.value.toLowerCase();

    if (enteredName.length === 0) {
      setStudents(studentsDb);
    }

    studentsDb.forEach((student) => {
      let name = student.name.toLowerCase();
      if (name.includes(enteredName)) {
        foundStudents.push(student);
      }
    });
    setStudents(foundStudents);
  }

  return (
    <>
      {!isLoggedin && (
        <section>
          <p className="center">
            You must <Link to={"/login"}>Log In</Link> first to view students'
            info.
          </p>
        </section>
      )}
      {isLoggedin && (
        <section>
          {isAdmin && isLoggedin && (
            <Link to={"/students/form"}>
              <button>
                {" "}
                <FaPlusCircle /> New Student
              </button>
            </Link>
          )}

          <div>
            <h2 className="center">T2404 Students</h2>

            <div className="search-input">
              <input
                type="text"
                
                placeholder="Enter student name to search"
                onChange={filterStudents}
              />
            </div>
            <div className="flex-container">
              {students.map((student) => (
                <Link to={"/students/" + student.id} key={student.id}>
                  {" "}
                  <StudentCard student={student} />{" "}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ListStudent;
