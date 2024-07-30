import { useEffect, useState } from "react";
import { saveStudent, getStudentById } from "../service/student";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function FormStudent() {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const isAddMode = !id;

  const save = () => {
    if (name === "") {
      alert("Please enter the student name");
      return;
    }

    const addStudent = async () => {
      await saveStudent(name, age, id, pic, address, isAddMode);
      return navigate("/students");
    };
    addStudent();
  };

  useEffect(() => {
    if (!isAddMode) {
      const getStudent = async () => {
        const std = await getStudentById(id);

        if (std) {
          setAge(std.age);
          setName(std.name);
          setAddress(std.address);
          setPic(std.pic);
        }
      };
      getStudent();
    }
  }, [id, isAddMode]);

  return (
    <>
      <section>
        <Link to={"/students"}>
          <FaArrowLeft />
        </Link>

        <div className="form-control">
          <p>Add a new student: </p>
          <input type="hidden" value={id} />
          <input
            type="text"
            placeholder="Student Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Student Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Picture"
            required
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <img src="" alt="" />
          <p className="actions">
            <Link to={"/students"}>
              <button style={{ marginRight: 5 }}>Cancel</button>
            </Link>

            <button onClick={() => save()}>Save</button>
          </p>
        </div>
      </section>
    </>
  );
}

export default FormStudent;
