# Government Complaint Tracker

A Citizen Engagement System MVP to submit, track, and manage complaints or feedback on public services.

---

## Features

- **Complaint Submission:** Citizens can submit complaints with details like name, email, category, and description.
- **Complaint Categorization & Routing:** Complaints are categorized and routed to the appropriate government agency.
- **Status Tracking:** Citizens can check the status of their complaints by entering their email or ticket ID.
- **Admin Interface:** Government officials can view all complaints, update statuses, and respond to citizens.
- **Responsive & User-Friendly:** Clean, intuitive UI using React and Tailwind CSS.

---

## Technology Stack

- **Frontend:** React (with React Router), Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB (MongoDB Atlas for hosted DB)
- **Deployment:** Vercel (frontend), Render or Heroku (backend)

---

## Installation & Setup

### Backend

1. Clone the backend repo:

   ```bash
   git clone <backend-repo-url>
   cd complaint-tracker-backend

   ```

2. MONGODB_URI=<your_mongodb_atlas_connection_string>
   PORT=5000

3. npm install
   npm run start

### Frontend

1.  git clone <frontend-repo-url>
    cd complaint-tracker-frontend
2.  VITE_API_URL=https://your-backend-url.onrender.com/api
3.  VITE_API_URL=https://your-backend-url.onrender.com/api
4.  Open any of the browsers you have at http://localhost:5173

### Usage

Navigate to Home to submit a complaint.

Go to Track Status to check complaint progress by entering your email or ticket ID.

Visit Admin to manage complaints, update statuses, and respond.

### System Architecture

Frontend communicates with backend API via Axios.

Backend handles CRUD operations on complaints stored in MongoDB.

Complaint statuses can be updated by admins; citizens can track complaints.

Designed for scalability with modular React components and REST API backend.

### Future Improvements (Optional)

AI-assisted routing of complaints based on sentiment or keywords.

Dashboard with complaint analytics for agencies.

SMS/Email notifications to citizens on status updates.

User authentication for enhanced security and personalization.

### Live Demo

- Frontend deployed on Vercel

- Backend deployed on Render
