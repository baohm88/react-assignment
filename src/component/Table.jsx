import React from 'react'

export default function Table({students}) {
  return (
    <table>
              <thead>
                <tr>
                  <th className="col-1">Id</th>
                  <th className="col-3">Name</th>
                  {isAdmin && isLoggedin && (
                    <>
                      <th>Age</th>
                      <th>Action</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {students.map((item) => (
                  <tr key={item.id}>
                    <td className="center">{item.id}</td>
                    <td>
                      <Link to={"/student/" + item.id}>{item.name}</Link>
                    </td>
                    {isAdmin && isLoggedin && (
                      <>
                        <td className="center">{item.age}</td>
                        <td className="center">
                          <Link to={"/student/form/" + item.id}>
                            <button>Edit</button>
                          </Link>{" "}
                          /{" "}
                          <button onClick={() => deleteStd(item.id)}>
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
  )
}
