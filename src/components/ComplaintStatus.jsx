import { useState } from "react";
import API from "../api";

export default function ComplaintStatus() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const fetchStatus = async () => {
    try {
      const res = await API.get(`/complaints/${id}`);
      setData(res.data);
    } catch {
      setData({ error: "Not found" });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-2">Check Complaint Status</h2>
      <input
        placeholder="Enter Complaint ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="input"
      />
      <button onClick={fetchStatus} className="btn-primary mt-2">
        Check
      </button>
      {data && (
        <div className="mt-2">
          {data.error ? (
            <p className="text-red-600">{data.error}</p>
          ) : (
            <>
              <p>Status: {data.status}</p>
              <p>Response: {data.response || "No response yet"}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
