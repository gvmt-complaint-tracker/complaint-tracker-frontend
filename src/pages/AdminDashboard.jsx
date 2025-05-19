import React, { useEffect, useState } from "react";
import axios from "../api";
import "../styles/AdminDashboard.css";

const statusClasses = {
  pending: "status-pending",
  "in progress": "status-in-progress",
  resolved: "status-resolved",
};

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("/complaints");
      setComplaints(res.data);
    } catch {
      setComplaints([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`/complaints/${id}`, { status: newStatus });
      fetchComplaints();
    } catch {}
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div style={{ padding: 24, minHeight: "85vh", backgroundColor: "#f1f5f9" }}>
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#1e40af",
          marginBottom: 24,
        }}
      >
        Admin Dashboard
      </h1>
      {loading ? (
        <p>Loading complaints...</p>
      ) : complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              minWidth: "100%",
              backgroundColor: "white",
              borderRadius: 12,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <thead style={{ backgroundColor: "#1e40af", color: "white" }}>
              <tr>
                <th style={{ padding: 12, textAlign: "left" }}>Name</th>
                <th style={{ padding: 12, textAlign: "left" }}>Email</th>
                <th style={{ padding: 12, textAlign: "left" }}>Category</th>
                <th style={{ padding: 12, textAlign: "left" }}>Description</th>
                <th style={{ padding: 12, textAlign: "left" }}>Status</th>
                <th style={{ padding: 12, textAlign: "left" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr
                  key={complaint._id}
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                >
                  <td style={{ padding: 12, textAlign: "left" }}>
                    {complaint.name}
                  </td>
                  <td style={{ padding: 12, textAlign: "left" }}>
                    {complaint.email}
                  </td>
                  <td style={{ padding: 12, textAlign: "left" }}>
                    {complaint.category}
                  </td>
                  <td style={{ padding: 12, textAlign: "left" }}>
                    {complaint.description}
                  </td>
                  <td style={{ padding: 12, textTransform: "capitalize" }}>
                    {complaint.status || "pending"}
                  </td>
                  <td style={{ padding: 12 }}>
                    {["pending", "in progress", "resolved"].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(complaint._id, status)}
                        className={`status-button ${statusClasses[status]}`}
                        disabled={complaint.status === status}
                        title={
                          complaint.status === status
                            ? `Already ${status}`
                            : `Mark as ${status}`
                        }
                      >
                        {status}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
