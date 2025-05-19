import React, { useState } from "react";
import axios from "../api";

const StatusTracker = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await axios.get(
        `/complaints/status?query=${encodeURIComponent(query)}`
      );
      if (res.data.length === 0) {
        setError("No complaints found matching your query.");
      } else {
        setResult(res.data);
      }
    } catch {
      setError("Failed to fetch status. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-slate-100 px-4">
      <form
        onSubmit={handleCheckStatus}
        className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">
          Track Your Complaint Status
        </h2>

        <label className="block mb-2 font-medium text-gray-700">
          Enter your Email or Complaint Ticket ID
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          placeholder="Email or Ticket ID"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition duration-300"
        >
          Check Status
        </button>

        {error && (
          <p className="mt-4 text-center text-red-600 font-semibold">{error}</p>
        )}

        {result && (
          <div className="mt-6 space-y-4">
            {result.map((complaint) => (
              <div
                key={complaint._id}
                className="border p-4 rounded-md bg-gray-50 shadow-sm"
              >
                <p>
                  <strong>Ticket ID:</strong> {complaint._id}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {complaint.status.charAt(0).toUpperCase() +
                    complaint.status.slice(1)}
                </p>
                <p>
                  <strong>Category:</strong> {complaint.category}
                </p>
                <p>
                  <strong>Description:</strong> {complaint.description}
                </p>
                {complaint.response && (
                  <p className="mt-2 bg-green-100 p-2 rounded text-green-800">
                    <strong>Response:</strong> {complaint.response}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default StatusTracker;
