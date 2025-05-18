import { useState } from "react";
import API from "../api";
import "../styles/ComplaintForm.css";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/complaints", formData);
      setStatus({
        message: "Complaint submitted successfully!",
        type: "success",
      });
      setFormData({ name: "", email: "", category: "", description: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        message: "Failed to submit complaint. Try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">
          Submit a Complaint
        </h2>

        {status.message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-center ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <label className="block mb-2 font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select category</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>

        <label className="block mb-2 font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
