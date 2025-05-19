import { useEffect, useState } from "react";
import API from "../api";

export default function ComplaintList() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    API.get("/complaints").then((res) => setComplaints(res.data));
  }, []);

  const updateStatus = (id, status) => {
    API.put(`/complaints/${id}`, { status }).then((res) => {
      setComplaints((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: res.data.status } : c))
      );
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Complaints</h2>
      {complaints.map((c) => (
        <div key={c._id} className="border p-4 rounded mb-3 bg-white shadow-sm">
          <h3 className="text-lg font-medium">{c.category}</h3>
          <p>{c.description}</p>
          <p className="text-sm text-neutral-dark">Status: {c.status}</p>
          <button
            onClick={() => updateStatus(c._id, "Resolved")}
            className="btn-primary mt-2"
          >
            Mark Resolved
          </button>
        </div>
      ))}
    </div>
  );
}
