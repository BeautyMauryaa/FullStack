import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //  Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await API.get("/users"); 
      // 👆 change endpoint based on your backend

      setUsers(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // UI STATES

  if (loading) {
    return <h2 className="text-center text-lg">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="grid gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg border"
            >
              <h3 className="text-lg font-semibold">
                {user.name || "No Name"}
              </h3>
              <p className="text-gray-600">
                {user.email || "No Email"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;