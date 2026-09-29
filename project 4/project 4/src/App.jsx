import React, { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [hobby, setHobby] = useState("");

  const [hobbies, setHobbies] = useState([
    { category: "Sports", hobby: "Cricket" },
    { category: "Books", hobby: "Reading Novels" },
    { category: "Music", hobby: "Listening to Music" },
    { category: "Gaming", hobby: "Mobile Gaming" }
  ]);

  const addHobby = () => {
    if (category.trim() !== "" && hobby.trim() !== "") {
      setHobbies([
        ...hobbies,
        {
          category: category,
          hobby: hobby
        }
      ]);

      setCategory("");
      setHobby("");
    }
  };

  const deleteHobby = (index) => {
    const updatedList = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedList);
  };

  return (
    <div className="container">
      <header>
        <h1>Hobbies Management System</h1>
        <p>Manage Your Favorite Hobbies</p>
      </header>

      <div className="form-section">
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />

        <button onClick={addHobby}>Add Hobby</button>
      </div>

      <div className="table-section">
        <h2>Hobby List</h2>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {hobbies.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.hobby}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteHobby(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Total Hobbies: {hobbies.length}</h3>
      </div>
    </div>
  );
}

export default App;