import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./components/config";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get(`${baseUrl}/api/v1/items`);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await axios.put(`${baseUrl}/api/v1/items/${editing}`, {
        name,
      });
      setEditing(null);
    } else {
      await axios.post(`${baseUrl}/api/v1/items`, { name });
    }
    setName("");
    fetchItems();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setEditing(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/api/v1/items/${id}`);
    fetchItems();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4 text-indigo-600">
          CRUD Operation
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
          >
            {editing ? "Update" : "Add"}
          </button>
        </form>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md shadow-sm"
            >
              <span className="text-gray-800">{item.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
